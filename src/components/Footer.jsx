import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

/**
 * Footer Component
 * Exact PDF Requirement:
 * "© 2026 The Daily Brew. All rights reserved."
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (targetHref) => {
    const id = targetHref.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;
    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 70;
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: Math.max(0, elementTop - headerHeight - 12),
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0B1E18] text-[#FAF5ED] pt-12 sm:pt-14 pb-10 border-t-2 border-[#183D32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-8 sm:pb-10 border-b border-white/20 items-start">
          {/* Brand Info & 06_alternate_logo.jpg */}
          <div className="md:col-span-5 space-y-3.5">
            <button
              type="button"
              onClick={() => scrollToSection('#home')}
              className="inline-flex items-center gap-3 group cursor-pointer min-h-[44px] text-left border-none bg-transparent p-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border-2 border-[#B8552E]/70 bg-[#FAF5ED] shadow-sm p-0.5 flex items-center justify-center shrink-0 group-hover:border-[#B8552E] transition-colors">
                <img
                  src="/images/06_alternate_logo.jpg"
                  alt="The Daily Brew Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#FFFFFF] group-hover:text-[#DD7F55] transition-colors block">
                  The Daily Brew
                </span>
                <span className="text-[9px] sm:text-[11px] uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold text-[#DD7F55]">
                  Good Coffee. Good Food. Good Moments.
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-[#FAF5ED]/90 max-w-sm leading-relaxed font-normal">
              Chennai’s destination for artisanal coffee, fresh gourmet bites, and heartfelt moments of recharge and connection.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#DD7F55]">
              Navigation
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs sm:text-sm text-[#FAF5ED]/90 hover:text-[#FFFFFF] hover:underline active:scale-95 transition-all py-1 inline-flex items-center cursor-pointer min-h-[32px] border-none bg-transparent p-0 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#DD7F55]">
              Café Details
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#FAF5ED]/95">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#DD7F55] shrink-0" />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#DD7F55] shrink-0" />
                <a
                  href="mailto:hello@thedailybrew.example"
                  className="hover:text-[#DD7F55] transition-colors break-all font-medium"
                >
                  hello@thedailybrew.example
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#DD7F55] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#DD7F55] transition-colors font-medium"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright + Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5ED]/80 font-medium">
          {/* EXACT PDF Requirement: © 2026 The Daily Brew. All rights reserved. */}
          <p className="text-center sm:text-left">© 2026 The Daily Brew. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-[#FFFFFF] text-xs font-bold transition-all cursor-pointer shadow-sm hover:shadow border border-white/25"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#DD7F55]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
