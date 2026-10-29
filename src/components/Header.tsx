import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Download, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  User, 
  Code2, 
  Briefcase, 
  Sparkles, 
  FolderGit2, 
  Mail, 
  MessageCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface HeaderProps {
  lang: 'ar' | 'en';
  setLang: (lang: 'ar' | 'en') => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  activeSection?: string;
  content: {
    downloadCV: string;
    nav: {
      about: string;
      skills: string;
      experience: string;
      interests: string;
      projects: string;
      contact: string;
    };
  };
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  darkMode,
  setDarkMode,
  activeSection = 'hero',
  content,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: '#about', label: content.nav.about, icon: User },
    { href: '#skills', label: content.nav.skills, icon: Code2 },
    { href: '#experience', label: content.nav.experience, icon: Briefcase },
    { href: '#interests', label: content.nav.interests, icon: Sparkles },
    { href: '#projects', label: content.nav.projects, icon: FolderGit2 },
    { href: '#contact', label: content.nav.contact, icon: Mail },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-hairline dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
        
        {/* Brand & Photo Micro Avatar */}
        <div className="flex items-center gap-3">
          <a href="#hero" className="flex items-center gap-2.5 group">
            <img
              src="./loqman.jpg"
              alt="Loqman"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover border border-hairline dark:border-slate-700 shadow-2xs group-hover:ring-2 group-hover:ring-brand-blue/30 transition-all"
            />
            <div className="flex flex-col">
              <span className="font-bold text-ink dark:text-white text-sm sm:text-base tracking-tight group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors">
                {lang === 'ar' ? 'لقمان الهتاري' : 'Loqman Al-Hetari'}
              </span>
              <span className="text-[10px] text-ink-muted dark:text-slate-400 font-mono hidden sm:inline">
                {lang === 'ar' ? 'محلل بيانات ومطور ويب' : 'Data Analyst & Web Engineer'}
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links (Visible on lg+) with Scroll-Spy Active Indicator */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold text-ink-secondary dark:text-slate-400">
          {navItems.map((item, idx) => {
            const isActive = item.href === `#${activeSection}`;
            return (
              <a
                key={idx}
                href={item.href}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-50 dark:bg-sky-500/15 text-brand-blue dark:text-sky-400 font-bold border border-blue-200/60 dark:border-sky-500/30 shadow-2xs'
                    : 'hover:text-brand-blue dark:hover:text-sky-400'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Controls: Switchers + Mobile Hamburger Button */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* Theme Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:px-2.5 sm:py-1 text-xs font-medium rounded-lg border border-hairline dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-ink dark:text-slate-200 transition-all active:scale-95 flex items-center gap-1.5"
            title={darkMode ? (lang === 'ar' ? 'الوضع النهاري' : 'Light Mode') : (lang === 'ar' ? 'الوضع الليلي' : 'Dark Mode')}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span className="hidden md:inline text-[11px]">{lang === 'ar' ? 'فاتح' : 'Light'}</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span className="hidden md:inline text-[11px]">{lang === 'ar' ? 'داكن' : 'Dark'}</span>
              </>
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 px-2 sm:px-2.5 py-1 text-xs font-medium rounded-lg border border-hairline dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-ink dark:text-slate-200 transition-all active:scale-95"
            title={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-brand-blue dark:text-sky-400" />
            <span className="text-[11px] font-bold">{lang === 'ar' ? 'EN' : 'عربي'}</span>
          </button>

          {/* Desktop Download Resume */}
          <a
            href="./Loqman_AlHetari_CV.pdf"
            download="Loqman_AlHetari_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-ink dark:bg-sky-500 text-white hover:bg-brand-blue dark:hover:bg-sky-600 transition-all active:scale-95 shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{content.downloadCV}</span>
          </a>

          {/* Mobile Hamburger Toggle Button (3 lines ☰ / ✕) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-hairline dark:border-slate-800 bg-white dark:bg-slate-900 text-ink dark:text-slate-200 lg:hidden active:scale-95 transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-brand-blue dark:text-sky-400" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer (Off-Canvas Navigation Sheet) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-16 bg-slate-950/70 backdrop-blur-xs z-40 lg:hidden"
            />

            {/* Slide-Down Mobile Navigation Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-2xl z-50 lg:hidden px-4 py-5"
            >
              {/* Menu Header with Profile Summary */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <img
                    src="./loqman.jpg"
                    alt="Loqman"
                    className="w-10 h-10 rounded-full object-cover border-2 border-brand-blue dark:border-sky-400"
                  />
                  <div>
                    <h4 className="font-bold text-ink dark:text-white text-sm">
                      {lang === 'ar' ? 'لقمان الهتاري' : 'Loqman Al-Hetari'}
                    </h4>
                    <p className="text-[11px] text-ink-muted dark:text-slate-400">
                      {lang === 'ar' ? 'قائمة التنقل السريع' : 'Quick Navigation Menu'}
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                  {lang === 'ar' ? '● متاح للعمل' : '● Available'}
                </span>
              </div>

              {/* Navigation Links with Icons & Touch Targets (min 48px) with Scroll-Spy */}
              <nav className="space-y-1.5 mb-6">
                {navItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = item.href === `#${activeSection}`;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-xl transition-all font-semibold text-sm group ${
                        isActive
                          ? 'bg-blue-50 dark:bg-slate-900 border border-blue-200/80 dark:border-sky-500/30 text-brand-blue dark:text-sky-400 font-bold'
                          : 'hover:bg-slate-100 dark:hover:bg-slate-900 active:bg-slate-200 dark:active:bg-slate-800 text-ink dark:text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform ${
                          isActive
                            ? 'bg-brand-blue dark:bg-sky-500 text-white shadow-xs'
                            : 'bg-blue-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-brand-blue dark:text-sky-400 group-hover:scale-105'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={isActive ? 'text-brand-blue dark:text-sky-400 font-bold' : 'group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors'}>
                          {item.label}
                        </span>
                      </div>
                      <ArrowIcon className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-brand-blue dark:text-sky-400' : 'text-slate-400 group-hover:text-brand-blue dark:group-hover:text-sky-400'
                      }`} />
                    </a>
                  );
                })}
              </nav>

              {/* Direct Quick Action Buttons (WhatsApp & CV) */}
              <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="https://wa.me/967772350130"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'محادثة مباشرة عبر واتساب' : 'Chat via WhatsApp'}</span>
                </a>

                <a
                  href="./Loqman_AlHetari_CV.pdf"
                  download="Loqman_AlHetari_CV.pdf"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-ink dark:text-slate-200 font-bold text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4 text-brand-blue dark:text-sky-400" />
                  <span>{content.downloadCV}</span>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
