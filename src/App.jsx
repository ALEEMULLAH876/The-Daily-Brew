import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

/**
 * The Daily Brew - Main Application Component
 * 
 * Strict Section Order:
 * 1. Home (Hero Banner)
 * 2. About (Philosophy & Pillars)
 * 3. Menu (4 Compulsory Items with Exact Prices)
 * 4. Contact (Email, Phone, Chennai Location)
 * 5. Footer (Official Copyright & Quick Links)
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Active section tracking for navbar indicator
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'contact'];
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EBDD] text-[#211915] selection:bg-[#B8552E] selection:text-white overflow-x-hidden">
      {/* 1. Header (Sticky navigation & brand identity) */}
      <Header activeSection={activeSection} />

      <main className="flex-grow">
        {/* Section 1: Home (Homepage Banner & Hero) */}
        <Hero />

        {/* Subtle Editorial Divider */}
        <SectionDivider />

        {/* Section 2: About */}
        <About />

        {/* Subtle Editorial Divider */}
        <SectionDivider />

        {/* Section 3: Our Menu */}
        <Menu />

        {/* Subtle Editorial Divider */}
        <SectionDivider />

        {/* Section 4: Contact */}
        <Contact />
      </main>

      {/* Section 5: Footer */}
      <Footer />
    </div>
  );
}
