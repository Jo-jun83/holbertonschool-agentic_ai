<script>
  import { BrainCircuit } from 'lucide-svelte'

  let {
    size = 36,
    label = 'Agentic AI',
    href = '#top',
    class: className = '',
    iconClass = 'h-5 w-5',
    containerClass = 'rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40',
    icon = true,
  } = $props()
</script>

<a href={href} class={`flex items-center gap-3 ${className}`}>
  <div
    class={`flex shrink-0 items-center justify-center ${containerClass}`}
    style:width={`${size}px`}
    style:height={`${size}px`}
  >
    {#if icon}
      <BrainCircuit class={iconClass} />
    {/if}
  </div>

  <span class="whitespace-nowrap text-sm font-semibold sm:text-base">
    {label}
  </span>
</a>