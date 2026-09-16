import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Cpu,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    number: "01",
    type: "INTERNSHIP",
    company: "EWB Edutech Private Limited",
    role: "Python with AI Intern",
    period: "07 Sep 2026 — 19 Oct 2026",
    duration: "6 WEEKS",
    mode: "VIRTUAL / PAN INDIA",
    status: "CURRENT",
    description:
      "A six-week internship experience focused on Python with Artificial Intelligence, providing practical exposure to programming and AI-oriented learning.",
    skills: ["Python", "Artificial Intelligence", "Programming"],
    accent: "violet",
    side: "left",
  },
  {
    number: "02",
    type: "INTERNSHIP",
    company: "UptoSkills",
    role: "Full Stack Development Intern",
    period: "24 Aug 2026 — 24 Nov 2026",
    duration: "3 MONTHS",
    mode: "REMOTE",
    status: "CURRENT",
    description:
      "A three-month Full Stack Development internship providing hands-on exposure to full-stack web development, practical projects, and industry-oriented development practices.",
    skills: [
      "Full Stack Development",
      "Web Development",
      "Practical Projects",
      "Git",
      "GitHub",
    ],
    accent: "emerald",
    side: "right",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text:
      "Developing practical web applications while strengthening frontend, backend, and software workflow skills.",
  },
  {
    icon: Cpu,
    title: "Python + AI",
    text:
      "Exploring Python and artificial intelligence through structured learning and practical experimentation.",
  },
  {
    icon: Sparkles,
    title: "Hands-on Learning",
    text:
      "Using internship work, projects, and technical experimentation to turn learning into practical development experience.",
  },
];

const accentMap = {
  emerald: {
    border: "hover:border-emerald-300/25",
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    glow: "bg-emerald-400/[0.055]",
    line: "from-emerald-400 via-emerald-300/60 to-transparent",
    ring: "border-emerald-300",
  },
  violet: {
    border: "hover:border-violet-300/25",
    text: "text-violet-300",
    dot: "bg-violet-400",
    glow: "bg-violet-400/[0.055]",
    line: "from-violet-400 via-violet-300/60 to-transparent",
    ring: "border-violet-300",
  },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 28,
        filter: "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
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

function Experience() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020303] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-12">
      {/* ======================================================
          ATMOSPHERIC BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-emerald-500/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[34rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.025] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.027]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "54px 54px",
          maskImage:
            "radial-gradient(circle at center, black 8%, transparent 84%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 8%, transparent 84%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================================
            HEADER
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/75">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                Experience / 05
              </div>
            </Reveal>

            <div className="mt-7 overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 85,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.95,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
              >
                Learning
                <span className="block text-white/30">
                  through experience.
                </span>
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: 24,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              A record of internship and practical learning experiences
              contributing to software development, full-stack web development,
              Python, and AI exploration.
            </p>

            <div className="mt-7 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.28em] text-white/20">
              <span className="h-px w-9 bg-emerald-400/40" />
              professional timeline
            </div>
          </motion.div>
        </div>

        {/* ======================================================
            EXPERIENCE TIMELINE
        ======================================================= */}

        <div className="relative mt-20">

          {/* central rail */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-white/[0.07] md:left-1/2 md:-translate-x-1/2" />

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{
              once: true,
              amount: 0.08,
            }}
            transition={{
              duration: 1.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute left-5 top-0 w-px bg-gradient-to-b from-violet-400 via-emerald-400/60 to-transparent shadow-[0_0_22px_rgba(52,211,153,0.2)] md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-24">
            {experiences.map((experience, index) => {
              const accent =
                accentMap[experience.accent] ?? accentMap.emerald;

              const Icon =
                index === 0 ? Cpu : BriefcaseBusiness;

              const isRight = experience.side === "right";

              return (
                <motion.article
                  key={experience.number}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.13,
                  }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative md:grid md:grid-cols-[1fr_86px_1fr] md:items-center"
                >

                  {/* ==================================================
                      LEFT SIDE
                  =================================================== */}

                  <div
                    className={`hidden md:block ${
                      isRight
                        ? "opacity-0"
                        : "pr-12 text-right"
                    }`}
                  >
                    {!isRight && (
                      <div>
                        <span
                          className={`font-mono text-[9px] uppercase tracking-[0.3em] ${accent.text}`}
                        >
                          {experience.type}
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white">
                          {experience.company}
                        </h2>

                        <p className="mt-2 text-sm text-white/35">
                          {experience.role}
                        </p>

                        <div className="mt-5 flex items-center justify-end gap-2 font-mono text-[7px] uppercase tracking-[0.22em] text-white/18">
                          <span className="h-px w-8 bg-white/10" />
                          {experience.number}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ==================================================
                      CENTER NODE
                  =================================================== */}

                  <div className="relative z-10 flex items-center pl-0 md:justify-center">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className={`relative flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-white/[0.1] bg-[#050606] ${accent.text} shadow-[0_0_40px_rgba(0,0,0,0.5)]`}
                    >
                      <Icon size={20} />

                      <span
                        className={`absolute inset-[-7px] rounded-[1.15rem] border border-dashed opacity-20 ${accent.ring}`}
                      />

                      <span
                        className={`absolute -right-1 -top-1 h-2 w-2 rounded-full ${accent.dot} shadow-[0_0_12px_rgba(52,211,153,0.7)]`}
                      />
                    </motion.div>
                  </div>

                  {/* ==================================================
                      EXPERIENCE CARD
                  =================================================== */}

                  <div
                    className={`relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-5 transition-all duration-500 ${accent.border} hover:bg-white/[0.03] sm:p-7 md:p-8 ${
                      isRight
                        ? "md:ml-12"
                        : "md:mr-12 md:col-start-1 md:row-start-1"
                    }`}
                  >
                    {/* glow */}
                    <div
                      className={`pointer-events-none absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full blur-[85px] ${accent.glow}`}
                    />

                    <div className="relative">

                      {/* mobile identity */}
                      <div className="md:hidden">
                        <span
                          className={`font-mono text-[9px] uppercase tracking-[0.3em] ${accent.text}`}
                        >
                          {experience.type}
                        </span>

                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-white">
                          {experience.company}
                        </h2>

                        <p className="mt-2 text-sm text-white/35">
                          {experience.role}
                        </p>
                      </div>

                      {/* meta cards */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-3 md:mt-0">

                        <div className="rounded-xl border border-white/[0.065] bg-black/25 p-3.5">
                          <div className="flex items-center gap-2">
                            <CalendarDays
                              size={12}
                              className={accent.text}
                            />

                            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/22">
                              Period
                            </span>
                          </div>

                          <p className="mt-2 text-[10px] leading-4 text-white/58">
                            {experience.period}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/[0.065] bg-black/25 p-3.5">
                          <div className="flex items-center gap-2">
                            <Sparkles
                              size={12}
                              className={accent.text}
                            />

                            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/22">
                              Duration
                            </span>
                          </div>

                          <p className="mt-2 text-[10px] text-white/58">
                            {experience.duration}
                          </p>
                        </div>

                        <div className="rounded-xl border border-white/[0.065] bg-black/25 p-3.5">
                          <div className="flex items-center gap-2">
                            <MapPin
                              size={12}
                              className={accent.text}
                            />

                            <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/22">
                              Mode
                            </span>
                          </div>

                          <p className="mt-2 text-[10px] leading-4 text-white/58">
                            {experience.mode}
                          </p>
                        </div>
                      </div>

                      {/* status */}
                      <div className="mt-6 flex items-center justify-between">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] ${accent.text}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${accent.dot} shadow-[0_0_9px_rgba(52,211,153,0.75)]`}
                          />
                          {experience.status}
                        </span>

                        <span className="font-mono text-[8px] tracking-[0.25em] text-white/20">
                          {experience.number}
                        </span>
                      </div>

                      {/* section marker */}
                      <div
                        className={`mt-7 flex items-center gap-3 ${
                          !isRight ? "justify-end" : ""
                        }`}
                      >
                        {!isRight && (
                          <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/20">
                            internship experience
                          </span>
                        )}

                        <span
                          className={`h-px w-11 bg-gradient-to-r ${accent.line}`}
                        />

                        {isRight && (
                          <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/20">
                            internship experience
                          </span>
                        )}
                      </div>

                      {/* description */}
                      <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
                        {experience.description}
                      </p>

                      {/* skills */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40 transition hover:border-white/15 hover:text-white/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* signal */}
                      <div className="mt-8">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/18">
                            Experience signal
                          </span>

                          <span
                            className={`font-mono text-[7px] uppercase tracking-[0.18em] ${accent.text}`}
                          >
                            Active
                          </span>
                        </div>

                        <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.05]">
                          <motion.div
                            initial={{
                              width: 0,
                            }}
                            whileInView={{
                              width: "100%",
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 1.2,
                              delay: 0.2,
                            }}
                            className={`h-full rounded-full opacity-65 ${accent.dot}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ======================================================
            CAPABILITY SECTION
        ======================================================= */}

        <div className="mt-36">
          <Reveal>
            <div className="mb-10">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                Growth / 06
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                What these experiences add.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                  className="group rounded-[1.6rem] border border-white/[0.08] bg-white/[0.018] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.03]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.025] text-emerald-300/75 transition group-hover:border-emerald-300/20 group-hover:bg-emerald-400/[0.05]">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/35">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ======================================================
            CTA
        ======================================================= */}

        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-emerald-400/[0.03] p-7 sm:p-10">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.045] blur-[110px]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                  Next chapter
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  The experience continues through every project I build.
                </h2>
              </div>

              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold !text-black transition hover:-translate-y-0.5 hover:bg-white/90"
              >
                <span className="!text-black">
                  Explore Projects
                </span>

                <ArrowUpRight
                  size={16}
                  className="!text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Experience;
