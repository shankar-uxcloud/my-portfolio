import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const skillGroups = [
  {
    label: "LANGUAGES",
    items: [
      { name: "Java", detail: "Object-oriented programming & application development" },
      { name: "Python", detail: "Automation, scripting & AI/ML exploration" },
      { name: "JavaScript", detail: "Interactive web application development" },
    ],
  },
  {
    label: "FRONTEND",
    items: [
      { name: "React", detail: "Component-driven user interfaces" },
      { name: "HTML", detail: "Semantic web structure" },
      { name: "CSS", detail: "Responsive styling & interface systems" },
      { name: "Tailwind CSS", detail: "Utility-first interface development" },
    ],
  },
  {
    label: "BACKEND",
    items: [
      { name: "Node.js", detail: "Server-side JavaScript development" },
      { name: "REST APIs", detail: "Connecting frontend and backend systems" },
    ],
  },
  {
    label: "DATABASE",
    items: [
      { name: "SQL", detail: "Relational data and queries" },
      { name: "MongoDB", detail: "Document-oriented data storage" },
      { name: "Supabase", detail: "Database and backend services" },
    ],
  },
  {
    label: "TOOLS",
    items: [
      { name: "Git", detail: "Version control and project workflows" },
      { name: "GitHub", detail: "Code hosting and collaboration" },
      { name: "VS Code", detail: "Development environment" },
    ],
  },
  {
    label: "AI / TECHNOLOGY",
    items: [
      { name: "AI / ML", detail: "Exploration of intelligent software systems" },
    ],
  },
];

function Skills() {
  return (
    <section className="theme-page relative min-h-screen overflow-hidden px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.045] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-white/[0.02] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 10%, transparent 82%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.035] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Skills / 03
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl"
            >
              The tools
              <span className="block text-white/35">
                behind the work.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              A practical stack built around software development, modern web
              interfaces, databases, version control, and continued exploration
              of AI and emerging technology.
            </p>

            <div className="mt-7 flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">
              <span className="h-px w-10 bg-emerald-400/40" />
              continuously learning
            </div>
          </motion.div>
        </div>

        {/* Skills overview strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl sm:grid-cols-3"
        >
          <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
              Approach
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Build through practice
            </p>
          </div>

          <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
              Focus
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Software + Web + AI
            </p>
          </div>

          <div className="p-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
              Workflow
            </p>
            <p className="mt-3 text-lg font-medium text-white">
              Learn ? build ? refine
            </p>
          </div>
        </motion.div>

        {/* Skill groups */}
        <div className="mt-20 space-y-16">
          {skillGroups.map((group, groupIndex) => (
            <motion.section
              key={group.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/70">
                  {group.label}
                </span>
                <span className="h-px flex-1 bg-white/[0.07]" />
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                {group.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.04,
                    }}
                    whileHover={{
                      y: -3,
                    }}
                    className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 transition-colors duration-300 hover:border-emerald-300/20 hover:bg-white/[0.035]"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-emerald-400/[0.04] blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-lg font-medium tracking-tight text-white">
                          {skill.name}
                        </h2>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
                          {skill.detail}
                        </p>
                      </div>

                      <span className="font-mono text-[9px] text-white/15 transition-colors group-hover:text-emerald-300/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
                      <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-white/20">
                        technology
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Bottom system panel */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-24 overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.02] p-7 backdrop-blur-xl sm:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/70">
                Stack philosophy
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Tools are useful.
                <span className="text-white/35">
                  {" "}
                  Knowing when to use them matters more.
                </span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              See the stack in action
              <span className="transition-transform group-hover:translate-x-1">
                ?
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
