<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="label"
    class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
  >
    <slot />
  </a>
</template>