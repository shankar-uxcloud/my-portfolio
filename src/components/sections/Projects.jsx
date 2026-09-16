import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    number: "01",
    title: "DevSync",
    category: "Developer Collaboration Platform",
    description:
      "A developer-focused collaboration workspace that brings project management, task tracking, GitHub activity, team communication, analytics, and AI-assisted workflows into one focused environment.",
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/shankar-uxcloud/devsync",
    demo: "http://localhost:5173/demo",
    accent: "emerald",
    features: [
      "Project management",
      "Task tracking",
      "GitHub workflows",
      "Team collaboration",
      "Real-time communication",
      "AI-assisted workflows",
    ],
  },
  {
    number: "02",
    title: "ResumeOS-AI",
    category: "AI Career Toolkit",
    description:
      "An AI-powered career platform focused on resume analysis, ATS analysis, skill-gap discovery, job matching, recruiter simulation, interview preparation, and career insights.",
    stack: ["TypeScript", "AI", "Career Platform"],
    github: "https://github.com/shankar-uxcloud/ResumeOS-AI",
    demo: "https://resume-os-ai.vercel.app",
    accent: "violet",
    features: [
      "Resume analysis",
      "ATS analysis",
      "AI rewriting",
      "Job matching",
      "Interview coaching",
      "Career insights",
    ],
  },
  {
    number: "03",
    title: "SYNAPSE",
    category: "AI Developer Intelligence",
    description:
      "An AI-oriented developer intelligence project with a dedicated web experience and public deployment.",
    stack: ["TypeScript", "AI", "Web"],
    github: "https://github.com/shankar-uxcloud/Synapse-AI",
    demo: "https://synapse-ai-ten-green.vercel.app",
    accent: "blue",
    features: [
      "AI-oriented interface",
      "Developer experience",
      "Web application",
      "Public deployment",
    ],
  },
  {
    number: "04",
    title: "VTU SDG Smart Study",
    category: "Exam Preparation Platform",
    description:
      "A smart VTU SDG Module-3 exam preparation platform with structured answers, an answer engine, futuristic UI, and offline functionality.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github:
      "https://github.com/shankar-uxcloud/VTU-SDG-Module-3-Smart-Study-Website",
    demo:
      "https://shankar-uxcloud.github.io/VTU-SDG-Module-3-Smart-Study-Website/",
    accent: "green",
    features: [
      "Answer engine",
      "Exam-oriented content",
      "Fully offline",
      "Structured answers",
      "Futuristic UI",
      "Question coverage",
    ],
  },
];

const moreProjects = [
  {
    number: "05",
    title: "AI Professor Feedback Analyzer",
    category: "AI / Education",
    description:
      "AI-powered professor feedback analysis designed around identifying feedback patterns and suggesting improvements for students.",
    github:
      "https://github.com/shankar-uxcloud/ai-professor-feedback-analyzer",
  },
  {
    number: "06",
    title: "AI Learning Journey",
    category: "AI / Learning",
    description:
      "A learning repository exploring Generative AI, OpenAI APIs, prompt engineering, and AI agents using Python.",
    github: "https://github.com/shankar-uxcloud/ai-learning-journey",
  },
  {
    number: "07",
    title: "Chess Vision Trainer",
    category: "Computer Vision",
    description:
      "A chess-focused vision project exploring board visualization and player attention.",
    github: "https://github.com/shankar-uxcloud/chess-vision-trainer",
  },
  {
    number: "08",
    title: "Java Mini Projects",
    category: "Java / Practice",
    description:
      "A collection of Java and web-based mini projects for programming practice and interactive development.",
    github: "https://github.com/shankar-uxcloud/java-mini-projects",
  },
  {
    number: "09",
    title: "VTU SDG Module 1",
    category: "Education / Web",
    description:
      "An interactive VTU Sustainable Development Goals study experience.",
    github: "https://github.com/shankar-uxcloud/vtu-sdg-module-1",
  },
  {
    number: "10",
    title: "VTU SDG Module 2 Converter",
    category: "Education / Utility",
    description:
      "A study-oriented utility for structured VTU SDG Module-2 preparation content.",
    github:
      "https://github.com/shankar-uxcloud/vtu-sdg-module-2-converter",
  },
  {
    number: "11",
    title: "VTU SDG Module 4",
    category: "Education / Web",
    description:
      "A VTU Sustainable Development Goals Module-4 preparation website.",
    github: "https://github.com/shankar-uxcloud/sdg-module-4",
  },
  {
    number: "12",
    title: "VTU SDG Module 5",
    category: "Education / Web",
    description:
      "A dedicated Sustainable Development Goals Module-5 preparation project.",
    github: "https://github.com/shankar-uxcloud/SDG-module-5",
  },
];

const accents = {
  emerald: {
    text: "text-emerald-300",
    dot: "bg-emerald-400",
    border: "hover:border-emerald-300/25",
    glow: "bg-emerald-400/[0.06]",
  },
  violet: {
    text: "text-violet-300",
    dot: "bg-violet-400",
    border: "hover:border-violet-300/25",
    glow: "bg-violet-400/[0.06]",
  },
  blue: {
    text: "text-blue-300",
    dot: "bg-blue-400",
    border: "hover:border-blue-300/25",
    glow: "bg-blue-400/[0.06]",
  },
  green: {
    text: "text-emerald-200",
    dot: "bg-emerald-300",
    border: "hover:border-emerald-200/25",
    glow: "bg-emerald-300/[0.06]",
  },
};

function ProjectPreview({ project }) {
  const accent = accents[project.accent] ?? accents.emerald;

  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-[#070909]">
      <div
        className={`absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px] ${accent.glow}`}
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="absolute inset-5 overflow-hidden rounded-[1.45rem] border border-white/[0.1] bg-black/80 shadow-[0_35px_100px_rgba(0,0,0,0.55)]">
        <div className="flex h-11 items-center gap-2 border-b border-white/[0.07] bg-white/[0.025] px-4">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/10" />

          <div className="ml-4 flex min-w-0 flex-1 items-center rounded-md border border-white/[0.06] bg-black/30 px-3 py-1.5">
            <span className="truncate font-mono text-[7px] text-white/30">
              {project.demo}
            </span>
          </div>
        </div>

        <div className="relative h-[364px]">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-sm rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/20">
                    Project interface
                  </p>

                  <p className="mt-1 text-lg font-semibold !text-white">
                    {project.title}
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.15em] !text-emerald-300">
                  online
                </span>
              </div>

              <div className="grid grid-cols-[0.28fr_0.72fr] gap-3">
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="h-7 rounded-md border border-white/[0.06] bg-white/[0.025]"
                    />
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.025] p-3">
                    <div className="h-2 w-24 rounded bg-white/15" />
                    <div className="mt-3 h-2 w-full rounded bg-white/[0.06]" />
                    <div className="mt-2 h-2 w-4/5 rounded bg-white/[0.05]" />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                    <div className="h-20 rounded-lg border border-white/[0.06] bg-white/[0.025]" />
                  </div>

                  <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3">
                    <div
                      className={`h-1.5 w-20 rounded-full ${accent.dot}`}
                    />

                    <div className="mt-5 flex items-end gap-1">
                      {[35, 55, 44, 68, 52, 79, 61].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.45,
                              delay: index * 0.04,
                            }}
                            className={`w-full rounded-t ${accent.dot} opacity-40`}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-xl border border-white/[0.12] bg-black/80 px-4 py-2.5 text-xs font-medium !text-white/85 backdrop-blur-xl transition duration-300 hover:border-emerald-300/30 hover:bg-black/90 hover:!text-white"
          >
            <ExternalLink size={13} className="!text-white/80" />
            Open live demo
          </a>
        </div>
      </div>

      <div className="absolute bottom-7 left-7 flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/70 px-3 py-2 font-mono text-[8px] uppercase tracking-[0.2em] !text-white/45 backdrop-blur-xl">
        <span
          className={`h-1.5 w-1.5 rounded-full ${accent.dot} shadow-[0_0_8px_rgba(52,211,153,0.7)]`}
        />
        Project preview
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020303] px-5 pb-28 pt-32 !text-white sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[150px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] !text-emerald-300/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Projects / 04
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] !text-white sm:text-7xl lg:text-8xl"
            >
              Ideas,
              <span className="block !text-white/30">
                built for real use.
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl !text-base !leading-8 !text-white/55 sm:!text-lg lg:justify-self-end"
          >
            A collection of developer platforms, AI experiments, education
            products, and software projects with source and live experiences
            where available.
          </motion.p>
        </div>

        {/* FEATURED */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] !text-white/35">
              Featured work
            </span>

            <div className="h-px flex-1 bg-white/[0.09]" />

            <span className="font-mono text-[9px] !text-white/30">
              04 selected
            </span>
          </div>

          <div className="space-y-10">
            {featuredProjects.map((project, index) => {
              const accent =
                accents[project.accent] ?? accents.emerald;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.75,
                    delay: index * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group rounded-[2rem] border border-white/[0.09] bg-white/[0.02] p-4 transition-all duration-500 ${accent.border} sm:p-5`}
                >
                  <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">

                    {/* LEFT PREVIEW */}
                    <ProjectPreview project={project} />

                    {/* RIGHT CONTENT */}
                    <div className="px-2 py-4 sm:px-5 sm:py-6 lg:px-7">

                      <div className="flex items-center justify-between gap-5">
                        <span
                          className={`font-mono text-[10px] tracking-[0.3em] ${accent.text}`}
                        >
                          {project.number}
                        </span>

                        <span className="text-right font-mono text-[8px] uppercase tracking-[0.16em] !text-white/25">
                          {project.category}
                        </span>
                      </div>

                      <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] !text-white sm:text-5xl">
                        {project.title}
                      </h2>

                      <p className="mt-5 max-w-xl text-sm leading-7 !text-white/50 sm:text-base">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mt-7 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-2 text-xs !text-white/45"
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* Stack */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-lg border border-white/[0.09] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] !text-white/45"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* ACTIONS */}
                      <div className="mt-8 flex flex-wrap gap-3">

                        {/* SOURCE CODE */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                        >
                          <span className="font-mono text-[9px] font-black !text-black">
                            GH
                          </span>

                          <span className="!text-black">
                            Source Code
                          </span>

                          <ArrowUpRight
                            size={15}
                            strokeWidth={2}
                            className="!text-black"
                          />
                        </a>

                        {/* LIVE DEMO */}
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex items-center gap-2 rounded-xl border border-white/[0.14] bg-white/[0.035] px-5 py-3 text-sm font-medium !text-white/85 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] ${accent.border}`}
                        >
                          <ExternalLink
                            size={14}
                            className="!text-white/80"
                          />

                          <span className="!text-white/85">
                            Live Demo
                          </span>
                        </a>

                        {/* DISCUSS */}
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-transparent px-5 py-3 text-sm font-medium !text-white/55 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.035] hover:!text-white"
                        >
                          <span className="!text-white/55 hover:!text-white">
                            Discuss
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* MORE */}
        <div className="mt-32">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] !text-white/35">
              More projects
            </span>

            <div className="h-px flex-1 bg-white/[0.09]" />

            <span className="font-mono text-[9px] !text-white/30">
              08 more
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {moreProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.03]"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-400/[0.025] blur-3xl transition group-hover:bg-emerald-400/[0.055]" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-[0.25em] !text-emerald-300/65">
                      {project.number}
                    </span>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] font-mono text-[8px] font-black !text-white/55 transition hover:border-white/20 hover:!text-white"
                    >
                      GH
                    </a>
                  </div>

                  <p className="mt-7 font-mono text-[8px] uppercase tracking-[0.25em] !text-white/25">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold tracking-tight !text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 !text-white/45">
                    {project.description}
                  </p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.22em] !text-white/35 transition hover:!text-emerald-300"
                  >
                    Open repository
                    <ArrowUpRight size={12} className="!text-white/35" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-24 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.02] p-7 sm:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] !text-emerald-300/70">
                Explore further
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight !text-white sm:text-4xl">
                The code is public.
                <span className="!text-white/40">
                  {" "}
                  The next build is already taking shape.
                </span>
              </h2>
            </div>

            <a
              href="https://github.com/shankar-uxcloud"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold !text-black transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              <span className="!text-black">
                Explore GitHub
              </span>
              <ArrowUpRight size={16} className="!text-black" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Projects;
