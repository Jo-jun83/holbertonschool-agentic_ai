function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <h2 className={`mt-8 text-4xl leading-none font-black tracking-tight md:text-5xl ${className}`}>
      {title}
      {subtitle ? <span className="block text-violet-300">{subtitle}</span> : null}
    </h2>
  );
}

export default SectionTitle;
