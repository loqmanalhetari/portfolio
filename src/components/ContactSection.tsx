import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, ArrowUpRight, Copy, Check, ExternalLink } from 'lucide-react';

interface ContactProps {
  lang: 'ar' | 'en';
  data: {
    badge: string;
    title: string;
    description: string;
    phone: string;
    email: string;
    location: string;
    whatsappBtn: string;
    emailBtn: string;
    linkedinUrl: string;
    githubUrl: string;
    websiteUrl: string;
  };
}

export const ContactSection: React.FC<ContactProps> = ({ lang, data }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const whatsappUrl = "https://wa.me/967772350130?text=" + encodeURIComponent(
    lang === 'ar' 
      ? 'مرحباً أستاذ لقمان، اطلعت على ملفك المهني وأود التواصل معك بشأن فرصة عمل / مشروع.' 
      : 'Hello Loqman, I reviewed your portfolio and would like to connect.'
  );

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(data.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-14 rounded-[2.5rem] bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl"
        >
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 mb-3 border border-blue-200 dark:border-blue-800 shadow-2xs">
              <MessageCircle className="w-4 h-4" />
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-ink dark:text-white tracking-tight mb-4 leading-tight">
              {data.title}
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Quick Action Channels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            
            {/* WhatsApp Card with Correct LTR Phone & 1-Click Copy */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-emerald-800 dark:text-emerald-400 text-sm font-bold mb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'واتساب مباشر / هاتف' : 'Direct WhatsApp & Phone'}</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 transition-colors"
                    title={lang === 'ar' ? 'نسخ الرقم' : 'Copy Phone'}
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="my-3 flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
                    🇾🇪 YE
                  </span>
                  <span
                    dir="ltr"
                    className="text-base sm:text-lg font-bold text-ink dark:text-white font-mono select-all tracking-wider tabular-nums"
                  >
                    {data.phone}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
                >
                  <span>{data.whatsappBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                {copiedPhone && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {lang === 'ar' ? 'تم النسخ!' : 'Copied!'}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Email Card with 1-click Copy */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/60 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between text-brand-blue dark:text-sky-400 text-sm font-bold mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    <span>{lang === 'ar' ? 'البريد الإلكتروني المهني' : 'Professional Email'}</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 text-brand-blue dark:text-sky-400 transition-colors"
                    title={lang === 'ar' ? 'نسخ البريد' : 'Copy Email'}
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <p className="text-base sm:text-lg font-bold text-ink dark:text-white font-mono my-3 truncate select-all">{data.email}</p>
              </div>
              <div className="flex items-center justify-between pt-3">
                <a
                  href={`mailto:${data.email}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue dark:text-sky-400 hover:underline"
                >
                  <span>{data.emailBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                {copied && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {lang === 'ar' ? 'تم النسخ!' : 'Copied!'}
                  </span>
                )}
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 sm:p-7 rounded-3xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 text-sm font-bold mb-2">
                  <MapPin className="w-5 h-5 text-brand-blue dark:text-sky-400" />
                  <span>{lang === 'ar' ? 'المقر ونطاق العمل' : 'Location & Availability'}</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-ink-secondary dark:text-slate-300 mt-2 leading-relaxed">
                  {data.location}
                </p>
              </div>
              <span className="text-xs text-ink-muted dark:text-slate-400 pt-3 font-mono font-bold">
                {lang === 'ar' ? 'حضوري وعن بُعد' : 'On-site & Remote'}
              </span>
            </motion.div>

          </div>

          {/* Platform Project & Verified Profiles */}
          <div className="pt-8 border-t border-hairline/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            
            {/* Real Platform Clarification */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-ink-muted dark:text-slate-400 font-medium">
                {lang === 'ar' ? 'المنظومة الرقمية التي أشرف عليها:' : 'Platform under my development:'}
              </span>
              <a
                href={data.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 text-xs sm:text-sm font-bold border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors shadow-2xs"
              >
                <span>datxsci.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="flex items-center gap-3">
              <a
                href={data.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-bold text-ink dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 text-blue-600 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-bold text-ink dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95 shadow-xs"
              >
                <svg className="w-4 h-4 text-ink dark:text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub (@loqmanalhetari)</span>
              </a>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
