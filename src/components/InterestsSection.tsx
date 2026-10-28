import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, TrendingUp, Cpu, Workflow, Network } from 'lucide-react';
import { TechLogo } from './TechLogos';

interface InterestsSectionProps {
  data: {
    badge: string;
    title: string;
    description: string;
    cards: {
      title: string;
      subtitle: string;
      description: string;
      iconType: string;
      tags: string[];
    }[];
  };
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ data }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'data':
        return <TrendingUp className="w-6 h-6 text-blue-600 dark:text-sky-400" />;
      case 'web':
        return <Network className="w-6 h-6 text-teal-600 dark:text-teal-400" />;
      case 'automation':
        return <Workflow className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'ai':
        return <Cpu className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-blue dark:text-sky-400" />;
    }
  };

  return (
    <section id="interests" className="py-20 sm:py-28 border-b border-hairline dark:border-slate-800/80 transition-colors duration-200">
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
            <Compass className="w-4 h-4" />
            {data.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink dark:text-white tracking-tight mb-4 leading-tight">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed">
            {data.description}
          </p>
        </motion.div>

        {/* 4 Cards Grid with Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {data.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/85 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-lg dark:hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center border border-slate-200/80 dark:border-slate-700 shadow-2xs">
                    {getIcon(card.iconType)}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink dark:text-white">
                      {card.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-brand-blue dark:text-sky-400 font-bold">
                      {card.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-ink-secondary dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {card.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-hairline/80 dark:border-slate-800">
                {card.tags.map((tag, tIdx) => (
                  <TechLogo key={tIdx} name={tag} showLabel={true} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
