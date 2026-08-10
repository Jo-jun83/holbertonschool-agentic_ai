<script setup>
    defineProps({
        icon: {
        type: Object,
        required: true,
    },
        title: {
        type: String,

    },
        description: {
        type: String,
    },

    })
</script>

<template>
    <article class="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-violet-500/40">
      <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white shadow-lg shadow-violet-500/40">
        <component :is="icon" class="h-5 w-5" />
      </div>

      <h3 class="mt-5 text-base font-semibold text-white">{{title}}</h3>

      <p class="mt-2 text-sm leading-6 text-slate-300">{{description}}</p>
    </article>
</template>