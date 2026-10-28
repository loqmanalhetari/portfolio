import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import { contentData } from './data/portfolioContent';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { InterestsSection } from './components/InterestsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const t = contentData[lang];

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    document.documentElement.dir = t.meta.dir;
    document.documentElement.lang = t.meta.lang;
    document.title = t.meta.title;
  }, [lang, t]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Scroll-Spy to track active section
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'interests', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-canvas dark:bg-canvas-dark text-ink dark:text-slate-100 antialiased selection:bg-brand-blue selection:text-white transition-colors duration-300 font-cairo">
      
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-sky-400 to-teal-400 origin-left z-[100]"
      />

      {/* Fixed Sticky Header with Dark Mode & Language Toggles & Scroll-Spy */}
      <Header
        lang={lang}
        setLang={setLang}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        content={{
          downloadCV: t.meta.downloadCV,
          nav: t.nav,
        }}
      />

      <main>
        {/* 1. Hero with Real Authentic Photo & Interactive 3D Canvas */}
        <Hero
          lang={lang}
          darkMode={darkMode}
          content={{
            greeting: t.hero.greeting,
            name: t.hero.name,
            title: t.hero.title,
            description: t.hero.description,
            ctaProjects: t.hero.ctaProjects,
            ctaContact: t.hero.ctaContact,
            location: t.meta.location,
            stats: t.hero.stats,
          }}
        />

        {/* 2. About Me */}
        <AboutSection
          data={t.about}
        />

        {/* 3. Skills (8 Visual 3D Isometric Cards with Official Tech SVGs) */}
        <SkillsSection
          data={t.skills}
          visualSkills={t.skillsVisual}
          lang={lang}
        />

        {/* 4. Experience (Real Timeline with Tech Logos) */}
        <ExperienceSection
          data={t.experience}
        />

        {/* 5. Areas of Interest & Strategic Competencies */}
        <InterestsSection
          data={t.interests}
        />

        {/* 6. Projects (Bento Grid Showcase with Visual Headers & SVG Logos) */}
        <ProjectsSection
          lang={lang}
          sectionData={t.projects}
        />

        {/* 7. Direct Contact (WhatsApp, Copy Email, Platform Link, Profiles) */}
        <ContactSection
          lang={lang}
          data={t.contact}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        data={t.footer}
      />
    </div>
  );
}

export default App;
