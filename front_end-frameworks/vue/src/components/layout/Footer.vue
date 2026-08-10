<script setup>
import { BrainCircuit } from '@lucide/vue'
</script>

<template>
  <footer class="bg-black px-6 py-16 text-white">
      <div class="mx-auto max-w-6xl">
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div class="flex items-center gap-3">
              <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
                <BrainCircuit class="h-4 w-4 text-white" />
              </div>

              <span class="text-sm font-bold">Agentic AI</span>
            </div>

            <p class="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Explore the future of development with Agentic AI.
            </p>

            <div class="mt-5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
              >
                <i class="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
              >
                <i class="bi bi-tiktok"></i>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
              >
                <i class="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                class="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
              >
                <i class="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 class="text-sm font-semibold">Navigation</h3>

            <ul class="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#hero-section" class="hover:text-white">
                  Hero section
                </a>
              </li>

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

          <div>
            <h3 class="text-sm font-semibold">Holberton School</h3>

            <ul class="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Methodology
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Story
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Agenda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="text-sm font-semibold">Curriculum</h3>

            <ul class="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Bachelor
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="hover:text-white"
                >
                  Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-14 flex flex-col gap-4 border-t border-slate-900 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Jungling Jonas</p>

          <p>Built for the Holberton School Front-end Frameworks curriculum.</p>
        </div>
      </div>
    </footer>
</template>