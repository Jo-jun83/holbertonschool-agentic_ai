<script setup>
import { BrainCircuit } from '@lucide/vue'
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-slate-950 text-white">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
    >
      <a href="#hero-section" class="flex items-center gap-3">
        <div
          class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40"
        >
          <BrainCircuit class="h-5 w-5 text-white" />
        </div>

        <span class="whitespace-nowrap text-sm font-semibold sm:text-base">
          Agentic AI
        </span>
      </a>

      <div class="flex items-center gap-6">
        <nav aria-label="Main navigation" class="hidden md:block">
          <ul class="flex items-center gap-6 text-sm text-slate-400">
            <li>
              <a href="#about-section" class="hover:text-white">
                About
              </a>
            </li>

            <li>
              <a href="#features-section" class="hover:text-white">
                Features
              </a>
            </li>

            <li>
              <a href="#insights-section" class="hover:text-white">
                Insights
              </a>
            </li>

            <li>
              <a href="#contact-section" class="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#contact-section"
          class="shrink-0 whitespace-nowrap rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold shadow-lg shadow-violet-500/30 hover:bg-violet-600 sm:px-4"
        >
          Enroll now
        </a>
      </div>
    </div>
  </header>
</template>