import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from "lucide-react";
import { memo, useState, useEffect } from "react";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer
        id="contact"
        className="bg-black text-gray-400 pt-24 pb-10 relative"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* CTA Section */}
          <div className="text-center mb-20">
            <span className="text-sm text-violet-400 font-medium tracking-wider uppercase">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Let&apos;s Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8">
              Looking for opportunities in 2026. Open to full-time roles, freelance projects, and collaborations in mobile development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:rishabshrestha92@gmail.com"
                className="group bg-gradient-to-r from-violet-600 to-cyan-600 text-white px-8 py-4 
                           rounded-full font-medium hover:shadow-xl hover:shadow-violet-500/25 
                           transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                rishabshrestha92@gmail.com
              </a>
              <a
                href="tel:+9779849868684"
                className="bg-white/5 backdrop-blur-md text-white px-8 py-4 
                           border border-white/10 rounded-full font-medium 
                           hover:bg-white/10 transition-all duration-300 flex items-center gap-2 gradient-border"
              >
                <Phone className="w-5 h-5" />
                +977-9849868684
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div className="space-y-5">
              <h2 className="text-xl font-light tracking-tight leading-tight text-white">
                <span className="gradient-text font-semibold">Rishab</span>
                <span className="text-gray-600">.</span>
              </h2>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Mobile Application Developer based in Kathmandu, building smart health-tech and educational apps.
              </p>
              <nav aria-label="Footer navigation">
                <ul className="flex gap-5 text-sm flex-wrap">
                  {[
                    { label: 'Experience', href: '#experience' },
                    { label: 'Projects', href: '#projects' },
                    { label: 'Skills', href: '#skills' },
                    { label: 'Contact', href: '#contact' },
                  ].map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="hover:text-white transition-colors duration-300 relative group"
                      >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div className="flex flex-col items-start md:items-end gap-5">
              <div className="flex items-center gap-4">
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="bg-white/5 p-3 rounded-xl border border-white/10 text-white
                             hover:bg-violet-500/20 hover:border-violet-500/30 hover:text-violet-400 
                             transition-all duration-300"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="bg-white/5 p-3 rounded-xl border border-white/10 text-white
                             hover:bg-white/10 hover:border-white/20
                             transition-all duration-300"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
              </div>
              <p className="text-xs text-gray-600">Bagbazar, Kathmandu, Nepal 🇳🇵</p>
            </div>
          </div>

          {/* Divider + Copyright */}
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2026 Rishab Shrestha. All rights reserved.
            </p>
            <p className="text-xs text-gray-700 flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-violet-600 to-cyan-600 
                     p-3 rounded-full text-white shadow-lg shadow-violet-500/25
                     hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300
                     hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}

export default memo(Footer);
