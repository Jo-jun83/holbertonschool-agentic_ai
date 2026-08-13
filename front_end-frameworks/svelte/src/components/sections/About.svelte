<script>
    import { Sparkles } from "lucide-svelte";
    import steps from "../../data/steps";
    import SectionBadge from "../ui/SectionBadge.svelte";
    import SectionTitle from "../ui/SectionTitle.svelte";
</script>

<section id="about-section" class="bg-black px-6 py-24 text-white">
    <div class="mx-auto max-w-6xl">
    <div class="mx-auto max-w-3xl text-center">
        <SectionBadge>
        <Sparkles class="h-3 w-3" />
        <span>What is Agentic AI?</span>
        <Sparkles class="h-3 w-3" />
        </SectionBadge>

        <SectionTitle
        title="AI that does more than answer"
        subtitle="It acts with purpose"
        />

        <p class="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
        Agentic AI refers to artificial intelligence systems designed to
        pursue goals, make decisions, use tools, and adapt their actions
        across multiple steps. Instead of only responding to a single
        prompt, an AI agent can break down a task, plan a strategy, execute
        actions, evaluate results, and continue until the objective is
        reached.
        </p>
    </div>

    <div class="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <article class="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40">
        <div>
            <h3 class="text-lg font-semibold text-white">
            Traditional AI
            </h3>

            <p class="mt-3 text-sm leading-6 text-slate-500">
            Responds to direct instructions, generates content, answers
            questions, or analyzes information within a limited interaction.
            </p>
        </div>

        <div class="my-6 h-px bg-slate-800">
        </div>

        <div>
            <h3 class="text-lg font-semibold text-violet-300">
            Agentic AI
            </h3>

            <p class="mt-3 text-sm leading-6 text-slate-400">
            Understands a goal, chooses actions, uses external tools,
            follows a plan, and adjusts its behavior based on feedback.
            </p>
        </div>
        </article>

        <div class="relative">
        
        <div aria-hidden="true"class="absolute top-5 bottom-5 left-5 w-px bg-violet-500/60">
        </div>

        <ol class="space-y-8">
            
            {#each steps as step (step.number)}
            <li
                class="relative grid grid-cols-[40px_1fr] gap-5"
            >
                <div class="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-violet-500 text-sm font-bold text-white shadow-[0_0_18px_rgba(139,92,246,0.8)]">
                {step.number}
                </div>

                <div>
                <h3 class="text-base font-semibold text-white sm:text-lg">
                    {step.title}
                </h3>

                <p class="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                </p>
                </div>
            </li>
            {/each}
        </ol>
        </div>
    </div>
    </div>
</section>