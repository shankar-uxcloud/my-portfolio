import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "New contact"}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );

    window.location.href =
      `mailto:shankarsourav400@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section className="theme-page relative min-h-screen overflow-hidden px-5 pb-24 pt-32 sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-emerald-500/[0.06] blur-[140px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-[-8rem] h-[25rem] w-[25rem] rounded-full bg-emerald-400/[0.025] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.05] px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Open for collaboration
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-7xl lg:text-8xl">
            Let&apos;s build
            <span className="block text-white/35">
              something meaningful.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
            Have a product idea, internship opportunity, freelance project,
            or technical collaboration? Start a conversation and let&apos;s
            make something useful.
          </p>
        </div>

        {/* Main area */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">

          {/* Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                  Project inquiry
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Start a conversation
                </h2>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300 sm:flex">
                ?
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <label className="block">
                  <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                    Your name
                  </span>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/30 transition-all duration-300 focus-within:border-emerald-300/40 focus-within:bg-black/50">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                    Email
                  </span>

                  <div className="rounded-2xl border border-white/[0.08] bg-black/30 transition-all duration-300 focus-within:border-emerald-300/40 focus-within:bg-black/50">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent px-4 py-4 text-sm text-white outline-none placeholder:text-white/20"
                    />
                  </div>
                </label>

              </div>

              <label className="block">
                <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.22em] text-white/30">
                  Message
                </span>

                <div className="rounded-2xl border border-white/[0.08] bg-black/30 transition-all duration-300 focus-within:border-emerald-300/40 focus-within:bg-black/50">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    placeholder="Tell me what you're building..."
                    className="w-full resize-none bg-transparent px-4 py-4 text-sm leading-7 text-white outline-none placeholder:text-white/20"
                  />
                </div>
              </label>

              <div className="flex flex-col gap-4 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center sm:justify-between">

                <p className="text-xs leading-6 text-white/25">
                  The message will open in your default email application.
                </p>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 hover:shadow-[0_15px_45px_rgba(52,211,153,0.2)]"
                >
                  {submitted ? "Message prepared" : "Send inquiry"}

                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    ?
                  </span>
                </button>

              </div>
            </form>
          </div>

          {/* Contact cards */}
          <div className="flex flex-col gap-5">

            <a
              href="mailto:shankarsourav400@gmail.com"
              className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/70">
                  @
                </div>

                <span className="text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/80">
                  ?
                </span>
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
                Email
              </p>

              <p className="mt-2 break-all text-sm text-white/75">
                shankarsourav400@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/shankar-uxcloud"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white/70">
                  GH
                </div>

                <span className="text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/80">
                  ?
                </span>
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
                GitHub
              </p>

              <p className="mt-2 text-sm text-white/75">
                shankar-uxcloud
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/p-shankar-912463295/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-sm font-bold text-white/70">
                  in
                </div>

                <span className="text-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white/80">
                  ?
                </span>
              </div>

              <p className="mt-7 font-mono text-[9px] uppercase tracking-[0.28em] text-white/25">
                LinkedIn
              </p>

              <p className="mt-2 text-sm text-white/75">
                P. Shankar
              </p>
            </a>

          </div>
        </div>

        {/* Status strip */}
        <div className="mt-6 rounded-[2rem] border border-white/[0.07] bg-white/[0.02] px-6 py-5 backdrop-blur-xl sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-white/40">
                System online / open to opportunities
              </span>
            </div>

            <p className="text-xs text-white/25">
              Building thoughtful products with code and curiosity.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
