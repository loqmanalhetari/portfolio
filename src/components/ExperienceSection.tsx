import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { Experience } from '../data/portfolioContent';
import { TechLogo } from './TechLogos';

interface ExperienceSectionProps {
  data: {
    badge: string;
    title: string;
    roles: Experience[];
  };
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ data }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-hairline dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-900/20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 mb-3 border border-blue-200 dark:border-blue-800 shadow-2xs">
            <Briefcase className="w-4 h-4" />
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink dark:text-white tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        {/* Timeline List */}
        <div className="relative border-s-2 border-slate-200 dark:border-slate-800 ms-4 space-y-10">
          {data.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative ps-7 sm:ps-10"
            >
              
              {/* Bullet Node */}
              <span className="absolute -start-[9px] top-2 w-4 h-4 rounded-full bg-brand-blue dark:bg-sky-500 ring-4 ring-white dark:ring-slate-950 shadow-sm" />

              <div className="p-7 sm:p-9 rounded-3xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg transition-all">
                
                {/* Role Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-ink dark:text-white">
                      {role.role}
                    </h3>
                    <p className="text-sm sm:text-base font-bold text-brand-blue dark:text-sky-400 mt-1">
                      {role.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-ink-muted dark:text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                      <Calendar className="w-4 h-4" />
                      {role.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {role.location}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-6 text-sm sm:text-base text-ink-secondary dark:text-slate-300">
                  {role.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full bg-brand-blue dark:bg-sky-400 mt-2.5 shrink-0" />
                      <span className="leading-relaxed font-normal">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags with Brand SVG Logos */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-hairline/80 dark:border-slate-800">
                  {role.tech.map((t, tIdx) => (
                    <TechLogo key={tIdx} name={t} showLabel={true} />
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
