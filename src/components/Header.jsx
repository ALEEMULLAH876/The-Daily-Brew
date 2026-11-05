import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee, MapPin, Sparkles } from 'lucide-react';

export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Contact', href: '#contact' },
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
          ? 'bg-[#F5EBDD]/95 backdrop-blur-md shadow-md py-3 border-b border-[#183D32]/10'
          : 'bg-[#F5EBDD] py-4 sm:py-5 border-b border-[#183D32]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
            aria-label="The Daily Brew - Home"
          >
            {/* Image 6: Official Logo */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#183D32]/20 shadow-sm group-hover:border-[#C66A42] transition-colors bg-[#FAF5ED]">
              <img
                src="/images/logo.jpg"
                alt="The Daily Brew Official Logo"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#183D32] group-hover:text-[#C66A42] transition-colors leading-tight">
                The Daily Brew
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-[#66554B]">
                Café & Roastery · Chennai
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
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

          {/* Desktop Right CTA / Status Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#menu"
              onClick={(e) => handleNavClick(e, '#menu')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF5ED] bg-[#183D32] hover:bg-[#255B4B] rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              <Coffee className="w-3.5 h-3.5 text-[#C66A42]" />
              <span>Taste The Brew</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-[#183D32] hover:bg-[#183D32]/10 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-full bg-[#F5EBDD] border-b border-[#183D32]/15 shadow-xl transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden py-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#183D32] text-[#FAF5ED]'
                    : 'text-[#30251F] hover:bg-[#183D32]/10'
                }`}
              >
                <span>{link.name}</span>
                <span className="text-xs text-opacity-70">
                  {link.name === 'Home' && 'Destination'}
                  {link.name === 'About' && 'Our Philosophy'}
                  {link.name === 'Menu' && 'Artisan Offerings'}
                  {link.name === 'Contact' && 'Chennai'}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

