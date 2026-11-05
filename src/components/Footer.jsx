import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

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

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0E251E] text-[#FAF5ED] pt-14 pb-10 border-t border-[#183D32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-10 border-b border-white/10 items-start">
          {/* Brand Info & 06_alternate_logo.jpg */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#C66A42]/50 bg-[#FAF5ED] shadow-sm p-0.5 flex items-center justify-center shrink-0">
                <img
                  src="/images/06_alternate_logo.jpg"
                  alt="The Daily Brew Official Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#FAF5ED] block">
                  The Daily Brew
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#C66A42]">
                  Good Coffee. Good Food. Good Moments.
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF5ED]/75 max-w-sm leading-relaxed">
              Chennai’s destination for artisanal coffee, fresh gourmet bites, and heartfelt moments of recharge and connection.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C66A42]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-xs sm:text-sm text-[#FAF5ED]/80 hover:text-[#C66A42] transition-colors py-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C66A42]">
              Café Details
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#FAF5ED]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C66A42] shrink-0" />
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C66A42] shrink-0" />
                <a
                  href="mailto:hello@thedailybrew.example"
                  className="hover:text-[#C66A42] transition-colors break-all"
                >
                  hello@thedailybrew.example
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C66A42] shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-[#C66A42] transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Exact Copyright + Back to Top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5ED]/65">
          {/* EXACT PDF Requirement: © 2026 The Daily Brew. All rights reserved. */}
          <p>© 2026 The Daily Brew. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 min-h-[40px] rounded-full bg-white/5 hover:bg-white/10 text-[#FAF5ED] text-xs font-medium transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C66A42]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
