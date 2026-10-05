import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BookOpen,
  GitBranch,
  Layers3,
  Terminal,
  ExternalLink,
  Code2,
  Database,
  Cpu,
  Globe2,
  GitCommitHorizontal,
} from "lucide-react";
import { Link } from "react-router-dom";

const GITHUB_PROFILE = "https://github.com/shankar-uxcloud";

const repositories = [
  {
    number: "01",
    name: "DevSync",
    category: "Developer Collaboration Platform",
    description:
      "A modern developer collaboration platform bringing projects, tasks, GitHub activity, team communication, and AI-assisted workflows into one focused workspace.",
    language: "JavaScript",
    tags: ["React", "Node.js", "MongoDB"],
    url: "https://github.com/shankar-uxcloud/devsync",
    accent: "emerald",
  },
  {
    number: "02",
    name: "ResumeOS-AI",
    category: "AI Career Platform",
    description:
      "An AI-focused career and resume platform designed around resume optimization, interview preparation, and developer career workflows.",
    language: "TypeScript",
    tags: ["AI", "TypeScript", "Web"],
    url: "https://github.com/shankar-uxcloud/ResumeOS-AI",
    accent: "violet",
  },
  {
    number: "03",
    name: "Synapse-AI",
    category: "Developer Intelligence",
    description:
      "An AI-oriented developer intelligence project exploring intelligent workflows and developer-focused software experiences.",
    language: "TypeScript",
    tags: ["AI", "TypeScript", "Developer Tools"],
    url: "https://github.com/shankar-uxcloud/Synapse-AI",
    accent: "blue",
  },
  {
    number: "04",
    name: "VTU SDG Smart Study",
    category: "Education Platform",
    description:
      "A smart VTU SDG exam-preparation project with structured study content and a focused developer-built learning experience.",
    language: "HTML",
    tags: ["HTML", "CSS", "JavaScript"],
    url:
      "https://github.com/shankar-uxcloud/VTU-SDG-Module-3-Smart-Study-Website",
    accent: "green",
  },
];

const moreRepositories = [
  {
    number: "05",
    name: "ai-professor-feedback-analyzer",
    url:
      "https://github.com/shankar-uxcloud/ai-professor-feedback-analyzer",
  },
  {
    number: "06",
    name: "ai-learning-journey",
    url: "https://github.com/shankar-uxcloud/ai-learning-journey",
  },
  {
    number: "07",
    name: "chess-vision-trainer",
    url: "https://github.com/shankar-uxcloud/chess-vision-trainer",
  },
  {
    number: "08",
    name: "java-mini-projects",
    url: "https://github.com/shankar-uxcloud/java-mini-projects",
  },
  {
    number: "09",
    name: "vtu-sdg-module-1",
    url: "https://github.com/shankar-uxcloud/vtu-sdg-module-1",
  },
  {
    number: "10",
    name: "vtu-sdg-module-2-converter",
    url: "https://github.com/shankar-uxcloud/vtu-sdg-module-2-converter",
  },
  {
    number: "11",
    name: "sdg-module-4",
    url: "https://github.com/shankar-uxcloud/sdg-module-4",
  },
  {
    number: "12",
    name: "SDG-module-5",
    url: "https://github.com/shankar-uxcloud/SDG-module-5",
  },
];

const accents = {
  emerald: {
    text: "text-emerald-300",
    border: "hover:border-emerald-300/25",
    glow: "bg-emerald-400/[0.05]",
    dot: "bg-emerald-400",
  },
  violet: {
    text: "text-violet-300",
    border: "hover:border-violet-300/25",
    glow: "bg-violet-400/[0.05]",
    dot: "bg-violet-400",
  },
  blue: {
    text: "text-blue-300",
    border: "hover:border-blue-300/25",
    glow: "bg-blue-400/[0.05]",
    dot: "bg-blue-400",
  },
  green: {
    text: "text-emerald-200",
    border: "hover:border-emerald-200/25",
    glow: "bg-emerald-300/[0.05]",
    dot: "bg-emerald-300",
  },
};

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
      viewport={{
        once: true,
        amount: 0.16,
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

function Metric({ icon: Icon, label, value, detail }) {
  return (
    <div className="group border-b border-white/[0.07] p-5 transition hover:bg-white/[0.018] sm:border-b-0 sm:border-r">
      <div className="flex items-center justify-between">
        <Icon
          size={15}
          className="text-emerald-300/70 transition group-hover:text-emerald-300"
        />

        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/20">
          Developer
        </span>
      </div>

      <p className="mt-7 break-words text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
        {value}
      </p>

      <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/25">
        {detail}
      </p>
    </div>
  );
}

function RepositoryCard({ repository, index }) {
  const accent = accents[repository.accent] ?? accents.emerald;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.045,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -5,
      }}
      className={`group relative overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-white/[0.018] p-6 transition-all duration-500 ${accent.border}`}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full blur-[85px] ${accent.glow}`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`font-mono text-[9px] tracking-[0.28em] ${accent.text}`}
          >
            {repository.number}
          </span>

          <a
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${repository.name} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-white/35 transition hover:border-white/20 hover:text-white"
          >
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
          {repository.category}
        </p>

        <h3 className="mt-2 break-words text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
          {repository.name}
        </h3>

        <p className="mt-4 text-sm leading-7 text-white/40">
          {repository.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
            {repository.language}
          </span>

          {repository.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`h-1.5 w-1.5 rounded-full ${accent.dot} shadow-[0_0_9px_rgba(52,211,153,0.7)]`}
            />
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/22">
              Public repository
            </span>
          </div>

          <a
            href={repository.url}
            target="_blank"
            rel="noreferrer"
            className={`font-mono text-[8px] uppercase tracking-[0.2em] ${accent.text} transition hover:text-white`}
          >
            View repo ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function GitHub() {
  return (
    <section className="theme-page relative min-h-screen overflow-hidden px-5 pb-28 pt-32 text-white sm:px-8 lg:px-12">
      {/* ======================================================
          ATMOSPHERIC BACKGROUND
      ======================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[145px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-[30rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/[0.022] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage:
            "radial-gradient(circle at center, black 8%, transparent 83%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 8%, transparent 83%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* ======================================================
            HERO
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/75">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_11px_rgba(52,211,153,0.8)]" />
                GitHub / 06
              </div>
            </Reveal>

            <div className="mt-7 overflow-hidden">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 90,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl font-semibold leading-[0.84] tracking-[-0.07em] text-white sm:text-7xl lg:text-[8rem]"
              >
                CODE
                <span className="block text-white/30">
                  IN PUBLIC.
                </span>
              </motion.h1>
            </div>
          </div>

          <Reveal delay={0.18}>
            <div>
              <p className="max-w-xl text-base leading-8 text-white/45 sm:text-lg">
                Explore the repositories behind the work — from developer
                platforms and AI experiments to learning projects and
                education-focused builds.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  <span className="!text-black">
                    GitHub Profile
                  </span>
                  <ArrowUpRight size={15} className="!text-black" />
                </a>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.02] px-5 py-3 text-sm font-medium text-white/70 transition hover:-translate-y-0.5 hover:border-emerald-300/20 hover:text-white"
                >
                  View Portfolio Projects
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ======================================================
            PROFILE COMMAND CENTER
        ======================================================= */}

        <Reveal className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-5 sm:p-6">
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-400/[0.035] blur-[90px]" />

            <div className="relative grid gap-7 lg:grid-cols-[auto_1fr_auto] lg:items-center">

              <div className="flex items-center justify-center">
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#080909]">
                  <img
                    src="https://avatars.githubusercontent.com/u/228556116?v=4"
                    alt="Shankar GitHub avatar"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-emerald-400/[0.04]" />
                </div>
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    P SHANKAR
                  </h2>

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
                    GitHub Profile
                  </span>
                </div>

                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.24em] text-white/25">
                  @shankar-uxcloud
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/38">
                  A public developer workspace containing software projects,
                  AI experiments, education builds, and ongoing technical
                  exploration.
                </p>
              </div>

              <div>
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-sm font-medium text-white/65 transition hover:border-emerald-300/20 hover:bg-emerald-400/[0.045] hover:text-white lg:w-auto"
                >
                  Visit profile
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ======================================================
            PROFILE SNAPSHOT
        ======================================================= */}

        <Reveal className="mt-6">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.015] sm:grid-cols-2 lg:grid-cols-4">
            <Metric
              icon={Layers3}
              label="Featured builds"
              value="04"
              detail="Selected repositories highlighted in the developer command center."
            />

            <Metric
              icon={Code2}
              label="Build spectrum"
              value="Web + AI"
              detail="Developer platforms, web projects, learning builds, and AI experiments."
            />

            <Metric
              icon={GitBranch}
              label="Version control"
              value="Git"
              detail="Repository-driven development and project iteration."
            />

            <Metric
              icon={Activity}
              label="GitHub identity"
              value="@shankar-uxcloud"
              detail="The public GitHub profile behind the repository ecosystem."
            />
          </div>
        </Reveal>

        {/* ======================================================
            CONTRIBUTION ACTIVITY
        ======================================================= */}

        <div className="mt-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                  Contribution activity / 01
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                  The activity layer.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/35">
                  Contribution history is kept honest here: the portfolio
                  does not invent GitHub activity. The live data source can be
                  connected without changing the visual system.
                </p>
              </div>

              <Activity
                size={22}
                className="hidden text-emerald-300/40 sm:block"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 overflow-hidden rounded-[1.9rem] border border-white/[0.08] bg-white/[0.018] p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04]">
                    <Activity size={17} className="text-emerald-300/75" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white/75">
                      Contribution data
                    </p>

                    <p className="mt-1 text-xs text-white/25">
                      Live contribution endpoint not connected
                    </p>
                  </div>
                </div>

                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.2em] text-emerald-300/65 transition hover:text-emerald-300"
                >
                  Open GitHub
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="mt-7 overflow-x-auto">
                <div className="grid min-w-[760px] grid-cols-[repeat(52,minmax(11px,1fr))] gap-1">
                  {Array.from({ length: 364 }).map((_, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-[3px] border border-white/[0.035] bg-white/[0.02]"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/18">
                  Activity visualization
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/18">
                  Awaiting live data
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ======================================================
            FEATURED REPOSITORIES
        ======================================================= */}

        <div className="mt-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                  Selected repositories / 02
                </p>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                  The important builds.
                </h2>
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/20 sm:block">
                04 selected
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {repositories.map((repository, index) => (
              <RepositoryCard
                key={repository.name}
                repository={repository}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* ======================================================
            TECHNOLOGY DNA
        ======================================================= */}

        <div className="mt-28">
          <Reveal>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                Technology DNA / 03
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
                Tools behind the repositories.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-6">
                <Code2 size={19} className="text-emerald-300/70" />

                <h3 className="mt-6 text-lg font-semibold text-white">
                  Frontend
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/30">
                  React, JavaScript, HTML, CSS and interface-driven web
                  development.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-6">
                <Cpu size={19} className="text-violet-300/70" />

                <h3 className="mt-6 text-lg font-semibold text-white">
                  AI / Python
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/30">
                  Python, AI experimentation, intelligent workflows, and
                  applied AI exploration.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-6">
                <Database size={19} className="text-blue-300/70" />

                <h3 className="mt-6 text-lg font-semibold text-white">
                  Data
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/30">
                  MongoDB, SQL-oriented workflows, and application data
                  systems.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/[0.07] bg-white/[0.018] p-6">
                <Globe2 size={19} className="text-emerald-200/70" />

                <h3 className="mt-6 text-lg font-semibold text-white">
                  Web Ecosystem
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/30">
                  GitHub, public repositories, deployments, and project
                  collaboration workflows.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ======================================================
            TERMINAL
        ======================================================= */}

        <div className="mt-28">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#050606] shadow-[0_30px_100px_rgba(0,0,0,0.38)]">
              <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4">
                <div className="flex items-center gap-3">
                  <Terminal
                    size={15}
                    className="text-emerald-300/70"
                  />

                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                    shankar@github:~
                  </span>
                </div>

                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
              </div>

              <div className="relative p-6 font-mono text-xs leading-8 sm:p-8">
                <div className="text-white/28">
                  <span className="text-emerald-300/60">$</span>{" "}
                  github.profile --inspect
                </div>

                <div className="mt-3 text-white/55">
                  <span className="text-emerald-300/65">✓</span>{" "}
                  profile: shankar-uxcloud
                </div>

                <div className="text-white/55">
                  <span className="text-emerald-300/65">✓</span>{" "}
                  selected repositories: indexed
                </div>

                <div className="text-white/55">
                  <span className="text-emerald-300/65">✓</span>{" "}
                  public source links: connected
                </div>

                <div className="text-white/55">
                  <span className="text-emerald-300/65">✓</span>{" "}
                  portfolio bridge: active
                </div>

                <div className="mt-4 text-white/30">
                  <span className="text-emerald-300/60">$</span>{" "}
                  status
                </div>

                <div className="text-emerald-300/75">
                  SYSTEM READY
                  <span className="ml-1 inline-block h-3 w-1.5 animate-pulse bg-emerald-300/70 align-middle" />
                </div>

                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/15 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* ======================================================
            MORE REPOSITORIES
        ======================================================= */}

        <div className="mt-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                More repositories / 04
              </span>

              <div className="h-px flex-1 bg-white/[0.08]" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-white/20">
                08 linked
              </span>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {moreRepositories.map((repository, index) => (
              <Reveal
                key={repository.name}
                delay={index * 0.025}
              >
                <a
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-2xl border border-white/[0.07] bg-white/[0.016] p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.025]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.22em] text-emerald-300/55">
                      {repository.number}
                    </span>

                    <GitCommitHorizontal
                      size={14}
                      className="text-white/15 transition group-hover:text-emerald-300/70"
                    />
                  </div>

                  <p className="mt-5 break-words text-sm font-medium text-white/65 transition group-hover:text-white">
                    {repository.name}
                  </p>

                  <div className="mt-4 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.18em] text-white/20">
                    Open repository
                    <ArrowUpRight size={11} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ======================================================
            PORTFOLIO BRIDGE
        ======================================================= */}

        <Reveal className="mt-28">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-7 sm:p-10">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.04] blur-[100px]" />

            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/65">
                Portfolio ecosystem / 05
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">

                <Link
                  to="/projects"
                  className="group rounded-2xl border border-white/[0.07] bg-black/20 p-6 transition hover:border-emerald-300/20"
                >
                  <Layers3
                    size={18}
                    className="text-emerald-300/65"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Projects
                  </h3>

                  <p className="mt-2 text-sm text-white/30">
                    The work built from the codebase.
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="mt-6 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                  />
                </Link>

                <Link
                  to="/experience"
                  className="group rounded-2xl border border-white/[0.07] bg-black/20 p-6 transition hover:border-emerald-300/20"
                >
                  <BookOpen
                    size={18}
                    className="text-violet-300/65"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Experience
                  </h3>

                  <p className="mt-2 text-sm text-white/30">
                    The internships and learning behind the builds.
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="mt-6 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-300"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group rounded-2xl border border-white/[0.07] bg-black/20 p-6 transition hover:border-emerald-300/20"
                >
                  <Activity
                    size={18}
                    className="text-emerald-200/65"
                  />

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    Contact
                  </h3>

                  <p className="mt-2 text-sm text-white/30">
                    Start a conversation around the next build.
                  </p>

                  <ArrowUpRight
                    size={15}
                    className="mt-6 text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
                  />
                </Link>

              </div>
            </div>
          </div>
        </Reveal>

        {/* ======================================================
            FINAL CTA
        ======================================================= */}

        <Reveal className="mt-20">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-emerald-300/15 bg-emerald-400/[0.025] px-6 py-16 text-center sm:px-10 sm:py-20">
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.05] blur-[115px]" />

            <div className="relative">
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/70">
                End of command center
              </p>

              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl">
                WANT TO SEE
                <span className="block text-white/30">
                  THE CODE?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35">
                Explore the repositories behind the projects and follow the
                work directly on GitHub.
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={GITHUB_PROFILE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold !text-black transition hover:-translate-y-0.5 hover:bg-white/90"
                >
                  <span className="!text-black">
                    Open GitHub
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="!text-black"
                  />
                </a>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.11] bg-white/[0.025] px-6 py-3.5 text-sm font-medium text-white/75 transition hover:-translate-y-0.5 hover:border-emerald-300/20 hover:text-white"
                >
                  View Projects
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default GitHub;
