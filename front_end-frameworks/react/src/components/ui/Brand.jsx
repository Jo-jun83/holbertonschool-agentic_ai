import { BrainCircuit } from "lucide-react";

function Brand({
  size = 36,
  label = "Agentic AI",
  href = "#top",
  className = "",
  iconClassName = "h-5 w-5",
  containerClassName = "rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40",
  icon = true,
}) {
  return (
    <a href={href} className={`flex items-center gap-3 ${className}`}>
      <div
        className={`flex shrink-0 items-center justify-center ${containerClassName}`}
        style={{ width: size, height: size }}
      >
        {icon ? <BrainCircuit className={iconClassName} /> : null}
      </div>

      <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
        {label}
      </span>
    </a>
  );
}

export default Brand;
