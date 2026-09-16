import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-xs uppercase tracking-[0.35em] text-emerald-400">
          404 / ROUTE NOT FOUND
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Lost in the system.
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/40">
          The requested page does not exist in this portfolio system.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-300 transition hover:border-emerald-300/50 hover:bg-emerald-400/15 hover:text-white"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
