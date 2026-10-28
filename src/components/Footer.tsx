import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'ar' | 'en';
  data: {
    rights: string;
    tagline: string;
  };
}

export const Footer: React.FC<FooterProps> = ({ lang, data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 border-t border-hairline dark:border-slate-800/80 bg-white dark:bg-slate-950 text-xs text-ink-muted dark:text-slate-400 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div>
          <p className="font-semibold text-ink-secondary dark:text-slate-300">
            {data.rights}
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-hairline dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-ink dark:text-slate-200 transition-all active:scale-95"
          title={lang === 'ar' ? 'العودة إلى أعلى الصفحة' : 'Scroll to top'}
        >
          <span>{lang === 'ar' ? 'للأعلى' : 'Back to top'}</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
