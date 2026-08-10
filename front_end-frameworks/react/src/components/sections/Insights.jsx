import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import InsightCard from "../cards/InsightCard";
import { getInsights } from "../../services/insightsService.js";
import SectionBadge from "../ui/SectionBadge";
import SectionTitle from "../ui/SectionTitle";

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
          <SectionBadge>
            <Sparkles className="h-3 w-3" />
            <span>Insights</span>
            <Sparkles className="h-3 w-3" />
          </SectionBadge>

          <SectionTitle
            title="Explore Agentic AI"
            subtitle="Through real-world scenes"
            className="sm:text-5xl"
          />
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
