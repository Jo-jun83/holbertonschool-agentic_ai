<script>
    let {
        title,
        subtitle,
        class: className = ""
    } = $props()
</script>

<h2 class={`mt-8 text-4xl leading-none font-black tracking-tight md:text-5xl ${className}`}>
    {title}
    {#if subtitle}
    <span class="block text-violet-300">{subtitle}</span>
    {/if}
</h2>

