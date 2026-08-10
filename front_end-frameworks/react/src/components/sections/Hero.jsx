import { ArrowRight, Sparkles } from "lucide-react";
import heroStats from "../../data/heroStats";
import StatCard from "../cards/StatCard";
import SectionBadge from "../ui/SectionBadge";
import Button from "../ui/Button";

function Hero() {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-slate-950 px-6 pt-36 pb-24 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.28),transparent_35%),radial-gradient(circle_at_right,rgba(37,99,235,0.18),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />

      <div className="relative mx-auto max-w-6xl text-center">
        <SectionBadge>
          <Sparkles className="h-3 w-3" />
          <span>The future of coding</span>
          <Sparkles className="h-3 w-3" />
        </SectionBadge>

        <h1 className="mx-auto mt-8 max-w-4xl text-5xl leading-none font-black tracking-tight md:text-7xl">
          Build smarter workflows
          <span className="block text-violet-300">with Agentic AI</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
          Create autonomous AI agents that think, plan, and execute complex
          tasks. Transform your business with intelligent automation.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Button href="#about-section" icon={<ArrowRight className="h-4 w-4" />}>
            Start learning with Holberton School
          </Button>

          <Button href="#features-section" variant="secondary">
            Methodology
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-8 md:grid-cols-4">
          {heroStats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
