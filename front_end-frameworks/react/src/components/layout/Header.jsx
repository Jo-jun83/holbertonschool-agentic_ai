import { BrainCircuit } from "lucide-react";
import Brand from "../ui/Brand";
import Button from "../ui/Button";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 w-full border-b border-slate-900 bg-slate-950/80 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Brand />

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

          <Button href="#contact-section" className="shrink-0 px-3 py-2 whitespace-nowrap sm:px-4">
            Enroll now
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
