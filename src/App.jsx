import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Order strictly matches page layout: Home -> About -> Menu -> Contact
      const sections = ['home', 'about', 'menu', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
    <div className="min-h-screen flex flex-col bg-[#F5EBDD] text-[#30251F] selection:bg-[#C66A42] selection:text-white overflow-x-hidden">
      {/* 1. Header (Sticky navigation & brand identity) */}
      <Header activeSection={activeSection} />

      <main className="flex-grow">
        {/* Section 1: Home (Homepage Banner & Hero) */}
        <Hero />

        {/* Section 2: About (Moved immediately above Menu as requested) */}
        <About />

        {/* Section 3: Our Menu */}
        <Menu />

        {/* Section 4: Contact */}
        <Contact />
      </main>

      {/* Section 5: Footer */}
      <Footer />
    </div>
  );
}
