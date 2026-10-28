import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Server, 
  Database, 
  ShieldCheck, 
  Cpu, 
  Briefcase,
  TrendingUp,
  Activity,
  Compass,
  FileCheck2,
  Lock,
  Wifi,
  Terminal
} from 'lucide-react';
import type { Project } from '../data/portfolioContent';
import { TechLogo } from './TechLogos';

interface ProjectsSectionProps {
  lang: 'ar' | 'en';
  sectionData: {
    badge: string;
    title: string;
    description: string;
    items: Project[];
  };
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  sectionData,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [datxTab, setDatxTab] = useState<'ssot' | 'webinars' | 'infra'>('ssot');

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'جميع الأعمال (6)' : 'All Work (6)' },
    { id: 'data', label: lang === 'ar' ? 'تحليل البيانات وذكاء الأعمال' : 'Data & BI' },
    { id: 'fullstack', label: lang === 'ar' ? 'تطوير الأنظمة وهندسة الويب' : 'Systems & Web' },
    { id: 'interactive', label: lang === 'ar' ? 'تجارب الويب المتقدمة' : 'Interactive & 3D' },
    { id: 'erp', label: lang === 'ar' ? 'أنظمة ERP وإدارة الأعمال' : 'ERP & Operations' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? sectionData.items
    : sectionData.items.filter((p) => p.category === selectedCategory);

  const datxProject = sectionData.items.find((p) => p.id === 'datx-platform');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'datx-platform');

  // Render Visual Mockup Header for Each Project
  const renderVisualMockup = (projectId: string) => {
    switch (projectId) {
      case 'power-bi-lab':
        return (
          <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-amber-950/40 to-slate-900 border border-amber-500/20 p-4 text-white overflow-hidden flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-amber-500/20 pb-2 text-amber-300">
              <span className="flex items-center gap-1.5 font-bold">
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span>Power BI Executive Telemetry</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px]">
                Star Schema
              </span>
            </div>

            {/* Middle KPI Cards & Sparkline */}
            <div className="grid grid-cols-2 gap-2 my-auto">
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20 backdrop-blur-xs">
                <span className="text-[10px] text-slate-400 block font-mono">Turnaround Cycle</span>
                <span className="text-base sm:text-lg font-bold font-mono text-emerald-400">-35% Faster</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/80 border border-amber-500/20 backdrop-blur-xs">
                <span className="text-[10px] text-slate-400 block font-mono">Reconciliation</span>
                <span className="text-base sm:text-lg font-bold font-mono text-amber-400">100% Match</span>
              </div>
            </div>

            {/* Glowing Trend Sparkline SVG */}
            <div className="relative h-10 w-full pt-1">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 300 40" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="amberGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,35 Q30,28 60,30 T120,18 T180,22 T240,8 T300,4 L300,40 L0,40 Z"
                  fill="url(#amberGrad)"
                />
                <path
                  d="M0,35 Q30,28 60,30 T120,18 T180,22 T240,8 T300,4"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Bottom DAX Pill */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span className="text-amber-400 font-semibold truncate">CALCULATE(SUM(Sales), DATESYTD(Date))</span>
              <span className="text-slate-500 shrink-0">Automated ETL</span>
            </div>
          </div>
        );

      case 'volt-3d':
        return (
          <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-sky-950/40 to-slate-900 border border-sky-500/20 p-4 text-white overflow-hidden flex flex-col justify-between group-hover:border-sky-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-sky-500/20 pb-2 text-sky-300">
              <span className="flex items-center gap-1.5 font-bold">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>Three.js WebGL Engine</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-[10px]">
                60 FPS
              </span>
            </div>

            {/* 3D Wireframe Mesh Graphic */}
            <div className="flex items-center justify-center py-2 relative">
              <div className="w-20 h-20 rounded-full border border-sky-500/30 flex items-center justify-center animate-spin-slow">
                <div className="w-14 h-14 rounded-lg border-2 border-sky-400 rotate-45 flex items-center justify-center bg-sky-500/15 backdrop-blur-xs shadow-lg shadow-sky-500/20">
                  <div className="w-5 h-5 rounded-full bg-sky-400 shadow-md shadow-sky-400" />
                </div>
              </div>
              <div className="absolute inset-0 bg-radial from-sky-500/10 to-transparent pointer-events-none" />
            </div>

            {/* Bottom Telemetry */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span className="text-sky-300 font-semibold">360° Orbit Geometry</span>
              <span className="text-slate-500">PBR Materials</span>
            </div>
          </div>
        );

      case 'luqma-restaurant':
        return (
          <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-emerald-950/40 to-slate-900 border border-emerald-500/20 p-4 text-white overflow-hidden flex flex-col justify-between group-hover:border-emerald-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-emerald-500/20 pb-2 text-emerald-300">
              <span className="flex items-center gap-1.5 font-bold">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>GSAP ScrollTrigger Viewport</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px]">
                Awwwards Grade
              </span>
            </div>

            {/* Visual Scrub Timeline Card */}
            <div className="space-y-2 py-2">
              <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 block uppercase tracking-wider">Chapter 02</span>
                  <span className="text-xs font-bold text-white">تأثيرات التمرير السينمائي الانسيابي</span>
                </div>
                <span className="px-2 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                  Scrub 68%
                </span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span className="text-emerald-300 font-semibold">Arabic RTL Fluidity</span>
              <span className="text-slate-500">Zero Layout Shift</span>
            </div>
          </div>
        );

      case 'onyx-pro-model':
        return (
          <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-purple-950/40 to-slate-900 border border-purple-500/20 p-4 text-white overflow-hidden flex flex-col justify-between group-hover:border-purple-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-purple-500/20 pb-2 text-purple-300">
              <span className="flex items-center gap-1.5 font-bold">
                <FileCheck2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Onyx Pro (YemenSoft) Reconciliation</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[10px]">
                100% Match
              </span>
            </div>

            {/* Ledger Balance Sheet Items */}
            <div className="space-y-2 py-1 font-mono text-[11px]">
              <div className="p-2 rounded-lg bg-slate-900/80 border border-purple-500/20 flex items-center justify-between">
                <span className="text-slate-300">ميزان المراجعة والقيود</span>
                <span className="text-emerald-400 font-bold">Debit = Credit ✓</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-purple-500/20 flex items-center justify-between">
                <span className="text-slate-300">مطابقة جداول Excel Pivot</span>
                <span className="text-purple-300 font-bold">Zero Discrepancy</span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span className="text-purple-300 font-semibold">Financial Audit Ready</span>
              <span className="text-slate-500">99%+ Typing Speed</span>
            </div>
          </div>
        );

      case 'al-haidam-travel':
        return (
          <div className="relative w-full h-48 sm:h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900 border border-blue-500/20 p-4 text-white overflow-hidden flex flex-col justify-between group-hover:border-blue-500/40 transition-colors">
            {/* Top Bar */}
            <div className="flex items-center justify-between text-[11px] font-mono border-b border-blue-500/20 pb-2 text-blue-300">
              <span className="flex items-center gap-1.5 font-bold">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                <span>Commercial Travel Portal</span>
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-[10px]">
                Fast Booking
              </span>
            </div>

            {/* Flight Ticket Visual */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-500/30 space-y-1.5 my-auto">
              <div className="flex items-center justify-between text-xs font-bold text-white">
                <span>رحلات العمرة والسياحة</span>
                <span className="px-2 py-0.5 rounded bg-blue-600 text-[10px] text-white">Direct</span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>SAH (صنعاء)</span>
                <span className="text-blue-400">✈──────✈</span>
                <span>IST (إسطنبول)</span>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span className="text-blue-300 font-semibold">100% Responsive Funnel</span>
              <span className="text-slate-500">High Conversion UX</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-32 border-b border-hairline dark:border-slate-800/80 bg-slate-50/30 dark:bg-slate-950/40 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-900/30 text-brand-blue dark:text-sky-400 mb-3 border border-blue-200 dark:border-blue-800 shadow-2xs">
            <Sparkles className="w-4 h-4" />
            {sectionData.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-ink dark:text-white tracking-tight mb-4 leading-tight">
            {sectionData.title}
          </h2>
          <p className="text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed font-normal">
            {sectionData.description}
          </p>
        </motion.div>

        {/* Interactive Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 pb-2 overflow-x-auto"
        >
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none shrink-0 ${
                  isActive
                    ? 'bg-brand-blue dark:bg-sky-500 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-900 text-ink-secondary dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-brand-blue/40 dark:hover:border-sky-400/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </motion.div>

        {/* Main Bento Layout */}
        <div className="space-y-8">

          {/* 1. Flagship Bento Feature Card: DATX Ecosystem (Full Width with macOS Browser Window Frame) */}
          {datxProject && (selectedCategory === 'all' || selectedCategory === 'fullstack') && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-sky-400/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Realistic macOS Dark Glass Browser Mockup Frame */}
              <div className="w-full rounded-2xl bg-slate-950 border border-slate-700/80 shadow-2xl p-4 sm:p-6 mb-8 text-white overflow-hidden">
                
                {/* Browser Top Chrome (Dots, URL bar, Live Status) */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-slate-400 text-[11px] mr-2">DATX macOS Gateway</span>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                    <Lock className="w-3 h-3 text-emerald-400" />
                    <span>https://datxsci.com</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live Production</span>
                    </span>
                  </div>
                </div>

                {/* Interactive macOS Live Tabs Selector */}
                <div className="flex flex-wrap items-center gap-1.5 pt-3 pb-3 border-b border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setDatxTab('ssot')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                      datxTab === 'ssot'
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Database className="w-3.5 h-3.5 text-purple-400" />
                    <span>{lang === 'ar' ? '1. معمارية الـ SSOT وقاعدة البيانات' : '1. SSOT & DB Architecture'}</span>
                  </button>
                  <button
                    onClick={() => setDatxTab('webinars')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                      datxTab === 'webinars'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <Wifi className="w-3.5 h-3.5 text-sky-400" />
                    <span>{lang === 'ar' ? '2. نظام إدارة الندوات وحماية Zoom' : '2. Seminars & Zoom Security'}</span>
                  </button>
                  <button
                    onClick={() => setDatxTab('infra')}
                    className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                      datxTab === 'infra'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'ar' ? '3. السيرفر السحابي والأمان' : '3. Cloud Infra & RBAC'}</span>
                  </button>
                </div>

                {/* Browser Canvas Content: Dynamically Changes with datxTab */}
                <div className="py-5 min-h-[200px]">
                  {/* Tab 1: SSOT Pipeline */}
                  {datxTab === 'ssot' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center"
                    >
                      <div className="lg:col-span-5 p-4 rounded-xl bg-slate-900/90 border border-purple-500/30">
                        <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest block mb-1">
                          Single Source of Truth
                        </span>
                        <h5 className="font-bold text-sm sm:text-base text-white mb-2">
                          {lang === 'ar' ? 'مبدأ المصدر الواحد للحقيقة' : 'Zero Data Duplication'}
                        </h5>
                        <p className="text-xs text-slate-300 leading-relaxed mb-3">
                          {lang === 'ar' 
                            ? 'قاعدة بيانات علائقية واحدة (MySQL + Prisma ORM) تخدم لوحة الإدارة وموقع الطلاب بدون أي نسخ متكررة أو بيانات وهمية.'
                            : 'Single unified MySQL relational database serving both Admin Dashboard and student portal with zero mocked data.'}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>15+ Relational Tables Linked</span>
                        </div>
                      </div>

                      <div className="lg:col-span-7 space-y-2 font-mono text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300 flex items-center gap-2">
                            <Server className="w-3.5 h-3.5 text-sky-400" />
                            <span>لوحة التحكم (React + TS + Material UI)</span>
                          </span>
                          <span className="text-emerald-400 font-bold text-[11px]">Write Ops (CRUD)</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-500/40 flex items-center justify-between">
                          <span className="text-purple-200 flex items-center gap-2 font-bold">
                            <Database className="w-3.5 h-3.5 text-purple-400" />
                            <span>نواة NestJS REST + MySQL Single Source of Truth</span>
                          </span>
                          <span className="text-purple-300 font-bold text-[11px]">SSOT Core</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                          <span className="text-slate-300 flex items-center gap-2">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                            <span>موقع الطلاب والتسجيل التفاعلي</span>
                          </span>
                          <span className="text-amber-400 font-bold text-[11px]">Read Ops (Real-time)</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: Live Webinars/Seminars State Machine */}
                  {datxTab === 'webinars' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center"
                    >
                      <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900/90 border border-sky-500/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-mono text-sky-400 uppercase tracking-widest">
                            {lang === 'ar' ? 'الندوات الحية التفاعلية' : 'Live Broadcast'}
                          </span>
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                            120+ طالب مسجل
                          </span>
                        </div>
                        <h5 className="font-bold text-sm sm:text-base text-white mb-1">
                          {lang === 'ar' ? 'تحليل البيانات المتقدم بـ Power BI و SQL' : 'Advanced Analytics with Power BI & SQL'}
                        </h5>
                        <p className="text-xs text-slate-300 mb-3">
                          {lang === 'ar' ? 'المدرب: لقمان الهتاري • حماية روابط Zoom حصراً للطلاب المسجلين' : 'Instructor: Loqman Al-Hetari • Protected Zoom links for registered students'}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-sky-300">
                          <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Real-time Status Sync: LIVE</span>
                        </div>
                      </div>

                      <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5 font-mono text-xs">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          Seminar Lifecycle State Machine:
                        </span>
                        <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
                          <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
                            1. Draft (مسودة إدارية)
                          </div>
                          <div className="p-2 rounded-lg bg-blue-950/50 border border-blue-500/40 text-sky-300">
                            2. Published (عرض الطلاب)
                          </div>
                          <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 font-bold">
                            3. Live (فتح Zoom للطلاب)
                          </div>
                          <div className="p-2 rounded-lg bg-rose-950/50 border border-rose-500/40 text-rose-300">
                            4. Closed (إخفاء زر الانضمام)
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 3: Cloud Infrastructure & RBAC */}
                  {datxTab === 'infra' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center font-mono text-xs"
                    >
                      <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2">
                        <div className="flex items-center justify-between text-emerald-400 border-b border-slate-800 pb-2">
                          <span className="flex items-center gap-1.5 font-bold">
                            <Terminal className="w-3.5 h-3.5" />
                            <span>Ubuntu 22.04 LTS Cloud Host</span>
                          </span>
                          <span className="text-emerald-400 font-bold">Uptime 99.98%</span>
                        </div>
                        <div className="space-y-1.5 text-slate-300 text-[11px]">
                          <div className="flex justify-between">
                            <span className="text-slate-400">Reverse Proxy:</span>
                            <span className="text-sky-300 font-bold">Nginx HTTP/2 + SSL</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">API Latency:</span>
                            <span className="text-emerald-400 font-bold">&lt; 38ms Average</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-400">Process Manager:</span>
                            <span className="text-purple-300 font-bold">PM2 Cluster (Zero-Downtime)</span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-[11px]">
                        <span className="text-amber-400 font-bold flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Enterprise RBAC & Auth Security</span>
                        </span>
                        <p className="text-slate-300 leading-relaxed">
                          حماية متقدمة ضد IDOR و XSS، مع تشفير JWT في ملفات تعريف ارتباط آمنة (HttpOnly Cookies)، وصلاحيات محددة للأدوار (Super Admin, Admin, Instructor, Student).
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* 4 Architectural Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80 text-center font-mono text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400 block text-[10px]">Database</span>
                    <span className="font-bold text-sky-400">MySQL + Prisma</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400 block text-[10px]">Backend</span>
                    <span className="font-bold text-purple-400">NestJS REST</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400 block text-[10px]">Security</span>
                    <span className="font-bold text-amber-400">RBAC & JWT</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/50">
                    <span className="text-slate-400 block text-[10px]">Hosting</span>
                    <span className="font-bold text-emerald-400">Ubuntu & Nginx</span>
                  </div>
                </div>

              </div>

              {/* Project Title, Role & Summary */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {datxProject.categoryLabel}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {datxProject.period}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-ink dark:text-white leading-tight mb-2">
                  {datxProject.title}
                </h3>
                <p className="text-sm sm:text-base font-bold text-brand-blue dark:text-sky-400">
                  {datxProject.subtitle}
                </p>
                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-brand-blue dark:text-sky-300 text-xs font-bold">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{datxProject.role}</span>
                </div>
              </div>

              <p className="text-base sm:text-lg text-ink-secondary dark:text-slate-300 leading-relaxed font-normal mb-8 max-w-4xl">
                {datxProject.summary}
              </p>

              {/* Technical Accomplishments Bullets */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 mb-8 shadow-xs">
                <h4 className="text-xs font-bold text-ink dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{lang === 'ar' ? 'أبرز الإنجازات البرمجية والمعمارية في DATX:' : 'Key Engineering Accomplishments in DATX:'}</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {datxProject.keyInsights.map((insight, iIdx) => (
                    <div key={iIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2">
                      <span className="text-brand-blue dark:text-sky-400 font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{insight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Official Tech Logos & Live Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-ink-muted dark:text-slate-400 uppercase tracking-widest block mb-2.5">
                    {lang === 'ar' ? 'التقنيات المستخدمة:' : 'Tech Stack:'}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    {datxProject.techStack.map((tech, tIdx) => (
                      <TechLogo key={tIdx} name={tech} showLabel={true} />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  {datxProject.liveUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={datxProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-brand-blue dark:bg-sky-500 text-white text-xs sm:text-sm font-bold hover:bg-brand-blueHover dark:hover:bg-sky-600 transition-all shadow-md shadow-blue-500/25 w-full sm:w-auto"
                    >
                      <span>{lang === 'ar' ? 'زيارة المنظومة الحية (datxsci.com ↗)' : 'Visit Live Platform ↗'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  )}
                  {datxProject.githubUrl && (
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={datxProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-bold text-ink dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-xs w-full sm:w-auto"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span>{lang === 'ar' ? 'كود المستودع' : 'GitHub Source'}</span>
                    </motion.a>
                  )}
                </div>
              </div>

            </motion.article>
          )}

          {/* 2. Responsive Bento Grid for the Other 5 Projects with Rich Visual Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {otherProjects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
                >
                  <div>
                    {/* Visual Mockup Header Component */}
                    <div className="mb-6">
                      {renderVisualMockup(project.id)}
                    </div>

                    {/* Category & Status Bar */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800 mb-3 text-xs font-semibold">
                      <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        {project.categoryLabel}
                      </span>
                      <span className="font-mono text-slate-400">
                        {project.period}
                      </span>
                    </div>

                    {/* Project Title & Role */}
                    <h4 className="text-xl sm:text-2xl font-bold text-ink dark:text-white mb-1.5 leading-snug">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-brand-blue dark:text-sky-400 mb-2">
                      {project.subtitle}
                    </p>
                    <div className="mb-4 inline-block px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-ink-secondary dark:text-slate-300 text-xs font-medium">
                      {project.role}
                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-ink-secondary dark:text-slate-300 leading-relaxed mb-6 font-normal">
                      {project.summary}
                    </p>

                    {/* Key Technical Bullets */}
                    <div className="p-4 rounded-2xl bg-slate-100/90 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 mb-6 space-y-2 shadow-xs">
                      {project.keyInsights.map((insight, iIdx) => (
                        <div key={iIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                          <span className="leading-relaxed">{insight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Tech Logos & Action Link */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      {project.techStack.map((tech, tIdx) => (
                        <TechLogo key={tIdx} name={tech} showLabel={false} />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <motion.a
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-brand-blue dark:bg-sky-500 text-white text-xs font-bold hover:bg-brand-blueHover dark:hover:bg-sky-600 transition-all shadow-xs"
                        >
                          <span>{lang === 'ar' ? 'معاينة حية' : 'Live Demo'}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {project.githubUrl && (
                        <motion.a
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-ink dark:text-white text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-2xs"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>{lang === 'ar' ? 'GitHub' : 'GitHub'}</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                </motion.article>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
