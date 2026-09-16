import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "Agents and Workflows",
    issuer: "OpenAI",
    date: "Sep 2026",
    credentialId: "1ko53c413b",
    skills: ["AI Agents"],
    description:
      "Completed the Agents and Workflows course through OpenAI Academy, covering practical concepts for building and working with AI agents and workflows.",
    credential:
      "https://academy.openai.com/public/certificate/1ko53c413b",
    accent: "emerald",
  },
  {
    number: "02",
    title: "Deloitte Australia - Technology Job Simulation",
    issuer: "Deloitte",
    date: "Sep 2026",
    credentialId: "6a9c31cb71585ae0649e7c83",
    skills: [
      "Programming",
      "Python",
      "Data Analysis",
      "Data Modeling",
      "Computer Networking",
      "Data Visualization",
      "Software Development",
    ],
    description:
      "Completed the Deloitte Australia Technology Job Simulation through Forage, with practical exposure to technology-related tasks including Python programming, data analysis, data modeling, networking, visualization, and software development.",
    credential:
      "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqm4",
    accent: "violet",
  },
  {
    number: "03",
    title:
      "Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
    issuer: "Forage",
    date: "Aug 2026",
    credentialId: "6a913047ef1c758b88cb98f8",
    skills: ["Data Visualization", "Data Analysis"],
    description:
      "Completed the Tata Forage virtual experience program on Data Visualisation, gaining practical experience in exploring data, creating effective visualisations, identifying insights, and communicating findings clearly.",
    credential:
      "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX",
    accent: "blue",
  },
  {
    number: "04",
    title: "FREE OpenCV Bootcamp",
    issuer: "OpenCV University",
    date: "Aug 2026",
    credentialId: "0fa02d287e214421a4debd2ee76cc813",
    skills: ["OpenCV", "Computer Vision"],
    description:
      "Successfully completed the FREE OpenCV Bootcamp conducted by OpenCV University, gaining knowledge in computer vision, image processing, feature detection, image stitching, and HDR imaging using OpenCV.",
    credential:
      "https://courses.opencv.org/certificates/0fa02d287e214421a4debd2ee76cc813",
    accent: "emerald",
  },
  {
    number: "05",
    title: "Prompt Engineering for Everyone",
    issuer: "Cognitive Class",
    date: "Aug 2026",
    credentialId: "bc72b944c44d4761bce29bbd12083014",
    skills: ["Prompt Engineering"],
    description:
      "Completed the Prompt Engineering for Everyone course provided by IBM Skills Network through Cognitive Class, covering fundamental prompt engineering concepts and techniques for working with generative AI.",
    credential:
      "https://courses.cognitiveclass.ai/certificates/bc72b944c44d4761bce29bbd12083014",
    accent: "violet",
  },
  {
    number: "06",
    title: "Applied AI Foundations",
    issuer: "OpenAI",
    date: "Aug 2026",
    credentialId: "ld6fs562i6",
    skills: ["Workflow Automation"],
    description:
      "Course Completion Certificate for Applied AI Foundations by OpenAI Academy, completed in August 2026.",
    credential:
      "https://academy.openai.com/public/certificate/ld6fs562i6",
    accent: "green",
  },
  {
    number: "07",
    title: "AI Foundations",
    issuer: "OpenAI Academy",
    date: "Aug 2026",
    credentialId: "otwjzw1xdn",
    skills: ["Artificial Intelligence (AI)"],
    description:
      "Successfully completed the AI Foundations course by OpenAI Academy, covering AI fundamentals, large language models, prompt engineering, and responsible AI.",
    credential:
      "https://academy.openai.com/public/certificate/otwjzw1xdn",
    accent: "blue",
  },
];

const accentMap = {
  emerald: {
    glow: "bg-emerald-400/[0.06]",
    text: "text-emerald-300",
    border: "hover:border-emerald-300/25",
    line: "bg-emerald-400",
  },
  violet: {
    glow: "bg-violet-400/[0.06]",
    text: "text-violet-300",
    border: "hover:border-violet-300/25",
    line: "bg-violet-400",
  },
  blue: {
    glow: "bg-blue-400/[0.06]",
    text: "text-blue-300",
    border: "hover:border-blue-300/25",
    line: "bg-blue-400",
  },
  green: {
    glow: "bg-emerald-300/[0.06]",
    text: "text-emerald-200",
    border: "hover:border-emerald-200/25",
    line: "bg-emerald-300",
  },
};

function CertificationMark({ number, accent }) {
  const colors = accentMap[accent] ?? accentMap.emerald;

  return (
    <div className="relative flex min-h-[235px] items-center justify-center overflow-hidden rounded-[1.6rem] border border-white/[0.08] bg-[#060808]">
      <div
        className={`absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px] ${colors.glow}`}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
        }}
      />

      <motion.div
        whileHover={{ scale: 1.03, rotate: 1 }}
        transition={{ duration: 0.3 }}
        className="relative flex h-32 w-32 flex-col items-center justify-center rounded-[2rem] border border-white/[0.1] bg-black/60 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <Award size={28} className={colors.text} />

        <span className="mt-3 font-mono text-[8px] uppercase tracking-[0.3em] text-white/25">
          Certificate
        </span>

        <span className="mt-2 font-mono text-[8px] tracking-[0.22em] text-white/15">
          {number}
        </span>
      </motion.div>

      <div className="absolute bottom-4 left-4 flex items-center gap-2 font-mono text-[7px] uppercase tracking-[0.22em] text-white/20">
        <span
          className={`h-1.5 w-1.5 rounded-full ${colors.line} shadow-[0_0_8px_rgba(52,211,153,0.7)]`}
        />
        Verified credential
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020303] px-5 pb-28 pt-32 text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.035] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-[42rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/[0.025] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
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

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.04] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/75"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              Certifications / 06
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-7 max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl"
            >
              Proof of
              <span className="block text-white/30">
                continuous learning.
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="max-w-xl lg:justify-self-end"
          >
            <p className="text-base leading-8 text-white/45 sm:text-lg">
              A curated record of certifications and virtual learning
              experiences across AI, programming, data, computer vision, and
              developer-focused technology.
            </p>

            <div className="mt-7 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.28em] text-white/20">
              <span className="h-px w-9 bg-emerald-400/40" />
              verified learning record
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            STATS STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="mt-16 grid overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.018] sm:grid-cols-3"
        >
          <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
              Credentials
            </p>
            <p className="mt-3 text-3xl font-semibold text-white">
              07
            </p>
          </div>

          <div className="border-b border-white/[0.07] p-6 sm:border-b-0 sm:border-r">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
              Focus
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              AI + Technology
            </p>
          </div>

          <div className="p-6">
            <p className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/20">
              Latest
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              September 2026
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            CERTIFICATION GRID
        ====================================================== */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
              Credential archive
            </span>

            <div className="h-px flex-1 bg-white/[0.08]" />

            <span className="font-mono text-[9px] text-white/25">
              07 records
            </span>
          </div>

          <div className="space-y-7">
            {certifications.map((certificate, index) => {
              const accent =
                accentMap[certificate.accent] ?? accentMap.emerald;

              return (
                <motion.article
                  key={certificate.credentialId}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`group overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.018] p-4 transition duration-500 ${accent.border} hover:bg-white/[0.025] sm:p-5`}
                >
                  <div className="grid gap-6 lg:grid-cols-[0.48fr_0.52fr] lg:items-center">

                    {/* Visual */}
                    <CertificationMark
                      number={certificate.number}
                      accent={certificate.accent}
                    />

                    {/* Details */}
                    <div className="p-2 sm:p-5 lg:p-7">
                      <div className="flex items-center justify-between gap-5">
                        <span
                          className={`font-mono text-[10px] tracking-[0.28em] ${accent.text}`}
                        >
                          {certificate.number}
                        </span>

                        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/20">
                          {certificate.date}
                        </span>
                      </div>

                      <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl">
                        {certificate.title}
                      </h2>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs font-medium text-white/55">
                          {certificate.issuer}
                        </span>

                        <span className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300/55">
                          <ShieldCheck size={12} />
                          Credential
                        </span>
                      </div>

                      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                        {certificate.description}
                      </p>

                      {/* Skills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {certificate.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.14em] text-white/40"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Credential ID */}
                      <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
                        <p className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/18">
                          Credential ID
                        </p>

                        <p className="mt-2 break-all font-mono text-[9px] text-white/40">
                          {certificate.credentialId}
                        </p>
                      </div>

                      {/* Action */}
                      <div className="mt-7">
                        <a
                          href={certificate.credential}
                          target="_blank"
                          rel="noreferrer"
                          className="group/credential inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold !text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90"
                        >
                          <span className="!text-black">
                            Show Credential
                          </span>

                          <ExternalLink
                            size={14}
                            className="!text-black transition-transform duration-300 group-hover/credential:-translate-y-0.5 group-hover/credential:translate-x-0.5"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            LEARNING PHILOSOPHY
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-emerald-400/[0.025] p-7 sm:p-10"
        >
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.045] blur-[110px]" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.25em] text-emerald-300/65">
                <Sparkles size={13} />
                Learning never stops
              </div>

              <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Every credential is another piece of the bigger technical
                picture.
              </h2>
            </div>

            <a
              href="https://www.linkedin.com/in/p-shankar-912463295/details/certifications/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold !text-black transition hover:-translate-y-0.5 hover:bg-white/90"
            >
              <span className="!text-black">
                View LinkedIn Certifications
              </span>

              <ArrowUpRight size={16} className="!text-black" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
