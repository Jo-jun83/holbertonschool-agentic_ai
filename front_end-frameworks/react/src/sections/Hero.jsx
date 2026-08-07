import { ArrowRight, Sparkles } from "lucide-react";
import heroStats from "../data/heroStats";

function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-slate-950 px-6 pt-36 pb-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_35%),radial-gradient(circle_at_right,rgba(37,99,235,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative mx-auto max-w-6xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
          <Sparkles className="h-3 w-3" />
          <span>The future of coding</span>
          <Sparkles className="h-3 w-3" />
        </div>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl leading-none font-black tracking-tight md:text-7xl">
          Build smarter workflows
          <span className="block text-violet-300">with Agentic AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
          Create autonomous AI agents that think, plan, and execute complex
          tasks. Transform your business with intelligent automation.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <a
            href="#about-section"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-violet-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-500/30 transition hover:bg-violet-600"
          >
            Start learning with Holberton School
            <ArrowRight className="h-4 w-4" />
          </a>

          <a
            href="#features-section"
            className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-violet-400 hover:text-white"
          >
            Methodology
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {heroStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40"
            >
              <p className="text-3xl font-black text-violet-300 sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
