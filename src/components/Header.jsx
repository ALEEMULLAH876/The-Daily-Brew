import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict section order matching page layout: Home -> About -> Menu -> Contact
  const navLinks = [
    { name: 'Home', href: '#home', subtitle: 'Destination' },
    { name: 'About', href: '#about', subtitle: 'Our Philosophy' },
    { name: 'Menu', href: '#menu', subtitle: 'Artisan Offerings' },
    { name: 'Contact', href: '#contact', subtitle: 'Chennai' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5EBDD]/95 backdrop-blur-md shadow-md py-2.5 sm:py-3 border-b border-[#183D32]/10'
          : 'bg-[#F5EBDD] py-3 sm:py-4 border-b border-[#183D32]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group transition-transform duration-200 hover:scale-[1.01] shrink-0"
            aria-label="The Daily Brew - Home"
          >
            {/* 06_alternate_logo.jpg: Preserved uncropped with rounded badge & object-contain */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#183D32]/20 shadow-sm group-hover:border-[#C66A42] transition-colors bg-[#FAF5ED] p-0.5 flex items-center justify-center shrink-0">
              <img
                src="/images/06_alternate_logo.jpg"
                alt="The Daily Brew Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#183D32] group-hover:text-[#C66A42] transition-colors leading-tight">
                The Daily Brew
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-medium text-[#66554B]">
                Café & Roastery · Chennai
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Home | About | Menu | Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? 'text-[#183D32] font-semibold bg-[#183D32]/8'
                      : 'text-[#30251F] hover:text-[#183D32] hover:bg-[#183D32]/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-[#C66A42] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF5ED] bg-[#183D32] hover:bg-[#255B4B] rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              <Coffee className="w-3.5 h-3.5 text-[#C66A42]" />
              <span>Explore Our Menu</span>
            </a>
          </div>

          {/* Mobile Menu Button (Accessible touch target >= 44px) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-[#183D32] hover:bg-[#183D32]/10 transition-colors flex items-center justify-center cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 border-t border-[#183D32]/10 mt-2.5 bg-[#FAF5ED] shadow-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#183D32] text-[#FAF5ED]'
                    : 'text-[#30251F] hover:bg-[#183D32]/8'
                }`}
              >
                <span className="font-serif font-semibold">{link.name}</span>
                <span className={`text-xs ${isActive ? 'text-[#FAF5ED]/75' : 'text-[#66554B]'}`}>
                  {link.subtitle}
                </span>
              </a>
            );
          })}

          <div className="pt-2 pb-1 border-t border-[#183D32]/10 mt-1">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="w-full flex items-center justify-center gap-2 py-3 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] rounded-xl shadow-sm"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore Our Menu</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
