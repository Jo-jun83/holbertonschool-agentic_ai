<script setup>
import Brand from "../ui/Brand.vue";
import Button from "../ui/Button.vue";
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 bg-slate-950 text-white">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6"
    >
      <Brand>
        Agentic AI
      </Brand >

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

        <Button href="#contact-section" class="shrink-0 px-3 py-2 whitespace-nowrap sm:px-4">
            Enroll now
        </Button>
      </div>
    </div>
  </header>
</template>