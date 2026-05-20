import { ArrowUp, Github, Mail, MapPin, Phone } from "lucide-react";
import { memo, useEffect, useState } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "rishabshrestha92@gmail.com",
    href: "mailto:rishabshrestha92@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+977-9849868684",
    href: "tel:+9779849868684",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "github.com/RishabShrestha1",
    href: "https://github.com/RishabShrestha1",
    icon: Github,
  },
];

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer id="contact" className="bg-zinc-950 px-4 py-20 text-zinc-400 sm:px-6" role="contentinfo">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">Let us build something useful.</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400">
                I am open to full-time mobile developer roles, freelance app work, and collaborations
                around Kotlin, Flutter, Firebase, health-tech, and education tools.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-500">
                <MapPin className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                Bagbazar, Kathmandu, Nepal
              </div>
            </div>

            <div className="grid gap-3">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-emerald-300/35 hover:bg-white/[0.055]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="rounded-lg bg-emerald-300/10 p-3 text-emerald-300">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-medium text-zinc-100">
                          {item.value}
                        </span>
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright 2026 Rishab Shrestha. All rights reserved.</p>
            <p>Built with Next.js, Tailwind CSS, and static export for GitHub Pages.</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-5 z-50 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white text-zinc-950 shadow-lg shadow-black/25 transition hover:bg-zinc-200"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </button>
      )}
    </>
  );
}

export default memo(Footer);
