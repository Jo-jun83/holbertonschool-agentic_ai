import { Sparkles } from 'lucide-react'
import steps from '../data/steps'

function About() {
  return (
    <section
      id="about-section"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300">
            <Sparkles className="h-3 w-3" />

            <span>What is Agentic AI?</span>

            <Sparkles className="h-3 w-3" />
          </div>

          <h2 className="mt-8 text-4xl font-black leading-none tracking-tight md:text-5xl">
            AI that does more than answer
            <span className="block text-violet-300">
              It acts with purpose
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
            Agentic AI refers to artificial intelligence systems designed to
            pursue goals, make decisions, use tools, and adapt their actions
            across multiple steps. Instead of only responding to a single
            prompt, an AI agent can break down a task, plan a strategy, execute
            actions, evaluate results, and continue until the objective is
            reached.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Traditional AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Responds to direct instructions, generates content, answers
                questions, or analyzes information within a limited
                interaction.
              </p>
            </div>

            <div className="my-6 h-px bg-slate-800" />

            <div>
              <h3 className="text-lg font-semibold text-violet-300">
                Agentic AI
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Understands a goal, chooses actions, uses external tools,
                follows a plan, and adjusts its behavior based on feedback.
              </p>
            </div>
          </article>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute bottom-5 left-5 top-5 w-px bg-violet-500/60"
            />

            <ol className="space-y-8">
              {steps.map((step) => (
                <li
                  key={step.number}
                  className="relative grid grid-cols-[40px_1fr] gap-5"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white shadow-[0_0_18px_rgba(139,92,246,0.8)]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About