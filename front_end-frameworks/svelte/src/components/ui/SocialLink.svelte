<script>
  let {
    href,
    label,
    iconClass = ""
  } = $props()
</script>

<a
  {href}
  aria-label={label}
  target="_blank"
  rel="noopener noreferrer"
  class="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition hover:border-violet-500 hover:text-violet-500"
>
  <i class={iconClass}></i>
</a>