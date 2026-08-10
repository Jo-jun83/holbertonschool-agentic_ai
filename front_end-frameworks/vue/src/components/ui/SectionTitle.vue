<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <h2
    class="mt-8 text-4xl leading-none font-black tracking-tight md:text-5xl"
  >
    {{ title }}

    <span v-if="subtitle" class="block text-violet-300">
      {{ subtitle }}
    </span>
  </h2>
</template>