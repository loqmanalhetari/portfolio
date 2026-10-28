import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Sparkles, Activity } from 'lucide-react';
import { TechLogo } from './TechLogos';

interface SkillVisualItem {
  name: string;
  category: string;
  description: string;
  gradient: string;
  icon3D: string;
}

interface SkillsSectionProps {
  data: {
    badge: string;
    title: string;
    categories: {
      name: string;
      type: string;
      skills: string[];
    }[];
  };
  visualSkills?: SkillVisualItem[];
  lang?: 'ar' | 'en';
}

// Spotlight Interactive Card Component
const SpotlightSkillCard: React.FC<{
  skill: SkillVisualItem;
  idx: number;
  lang: 'ar' | 'en';
}> = ({ skill, idx, lang }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Fixed proficiency levels based on depth
  const proficiencyMap: Record<string, number> = {
    'SQL Server': 95,
    'Power BI': 94,
    'React & TypeScript': 92,
    'Tailwind CSS': 96,
    'Three.js': 88,
    'Python & Analytics': 90,
    'REST APIs': 92,
    'Git & GitHub': 95,
  };

  const proficiency = proficiencyMap[skill.name] || 90;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: idx * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-2xl dark:hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-default"
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100 rounded-3xl"
          style={{
            background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.12), transparent 80%)`,
          }}
        />
      )}

      {/* Ambient top light line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-blue/40 dark:via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 shadow-2xs group-hover:scale-110 transition-transform duration-300">
            <TechLogo name={skill.name} className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-mono">
            {skill.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-white mb-2 group-hover:text-brand-blue dark:group-hover:text-sky-400 transition-colors leading-snug">
          {skill.name}
        </h3>
        <p className="text-sm text-ink-secondary dark:text-slate-300 leading-relaxed mb-6 font-normal">
          {skill.description}
        </p>
      </div>

      {/* Telemetry Proficiency Gauge */}
      <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-ink-muted dark:text-slate-400 flex items-center gap-1.5 font-sans">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>{lang === 'ar' ? 'مستوى الإتقان والتطبيق' : 'Proficiency'}</span>
          </span>
          <span className="font-bold text-brand-blue dark:text-sky-400 font-mono">
            {proficiency}%
          </span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800/90 rounded-full h-1.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${proficiency}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 + idx * 0.05, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-brand-blue to-sky-400 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  data,
  visualSkills = [],
  lang = 'ar',
}) => {
  const [activeTab, setActiveTab] = useState<'3d' | 'categories'>('3d');

  return (
    <section id="skills" className="py-20 sm:py-28 border-b border-hairline dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header & Tab Controls with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 mb-3 border border-blue-200 dark:border-blue-800 shadow-2xs">
              <Layers className="w-4 h-4" />
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-ink dark:text-white tracking-tight leading-tight">
              {data.title}
            </h2>
          </div>

          {/* Toggle between 3D Visual Cards & Categories */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 self-start sm:self-auto shadow-inner">
            <button
              onClick={() => setActiveTab('3d')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === '3d'
                  ? 'bg-white dark:bg-slate-800 text-brand-blue dark:text-sky-400 shadow-sm'
                  : 'text-ink-secondary dark:text-slate-400 hover:text-ink dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'ar' ? 'عرض تفاعلي مخصص (Spotlight)' : 'Interactive Spotlight Grid'}</span>
            </button>
            <button
              onClick={() => setActiveTab('categories')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'categories'
                  ? 'bg-white dark:bg-slate-800 text-brand-blue dark:text-sky-400 shadow-sm'
                  : 'text-ink-secondary dark:text-slate-400 hover:text-ink dark:hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{lang === 'ar' ? 'التصنيف المنهجي' : 'By Category'}</span>
            </button>
          </div>
        </motion.div>

        {/* 1. Spotlight Interactive Visual Grid */}
        {activeTab === '3d' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visualSkills.map((skill, idx) => (
              <SpotlightSkillCard
                key={idx}
                skill={skill}
                idx={idx}
                lang={lang}
              />
            ))}
          </div>
        )}

        {/* 2. Structured Category View */}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-6 pb-5 border-b border-hairline/80 dark:border-slate-800">
                  <TechLogo name={cat.type === 'data' ? 'sql' : cat.type === 'web' ? 'react' : cat.type === 'bi' ? 'power bi' : 'ai'} className="w-7 h-7" />
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-ink dark:text-white">
                      {cat.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-brand-blue dark:text-sky-400 font-semibold font-mono">
                      {cat.skills.length} {lang === 'ar' ? 'مهارات وتقنيات تخصصية' : 'core technologies'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-canvas-subtle dark:bg-slate-800 text-ink dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-brand-blue/40 dark:hover:border-sky-400/40 transition-all shadow-2xs"
                    >
                      <TechLogo name={skill} className="w-4 h-4" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
