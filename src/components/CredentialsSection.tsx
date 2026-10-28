import { Award, GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import type { Certification } from '../data/portfolioContent';

interface CredentialsProps {
  lang: 'ar' | 'en';
  data: {
    badge: string;
    title: string;
    degree: {
      title: string;
      institution: string;
      year: string;
      description: string;
    };
    certs: Certification[];
  };
}

export const CredentialsSection: React.FC<CredentialsProps> = ({ lang, data }) => {
  return (
    <section id="credentials" className="py-16 sm:py-24 border-b border-hairline bg-slate-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3 border border-indigo-200/60">
            <Award className="w-3.5 h-3.5" />
            {data.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-ink tracking-tight mb-4">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Academic Degree (MIS at Azal University) */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-hairline shadow-2xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium text-brand-blue uppercase tracking-wider block">
                  {lang === 'ar' ? 'الدرجة الأكاديمية الرسمية' : 'Higher Academic Degree'}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-ink">
                  {data.degree.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-brand-teal mb-4">
              <Calendar className="w-4 h-4" />
              <span>{data.degree.year}</span>
            </div>

            <p className="text-xs sm:text-sm font-medium text-ink-secondary mb-3">
              {data.degree.institution}
            </p>
            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed bg-canvas-subtle/70 p-4 rounded-xl border border-slate-200/60">
              {data.degree.description}
            </p>
          </div>

          {/* Right: Certified Programs & Practical Capstones */}
          <div className="lg:col-span-6 space-y-4">
            {data.certs.map((cert, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-hairline shadow-2xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="text-base font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{cert.title}</span>
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0">
                    {cert.year}
                  </span>
                </div>
                <p className="text-xs font-medium text-brand-blue mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs text-ink-secondary leading-normal">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
