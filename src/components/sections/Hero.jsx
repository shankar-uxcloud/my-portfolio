import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const tech = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
];

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#020303] px-5 pb-16 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* =========================
          ATMOSPHERIC BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-[12rem] h-[32rem] w-[32rem] rounded-full bg-emerald-500/[0.045] blur-[130px]" />

        <div className="absolute right-[-6rem] top-[18rem] h-[28rem] w-[28rem] rounded-full bg-emerald-300/[0.025] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.028]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "52px 52px",
            maskImage:
              "radial-gradient(circle at center, black 10%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 10%, transparent 85%)",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.55)_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="max-w-4xl">

            {/* availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.045] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/85 shadow-[0_0_30px_rgba(52,211,153,0.035)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              Available for opportunities
            </motion.div>

            {/* hello */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-mono text-[10px] uppercase tracking-[0.34em] text-white/30"
            >
              Hello, I&apos;m
            </motion.p>

            {/* heading */}
            <div className="mt-4 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="select-none text-[4.2rem] font-semibold leading-[0.88] tracking-[-0.075em] text-white sm:text-[6.8rem] lg:text-[8.3rem]"
              >
                SHANKAR
              </motion.h1>
            </div>

            {/* role */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="mt-7 flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-sm"
            >
              <span>Software Development</span>
              <span className="text-emerald-400">•</span>
              <span>Web</span>
              <span className="text-emerald-400">•</span>
              <span>AI / Technology</span>
            </motion.div>

            {/* description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.43 }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
            >
              I build practical digital experiences and enjoy exploring how
              software, web technologies, and AI can turn ideas into useful
              products.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.56 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {/* PRIMARY */}
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_10px_35px_rgba(255,255,255,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_15px_45px_rgba(255,255,255,0.08)]"
              >
                <span className="!text-black">
                  Explore My Work
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="!text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              {/* SECONDARY */}
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.11] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/25 hover:bg-emerald-400/[0.055] hover:text-white"
              >
                More About Me

                <ArrowUpRight
                  size={16}
                  className="text-white/55 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                />
              </Link>
            </motion.div>

            {/* tech strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.74 }}
              className="mt-11 flex flex-wrap items-center gap-2"
            >
              {tech.map((item) => (
                <span
                  key={item}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-white/38 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/20 hover:bg-emerald-400/[0.035] hover:text-white/70"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            {/* scroll */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-12 hidden items-center gap-3 font-mono text-[8px] uppercase tracking-[0.3em] text-white/22 md:flex"
            >
              <span className="h-px w-8 bg-emerald-400/40" />
              <ArrowDown size={13} />
              Explore the portfolio
            </motion.div>
          </div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 28 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mx-auto w-full max-w-[560px]"
          >
            <div className="relative">

              {/* ambient halo */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.16, 0.3, 0.16],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.055] blur-[100px]"
              />

              {/* Main workspace shell */}
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.09] bg-[#070909]/95 shadow-[0_35px_120px_rgba(0,0,0,0.52)] backdrop-blur-2xl">

                {/* top bar */}
                <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.23em] text-white/30">
                      developer.workspace
                    </span>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300/60">
                    online
                  </span>
                </div>

                <div className="grid md:grid-cols-[0.43fr_0.57fr]">

                  {/* Identity */}
                  <div className="border-b border-white/[0.07] p-6 md:border-b-0 md:border-r">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl font-black text-black shadow-[0_0_35px_rgba(255,255,255,0.04)]">
                      S
                    </div>

                    <p className="mt-5 text-lg font-semibold tracking-[0.04em] text-white">
                      SHANKAR
                    </p>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.24em] text-white/28">
                      Developer
                    </p>

                    <div className="mt-8 space-y-5">
                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                          Primary focus
                        </p>

                        <p className="mt-1.5 text-xs text-white/60">
                          Software & Web
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                          Exploring
                        </p>

                        <p className="mt-1.5 text-xs text-white/60">
                          AI / Technology
                        </p>
                      </div>

                      <div>
                        <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                          Workflow
                        </p>

                        <p className="mt-1.5 text-xs text-white/60">
                          Learn → Build → Refine
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stack */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/22">
                        Current stack
                      </span>

                      <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.2em] text-emerald-300/65">
                        active
                      </span>
                    </div>

                    <div className="mt-6 space-y-3">
                      {[
                        ["01", "Frontend", "React / JavaScript"],
                        ["02", "Backend", "Node.js / APIs"],
                        ["03", "Data", "SQL / MongoDB"],
                        ["04", "Versioning", "Git / GitHub"],
                      ].map(([num, label, value]) => (
                        <div
                          key={num}
                          className="group rounded-xl border border-white/[0.06] bg-white/[0.018] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/15 hover:bg-emerald-400/[0.02]"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[8px] text-white/15">
                              {num}
                            </span>

                            <div>
                              <p className="text-xs font-medium text-white/72">
                                {label}
                              </p>

                              <p className="mt-0.5 text-[10px] text-white/32">
                                {value}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 border-t border-white/[0.06] pt-5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/20">
                          Build state
                        </span>

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-300/60">
                          ready
                        </span>
                      </div>

                      <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.055]">
                        <motion.div
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2.8,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="border-t border-white/[0.07] px-5 py-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/18">
                      digital workspace
                    </span>

                    <a
                      href="https://github.com/shankar-uxcloud"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/38 transition hover:text-emerald-300"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/[0.08] bg-[#080909]/95 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:block"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                      Status
                    </p>

                    <p className="mt-0.5 text-xs text-white/65">
                      Ready to build
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-12 hidden rounded-2xl border border-white/[0.08] bg-[#080909]/95 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block"
              >
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                  Focus
                </p>

                <p className="mt-1 text-xs text-white/65">
                  Build meaningful software
                </p>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
