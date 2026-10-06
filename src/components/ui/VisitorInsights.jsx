import { motion } from "framer-motion";
import { Eye, Radio } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { isSupabaseConfigured, supabase } from "../../lib/supabase";

const VISITOR_ID_KEY = "portfolio-anonymous-visitor-id";
const LAST_COUNTED_KEY = "portfolio-last-counted-date";
const LIVE_REFRESH_INTERVAL = 60 * 1000;

function getAnonymousVisitorId() {
  try {
    const existingId = localStorage.getItem(VISITOR_ID_KEY);

    if (existingId) {
      return existingId;
    }

    const visitorId = crypto.randomUUID();
    localStorage.setItem(VISITOR_ID_KEY, visitorId);
    return visitorId;
  } catch {
    return null;
  }
}

function formatCount(value) {
  return Number.isFinite(value) ? value.toLocaleString() : null;
}

function VisitorSkeleton() {
  return (
    <div
      aria-label="Loading visitor statistics"
      className="visitor-insights visitor-insights-loading"
      role="status"
    >
      <span className="visitor-insights-skeleton visitor-insights-skeleton-icon" />
      <span className="visitor-insights-skeleton visitor-insights-skeleton-copy" />
      <span className="visitor-insights-skeleton visitor-insights-skeleton-meta" />
    </div>
  );
}

function VisitorInsights() {
  const [stats, setStats] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(null);

  const loadStats = useCallback(async () => {
    if (!isSupabaseConfigured || !supabase) {
      setHasError(true);
      return;
    }

    const visitorId = getAnonymousVisitorId();

    if (!visitorId) {
      setHasError(true);
      return;
    }

    const today = new Date().toISOString().slice(0, 10);

    try {
      const { data, error } = await supabase.rpc("record_portfolio_visit", {
        p_visitor_id: visitorId,
      });

      if (error) {
        throw error;
      }

      const nextStats = Array.isArray(data) ? data[0] : data;
      const total = Number(nextStats?.total_visitors);
      const todayVisitors = Number(nextStats?.today_visitors);
      const live = Number(nextStats?.live_visitors);

      if (
        !Number.isFinite(total) ||
        !Number.isFinite(todayVisitors) ||
        !Number.isFinite(live)
      ) {
        throw new Error("Supabase returned invalid visitor statistics.");
      }

      setStats({
        total,
        today: todayVisitors,
        live,
      });
      setHasError(false);
      setLastUpdated(new Date());

      try {
        localStorage.setItem(LAST_COUNTED_KEY, today);
      } catch {
        // The server-side unique visitor key still prevents duplicate counts.
      }
    } catch (error) {
      console.error("Unable to load visitor statistics.", error);
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      if (isMounted) {
        await loadStats();
      }
    };

    load();
    const intervalId = window.setInterval(load, LIVE_REFRESH_INTERVAL);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
    };
  }, [loadStats]);

  if (!stats && !hasError) {
    return <VisitorSkeleton />;
  }

  if (hasError || !stats) {
    return (
      <aside
        aria-label="Portfolio visitor statistics unavailable"
        className="visitor-insights visitor-insights-error"
      >
        <Eye aria-hidden="true" size={18} strokeWidth={1.8} />
        <span>Visitor statistics unavailable</span>
      </aside>
    );
  }

  return (
    <motion.aside
      aria-label="Portfolio visitor statistics"
      className="visitor-insights"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="visitor-insights-heading">
        <Eye aria-hidden="true" size={18} strokeWidth={1.8} />
        <strong>{formatCount(stats.total)}</strong>
        <span>Portfolio visitors</span>
      </div>

      <div className="visitor-insights-details">
        <span>Today: {formatCount(stats.today)}</span>
        <span className="visitor-insights-live">
          <Radio aria-hidden="true" size={13} strokeWidth={2} />
          Live: {formatCount(stats.live)}
        </span>
      </div>

      {lastUpdated && (
        <time
          className="visitor-insights-updated"
          dateTime={lastUpdated.toISOString()}
        >
          Updated {lastUpdated.toLocaleTimeString([], {
            hour: "numeric",
            minute: "2-digit",
          })}
        </time>
      )}
    </motion.aside>
  );
}

export default VisitorInsights;
