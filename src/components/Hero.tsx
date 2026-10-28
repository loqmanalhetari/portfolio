import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowDown, MessageCircle, Sparkles } from 'lucide-react';
import { HeroCanvas3D } from './HeroCanvas3D';

interface HeroProps {
  lang: 'ar' | 'en';
  darkMode?: boolean;
  content: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    ctaProjects: string;
    ctaContact: string;
    location: string;
    stats: { label: string; value: string }[];
  };
}

export const Hero: React.FC<HeroProps> = ({ lang, darkMode = false, content }) => {

  // 2. Dynamic Rotating Headline Pillars
  const rolesAr = [
    'تحويل البيانات المعقدة إلى رؤى استراتيجية',
    'هندسة واجهات وتطبيقات ويب سريعة وحديثة',
    'توظيف الذكاء الاصطناعي لرفع كفاءة الأعمال',
  ];
  const rolesEn = [
    'Turning Complex Data into Strategic Insights',
    'Engineering Ultra-Fast Modern Web Applications',
    'Leveraging AI for Peak Business Productivity',
  ];
  const activeRoles = lang === 'ar' ? rolesAr : rolesEn;

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % activeRoles.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [activeRoles.length]);

  const whatsappUrl = "https://wa.me/967772350130?text=" + encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً أستاذ لقمان، اطلعت على ملفك المهني وأود التواصل معك بشأن فرصة عمل / مشروع.' 
      : 'Hello Loqman, I reviewed your portfolio and would like to discuss an opportunity / project.'
  );

  return (
    <section id="hero" className="relative pt-10 pb-20 sm:pt-20 sm:pb-32 border-b border-hairline dark:border-slate-800/80 overflow-hidden transition-colors duration-200">
      
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-400/10 dark:bg-sky-500/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid: Identity on Left, Authentic Photo & 3D WebGL on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          
          {/* Identity & Text (7 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            
            {/* Location & Specialization Badge */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs shadow-2xs">
                <MapPin className="w-3.5 h-3.5 text-brand-blue dark:text-sky-400" />
                <span>{content.location}</span>
              </span>
            </div>

            <p className="text-brand-blue dark:text-sky-400 font-bold text-base sm:text-lg mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{content.greeting}</span>
            </p>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-ink dark:text-white mb-4 leading-[1.15]">
              {content.name}
            </h1>

            {/* Dynamic Rotating Role Pillar with Framer Motion */}
            <div className="h-14 sm:h-16 flex items-center mb-5 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-sky-500 to-teal-400 dark:from-sky-400 dark:via-cyan-300 dark:to-teal-300"
                >
                  {activeRoles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              {content.description}
            </p>

            {/* CTAs with Spring Physics */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-brand-blue dark:bg-sky-500 text-white font-bold hover:bg-brand-blueHover dark:hover:bg-sky-600 transition-all shadow-lg shadow-blue-500/25 text-sm sm:text-base w-full sm:w-auto"
              >
                <span>{content.ctaProjects}</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-ink dark:text-white font-bold transition-all shadow-sm text-sm sm:text-base w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{content.ctaContact}</span>
              </motion.a>
            </div>

          </motion.div>

          {/* Authentic Real Photo & 3D Technical Canvas (5 cols on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            
            {/* Background 3D Technical Mesh */}
            <div className="absolute inset-0 -z-10 opacity-90">
              <HeroCanvas3D isDark={darkMode} />
            </div>

            {/* Authentic Photo Card with Glassmorphic Rim */}
            <div className="relative group">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-[2.5rem] p-2 bg-gradient-to-br from-white via-slate-100 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950 border border-slate-200/90 dark:border-slate-700 shadow-2xl overflow-hidden backdrop-blur-md">
                <img
                  src="./loqman.jpg"
                  alt={content.name}
                  className="w-full h-full object-cover rounded-[2rem] grayscale-[5%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Fast Stats 4-Grid with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-10 border-t border-hairline/80 dark:border-slate-800"
        >
          {content.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-brand-blue/30 dark:hover:border-sky-400/30 transition-all duration-200"
            >
              <span className="text-2xl sm:text-4xl font-extrabold text-ink dark:text-white font-mono block mb-1.5 tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-ink-secondary dark:text-slate-300 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
