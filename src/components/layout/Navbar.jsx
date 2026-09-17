import { FileText, Menu, MoveUpRight, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/projects" },
    { label: "Experience", to: "/experience" },
    { label: "Certifications", to: "/certifications" },
    { label: "GitHub", to: "/github" },
    { label: "Achievements", to: "/achievements" },
    { label: "Resume", to: "/resume" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <nav className="relative rounded-2xl border border-white/[0.08] bg-black/65 px-3 shadow-[0_20px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
          <div className="flex h-[64px] items-center justify-between">

            <Link
              to="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-3 pl-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-black transition-transform duration-300 group-hover:rotate-6">
                S
              </span>

              <span className="hidden sm:block">
                <span className="block text-sm font-semibold tracking-[0.08em] text-white">
                  SHANKAR
                </span>

                <span className="mt-0.5 block text-[9px] uppercase tracking-[0.28em] text-white/35">
                  Developer
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 flex-1 justify-center lg:flex">
              <div className="flex max-w-full items-center overflow-x-auto rounded-xl border border-white/[0.06] bg-white/[0.025] p-1 scrollbar-none">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className="group relative shrink-0 rounded-lg px-3 py-2 text-[12px] text-white/50 transition-all duration-250 hover:text-white"
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <>
                            <span
                              className="absolute inset-0 rounded-lg bg-white/[0.09]"
                              aria-hidden="true"
                            />

                            <span
                              className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-emerald-300/80 shadow-[0_0_10px_rgba(110,231,183,0.55)]"
                              aria-hidden="true"
                            />
                          </>
                        )}

                        <span className="relative z-10 whitespace-nowrap">
                          {link.label}
                        </span>
                      </>
                    )}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <Link
                to="/resume"
                className="ml-1 inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              >
                <FileText size={15} />
                Resume
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.08] px-4 py-2.5 text-sm font-medium text-emerald-300 transition-all duration-300 hover:border-emerald-300/50 hover:bg-emerald-400/[0.14] hover:text-white"
              >
                Let&apos;s Talk
                <MoveUpRight size={15} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-white/70 transition hover:bg-white/5 hover:text-white lg:hidden"
              aria-label={open ? "Close navigation" : "Open navigation"}
              aria-expanded={open}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/[0.07] py-3 lg:hidden">
              <div className="space-y-1">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    onClick={closeMenu}
                    className="block rounded-xl px-4 py-3 text-sm text-white/60 transition hover:bg-white/[0.05] hover:text-white"
                  >
                    {({ isActive }) => (
                      <div className="flex items-center justify-between">
                        <span>{link.label}</span>

                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_9px_rgba(110,231,183,0.7)]" />
                        )}
                      </div>
                    )}
                  </NavLink>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/shankar-uxcloud"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-xl border border-white/[0.08] px-4 py-3 text-center text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/p-shankar-912463295/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={closeMenu}
                  className="rounded-xl border border-white/[0.08] px-4 py-3 text-center text-sm text-white/55 transition hover:bg-white/5 hover:text-white"
                >
                  LinkedIn
                </a>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  to="/resume"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
                >
                  <FileText size={15} />
                  Resume
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-black"
                >
                  Let&apos;s Talk
                  <MoveUpRight size={15} />
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
