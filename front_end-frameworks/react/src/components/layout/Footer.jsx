import { BrainCircuit } from "lucide-react";
import Brand from "../ui/Brand";
import SocialLink from "../ui/SocialLink";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Brand
              size={32}
              label="Agentic AI"
              className=""
              iconClassName="h-4 w-4"
              containerClassName="rounded-lg bg-violet-500 shadow-lg shadow-violet-500/40"
            />

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Explore the future of development with Agentic AI.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <SocialLink href="https://www.instagram.com/" label="Instagram" icon={<i className="bi bi-instagram"></i>} />
              <SocialLink href="https://www.tiktok.com/" label="TikTok" icon={<i className="bi bi-tiktok"></i>} />
              <SocialLink href="https://x.com/" label="X" icon={<i className="bi bi-twitter-x"></i>} />
              <SocialLink href="https://www.youtube.com/" label="YouTube" icon={<i className="bi bi-youtube"></i>} />
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold">Navigation</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a href="#hero-section" className="hover:text-white">
                  Hero section
                </a>
              </li>

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

          <div>
            <h3 className="text-sm font-semibold">Holberton School</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Methodology
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Story
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Agenda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Curriculum</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-500">
              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Bachelor
                </a>
              </li>

              <li>
                <a
                  href="https://www.holbertonschool.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Program
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-900 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Jungling Jonas</p>

          <p>Built for the Holberton School Front-end Frameworks curriculum.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
