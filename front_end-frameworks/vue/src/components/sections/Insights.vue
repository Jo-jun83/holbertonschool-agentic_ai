<script setup>
import { ref, onMounted } from 'vue'
import { Sparkles } from '@lucide/vue'
import InsightCard from '../cards/InsightCard.vue'
import { getInsights } from '../../services/insightsService.js'
import SectionBadge from '../ui/SectionBadge.vue'
import SectionTitle from '../ui/SectionTitle.vue'

const insights = ref([])
const error = ref('')

async function loadInsights() {
  try {
    const data = await getInsights()
    insights.value = data
  } catch (loadError) {
    error.value = 'Unable to load insights at the moment...'
    console.error(loadError)
  }
}

onMounted(() => {
  loadInsights()
})
</script>

<template>
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

      <p v-if="error" class="mt-8 text-center text-sm text-red-400">
        {{ error }}
      </p>

      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <InsightCard
          v-for="(insight, index) in insights"
          :key="insight.title"
          :index="index"
          :category="insight.category"
          :title="insight.title"
          :description="insight.description"
          :image="insight.image"
        />
      </div>
    </div>
  </section>
</template>