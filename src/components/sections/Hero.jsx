import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Brain, Code2, Layers3 } from "lucide-react";
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
      "Exploring practical AI applications, automation, intelligent tools, and developer-focused systems.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Projects & Experiments",
    description:
      "Turning ideas into working products through continuous development, experimentation, and learning.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* =====================================================
          AMBIENT GLOWS
      ====================================================== */}
      <motion.div
        className="pointer-events-none absolute left-[4%] top-[18%] h-[420px] w-[420px] rounded-full bg-emerald-500/[0.035] blur-[120px]"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-[5%] top-[25%] h-[350px] w-[350px] rounded-full bg-cyan-500/[0.025] blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HERO CONTENT

          IMPORTANT:
          pt-24 keeps the content safely below the navbar.
      ====================================================== */}
      <div className="relative mx-auto max-w-[1450px] px-6 pb-20 pt-28 sm:px-8 sm:pt-32 lg:px-10 xl:px-12">
        <div className="grid min-h-[calc(100vh-120px)] w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-16">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10"
          >
            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="mb-9 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/[0.035] px-4 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.3em] text-emerald-400">
                Available for opportunities
              </span>
            </motion.div>

            {/* Hello */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.6,
              }}
              className="mb-3 font-mono text-[11px] uppercase tracking-[0.38em] text-white/40"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-[clamp(4rem,8vw,8.5rem)] font-semibold leading-[0.88] tracking-[-0.075em] text-white"
            >
              SHANKAR
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.55,
                duration: 0.7,
              }}
              className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white/45"
            >
              <span>Software Development</span>

              <span className="text-emerald-400">•</span>

              <span>Web</span>

              <span className="text-emerald-400">•</span>

              <span>AI / Technology</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
              className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg"
            >
              I build practical digital experiences and enjoy exploring how
              software, web technologies, and AI can turn ideas into useful
              products.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {/* Explore */}
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-semibold !text-black shadow-[0_10px_40px_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90"
              >
                <span className="!text-black">
                  Explore My Work
                </span>

                <ArrowUpRight
                  size={17}
                  className="!text-black transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              {/* About */}
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-7 py-4 text-sm font-medium !text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <span className="!text-white">
                  More About Me
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>

            {/* =================================================
                TECH STACK
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.95,
                duration: 0.7,
              }}
              className="mt-12 flex flex-wrap gap-2"
            >
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1 + index * 0.06,
                    duration: 0.4,
                  }}
                  className="rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 font-mono text-[9px] tracking-[0.18em] text-white/40 transition-colors duration-300 hover:border-emerald-400/30 hover:text-emerald-400"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT PROFILE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative flex translate-y-8 justify-center lg:translate-y-10 lg:justify-end"
          >
            <div className="relative w-full max-w-[390px] sm:max-w-[410px] lg:max-w-[420px]">

              {/* Glow */}
              <div className="absolute -inset-5 rounded-[38px] bg-emerald-400/[0.025] blur-3xl" />

              {/* Card */}
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-[#050505] p-2 shadow-2xl">

                <div className="relative overflow-hidden rounded-[23px] border border-white/[0.06] bg-black">

                  {/* Image */}
                  <motion.img
                    src="/images/profile-shankar.jpeg"
                    alt="P Shankar - Full Stack Developer and AI Enthusiast"
                    initial={{
                      scale: 1.02,
                    }}
                    animate={{
                      scale: [1.02, 1.035, 1.02],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="block aspect-[4/5] w-full object-cover object-top"
                  />

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 to-transparent" />

                  {/* Profile info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                    <div className="mb-2 font-mono text-[8px] uppercase tracking-[0.3em] text-emerald-400">
                      Developer
                    </div>

                    <div className="text-2xl font-medium tracking-tight text-white sm:text-[28px]">
                      P Shankar
                    </div>

                    <div className="mt-1 text-[11px] text-white/45 sm:text-xs">
                      Full Stack Developer · AI Enthusiast
                    </div>
                  </div>

                  {/* Available */}
                  <motion.div
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute bottom-5 right-4 flex items-center gap-2 rounded-full border border-emerald-400/25 bg-black/65 px-3.5 py-2 backdrop-blur-xl"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

                    <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-emerald-400">
                      Available
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Current Focus */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.3,
                  duration: 0.6,
                }}
                className="absolute -right-3 bottom-14 hidden rounded-2xl border border-white/10 bg-black/90 px-3.5 py-3 shadow-xl backdrop-blur-xl md:block"
              >
                <div className="font-mono text-[7px] uppercase tracking-[0.18em] text-white/35">
                  Current Focus
                </div>

                <div className="mt-1 flex items-center gap-2 whitespace-nowrap text-[11px] text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Full Stack + AI
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            SCROLL INDICATOR
        ==================================================== */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mx-auto mt-10 hidden w-fit items-center gap-3 text-white/25 sm:flex"
        >
          <span className="font-mono text-[8px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          MORE INFORMATION BELOW HERO
      ====================================================== */}
      <section className="relative border-t border-white/[0.06] bg-[#030303]">
        <div className="mx-auto max-w-[1450px] px-6 py-20 sm:px-8 lg:px-10 xl:px-12">

          {/* Section heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-12 max-w-2xl"
          >
            <div className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-400">
              What I Build
            </div>

            <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
              Turning ideas into
              <span className="text-white/35"> practical digital experiences.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
              My work sits around software development, modern web
              technologies, and applied AI — with a focus on building,
              experimenting, and learning through real projects.
            </p>
          </motion.div>

          {/* Focus cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {focusCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.number}
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
                    amount: 0.2,
                  }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.025]"
                >
                  {/* Number */}
                  <div className="absolute right-5 top-5 font-mono text-[9px] tracking-[0.2em] text-white/20">
                    {card.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-colors duration-300 group-hover:border-emerald-400/20 group-hover:bg-emerald-400/[0.04]">
                    <Icon
                      size={19}
                      className="text-white/60 transition-colors duration-300 group-hover:text-emerald-400"
                    />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/40">
                    {card.description}
                  </p>

                  <div className="mt-7 h-px w-12 bg-emerald-400/30 transition-all duration-300 group-hover:w-20" />
                </motion.div>
              );
            })}
          </div>

          {/* =================================================
              BOTTOM QUICK INFO
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="mt-10 flex flex-col justify-between gap-6 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center"
          >
            <div>
              <div className="font-mono text-[8px] uppercase tracking-[0.25em] text-white/25">
                Explore the portfolio
              </div>

              <div className="mt-2 text-sm text-white/55">
                Projects · Skills · Experience · Certifications · GitHub
              </div>
            </div>

            <Link
              to="/projects"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-xs !text-white transition-all duration-300 hover:border-emerald-400/30 hover:text-emerald-400"
            >
              View Projects

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </section>
  );
}