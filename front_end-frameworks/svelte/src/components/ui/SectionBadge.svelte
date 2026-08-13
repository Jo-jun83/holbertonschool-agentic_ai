<script>
  let {
    children,
    class: className = ""
  } = $props()
</script>

<div
  class={`inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs text-violet-300 ${className}`}
>
  {@render children()}
</div>