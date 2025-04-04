'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Services from '@/components/sections/Services';

export default function Home() {
  // Function to scroll to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* About Section (now includes header content) */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Contact Section */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
