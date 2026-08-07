function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={className}>
      <h2 className="mt-8 text-4xl leading-none font-black tracking-tight md:text-5xl">
        {title}
        {subtitle && <span className="block text-violet-300">{subtitle}</span>}
      </h2>
    </div>
  )
}

export default SectionTitle;
