function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
  target,
  rel,
  icon,
  iconPosition = "right",
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold shadow-lg transition";

  const variantClasses =
    variant === "primary"
      ? "bg-violet-500 text-white shadow-violet-500/30 hover:bg-violet-600"
      : "border border-slate-700 bg-slate-950/70 text-slate-200 hover:border-violet-400 hover:text-white";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${base} ${variantClasses} ${className}`}
    >
      {icon && iconPosition === "left" ? icon : null}
      <span>{children}</span>
      {icon && iconPosition === "right" ? icon : null}
    </a>
  );
}

export default Button;
