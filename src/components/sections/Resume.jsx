import {
  ArrowDownToLine,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const RESUME_URL = "/resume/P-Shankar-Resume.pdf";

const projects = [
  {
    number: "01",
    title: "Developer Collaboration Platform",
    stack:
      "React.js • Node.js • Express.js • MongoDB • Socket.io • JWT • Tailwind CSS",
    points: [
      "Developed a full-stack collaboration platform enabling software teams to manage projects, assign tasks, communicate in real time, and track development progress.",
      "Implemented secure JWT authentication with role-based access control and RESTful APIs using a modular backend architecture.",
      "Designed file sharing, commenting features, and scalable MongoDB database architecture for collaborative workflows.",
    ],
  },
  {
    number: "02",
    title: "AI Resume Analyzer",
    stack:
      "React.js • Node.js • Express.js • MongoDB • Google Gemini API • PDF Parser",
    points: [
      "Developed an AI-powered resume analysis platform that evaluates resumes against job descriptions and generates ATS compatibility scores.",
      "Integrated Google Gemini API to provide AI-powered resume feedback and personalized improvement suggestions.",
      "Implemented PDF upload, parsing, skill-gap analysis, and downloadable analysis reports.",
    ],
  },
  {
    number: "03",
    title: "Social Networking Platform",
    stack:
      "React.js • Node.js • Express.js • MongoDB • Socket.io • JWT",
    points: [
      "Designed and developed a social networking application supporting user profiles, content sharing, and real-time communication.",
      "Implemented secure authentication and authorization using JWT with role-based user management.",
      "Built features including posts, likes, comments, follow system, private messaging, image uploads, and notifications.",
    ],
  },
];

const skills = [
  "Java",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Socket.io",
  "JWT",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "REST APIs",
  "Git",
  "GitHub",
  "VS Code",
  "Google Gemini API",
];

function Resume() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[8%] h-72 w-72 rounded-full bg-emerald-400/[0.06] blur-[110px]" />
        <div className="absolute right-[8%] top-[25%] h-80 w-80 rounded-full bg-cyan-400/[0.04] blur-[120px]" />
        <div className="absolute bottom-[10%] left-[40%] h-64 w-64 rounded-full bg-emerald-300/[0.035] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mb-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
            <Sparkles size={14} />
            Professional Profile
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-white/35">
                Resume
              </p>

              <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                P Shankar
                <br />
                <span className="text-emerald-300">Developer.</span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
                Full Stack Developer & AI Enthusiast building practical web
                applications and AI-powered experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.09]"
              >
                <ExternalLink size={16} />
                View Full Resume
              </a>

              <a
                href={RESUME_URL}
                download="P-Shankar-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.2)]"
              >
                <ArrowDownToLine size={16} />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* CONTACT STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mb-8 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="bg-[#070708]/90 p-5">
            <div className="mb-2 flex items-center gap-2 text-white/35">
              <MapPin size={15} />
              <span className="text-[11px] uppercase tracking-[0.16em]">
                Location
              </span>
            </div>
            <p className="text-sm text-white/75">Raichur, Karnataka, India</p>
          </div>

          <a
            href="mailto:shankarsourav400@gmail.com"
            className="bg-[#070708]/90 p-5 transition hover:bg-white/[0.04]"
          >
            <div className="mb-2 flex items-center gap-2 text-white/35">
              <Mail size={15} />
              <span className="text-[11px] uppercase tracking-[0.16em]">
                Email
              </span>
            </div>
            <p className="break-all text-sm text-white/75">
              shankarsourav400@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/shankar-uxcloud"
            target="_blank"
            rel="noreferrer"
            className="bg-[#070708]/90 p-5 transition hover:bg-white/[0.04]"
          >
            <div className="mb-2 flex items-center gap-2 text-white/35">
              <span className="text-[11px] font-bold text-emerald-300">GH</span>
              <span className="text-[11px] uppercase tracking-[0.16em]">
                GitHub
              </span>
            </div>
            <p className="text-sm text-white/75">github.com/shankar-uxcloud</p>
          </a>

          <a
            href="https://www.linkedin.com/in/p-shankar-912463295/"
            target="_blank"
            rel="noreferrer"
            className="bg-[#070708]/90 p-5 transition hover:bg-white/[0.04]"
          >
            <div className="mb-2 flex items-center gap-2 text-white/35">
              <span className="text-[11px] font-bold text-emerald-300">in</span>
              <span className="text-[11px] uppercase tracking-[0.16em]">
                LinkedIn
              </span>
            </div>
            <p className="text-sm text-white/75">p-shankar-912463295</p>
          </a>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.42fr]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* SUMMARY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
            >
              <SectionTitle number="01" title="Professional Summary" />

              <p className="mt-6 text-base leading-8 text-white/60">
                Computer Science Engineering student building practical
                experience through self-directed web development projects,
                with a focus on JavaScript-based tooling and applied AI
                features. Currently strengthening core programming
                fundamentals in Java and Data Structures & Algorithms while
                maintaining an active public GitHub with multiple deployed,
                working projects.
              </p>
            </motion.div>

            {/* PROJECTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
            >
              <SectionTitle number="02" title="Projects" />

              <div className="mt-7 space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.number}
                    className="group rounded-2xl border border-white/[0.07] bg-black/20 p-5 transition-all duration-300 hover:border-emerald-300/20 hover:bg-white/[0.035]"
                  >
                    <div className="flex gap-4">
                      <span className="pt-1 text-xs font-mono text-emerald-300/60">
                        {project.number}
                      </span>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white">
                          {project.title}
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-emerald-300/65">
                          {project.stack}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {project.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-sm leading-6 text-white/50"
                            >
                              <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-emerald-300/70" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* EDUCATION */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
            >
              <SectionTitle number="03" title="Education" />

              <div className="mt-7 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Navodaya Institute of Technology, Raichur
                    </h3>

                    <p className="mt-2 text-sm text-white/55">
                      Bachelor of Engineering – Computer Science Engineering
                      (CSE)
                    </p>
                  </div>

                  <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/45">
                    Sep 2023 – Present
                  </span>
                </div>

                <div className="mt-5 border-t border-white/[0.07] pt-5">
                  <span className="text-xs uppercase tracking-[0.15em] text-white/30">
                    Current CGPA
                  </span>

                  <p className="mt-1 text-3xl font-semibold text-emerald-300">
                    9.03
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <aside className="space-y-8">
            {/* SKILLS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6"
            >
              <SectionTitle number="04" title="Technical Skills" />

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs text-white/65 transition hover:border-emerald-300/20 hover:text-emerald-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ACHIEVEMENTS */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6"
            >
              <SectionTitle number="05" title="Achievements" />

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-yellow-400/15 bg-yellow-400/[0.035] p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-yellow-300/20 bg-yellow-300/[0.08] text-lg">
                      ??
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        Gold Medalist
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/50">
                        Awarded First Rank for outstanding academic
                        performance in the 4th Semester of the Computer
                        Science Engineering program.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                  <h3 className="font-semibold text-white">
                    INNOVATEX 4.0
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Participated in INNOVATEX 4.0 (UI/UX Pixel Craft), a
                    team-based hackathon hosted by Presidency University,
                    gaining hands-on experience in product design and
                    collaborative problem-solving.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CERTIFICATION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6"
            >
              <SectionTitle number="06" title="Certification" />

              <div className="mt-6 rounded-2xl border border-white/[0.07] bg-black/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/15 bg-emerald-300/[0.06]">
                    <FileText size={17} className="text-emerald-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      AI Foundations 2026
                    </h3>
                    <p className="mt-1 text-xs text-white/40">
                      Listed in resume
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* PDF CARD */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="overflow-hidden rounded-3xl border border-emerald-400/15 bg-emerald-400/[0.035]"
            >
              <div className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.08]">
                  <FileText size={21} className="text-emerald-300" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Full Resume PDF
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  Open the original resume document or download a copy for
                  offline use.
                </p>

                <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <object
                    data={RESUME_URL}
                    type="application/pdf"
                    title="P Shankar Resume"
                    className="w-full min-h-[500px]"
                    style={{ border: 0 }}
                  >
                    <div className="p-4 text-center text-sm text-white/60">
                      Browser PDF rendering is unavailable. <a href={RESUME_URL} className="text-emerald-300 underline">Download</a>
                    </div>
                  </object>
                </div>

                <div className="mt-5 grid gap-2">
                  <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    <ExternalLink size={16} />
                    Open Resume
                  </a>

                  <a
                    href={RESUME_URL}
                    download="P-Shankar-Resume.pdf"
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white"
                  >
                    <ArrowDownToLine size={16} />
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="border-t border-white/[0.07] px-6 py-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/25">
                  P-Shankar-Resume.pdf
                </p>
              </div>
            </motion.div>
          </aside>
        </div>

        {/* FOOTER CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 text-center sm:p-8"
        >
          <p className="text-sm text-white/40">
            Interested in working together?
          </p>

          <a
            href="mailto:shankarsourav400@gmail.com"
            className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-emerald-300 transition hover:text-white"
          >
            <Mail size={17} />
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ number, title }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-emerald-300/55">
        {number}
      </span>

      <div className="h-px flex-1 bg-white/[0.07]" />

      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
        {title}
      </h2>
    </div>
  );
}

export default Resume;

