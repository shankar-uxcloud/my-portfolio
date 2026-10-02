import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Layers3,
} from "lucide-react";
import { Link } from "react-router-dom";

const techStack = [
  "JAVA",
  "PYTHON",
  "JAVASCRIPT",
  "REACT",
  "NODE.JS",
  "MONGODB",
];

const focusCards = [
  {
    number: "01",
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive web applications with modern frontend and backend technologies.",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI & Intelligent Systems",
    description:
      "Exploring practical AI applications, intelligent tools, automation, and developer-focused systems.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Projects & Experiments",
    description:
      "Turning ideas into functional products while continuously learning and experimenting with technology.",
  },
];

const profileImage = `${import.meta.env.BASE_URL}images/profile-shankar.jpeg`;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/[0.035] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =========================
            HERO MAIN
        ========================== */}
        <div className="grid min-h-[calc(100vh-120px)] items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="relative z-10"
          >
            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/[0.04] px-4 py-2"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.28em] text-emerald-400">
                Available for opportunities
              </span>
            </motion.div>

            {/* Small heading */}
            <motion.p
              variants={fadeUp}
              className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(4.2rem,10vw,7.5rem)] font-black leading-[0.82] tracking-[-0.075em] text-white"
            >
              SHANKAR
            </motion.h1>

            {/* Role */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35"
            >
              <span>Software Development</span>
              <span className="text-emerald-400">•</span>
              <span>Web</span>
              <span className="text-emerald-400">•</span>
              <span>AI / Technology</span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
            >
              I build practical digital experiences and enjoy exploring how
              software, web technologies, and AI can turn ideas into useful
              products.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-semibold !text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                More About Me

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/[0.08] bg-white/[0.015] px-4 py-2 font-mono text-[9px] font-semibold tracking-[0.18em] text-white/35 transition-colors hover:border-emerald-400/30 hover:text-emerald-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT PROFILE CARD
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[430px] lg:translate-y-10"
          >
            {/* Outer frame */}
            <div className="relative rounded-[28px] border border-white/[0.10] bg-white/[0.015] p-2 shadow-2xl">
              {/* Inner frame */}
              <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-black">
                {/* Profile image */}
                <div className="relative aspect-[0.82] w-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="P Shankar - Full Stack Developer and AI Enthusiast"
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  {/* Subtle border glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/[0.08]" />

                  {/* Bottom profile information */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">
                      Developer
                    </p>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
                      P Shankar
                    </h2>

                    <p className="mt-1 text-sm text-white/45">
                      Full Stack Developer · AI Enthusiast
                    </p>
                  </div>
                </div>
              </div>

              {/* Current focus floating card */}
              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-4 bottom-24 rounded-2xl border border-white/[0.10] bg-black/90 px-4 py-3 shadow-xl backdrop-blur-xl"
              >
                <p className="font-mono text-[7px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Current Focus
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                  <span className="text-[10px] font-semibold text-white/75">
                    Full Stack + AI
                  </span>
                </div>
              </motion.div>

              {/* Available floating badge */}
              <div className="absolute -bottom-4 right-8 rounded-full border border-emerald-400/30 bg-black/90 px-4 py-2 shadow-xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />

                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                    Available
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================
            WHAT I BUILD
        ========================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="border-t border-white/[0.07] py-24"
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              What I Build
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Turning ideas into{" "}
              <span className="text-white/35">working products.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/45">
              My work sits at the intersection of full-stack development,
              artificial intelligence, and continuous experimentation.
            </p>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {focusCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.number}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-7 transition-colors duration-300 hover:border-emerald-400/20"
                >
                  {/* Number */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                      {card.number}
                    </span>

                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-white/45 transition-colors group-hover:border-emerald-400/20 group-hover:text-emerald-400">
                      <Icon size={19} />
                    </div>
                  </div>

                  <h3 className="mt-12 text-xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =========================
            QUICK INFO STRIP
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 flex flex-col justify-between gap-6 rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:flex-row sm:items-center sm:p-7"
        >
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.25em] text-white/25">
              Portfolio
            </p>

            <p className="mt-2 text-sm text-white/55">
              Explore my projects, experience, certifications, and achievements.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-emerald-400"
          >
            View Projects

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <div className="flex justify-center pb-12">
          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-white/20"
          >
            <span className="font-mono text-[8px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <ArrowDown size={15} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
