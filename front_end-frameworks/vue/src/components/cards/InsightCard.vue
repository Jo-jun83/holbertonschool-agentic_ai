<script setup>
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
})

const isFirst = props.index === 0
</script>

<template>
  <article
    :class="[
      'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-black/20',
      isFirst ? 'lg:col-span-2' : '',
    ]"
  >
    <div class="relative">
      <img
        :src="image"
        :alt="title"
        :class="[
          'w-full object-cover',
          isFirst ? 'h-64 lg:h-72' : 'h-56 lg:h-56',
        ]"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"
      ></div>

      <div class="absolute inset-x-0 bottom-0 p-5">
        <span
          class="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs text-violet-200 backdrop-blur"
        >
          {{ category }}
        </span>

        <h3 class="mt-3 text-lg font-semibold text-white">
          {{ title }}
        </h3>

        <p class="mt-1 max-w-xl text-sm leading-5 text-slate-400">
          {{ description }}
        </p>
      </div>
    </div>
  </article>
</template>