/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  CategoryKey,
  HERO_BACKGROUND_IMAGE,
  Language,
  NavItemId,
  PORTFOLIO_DATA,
  PortfolioCategory,
} from './lib/heroConfig';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PortfolioSections } from './components/PortfolioSections';
import { JourneyModal, ModalState } from './components/JourneyModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('february_snail_lang');
      if (saved === 'vi' || saved === 'en') return saved;
    } catch {
      // Ignore localStorage errors (e.g., incognito or blocked storage)
    }
    return 'vi';
  });
  const [activeNav, setActiveNav] = useState<NavItemId>('home');
  const [modalState, setModalState] = useState<ModalState>(null);

  const content = PORTFOLIO_DATA[lang];

  // Sync html lang attribute and persist in localStorage
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem('february_snail_lang', lang);
    } catch {
      // Ignore
    }
  }, [lang]);

  // Dynamic Scroll Spy for active nav synchronization
  useEffect(() => {
    const sectionIds: NavItemId[] = ['home', 'about', 'experience', 'works', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveNav(id);
            }
          });
        },
        { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleSelectNav = (id: NavItemId) => {
    setActiveNav(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreWorks = () => {
    setActiveNav('works');
    const worksEl = document.getElementById('works');
    if (worksEl) {
      worksEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToContact = () => {
    setActiveNav('contact');
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectCategory = (category: PortfolioCategory) => {
    setModalState({ type: 'category', category });
  };

  const handleBackToTop = () => {
    setActiveNav('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased selection:bg-foreground selection:text-background">
      {/* Fixed Fullscreen Background Image - Prioritized for instant first paint */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden will-change-transform">
        <img
          src={HERO_BACKGROUND_IMAGE}
          alt="Nguyễn Tuấn Phong Hero Background"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Crystal clear overlay with 10% opacity */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[0.5px]" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          lang={lang}
          content={content}
          activeNav={activeNav}
          onSelectNav={handleSelectNav}
          onToggleLang={setLang}
          onBookSession={handleScrollToContact}
        />

        <main className="flex-1">
          <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
            <HeroSection
              content={content}
              onExploreWorks={handleExploreWorks}
              onScrollToAbout={() => handleSelectNav('about')}
              onBookSession={handleScrollToContact}
            />
          </div>

          <PortfolioSections
            lang={lang}
            content={content}
            onSelectCategory={handleSelectCategory}
            onBookCategory={handleScrollToContact}
            onBackToTop={handleBackToTop}
          />
        </main>
      </div>



      <JourneyModal
        lang={lang}
        content={content}
        modalState={modalState}
        onClose={() => setModalState(null)}
        onSwitchToBooking={() => {
          setModalState(null);
          handleScrollToContact();
        }}
      />
    </div>
  );
}
