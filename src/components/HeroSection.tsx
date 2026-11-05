import React from 'react';
import { LocalizedContent } from '../lib/heroConfig';
import { Button } from './ui/button';

interface HeroSectionProps {
  content: LocalizedContent;
  onExploreWorks: () => void;
  onScrollToAbout: () => void;
  onBookSession: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  content,
  onExploreWorks,
  onScrollToAbout,
  onBookSession,
}) => {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 py-8 sm:py-12 max-w-3xl mx-auto liquid-glass rounded-3xl shadow-2xl my-4 sm:my-8 border border-white/70"
    >

      <h1
        style={{ fontFamily: "var(--font-display-vi)", textWrap: 'balance' }}
        className="text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight max-w-3xl font-normal text-foreground animate-fade-rise"
      >
        {content.hero.headlinePart1}{' '}
        <em className="not-italic text-muted-foreground">
          {content.hero.headlineEm1}
        </em>{' '}
        {content.hero.headlinePart2}{' '}
        <em className="not-italic text-muted-foreground">
          {content.hero.headlineEm2}
        </em>
      </h1>

      <p 
        style={{ textWrap: 'balance' }}
        className="text-foreground/90 text-sm sm:text-base max-w-2xl mt-6 leading-relaxed animate-fade-rise-delay"
      >
        {content.hero.subtext}
      </p>

      <p className="text-xs sm:text-sm text-muted-foreground mt-3 max-w-xl italic animate-fade-rise-delay">
        {content.hero.philosophyQuote}
      </p>

      {/* Button Group: Nút Giới Thiệu ở trên nút Khám Phá Dự Án */}
      <div className="flex flex-col items-center gap-3.5 mt-8 animate-fade-rise-delay-2 w-full max-w-md mx-auto">
        <button
          type="button"
          onClick={onScrollToAbout}
          className="liquid-glass rounded-full px-8 py-3 text-sm sm:text-base text-foreground font-medium hover:scale-[1.03] transition-all cursor-pointer w-full sm:w-auto shadow-md border border-white/60 flex items-center justify-center gap-2 group bg-white/40"
        >
          <span>{content.ctaAbout}</span>
          <span className="group-hover:translate-y-0.5 transition-transform text-xs opacity-70">&darr;</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-3 w-full">
          <Button
            type="button"
            variant="liquid"
            size="lg"
            onClick={onExploreWorks}
            className="w-full sm:w-auto"
          >
            {content.ctaExplore}
          </Button>

          <button
            type="button"
            onClick={onBookSession}
            className="liquid-glass rounded-full px-7 py-3 text-sm sm:text-base text-foreground font-medium hover:scale-[1.03] transition-transform cursor-pointer whitespace-nowrap shrink-0 w-full sm:w-auto border border-white/40 flex items-center justify-center gap-1.5 group"
          >
            <span>{content.ctaBook}</span>
            <span className="group-hover:translate-y-0.5 transition-transform text-xs opacity-70">&darr;</span>
          </button>
        </div>
      </div>


    </section>
  );
};
