import { Sparkles } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import features from "../data/features";

function Features() {
  return (
    <section
      id="features-section"
      className="bg-black px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-violet-200 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs">
            <Sparkles className="h-3 w-3" />

            <span>Features</span>

            <Sparkles className="h-3 w-3" />
          </div>

          <h2 className="mt-8 text-4xl leading-tight font-black tracking-tight sm:text-5xl">
            Everything You Need to Build
            <span className="block text-violet-300">
              With powerful AI agents
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            Build, manage, and scale intelligent agents with the tools required
            to automate complex workflows securely and efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
