import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import InsightCard from "../cards/InsightCard";

import { getInsights } from "../../services/insightsService.js";

function Insights() {
  const [insights, setInsights] = useState([]);
  const [error, setError] = useState("");

  useEffect(function () {
    async function loadInsights() {
      try {
        const data = await getInsights();
        setInsights(data);
      } catch (loadError) {
        setError("Unable to load insights at the moment...");
        console.error(loadError);
      }
    }

    loadInsights();
  }, []);

  return (
    <section
      id="insights-section"
      className="relative overflow-hidden bg-slate-950 px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-32 sm:pb-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-200">
            <Sparkles className="h-3 w-3" />

            <span>Insights</span>

            <Sparkles className="h-3 w-3" />
          </div>

          <h2 className="mt-8 text-4xl leading-tight font-black tracking-tight sm:text-5xl">
            Explore Agentic AI
            <span className="block text-violet-300">
              Through real-world scenes
            </span>
          </h2>
        </div>

        {error && (
          <p className="mt-8 text-center text-sm text-red-400">{error}</p>
        )}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((insight, index) => (
            <InsightCard
              key={insight.title}
              index={index}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              image={insight.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Insights;
