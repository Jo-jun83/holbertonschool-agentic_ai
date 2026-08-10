<script setup>
    import { Sparkles } from '@lucide/vue';
    import FeatureCard from "../cards/FeatureCard.vue";
    import features from "../../data/features";
    import SectionBadge from "../ui/SectionBadge.vue";
    import SectionTitle from "../ui/SectionTitle.vue";
</script>

<template>
    <section id="features-section" className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>
            <Sparkles class-name="h-3 w-3" />
            <span>Features</span>
            <Sparkles class-name="h-3 w-3" />
          </SectionBadge>

          <SectionTitle
            title="Everything You Need to Build"
            subtitle="With powerful AI agents"
          />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Build, manage, and scale intelligent agents with the tools required
            to automate complex workflows securely and efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              v-for = "feature in features"
              :key=feature.title
              :icon=feature.icon
              :title=feature.title
              :description=feature.description
            />
        </div>
      </div>
    </section>
</template>