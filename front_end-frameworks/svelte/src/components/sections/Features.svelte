<script>
    import { Sparkles } from "lucide-svelte";
    import FeatureCard from "../cards/FeatureCard.svelte";
    import features from "../../data/features";
    import SectionBadge from "../ui/SectionBadge.svelte";
    import SectionTitle from "../ui/SectionTitle.svelte";
</script>

<section id="features-section" class="bg-black px-6 py-24 text-white">
    <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-3xl text-center">
        <SectionBadge>
        <Sparkles class="h-3 w-3" />
        <span>Features</span>
        <Sparkles class="h-3 w-3" />
        </SectionBadge>

        <SectionTitle
        title="Everything You Need to Build"
        subtitle="With powerful AI agents"
        />

        <p class="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
        Build, manage, and scale intelligent agents with the tools required
        to automate complex workflows securely and efficiently.
        </p>
    </div>

    <div class="mt-16 grid gap-8 md:grid-cols-3">
        {#each features as feature (feature.title)}
        <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
        />
        {/each}
    </div>
    </div>
    </section>