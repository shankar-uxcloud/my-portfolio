import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const journey = [
  {
    number: "01",
    title: "DISCOVER",
    text: "Explore ideas, understand problems, and stay curious about how technology can be used to build useful experiences.",
  },
  {
    number: "02",
    title: "BUILD",
    text: "Turn ideas into working software through practical development, experimentation, and iteration.",
  },
  {
    number: "03",
    title: "LEARN",
    text: "Keep expanding technical knowledge across software development, web technologies, and AI.",
  },
  {
    number: "04",
    title: "EVOLVE",
    text: "Refine the way products are designed, implemented, tested, and improved over time.",
  },
];

const drivers = [
  {
    number: "01",
    title: "BUILD",
    text: "Turning ideas into functional software and meaningful digital experiences.",
  },
  {
    number: "02",
    title: "LEARN",
    text: "Continuously exploring technologies, tools, and approaches through practice.",
  },
  {
    number: "03",
    title: "SOLVE",
    text: "Breaking complex problems into smaller, understandable and actionable pieces.",
  },
  {
    number: "04",
    title: "CREATE",
    text: "Combining technology and interface thinking to create experiences worth using.",
  },
];

const technologies = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "SQL",
  "MongoDB",
  "Supabase",
  "Git",
  "GitHub",
  "AI / ML",
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
        filter: "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function MagneticCard({ children, className = "" }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 150,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 150,
    damping: 20,
  });

  const rotateX = useTransform(springY, [-50, 50], [2, -2]);
  const rotateY = useTransform(springX, [-50, 50], [-2, 2]);

  const handleMove = (event) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    x.set(event.clientX - (rect.left + rect.width / 2));
    y.set(event.clientY - (rect.top + rect.height / 2));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function About() {
  const timelineRef = useRef(null);

  const timelineInView = useInView(timelineRef, {
    once: false,
    amount: 0.25,
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020303] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-12">
      {/* ======================================================
          ATMOSPHERIC BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-24 h-[36rem] w-[36rem] rounded-full bg-emerald-500/[0.045] blur-[150px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[32rem] h-[30rem] w-[30rem] rounded-full bg-white/[0.018] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.028]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.17) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.17) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at center, black 8%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 8%, transparent 82%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,rgba(0,0,0,0.5)_100%)]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================================
            HERO
        ======================================================= */}

        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

          {/* LEFT */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.04] px-4 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.85)]" />
                About / 01
              </div>
            </Reveal>

            <div className="mt-8 overflow-hidden">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl font-semibold leading-[0.86] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem]"
              >
                <span className="block text-white">BEHIND</span>
                <span className="block text-white/30">THE CODE</span>
              </motion.h1>
            </div>

            <Reveal delay={0.12} className="mt-8 max-w-2xl">
              <p className="text-base leading-8 text-white/55 sm:text-lg">
                I&apos;m Shankar — a developer who enjoys turning ideas into
                meaningful digital experiences through software, web
                development, and continuous exploration of technology.
              </p>
            </Reveal>

            {/* CTA FIX */}
            <Reveal delay={0.2} className="mt-9">
              <div className="flex flex-wrap gap-3">

                {/* WHITE BUTTON — FORCED BLACK CONTENT */}
                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_15px_45px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_18px_55px_rgba(255,255,255,0.09)]"
                >
                  <span className="!text-black">
                    Explore My Journey
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="!text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/25 hover:bg-emerald-400/[0.05] hover:text-white"
                >
                  View My Work

                  <ArrowRight
                    size={16}
                    className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-emerald-300"
                  />
                </Link>

              </div>
            </Reveal>
          </div>

          {/* RIGHT IDENTITY */}
          <Reveal delay={0.18}>
            <MagneticCard className="relative mx-auto w-full max-w-[500px]">

              <div className="relative aspect-square overflow-hidden rounded-[2.25rem] border border-white/[0.08] bg-white/[0.02] shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl">

                <div
                  className="absolute inset-0 opacity-[0.035]"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
                    `,
                    backgroundSize: "35px 35px",
                  }}
                />

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[17%] rounded-full border border-dashed border-emerald-400/15"
                >
                  <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                </motion.div>

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[29%] rounded-full border border-white/[0.06]"
                >
                  <span className="absolute bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/60" />
                </motion.div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-[2rem] border border-white/10 bg-white text-5xl font-black text-black shadow-[0_0_55px_rgba(52,211,153,0.07)] sm:h-32 sm:w-32">
                    S
                  </div>

                  <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.32em] text-emerald-300/75">
                    Digital Identity
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[0.1em] text-white">
                    SHANKAR
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Developer
                  </p>
                </div>

                <div className="absolute left-7 top-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    PROFILE
                  </p>
                  <p className="mt-1 font-mono text-[8px] text-white/45">
                    SHK / DEV
                  </p>
                </div>

                <div className="absolute right-7 top-7 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.75)]" />
                  <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-emerald-300/65">
                    AVAILABLE
                  </span>
                </div>

                <div className="absolute bottom-7 left-7">
                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    FOCUS
                  </p>
                  <p className="mt-1 text-[9px] text-white/45">
                    SOFTWARE / WEB / AI
                  </p>
                </div>

                <div className="absolute bottom-7 right-7 text-right">
                  <p className="font-mono text-[7px] uppercase tracking-[0.25em] text-white/20">
                    STATUS
                  </p>
                  <p className="mt-1 text-[9px] text-white/45">
                    ONLINE
                  </p>
                </div>

                <motion.div
                  animate={{
                    y: ["-80%", "180%"],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-8 right-8 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent shadow-[0_0_18px_rgba(52,211,153,0.4)]"
                />
              </div>
            </MagneticCard>
          </Reveal>
        </div>

        {/* ======================================================
            EDITORIAL
        ======================================================= */}

        <Reveal className="mt-36">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-emerald-300/60">
                Identity / 02
              </p>

              <p className="mt-5 text-sm leading-7 text-white/30">
                Software is the medium. Curiosity is the engine.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                I DON&apos;T JUST WRITE CODE.
                <span className="mt-3 block text-emerald-300">
                  I BUILD EXPERIENCES.
                </span>
              </h2>
            </div>

          </div>
        </Reveal>

        {/* ======================================================
            JOURNEY
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                Journey / 03
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
                The journey.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/35">
                A continuous progression through exploration, implementation,
                learning, and refinement.
              </p>
            </div>
          </Reveal>

          <div
            ref={timelineRef}
            className="relative mt-16"
          >
            <div className="absolute bottom-0 left-[21px] top-0 w-px bg-white/[0.07]" />

            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: timelineInView ? "100%" : "0%",
              }}
              transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute left-[21px] top-0 w-px origin-top bg-gradient-to-b from-emerald-400 via-emerald-300/40 to-transparent shadow-[0_0_18px_rgba(52,211,153,0.25)]"
            />

            <div className="space-y-10">
              {journey.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.05}>
                  <div className="relative grid gap-5 pl-14 md:grid-cols-[120px_1fr] md:pl-0">

                    <div className="hidden font-mono text-[10px] tracking-[0.28em] text-emerald-300/50 md:block">
                      {item.number}
                    </div>

                    <div className="absolute left-[12px] top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-emerald-300/25 bg-[#020303] md:left-[-8px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
                    </div>

                    <div className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.015] p-6 transition duration-300 hover:border-emerald-300/15 hover:bg-white/[0.025] md:p-7">
                      <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/20 md:hidden">
                        {item.number}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white md:mt-0">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/35">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* ======================================================
            DRIVERS
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
              Mindset / 04
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              What drives me.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {drivers.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <MagneticCard className="h-full">
                  <div className="group relative h-full overflow-hidden rounded-[1.6rem] border border-white/[0.07] bg-white/[0.018] p-7 transition duration-300 hover:border-emerald-300/20 hover:bg-white/[0.03] sm:p-8">
                    <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-emerald-400/[0.025] blur-3xl transition group-hover:bg-emerald-400/[0.06]" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-300/55">
                          {item.number}
                        </span>

                        <ArrowUpRight
                          size={17}
                          className="text-white/15 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                        />
                      </div>

                      <h3 className="mt-10 text-3xl font-semibold tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-md text-sm leading-7 text-white/35">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </MagneticCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ======================================================
            TECHNICAL DNA
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
              Technical DNA / 05
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              The stack behind the experiments.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-12 min-h-[480px] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.015]">

              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
                  `,
                  backgroundSize: "42px 42px",
                }}
              />

              {/* connection lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 480"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {[
                  [500, 240, 500, 80],
                  [500, 240, 700, 120],
                  [500, 240, 820, 240],
                  [500, 240, 700, 360],
                  [500, 240, 500, 400],
                  [500, 240, 300, 360],
                  [500, 240, 180, 240],
                  [500, 240, 300, 120],
                ].map(([x1, y1, x2, y2], index) => (
                  <motion.line
                    key={`${x1}-${y1}-${x2}-${y2}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(52,211,153,0.2)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.08,
                    }}
                  />
                ))}
              </svg>

              {/* center */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-emerald-300/20 bg-[#030505] shadow-[0_0_55px_rgba(52,211,153,0.08)]"
              >
                <div className="text-center">
                  <p className="font-mono text-[7px] uppercase tracking-[0.28em] text-emerald-300/60">
                    CORE
                  </p>
                  <p className="mt-1 text-lg font-semibold tracking-[0.12em]">
                    SHANKAR
                  </p>
                </div>
              </motion.div>

              {technologies.slice(0, 8).map((technology, index) => {
                const positions = [
                  "left-1/2 top-10 -translate-x-1/2",
                  "left-[70%] top-[16%] -translate-x-1/2",
                  "right-8 top-1/2 -translate-y-1/2",
                  "left-[70%] bottom-[16%] -translate-x-1/2",
                  "left-1/2 bottom-10 -translate-x-1/2",
                  "left-[30%] bottom-[16%] -translate-x-1/2",
                  "left-8 top-1/2 -translate-y-1/2",
                  "left-[30%] top-[16%] -translate-x-1/2",
                ];

                return (
                  <motion.div
                    key={technology}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: 0.08 + index * 0.06,
                    }}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    className={`absolute ${positions[index]} hidden rounded-xl border border-white/[0.08] bg-black/65 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-white/55 backdrop-blur-xl transition hover:border-emerald-300/25 hover:text-white sm:block`}
                  >
                    {technology}
                  </motion.div>
                );
              })}

              {/* mobile stack */}
              <div className="absolute inset-x-5 bottom-5 flex flex-wrap justify-center gap-2 sm:hidden">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-white/[0.07] bg-black/50 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.12em] text-white/45"
                  >
                    {technology}
                  </span>
                ))}
              </div>

            </div>
          </Reveal>
        </div>

        {/* ======================================================
            HIGHLIGHTS
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
              Highlights / 06
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              Moments that matter.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/35">
              Areas of work and exploration that currently shape the portfolio.
            </p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {[
              "SOFTWARE DEVELOPMENT",
              "WEB DEVELOPMENT",
              "AI / ML EXPLORATION",
              "PROJECT BUILDING",
            ].map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="group flex items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.015] px-5 py-5 transition duration-300 hover:border-emerald-300/20 hover:bg-white/[0.025] sm:px-7">
                  <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-300/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium tracking-[0.1em] text-white/70 sm:text-base">
                    {item}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-white/15 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ======================================================
            PHILOSOPHY
        ======================================================= */}

        <Reveal className="mt-36">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/[0.07] bg-white/[0.018] px-6 py-16 text-center sm:px-10 sm:py-24">

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.05] blur-[100px]"
            />

            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/60">
                My approach / 07
              </p>

              <h2 className="mx-auto mt-8 max-w-5xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                BUILD WITH PURPOSE.
                <span className="block text-white/35">
                  LEARN WITHOUT LIMITS.
                </span>
                <span className="block text-emerald-300">
                  KEEP MOVING FORWARD.
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        {/* ======================================================
            WHAT'S NEXT
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
              Direction / 08
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-6xl">
              What&apos;s next?
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.015] md:grid-cols-3">

              <div className="border-b border-white/[0.07] p-7 md:border-b-0 md:border-r">
                <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-300/60">
                  NOW
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  Build the foundation.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Continue strengthening software and web development through
                  practical projects and experimentation.
                </p>
              </div>

              <div className="border-b border-white/[0.07] p-7 md:border-b-0 md:border-r">
                <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-300/60">
                  NEXT
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  Go deeper.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Explore more advanced full-stack systems, product
                  architecture, and stronger engineering workflows.
                </p>
              </div>

              <div className="p-7">
                <span className="font-mono text-[9px] tracking-[0.25em] text-emerald-300/60">
                  BEYOND
                </span>

                <h3 className="mt-5 text-2xl font-semibold">
                  Explore intelligence.
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/35">
                  Keep exploring AI, intelligent software systems, and emerging
                  technology.
                </p>
              </div>

            </div>
          </Reveal>
        </div>

        {/* ======================================================
            FINAL CTA
        ======================================================= */}

        <Reveal className="mt-36">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-300/15 bg-emerald-400/[0.035] px-6 py-16 text-center sm:px-10 sm:py-24">

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.08] blur-[120px]"
            />

            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/70">
                End of transmission
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                READY TO BUILD
                <span className="block text-white/35">
                  SOMETHING?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                Let&apos;s turn an idea into something useful, thoughtful, and
                real.
              </p>

              <div className="relative mt-9 flex flex-wrap justify-center gap-3">

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold !text-black shadow-[0_15px_45px_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  <span className="!text-black">
                    Let&apos;s Talk
                  </span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="!text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/projects"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/[0.11] bg-white/[0.025] px-6 py-3.5 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-emerald-300/25 hover:bg-emerald-400/[0.05] hover:text-white"
                >
                  Explore Projects

                  <ArrowRight
                    size={16}
                    className="text-white/45 transition-transform group-hover:translate-x-1 group-hover:text-emerald-300"
                  />
                </Link>

              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export default About;
