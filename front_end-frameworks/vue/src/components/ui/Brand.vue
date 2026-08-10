<script setup>
import { BrainCircuit } from '@lucide/vue'
defineProps({
  size = 9,
  label = "Agentic AI"
})
</script>

<template>
    <a href="#top" class="flex items-center gap-3">
      <div
        class={{`flex h-${size} w-${size} shrink-0 items-center justify-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40`}}
      >
        <BrainCircuit class="h-5 w-5 text-white" />
      </div>

      <span class="text-sm font-semibold whitespace-nowrap sm:text-base">
        {{ label }}
      </span>
    </a>
</template>