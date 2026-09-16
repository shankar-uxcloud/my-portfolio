import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const GREEN_LAUNCH_DURATION = 2000;
const READY_HOLD_DURATION = 220;
const SURGE_DURATION = 320;
const COLLAPSE_DURATION = 700;

const STATUS_STEPS = [
  { max: 10, text: "Initializing core systems..." },
  { max: 20, text: "Loading interface..." },
  { max: 30, text: "Preparing experience..." },
  { max: 40, text: "Synchronizing modules..." },
  { max: 50, text: "Establishing secure connection..." },
  { max: 60, text: "Loading intelligence layer..." },
  { max: 70, text: "Optimizing interface..." },
  { max: 80, text: "Activating visual engine..." },
  { max: 90, text: "Finalizing environment..." },
  { max: 99, text: "Almost ready..." },
  { max: 100, text: "SYSTEM READY" },
];

function getStatus(progress) {
  return (
    STATUS_STEPS.find((step) => progress <= step.max)?.text ??
    "Initializing core systems..."
  );
}

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(STATUS_STEPS[0].text);
  const [phase, setPhase] = useState("loading");
  const [reducedMotion, setReducedMotion] = useState(false);

  const hasStartedLaunch = useRef(false);
  const timersRef = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener?.("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener?.("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    let cancelled = false;
    let frameId = null;

    const clearAllTimers = () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };

    const startLaunchSequence = () => {
      if (cancelled || hasStartedLaunch.current) return;

      hasStartedLaunch.current = true;

      setProgress(100);
      setStatus("SYSTEM READY");
      setPhase("ready");

      if (reducedMotion) {
        const timer = window.setTimeout(() => {
          if (!cancelled) {
            onComplete();
          }
        }, 450);

        timersRef.current.push(timer);
        return;
      }

      const readyTimer = window.setTimeout(() => {
        if (cancelled) return;

        setPhase("surge");

        const surgeTimer = window.setTimeout(() => {
          if (cancelled) return;
          setPhase("green");
        }, SURGE_DURATION);

        timersRef.current.push(surgeTimer);

        const launchTimer = window.setTimeout(() => {
          if (cancelled) return;
          setPhase("collapse");
        }, SURGE_DURATION + GREEN_LAUNCH_DURATION);

        timersRef.current.push(launchTimer);

        const completeTimer = window.setTimeout(() => {
          if (cancelled) return;
          onComplete();
        }, SURGE_DURATION + GREEN_LAUNCH_DURATION + COLLAPSE_DURATION);

        timersRef.current.push(completeTimer);
      }, READY_HOLD_DURATION);

      timersRef.current.push(readyTimer);
    };

    const duration = reducedMotion ? 900 : 2450;
    const startTime = performance.now();

    const animate = (now) => {
      if (cancelled) return;

      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);

      // Smooth ease-out, while still reaching every integer.
      const eased = 1 - Math.pow(1 - raw, 2);

      const nextProgress = Math.min(100, Math.floor(eased * 100));

      setProgress(nextProgress);
      setStatus(getStatus(nextProgress));

      if (nextProgress >= 100 || raw >= 1) {
        startLaunchSequence();
        return;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      clearAllTimers();
    };
  }, [onComplete, reducedMotion]);

  const isReady = progress === 100;
  const isSurge = phase === "surge";
  const isGreen = phase === "green";
  const isCollapse = phase === "collapse";
  const isLaunching = isSurge || isGreen || isCollapse;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] overflow-hidden bg-[#020203]"
      aria-live="polite"
    >
      {/* =========================================================
          BASE ATMOSPHERE
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_52%)]" />

        <motion.div
          animate={
            isLaunching
              ? {
                  scale: [1, 1.6, 2.8],
                  opacity: [0.18, 0.6, 0],
                }
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.12, 0.2, 0.12],
                }
          }
          transition={
            isLaunching
              ? {
                  duration: 0.9,
                  ease: "easeOut",
                }
              : {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]"
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(circle at center, black 15%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 15%, transparent 78%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(0,0,0,0.72)_100%)]" />
      </div>

      {/* =========================================================
          TOP HUD
      ========================================================== */}

      <div
        className={`absolute left-5 right-5 top-5 z-30 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.32em] sm:left-8 sm:right-8 sm:top-8 ${
          isLaunching ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <span className="text-white/25">PORTFOLIO // 001</span>

        <span className="flex items-center gap-2 text-white/30">
          <motion.span
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
            className="h-1.5 w-1.5 rounded-full bg-violet-400"
          />
          {isReady ? "SYSTEM READY" : "SYSTEM BOOT"}
        </span>
      </div>

      {/* =========================================================
          MAIN LOADER
      ========================================================== */}

      <AnimatePresence>
        {!isLaunching && (
          <motion.div
            key="loader-content"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              filter: "blur(10px)",
            }}
            transition={{ duration: 0.35 }}
            className="relative z-20 flex min-h-screen items-center justify-center px-5 sm:px-8"
          >
            <div className="w-full max-w-4xl">
              <div className="flex flex-col items-center">

                {/* =================================================
                    ENERGY CORE
                ================================================== */}

                <motion.div
                  animate={{
                    scale: isReady ? [1, 1.08, 1] : [1, 1.025, 1],
                  }}
                  transition={{
                    duration: isReady ? 0.8 : 2.3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative mb-10 flex h-36 w-36 items-center justify-center rounded-full"
                >
                  {/* outer halo */}
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 2.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-full border border-violet-400/15"
                  />

                  {/* rotating ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-3 rounded-full border border-dashed border-violet-400/20"
                  />

                  {/* second ring */}
                  <motion.div
                    animate={{
                      rotate: -360,
                      scale: [1, 1.025, 1],
                    }}
                    transition={{
                      rotate: {
                        duration: 11,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="absolute inset-7 rounded-full border border-white/[0.06]"
                  />

                  {/* core glow */}
                  <motion.div
                    animate={{
                      boxShadow: isReady
                        ? [
                            "0 0 35px rgba(52,211,153,0.18)",
                            "0 0 75px rgba(52,211,153,0.5)",
                            "0 0 35px rgba(52,211,153,0.18)",
                          ]
                        : [
                            "0 0 30px rgba(139,92,246,0.18)",
                            "0 0 65px rgba(139,92,246,0.42)",
                            "0 0 30px rgba(139,92,246,0.18)",
                          ],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl font-black text-xl transition-colors duration-300 ${
                      isReady
                        ? "bg-emerald-400 text-black"
                        : "bg-white text-black"
                    }`}
                  >
                    {isReady ? "✓" : "S"}
                  </motion.div>
                </motion.div>

                {/* =================================================
                    BRAND
                ================================================== */}

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-center"
                >
                  <h1 className="text-4xl font-semibold tracking-[0.24em] text-white sm:text-6xl">
                    SHANKAR
                  </h1>

                  <p className="mt-4 text-[9px] uppercase tracking-[0.5em] text-white/35 sm:text-[11px]">
                    Engineer
                    <span className="mx-3 text-violet-400">•</span>
                    Builder
                    <span className="mx-3 text-violet-400">•</span>
                    Creator
                  </p>
                </motion.div>

                {/* =================================================
                    PROGRESS
                ================================================== */}

                <div className="mt-16 w-full max-w-2xl">

                  <div className="flex items-end justify-between gap-6">

                    <div className="min-w-0">
                      <p
                        className={`font-mono text-[9px] uppercase tracking-[0.3em] ${
                          isReady
                            ? "text-emerald-300/90"
                            : "text-violet-300/70"
                        }`}
                      >
                        {isReady
                          ? "BOOT COMPLETE"
                          : "INITIALIZING SYSTEM"}
                      </p>

                      <motion.p
                        key={status}
                        initial={{
                          opacity: 0,
                          y: 6,
                          filter: "blur(6px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className="mt-2 truncate text-sm text-white/55 sm:text-base"
                      >
                        {status}
                      </motion.p>
                    </div>

                    {/* MAIN INTEGER COUNTER */}
                    <div className="shrink-0">
                      <motion.div
                        key={progress}
                        initial={{
                          opacity: 0.65,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.1,
                        }}
                        className={`font-mono text-5xl font-semibold leading-none tracking-[-0.07em] sm:text-7xl ${
                          isReady ? "text-emerald-400" : "text-white"
                        }`}
                      >
                        {progress}
                        <span
                          className={
                            isReady
                              ? "text-emerald-400/70"
                              : "text-violet-400"
                          }
                        >
                          %
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* progress rail */}
                  <div className="relative mt-7">
                    <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
                      <motion.div
                        animate={{
                          width: `${progress}%`,
                        }}
                        transition={{
                          duration: 0.05,
                          ease: "linear",
                        }}
                        className={`relative h-full rounded-full ${
                          isReady
                            ? "bg-gradient-to-r from-violet-500 via-emerald-400 to-emerald-300"
                            : "bg-gradient-to-r from-violet-600 via-fuchsia-400 to-violet-300"
                        }`}
                      >
                        {progress > 0 && (
                          <span
                            className={`absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white ${
                              isReady
                                ? "shadow-[0_0_20px_rgba(52,211,153,0.95)]"
                                : "shadow-[0_0_18px_rgba(255,255,255,0.95)]"
                            }`}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* scanning light */}
                    <motion.div
                      animate={{
                        x: ["-130%", "320%"],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute left-0 top-1/2 h-8 w-24 -translate-y-1/2 bg-violet-400/10 blur-xl"
                    />
                  </div>

                  {/* real visible scale */}
                  <div className="mt-3 flex justify-between font-mono text-[8px] tracking-[0.22em] text-white/20">
                    <span>0%</span>
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                  </div>
                </div>

                {/* ready indicator */}
                <motion.div
                  animate={{
                    borderColor: isReady
                      ? "rgba(52,211,153,0.35)"
                      : "rgba(255,255,255,0.08)",
                  }}
                  className="mt-10 flex items-center gap-3 rounded-full border bg-white/[0.02] px-5 py-2.5 backdrop-blur-xl"
                >
                  <motion.span
                    animate={{
                      scale: isReady ? [1, 1.3, 1] : 1,
                      opacity: isReady ? [0.5, 1, 0.5] : 0.5,
                    }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                    }}
                    className={`h-2 w-2 rounded-full ${
                      isReady
                        ? "bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.9)]"
                        : "bg-violet-400"
                    }`}
                  />

                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40">
                    {isReady
                      ? "✓ System ready"
                      : "Launch sequence active"}
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          ⚡ ELECTRIC SURGE
      ========================================================== */}

      <AnimatePresence>
        {(isSurge || isGreen || isCollapse) && (
          <motion.div
            key="launch-layer"
            className="pointer-events-none absolute inset-0 z-40 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
          >

            {/* expanding white-green core */}
            <motion.div
              initial={{
                width: 40,
                height: 40,
                opacity: 0,
              }}
              animate={{
                width: ["40px", "320px", "100vw", "180vw"],
                height: ["40px", "320px", "100vw", "180vw"],
                opacity: [0, 1, 0.95, 0],
              }}
              transition={{
                duration: SURGE_DURATION / 1000,
                ease: [0.12, 0.8, 0.2, 1],
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(167,243,208,0.95)_9%,rgba(52,211,153,0.8)_24%,rgba(16,185,129,0.42)_46%,transparent_72%)] blur-[1px]"
            />

            {/* impact rings */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                initial={{
                  width: 80,
                  height: 80,
                  opacity: 0,
                }}
                animate={{
                  width: "140vw",
                  height: "140vw",
                  opacity: [0, 0.75, 0],
                }}
                transition={{
                  delay: ring * 0.055,
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/35"
              />
            ))}

            {/* electric branches */}
            <svg
              viewBox="0 0 1000 1000"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
            >
              <defs>
                <filter id="energyGlow">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {[
                "M500 500 L470 410 L505 330 L455 225 L485 120",
                "M500 500 L560 430 L620 375 L590 270 L660 160",
                "M500 500 L425 515 L350 470 L255 495 L120 420",
                "M500 500 L580 520 L680 500 L790 550 L930 510",
                "M500 500 L470 580 L420 650 L455 760 L400 875",
                "M500 500 L560 590 L635 665 L620 770 L700 875",
                "M500 500 L455 455 L390 395 L315 345 L250 245",
                "M500 500 L550 465 L625 410 L740 345 L845 250",
              ].map((path, index) => (
                <motion.path
                  key={path}
                  d={path}
                  fill="none"
                  stroke={
                    index % 3 === 0
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(110,231,183,0.95)"
                  }
                  strokeWidth={index % 2 === 0 ? 2.5 : 1.6}
                  filter="url(#energyGlow)"
                  strokeLinecap="round"
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: [0, 1],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    delay: index * 0.018,
                    duration: 0.24,
                    ease: "easeOut",
                  }}
                />
              ))}
            </svg>

            {/* directional light streaks */}
            {[
              "-rotate-[18deg]",
              "rotate-[12deg]",
              "rotate-[32deg]",
              "-rotate-[36deg]",
              "rotate-[2deg]",
            ].map((rotation, index) => (
              <motion.div
                key={rotation}
                initial={{
                  x: "50%",
                  y: "50%",
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  x: index % 2 === 0 ? "140%" : "-140%",
                  y: index % 2 === 0 ? "-30%" : "70%",
                  scaleX: [0, 1, 1.5],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  delay: index * 0.025,
                  duration: 0.42,
                  ease: "easeOut",
                }}
                className={`absolute left-1/2 top-1/2 h-px w-[65vw] origin-left bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent ${rotation}`}
              />
            ))}

            {/* white flash */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="absolute inset-0 bg-white/85"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FULL SCREEN GREEN ENVIRONMENT
      ========================================================== */}

      <AnimatePresence>
        {(isGreen || isCollapse) && (
          <motion.div
            key="green-world"
            className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            {/* deep green base */}
            <motion.div
              animate={{
                scale: isCollapse ? 0.15 : [1, 1.04, 1],
                opacity: isCollapse ? 0 : 1,
              }}
              transition={{
                duration: isCollapse ? COLLAPSE_DURATION / 1000 : 3,
                repeat: isCollapse ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[#032b1b]"
            />

            {/* luminous atmosphere */}
            <motion.div
              animate={{
                scale: isCollapse ? 0.08 : [1, 1.12, 1],
                opacity: isCollapse ? 0 : [0.75, 1, 0.75],
              }}
              transition={{
                duration: isCollapse ? COLLAPSE_DURATION / 1000 : 4,
                repeat: isCollapse ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[140vw] w-[140vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,253,245,0.96)_0%,rgba(167,243,208,0.75)_8%,rgba(52,211,153,0.6)_23%,rgba(16,185,129,0.42)_44%,rgba(3,43,27,0)_72%)]"
            />

            {/* atmospheric ring */}
            <motion.div
              animate={{
                width: isCollapse ? 120 : ["15vw", "135vw"],
                height: isCollapse ? 120 : ["15vw", "135vw"],
                opacity: isCollapse ? 0 : [0.15, 0.45, 0],
              }}
              transition={{
                duration: isCollapse ? COLLAPSE_DURATION / 1000 : 2.8,
                repeat: isCollapse ? 0 : Infinity,
                ease: "easeOut",
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-200/30"
            />

            {/* scanlines */}
            <div
              className="absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent 0px, transparent 3px, rgba(255,255,255,0.22) 4px)",
              }}
            />

            {/* geometry */}
            <div className="absolute inset-0 opacity-[0.09]">
              <div className="absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100/20" />
              <div className="absolute left-1/2 top-1/2 h-[58vw] w-[58vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100/15" />
              <div className="absolute left-1/2 top-1/2 h-[38vw] w-[38vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100/15" />
            </div>

            {/* tiny particles */}
            {[
              ["18%", "28%", "0.9", "2.8s"],
              ["29%", "66%", "0.55", "3.4s"],
              ["41%", "22%", "0.7", "2.4s"],
              ["56%", "76%", "0.8", "3.1s"],
              ["67%", "31%", "0.65", "2.7s"],
              ["77%", "61%", "0.85", "3.7s"],
              ["86%", "22%", "0.5", "2.9s"],
              ["13%", "74%", "0.6", "3.5s"],
            ].map(([left, top, scale, duration]) => (
              <motion.span
                key={`${left}-${top}`}
                animate={{
                  y: [-8, 8, -8],
                  opacity: [0.2, 0.7, 0.2],
                  scale: [scale, Number(scale) * 1.4, scale],
                }}
                transition={{
                  duration: Number.parseFloat(duration),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ left, top }}
                className="absolute h-1 w-1 rounded-full bg-emerald-100"
              />
            ))}

            {/* center label */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isCollapse ? 0 : 1,
                scale: isCollapse ? 0.6 : 1,
              }}
              transition={{
                duration: isCollapse ? 0.45 : 0.4,
              }}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-black shadow-[0_0_55px_rgba(236,253,245,0.5)]">
                ✓
              </div>

              <p className="mt-5 text-center font-mono text-xs uppercase tracking-[0.35em] text-emerald-50/80">
                System Ready
              </p>

              <p className="mt-2 text-center text-sm text-emerald-50/60">
                Launching experience...
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          FINAL COLLAPSING CORE
      ========================================================== */}

      <AnimatePresence>
        {isCollapse && (
          <motion.div
            key="collapse-core"
            className="pointer-events-none absolute inset-0 z-[70]"
          >
            <motion.div
              initial={{
                width: "130vw",
                height: "130vw",
                opacity: 1,
              }}
              animate={{
                width: "50px",
                height: "50px",
                opacity: 0,
              }}
              transition={{
                duration: COLLAPSE_DURATION / 1000,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(236,253,245,1)_0%,rgba(52,211,153,0.9)_18%,rgba(16,185,129,0.5)_40%,transparent_72%)] blur-[3px]"
            />

            <motion.div
              initial={{
                opacity: 1,
              }}
              animate={{
                opacity: 0,
              }}
              transition={{
                duration: COLLAPSE_DURATION / 1000,
              }}
              className="absolute inset-0 bg-emerald-950/20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          BOTTOM HUD
      ========================================================== */}

      <div
        className={`absolute bottom-5 left-5 right-5 z-30 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.28em] text-white/15 transition-opacity duration-300 ${
          isLaunching ? "opacity-0" : "opacity-100"
        } sm:bottom-8 sm:left-8 sm:right-8`}
      >
        <span>SHANKAR / DIGITAL SYSTEM</span>
        <span>2026</span>
      </div>
    </motion.div>
  );
}

export default Loader;