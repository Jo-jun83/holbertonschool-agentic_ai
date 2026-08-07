function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-xl shadow-slate-950/40 transition hover:-translate-y-1 hover:border-violet-500/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500 text-white shadow-lg shadow-violet-500/40">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-300">
        {description}
      </p>
    </article>
  )
}

export default FeatureCard