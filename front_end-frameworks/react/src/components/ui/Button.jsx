function Button({ children, href = '#', variant = 'primary', className = '' }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-lg transition';

  if (variant === 'primary') {
    return (
      <a href={href} className={`${base} ${className} bg-violet-500 text-white shadow-violet-500/30 hover:bg-violet-600`}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={`${base} ${className} border border-slate-700 bg-slate-950/70 text-slate-200 hover:border-violet-400 hover:text-white`}>
      {children}
    </a>
  )
}

export default Button;
