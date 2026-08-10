<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  target: {
    type: String,
    default: undefined,
  },
  rel: {
    type: String,
    default: undefined,
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
})

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-lg transition'

const variantClasses = computed(() =>
  props.variant === 'primary'
    ? 'bg-violet-500 text-white shadow-violet-500/30 hover:bg-violet-600'
    : 'border border-slate-700 bg-slate-950/70 text-slate-200 hover:border-violet-400 hover:text-white',
)
</script>

<template>
  <a
    :href="href"
    :target="target"
    :rel="rel"
    :class="[base, variantClasses, $attrs.class]"
  >
    <slot v-if="iconPosition === 'left'" name="icon" />

    <slot />

    <slot v-if="iconPosition === 'right'" name="icon" />
  </a>
</template>