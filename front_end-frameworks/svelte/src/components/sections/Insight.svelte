<script>
    import { onMount } from 'svelte';
    import { Sparkles } from "lucide-svelte";
    import InsightCard from "../cards/InsightCard.svelte";
    import { getInsights } from "../../services/insightsService.js";
    import SectionBadge from "../ui/SectionBadge.svelte";
    import SectionTitle from "../ui/SectionTitle.svelte";

    /**
   * @type {any[] | null | undefined}
   */
    let insights= $state([]);
    let error = $state("");

    onMount(() => {
    async function loadInsights() {
        try {
        const data = await getInsights()
        insights = data;
        } catch (loadError) {
        error = "Unable to load insights at the moment..."
        console.error(loadError);
        }
    }

    loadInsights()
    });

</script>

    <section
      id="insights-section"
      class="relative overflow-hidden bg-slate-950 px-4 pt-28 pb-20 text-white sm:px-6 sm:pt-32 sm:pb-24"
    >
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-3xl text-center">
          <SectionBadge>
            <Sparkles class="h-3 w-3" />
            <span>Insights</span>
            <Sparkles class="h-3 w-3" />
          </SectionBadge>

          <SectionTitle
            title="Explore Agentic AI"
            subtitle="Through real-world scenes"
            class="sm:text-5xl"
          />
        </div>

            {#if error}
          <p class="mt-8 text-center text-sm text-red-400">{error}</p>
            {/if}

        <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
            {#each insights as insight, index (insight.title)}
            <InsightCard
              index={index}
              category={insight.category}
              title={insight.title}
              description={insight.description}
              image={insight.image}
            />
          {/each}
        </div>
      </div>
    </section>
