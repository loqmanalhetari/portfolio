import React from 'react';
import { Bot, ShieldCheck, Cpu, Code2, FileSearch, LineChart } from 'lucide-react';

interface AiSectionProps {
  lang: 'ar' | 'en';
  data: {
    badge: string;
    title: string;
    philosophy: string;
    cards: {
      title: string;
      desc: string;
      tool: string;
    }[];
    commitments: string[];
  };
}

export const AiSection: React.FC<AiSectionProps> = ({ lang, data }) => {
  const icons = [FileSearch, LineChart, Cpu, Code2];

  return (
    <section id="ai-workflows" className="py-16 sm:py-24 border-b border-hairline bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 mb-3 border border-emerald-200/60">
            <Bot className="w-3.5 h-3.5" />
            {data.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed bg-white p-5 rounded-xl border border-hairline shadow-2xs">
            {data.philosophy}
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {data.cards.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-hairline shadow-2xs hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {card.tool}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Responsible Engineering Commitments */}
        <div className="p-6 rounded-2xl bg-white border border-emerald-100 shadow-2xs">
          <h4 className="text-sm font-bold text-ink mb-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ar' ? 'المعايير والضوابط الأخلاقية المعتمدة في عملي:' : 'Ethical & Verification Principles in My Practice:'}</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {data.commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-ink-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>{commitment}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
