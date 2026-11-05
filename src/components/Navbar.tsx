import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, LocalizedContent, NavItemId } from '../lib/heroConfig';

interface NavbarProps {
  lang: Language;
  content: LocalizedContent;
  activeNav: NavItemId;
  onSelectNav: (id: NavItemId) => void;
  onToggleLang: (lang: Language) => void;
  onBookSession?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  content,
  activeNav,
  onSelectNav,
  onToggleLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (id: NavItemId) => {
    onSelectNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-3 sm:top-4 z-40 w-full px-3 sm:px-8">
      <nav
        aria-label="Primary Navigation"
        className="max-w-7xl mx-auto liquid-glass rounded-full px-3.5 sm:px-8 py-2 sm:py-3.5 shadow-lg flex items-center justify-between gap-2 sm:gap-4"
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onSelectNav('home');
          }}
          style={{ fontFamily: "var(--font-display-vi)" }}
          className="text-lg sm:text-2xl md:text-3xl tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-sm"
        >
          _february.snail_<sup className="text-xs ml-0.5">®</sup>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {content.nav.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectNav(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`text-sm transition-colors whitespace-nowrap shrink-0 font-medium ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right side controls: Language toggle and Mobile Hamburger */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onToggleLang(lang === 'vi' ? 'en' : 'vi')}
            aria-label={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            className="liquid-glass rounded-full min-h-[44px] min-w-[54px] px-3 py-2 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center justify-center"
          >
            <span className={lang === 'vi' ? 'text-foreground font-semibold' : ''}>VI</span>
            <span className="mx-1 opacity-40">/</span>
            <span className={lang === 'en' ? 'text-foreground font-semibold' : ''}>EN</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? (lang === 'vi' ? 'Đóng menu' : 'Close menu') : (lang === 'vi' ? 'Mở menu' : 'Open menu')}
            className="md:hidden liquid-glass rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center text-foreground cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'vi' ? 'Danh mục điều hướng di động' : 'Mobile navigation menu'}
          className="md:hidden max-w-7xl mx-auto mt-2 liquid-glass rounded-3xl p-4 shadow-xl border border-white/40 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col gap-1">
            {content.nav.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(item.id);
                  }}
                  className={`min-h-[44px] flex items-center px-4 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-foreground/10 text-foreground font-semibold'
                      : 'text-muted-foreground hover:text-foreground hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
