<script>
  let {
    href = '#',
    variant = 'primary',
    target = undefined,
    rel = undefined,
    class: className = '',
    children,
  } = $props()

  const base =
    'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-lg transition'

  const variantClasses = $derived(
    variant === 'primary'
      ? 'bg-violet-500 text-white shadow-violet-500/30 hover:bg-violet-600'
      : 'border border-slate-700 bg-slate-950/70 text-slate-200 hover:border-violet-400 hover:text-white'
  )
</script>

<a
  {href}
  {target}
  {rel}
  class={`${base} ${variantClasses} ${className}`}
>
  {@render children?.()}
</a>