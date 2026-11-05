import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'menu', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

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
    <div className="min-h-screen flex flex-col bg-[#F5EBDD] text-[#30251F] selection:bg-[#C66A42] selection:text-white">
      {/* 1. Header Section */}
      <Header activeSection={activeSection} />

      <main className="flex-grow">
        {/* 2. Homepage Banner (Hero) Section */}
        <Hero />

        {/* 3. Our Menu Section */}
        <Menu />

        {/* 4. About Us Section */}
        <About />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer Section */}
      <Footer />
    </div>
  );
}
