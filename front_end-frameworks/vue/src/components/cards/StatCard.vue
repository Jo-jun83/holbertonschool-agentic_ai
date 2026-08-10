<script setup>
defineProps({
    value: {
    type: String,

  },
    label: {
    type: String,
  },
})
</script>

<template>
    <article class="rounded-xl border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/40">
      <p class="text-3xl font-black text-violet-300 sm:text-4xl">{{value}}</p>
      <p class="mt-2 text-xs text-slate-400 sm:text-sm">{{label}}</p>
    </article>
</template>