import { BrainCircuit } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40">
            <BrainCircuit className="h-5 w-5 text-white" />
          </div>

          <span className="text-sm font-semibold whitespace-nowrap sm:text-base">
            Agentic AI
          </span>
        </a>

        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm text-slate-400">
              <li>
                <a href="#about-section" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#features-section" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#insights-section" className="hover:text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#contact-section" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <a
            href="#contact-section"
            className="shrink-0 rounded-md bg-violet-500 px-3 py-2 text-sm font-semibold whitespace-nowrap shadow-lg shadow-violet-500/30 hover:bg-violet-600 sm:px-4"
          >
            Enroll now
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
