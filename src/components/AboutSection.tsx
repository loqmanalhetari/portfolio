import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Briefcase, Database, Code, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
  data: {
    badge: string;
    title: string;
    textP1: string;
    textP2: string;
    highlights: { title: string; desc: string }[];
  };
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const icons = [Briefcase, Database, Code, CheckCircle2];

  return (
    <section id="about" className="py-20 sm:py-28 border-b border-hairline dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-900/20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 mb-3 border border-blue-200 dark:border-blue-800 shadow-2xs">
            <UserCheck className="w-4 h-4" />
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink dark:text-white tracking-tight leading-tight">
            {data.title}
          </h2>
        </motion.div>

        {/* Text Paragraphs & 4 Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed bg-white dark:bg-slate-900/85 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-center space-y-5"
          >
            <p>{data.textP1}</p>
            <p>{data.textP2}</p>
          </motion.div>

          {/* Highlights 4-Box Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {data.highlights.map((item, idx) => {
              const Icon = icons[idx % icons.length];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 shadow-xs hover:border-brand-blue/30 dark:hover:border-sky-400/30 transition-all flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/40 text-brand-blue dark:text-sky-400 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-ink dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-secondary dark:text-slate-400 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
