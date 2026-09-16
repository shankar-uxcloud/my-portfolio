import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";
import AmbientBackground from "./components/ui/AmbientBackground";
import CursorGlow from "./components/ui/CursorGlow";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#020203] text-white">
      <AnimatePresence mode="wait">
        {loading && (
          <Loader
            onComplete={() => {
              setLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          key={location.pathname}
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative min-h-screen"
        >
          <AmbientBackground />
          <CursorGlow />

          <Navbar />

          <main className="relative z-10">
            <AppRoutes />
          </main>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;