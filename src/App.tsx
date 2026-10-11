import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar, NavTab } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { RulesSection } from './components/RulesSection';
import { DownloadSection } from './components/DownloadSection';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavTab>('home');

  // Smooth scroll to target section with offset for sticky header
  const scrollToSection = (id: NavTab, updateHash = true) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: id === 'home' ? 0 : offsetPosition,
        behavior: 'smooth',
      });

      if (updateHash) {
        window.history.pushState(null, '', id === 'home' ? ' ' : `#${id}`);
      }
    }
  };

  // Handle URL hash or search params on load
  useEffect(() => {
    const targetHash = window.location.hash.toLowerCase().replace('#', '');
    const searchParams = new URLSearchParams(window.location.search);
    const targetPage = searchParams.get('page')?.toLowerCase();
    const destination = targetHash || targetPage;

    if (destination === 'privacy' || destination === 'privacypolicy' || destination === 'privacy-policy') {
      setTimeout(() => scrollToSection('privacy', false), 200);
    } else if (destination === 'rules' || destination === 'guide') {
      setTimeout(() => scrollToSection('rules', false), 200);
    } else if (destination === 'download' || destination === 'store') {
      setTimeout(() => scrollToSection('download', false), 200);
    }
  }, []);

  // Intersection Observer for scroll spy to automatically highlight navbar item
  useEffect(() => {
    const sectionIds: NavTab[] = ['home', 'rules', 'download', 'privacy'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-25% 0px -45% 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen text-[#e2e8f0] flex flex-col selection:bg-rose-600 selection:text-white overflow-x-hidden">
      {/* Subtle top glow element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none z-0" />

      {/* Top Navigation Bar with active tracking and smooth click navigation */}
      <Navbar currentTab={activeSection} onSelectTab={(tab) => scrollToSection(tab)} />

      {/* Main Content Sections with continuous smooth scroll flow */}
      <main className="relative z-10 flex-1 space-y-16 sm:space-y-24">
        {/* Home Showcase Section */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <HomeSection onNavigate={(tab) => scrollToSection(tab)} />
        </motion.div>

        {/* Rules & Guide Section */}
        <motion.div
          id="rules"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <RulesSection />
        </motion.div>

        {/* Google Play Download Section */}
        <motion.div
          id="download"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <DownloadSection />
        </motion.div>

        {/* Privacy Policy Section (Google Play Console ready) */}
        <motion.div
          id="privacy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <PrivacyPolicySection />
        </motion.div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer onSelectTab={(tab) => scrollToSection(tab)} />
      </div>
    </div>
  );
}
