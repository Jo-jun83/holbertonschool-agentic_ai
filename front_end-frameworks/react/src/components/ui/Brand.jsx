import { BrainCircuit } from "lucide-react";

function Brand({ size = 9, label = "Agentic AI" }) {
  return (
    <a href="#top" className="flex items-center gap-3">
      <div
        className={`flex h-${size} w-${size} shrink-0 items-center justify-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40`}
      >
        <BrainCircuit className="h-5 w-5 text-white" />
      </div>

      <span className="text-sm font-semibold whitespace-nowrap sm:text-base">
        {label}
      </span>
    </a>
  );
}

export default Brand;
