import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CalendarDays,
  Check,
  GraduationCap,
  Medal,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const CERTIFICATE_IMAGE = "/images/1.jpeg";

const achievement = {
  number: "01",
  title: "GOLD MEDAL",
  semester: "4TH SEMESTER",
  result: "FIRST RANK",
  discipline: "COMPUTER SCIENCE & ENGINEERING",
  year: "2024–2025",
  category: "Academic",
  description:
    "Awarded for securing First Rank in the 4th Semester of B.E. in Computer Science & Engineering.",
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 32,
        filter: "blur(8px)",
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
        duration: 0.75,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GoldBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.045] px-3.5 py-2 font-mono text-[8px] uppercase tracking-[0.25em] text-amber-200/80">
      <Medal size={12} className="text-amber-300" />
      Gold Medal
    </div>
  );
}

function MetadataItem({ label, value, icon: Icon }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-white/[0.018] p-4">
      <div className="flex items-center gap-2 text-amber-200/55">
        <Icon size={13} />

        <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-white/22">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-medium leading-5 text-white/70">
        {value}
      </p>
    </div>
  );
}

function CertificateViewer({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gold Medal certificate viewer"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              onClose();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.045] blur-[130px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300/[0.035] blur-[100px]"
          />

          <div className="absolute left-4 right-4 top-4 flex items-start justify-between sm:left-7 sm:right-7 sm:top-7">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-emerald-300/65">
                Achievement
              </p>

              <p className="mt-2 text-sm font-semibold tracking-tight text-white/80">
                Gold Medal
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate viewer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-white/65 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-300/40"
            >
              <X size={19} />
            </button>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              filter: "blur(8px)",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
              filter: "blur(5px)",
            }}
            transition={{
              duration: 0.48,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative mt-16 max-h-[75vh] max-w-[92vw] overflow-hidden rounded-2xl border border-amber-200/20 bg-[#050505] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.7)] sm:max-h-[82vh]"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <img
              src={CERTIFICATE_IMAGE}
              alt="Gold Medal certificate for securing First Rank in 4th Semester Computer Science and Engineering"
              className="block max-h-[72vh] w-auto max-w-full rounded-xl object-contain sm:max-h-[78vh]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-amber-200/10" />
          </motion.div>

          <div className="absolute bottom-5 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 text-center sm:bottom-7">
            <p className="text-sm font-medium text-white/75">
              Gold Medal — 4th Semester
            </p>

            <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.22em] text-amber-200/55">
              First Rank · 2024–2025
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function AchievementCard() {
  const [viewerOpen, setViewerOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setViewerOpen(true)}
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        animate="rest"
        className="group relative block w-full overflow-hidden rounded-[1.8rem] border border-white/[0.08] bg-[#070808] text-left shadow-[0_35px_100px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-300/35"
        aria-label="View Gold Medal certificate"
      >
        <motion.div
          variants={{
            rest: {
              opacity: 0.12,
              scale: 0.95,
            },
            hover: {
              opacity: 0.3,
              scale: 1,
            },
          }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute -inset-10 rounded-full bg-amber-300/[0.12] blur-[80px]"
        />

        <div className="relative p-3 sm:p-4">
          <div className="relative overflow-hidden rounded-[1.35rem] border border-amber-200/10 bg-black/40">
            <img
              src={CERTIFICATE_IMAGE}
              alt="Gold Medal certificate for securing First Rank in 4th Semester Computer Science and Engineering"
              className="block h-auto max-h-[650px] w-full object-contain transition duration-700 group-hover:scale-[1.02]"
            />

            <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] ring-1 ring-inset ring-amber-200/[0.08]" />

            <motion.div
              variants={{
                rest: {
                  opacity: 0,
                },
                hover: {
                  opacity: 1,
                },
              }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/70 via-black/5 to-transparent p-5"
            >
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 font-mono text-[8px] uppercase tracking-[0.2em] text-white backdrop-blur-md">
                View Certificate
                <ArrowUpRight size={13} />
              </span>
            </motion.div>
          </div>

          <div className="flex items-center justify-between px-2 pb-1 pt-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_10px_rgba(252,211,77,0.7)]" />

              <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-white/22">
                Academic achievement
              </span>
            </div>

            <span className="font-mono text-[8px] text-amber-200/50">
              2024–2025
            </span>
          </div>
        </div>
      </motion.button>

      <CertificateViewer
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-400/[0.025] blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-amber-300/[0.025] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[8px] uppercase tracking-[0.28em] text-emerald-300/65">
              Achievements / 07
            </span>

            <div className="h-px flex-1 bg-white/[0.07]" />

            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/18">
              Moments that matter
            </span>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <Reveal delay={0.05}>
              <div className="flex items-center gap-3">
                <GoldBadge />

                <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/18">
                  {achievement.number} / Featured
                </span>
              </div>
            </Reveal>

            <div className="mt-8 overflow-hidden">
              <motion.h2
                initial={{
                  opacity: 0,
                  y: 75,
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
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl font-semibold leading-[0.84] tracking-[-0.07em] text-white sm:text-7xl lg:text-[7rem]"
              >
                MOMENTS
                <span className="block text-white/25">
                  THAT MATTER
                </span>
              </motion.h2>
            </div>

            <Reveal delay={0.12}>
              <div className="mt-8">
                <h3 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  {achievement.title}
                </h3>

                <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.26em] text-amber-200/65">
                  {achievement.semester} · {achievement.result}
                </p>

                <p className="mt-2 text-sm font-medium tracking-wide text-white/40">
                  {achievement.discipline}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-7 max-w-xl text-sm leading-8 text-white/42 sm:text-base">
                {achievement.description}
              </p>
            </Reveal>

            <Reveal delay={0.23}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <MetadataItem
                  icon={GraduationCap}
                  label="Category"
                  value="Academic"
                />

                <MetadataItem
                  icon={Award}
                  label="Result"
                  value="First Rank"
                />

                <MetadataItem
                  icon={CalendarDays}
                  label="Academic Year"
                  value="2024–2025"
                />
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-xl border border-amber-300/15 bg-amber-300/[0.035] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-amber-200/65">
                  <Medal size={12} />
                  Gold Medal
                </span>

                <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/38">
                  <Check size={12} />
                  First Rank
                </span>

                <span className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.02] px-3 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-white/38">
                  <GraduationCap size={12} />
                  4th Semester
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.33}>
              <div className="mt-8 hidden items-center gap-3 font-mono text-[7px] uppercase tracking-[0.23em] text-white/18 sm:flex">
                <span className="text-white/35">
                  CODE
                </span>

                <span className="h-px w-8 bg-emerald-300/25" />

                <span className="text-white/35">
                  BUILD
                </span>

                <span className="h-px w-8 bg-emerald-300/25" />

                <span className="text-amber-200/65">
                  ACHIEVE
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="absolute -left-2 -top-4 z-20 hidden rounded-xl border border-amber-200/15 bg-[#070808]/85 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                <div className="flex items-center gap-2">
                  <Award
                    size={14}
                    className="text-amber-300"
                  />

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-amber-200/65">
                      Achievement
                    </p>

                    <p className="mt-1 text-xs font-medium text-white/70">
                      2024–2025
                    </p>
                  </div>
                </div>
              </div>

              <AchievementCard />
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20">
          <div className="rounded-[1.6rem] border border-white/[0.07] bg-white/[0.014] p-5 sm:p-6">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[8px] uppercase tracking-[0.28em] text-white/25">
                Milestones
              </p>

              <p className="font-mono text-[8px] text-white/15">
                01 recorded
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.035]">
                  <Medal
                    size={17}
                    className="text-amber-300"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/70">
                    Academic
                  </p>

                  <p className="mt-1 text-xs text-white/25">
                    Gold Medal · First Rank · 4th Semester
                  </p>
                </div>
              </div>

              <div className="hidden h-px flex-1 bg-white/[0.07] sm:block" />

              <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-amber-200/45">
                2024–2025
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Achievements;
