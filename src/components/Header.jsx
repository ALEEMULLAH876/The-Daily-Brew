import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Coffee } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header Component
 * Sticky navigation with brand identity, guaranteed mobile navigation,
 * smooth scrolling, and mobile drawer.
 * Section order: Home -> About -> Menu -> Contact
 */
export default function Header({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header background styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Section navigation links matching page structure
  const navLinks = [
    { name: 'Home', href: '#home', subtitle: 'Destination' },
    { name: 'About', href: '#about', subtitle: 'Our Philosophy' },
    { name: 'Menu', href: '#menu', subtitle: 'Artisan Offerings' },
    { name: 'Contact', href: '#contact', subtitle: 'Chennai' },
  ];

  /**
   * Robust smooth scroll handler for both mobile & desktop.
   * Calculates exact target position taking sticky header into account.
   * Small timeout ensures mobile menu drawer animation does not cancel smooth scroll.
   */
  const scrollToSection = (targetHref) => {
    // Close mobile menu first
    setMobileMenuOpen(false);

    const id = targetHref.replace('#', '');
    const element = document.getElementById(id);
    if (!element) return;

    // Small delay allows mobile drawer to collapse without aborting browser scroll
    setTimeout(() => {
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 70;
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      const targetPosition = Math.max(0, elementTop - headerHeight - 12);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }, 80);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF5ED]/95 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(24,61,50,0.08)] py-2.5 sm:py-3 border-b border-[#183D32]/12'
          : 'bg-[#F5EBDD]/90 backdrop-blur-sm py-3 sm:py-4 border-b border-[#183D32]/8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo & Name */}
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-2 sm:gap-3 group transition-transform duration-200 active:scale-95 shrink-0 cursor-pointer min-h-[44px] text-left bg-transparent border-none p-0"
            aria-label="The Daily Brew - Home"
          >
            {/* 06_alternate_logo.jpg: Preserved uncropped with rounded badge & object-contain */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden border border-[#183D32]/20 shadow-sm group-hover:border-[#C66A42] transition-colors bg-[#FAF5ED] p-0.5 flex items-center justify-center shrink-0">
              <img
                src="/images/06_alternate_logo.jpg"
                alt="The Daily Brew Official Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-xl md:text-2xl font-bold tracking-tight text-[#183D32] group-hover:text-[#C66A42] transition-colors leading-tight">
                The Daily Brew
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase font-medium text-[#66554B]">
                Café & Roastery · Chennai
              </span>
            </div>
          </button>

          {/* Desktop Navigation: Home | About | Menu | Contact */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 p-1 bg-[#E8D8C3]/35 rounded-full border border-[#183D32]/8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative px-4 py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 rounded-full cursor-pointer z-10 border-none bg-transparent ${
                    isActive
                      ? 'text-[#FAF5ED] font-semibold'
                      : 'text-[#30251F] hover:text-[#183D32] hover:bg-[#FAF5ED]/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#183D32] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA Pill */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('#menu')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer min-h-[40px] border-none"
            >
              <Coffee className="w-3.5 h-3.5" />
              <span>Explore Our Menu</span>
            </button>
          </div>

          {/* Mobile Menu Button (Accessible touch target >= 44px) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 min-w-[44px] min-h-[44px] rounded-xl text-[#183D32] hover:bg-[#183D32]/10 active:scale-95 transition-all flex items-center justify-center cursor-pointer border-none bg-transparent"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer with Guaranteed Functionality */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[#183D32]/10 mt-2 bg-[#FAF5ED] shadow-2xl relative z-50 pointer-events-auto max-h-[calc(100vh-76px)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    type="button"
                    onClick={() => scrollToSection(link.href)}
                    className={`w-full flex items-center justify-between px-4 py-3.5 min-h-[48px] rounded-xl text-base font-medium transition-all duration-150 active:scale-[0.98] cursor-pointer text-left border-none ${
                      isActive
                        ? 'bg-[#183D32] text-[#FAF5ED]'
                        : 'text-[#30251F] bg-transparent hover:bg-[#183D32]/8'
                    }`}
                  >
                    <span className="font-serif font-semibold">{link.name}</span>
                    <span className={`text-xs ${isActive ? 'text-[#FAF5ED]/80' : 'text-[#66554B]'}`}>
                      {link.subtitle}
                    </span>
                  </button>
                );
              })}

              <div className="pt-2 pb-1 border-t border-[#183D32]/10 mt-1">
                <button
                  type="button"
                  onClick={() => scrollToSection('#menu')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 min-h-[48px] text-xs font-semibold uppercase tracking-wider text-[#FAF5ED] bg-[#C66A42] hover:bg-[#A54F2A] active:scale-[0.98] rounded-xl shadow-sm transition-all cursor-pointer border-none"
                >
                  <Coffee className="w-4 h-4" />
                  <span>Explore Our Menu</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
