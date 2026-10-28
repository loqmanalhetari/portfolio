export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'fullstack' | 'data' | 'interactive' | 'erp';
  categoryLabel: string;
  status: 'production' | 'active' | 'opensource';
  role: string;
  period: string;
  summary: string;
  keyInsights: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface InterestArea {
  title: string;
  subtitle: string;
  description: string;
  iconType: 'data' | 'bi' | 'web' | 'ai' | 'automation';
  tags: string[];
}

export interface SkillCategory {
  name: string;
  type: string;
  skills: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  field: string;
  description?: string;
}

export interface VisualSkill {
  name: string;
  category: string;
  description: string;
  gradient: string;
  icon3D: string;
}

export const contentData = {
  ar: {
    meta: {
      dir: 'rtl',
      lang: 'ar',
      title: 'لقمان محمد الهتاري | بورتفوليو مهني',
      downloadCV: 'السيرة الذاتية (PDF)',
      location: 'صنعاء، اليمن',
    },
    nav: {
      about: 'نبذة عني',
      skills: 'المهارات',
      experience: 'الخبرات',
      interests: 'مجالات الاهتمام',
      projects: 'المشاريع',
      contact: 'تواصل معنا',
    },
    hero: {
      greeting: 'أهلاً بك، أنا',
      name: 'لقمان محمد الهتاري',
      title: 'أحلّل البيانات، وأطوّر الحلول الرقمية، وأوظّف الذكاء الاصطناعي بذكاء.',
      description: 'أجمع بين تحليل البيانات وتطوير الويب والاستفادة الفعّالة من الذكاء الاصطناعي لبناء حلول عملية، وتحويل البيانات إلى رؤى، والأفكار إلى تجارب رقمية ذات قيمة، مع إبقاء التفكير البشري والخبرة أساسًا لكل قرار.',
      ctaProjects: 'استكشف المشاريع',
      ctaContact: 'محادثة فورية واتساب',
      stats: [
        { label: 'أتمتة التقارير ولوحات المؤشرات', value: 'Power BI & SQL' },
        { label: 'بنية موحدة ومصدر وحيد للحقيقة', value: 'SSOT Architecture' },
        { label: 'جاهزية بيئة الإنتاج السحابية', value: 'Production-Ready' },
        { label: 'توظيف عملي للذكاء الاصطناعي', value: 'AI Multiplier' },
      ],
    },
    about: {
      badge: 'نبذة مهنية مركزة',
      title: 'من هو لقمان الهتاري؟',
      textP1: 'خريج بكالوريوس نظم معلومات إدارية (MIS) من جامعة آزال للتنمية البشرية (2026). يجمع ملفي المهني بين ركيزتين متكاملتين: الفهم العميق لمتطلبات الأعمال والدورة المستندية، والقدرة التقنية الصلبة على تحليل البيانات وهندسة الأنظمة والحلول الرقمية.',
      textP2: 'أمتلك شغفاً دائماً بالتعلم الذاتي السريع والمرونة العالية للاندماج الفوري في أي بيئة عمل أو فريق تقني، مع تبني التقنيات الحديثة المناسبة لكل مشروع. قدت هندسة وتطوير منظومة DATX التعليمية بصورة متكاملة، ولدي خبرة ميدانية في أنظمة ERP كـ Onyx Pro و Odoo، وأوظّف أدوات الذكاء الاصطناعي كأداة تسريع وإنتاجية لرفع الكفاءة مع التزام تام بالمراجعة البشرية وأمان البيانات.',
      highlights: [
        { title: 'تحليل البيانات وذكاء الأعمال', desc: 'Power BI, Advanced Excel, SQL, DAX' },
        { title: 'هندسة الأنظمة والحلول (Full-Stack)', desc: 'React, TypeScript, NestJS, MySQL' },
        { title: 'نظم معلومات إدارية و ERP', desc: 'Onyx Pro (يمن سوفت)، ربط السجلات المحاسبية' },
        { title: 'توظيف الذكاء الاصطناعي وسرعة التكيف', desc: 'أتمتة المهام، تسريع الأكواد، استيعاب التقنيات بسرعة' },
      ],
    },
    skills: {
      badge: 'القدرات التقنية والتحليلية',
      title: 'استكشاف المهارات والتقنيات',
      categories: [
        {
          name: 'ذكاء الأعمال وتحليل البيانات',
          type: 'bi',
          skills: ['Power BI', 'Microsoft Excel (Advanced)', 'DAX Calculations', 'Power Query', 'Power Pivot', 'SQL Data Extraction'],
        },
        {
          name: 'قواعد البيانات وهندسة النظم',
          type: 'data',
          skills: ['SQL (Complex Queries & CTEs)', 'MySQL', 'Prisma ORM', 'Database Normalization', 'Relational Modeling'],
        },
        {
          name: 'تطوير النظم والبرمجيات',
          type: 'web',
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'RESTful APIs', 'RBAC Security', 'Linux & Nginx'],
        },
        {
          name: 'الأنظمة المؤسسية وتوظيف الذكاء الاصطناعي',
          type: 'ai',
          skills: ['Onyx Pro ERP (يمن سوفت)', 'Odoo ERP', 'Applied AI Workflows', 'Python for Data Cleaning', 'Fast Typing 99%+'],
        },
      ],
    },
    skillsVisual: [
      {
        name: 'Power BI & BI Modeling',
        category: 'تحليل البيانات',
        description: 'بناء لوحات المؤشرات التفاعلية، ونمذجة الـ Star Schema، ومقاييس DAX الحسابية المتقدمة.',
        gradient: 'from-amber-500 to-orange-600',
        icon3D: 'chart',
      },
      {
        name: 'SQL & Database Design',
        category: 'قواعد البيانات',
        description: 'هندسة الجداول وتطبيعها (Normalization)، وصياغة الاستعلامات المعقدة، والربط العلائقي.',
        gradient: 'from-blue-600 to-indigo-700',
        icon3D: 'database',
      },
      {
        name: 'Python for Data Analysis',
        category: 'معالجة البيانات',
        description: 'تنظيف وتدقيق البيانات الضخمة باستخدام مكتبة Pandas واستكشاف الأنماط الإحصائية.',
        gradient: 'from-emerald-500 to-teal-700',
        icon3D: 'code',
      },
      {
        name: 'Microsoft Excel المتقدم',
        category: 'النمذجة والمالية',
        description: 'إتقان Power Query و Power Pivot، والمعادلات المعقدة، ومطابقة السجلات المالية بدقة.',
        gradient: 'from-green-600 to-emerald-800',
        icon3D: 'excel',
      },
      {
        name: 'React & TypeScript',
        category: 'تطوير الواجهات',
        description: 'تطوير تطبيقات الويب التفاعلية الحديثة، وإدارة الحالة، وتصميم الواجهات المتجاوبة بدقة.',
        gradient: 'from-cyan-500 to-blue-600',
        icon3D: 'react',
      },
      {
        name: 'NestJS & Node.js',
        category: 'الأنظمة الخلفية',
        description: 'بناء واجهات برمجية آمنة وموثوقة (RESTful APIs) وتطبيق معايير المصادقة وتدرج الصلاحيات (RBAC).',
        gradient: 'from-rose-600 to-red-700',
        icon3D: 'server',
      },
      {
        name: 'نظام Onyx Pro المحاسبي',
        category: 'أنظمة ERP المؤسسية',
        description: 'تشغيل دورة العمليات المحاسبية، فواتير المبيعات والمشتريات، والقيود اليومية وموازين المراجعة.',
        gradient: 'from-indigo-600 to-purple-800',
        icon3D: 'erp',
      },
      {
        name: 'الذكاء الاصطناعي وهندسة الأوامر',
        category: 'تسريع الإنتاجية',
        description: 'توظيف الـ Prompt Engineering في تسريع كتابة الأكواد، وتدقيق استعلامات البيانات، وأتمتة المهام.',
        gradient: 'from-purple-600 to-pink-600',
        icon3D: 'ai',
      },
    ],
    experience: {
      badge: 'المسار المهني العملي',
      title: 'الخبرات والتجارب الحقيقية',
      roles: [
        {
          company: 'شركة DATX للتعليم وتحليل البيانات',
          role: 'مسؤول تطوير النظم والعمليات الإدارية والتقنية',
          period: 'أبريل 2026 – حتى الآن',
          location: 'صنعاء، اليمن',
          bullets: [
            'قيادة وتطوير منظومة وموقع DATX بالكامل (Frontend, Backend, Database) واستضافة الإنتاج على Linux/Nginx.',
            'بناء لوحة تحكم إدارية مركزية بـ React و TypeScript لإدارة الندوات، المسارات، الطلاب، والصلاحيات.',
            'تصميم هيكل بيانات علائقي فائق الكفاءة بـ MySQL و Prisma وإدارة واجهات API بـ NestJS.',
          ],
          tech: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Prisma', 'Linux/Nginx', 'AI Tools'],
        },
        {
          company: 'شركة تقنية رائدة',
          role: 'محلل بيانات (متدرب)',
          period: 'يناير 2024 – مايو 2024',
          location: 'صنعاء، اليمن',
          bullets: [
            'تنظيف ومطابقة مجموعات بيانات متعددة المصادر باستخدام Microsoft Excel و SQL.',
            'تصميم لوحات مؤشرات أداء تفاعلية في Power BI لدعم اتخاذ القرارات التنفيذية.',
            'أتمتة إعداد التقارير الدورية مما اختصر وقت التجهيز بنسبة 35%.',
          ],
          tech: ['Power BI', 'Microsoft Excel', 'SQL', 'Data Cleaning', 'KPIs'],
        },
        {
          company: 'مؤسسة تجارية خاصة',
          role: 'أخصائي إدخال بيانات وتدقيق عمليات محاسبية',
          period: 'خبرة تطبيقية ميدانية',
          location: 'صنعاء، اليمن',
          bullets: [
            'تشغيل وإدارة العمليات اليومية بنظام Onyx Pro المحاسبي (فواتير، قيود، وسندات).',
            'مطابقة موازين المراجعة وحسابات العملاء والموردين وربطها بنماذج Excel التحليلية.',
            'تنفيذ أعمال الطباعة السريعة باللمس باللغتين العربية والإنجليزية دون أخطاء.',
          ],
          tech: ['Onyx Pro ERP', 'Excel Modeling', 'Reconciliation', 'High-Speed Typing'],
        },
      ],
    },
    interests: {
      badge: 'الشغف والرؤية المستقبلية',
      title: 'مجالات الاهتمام والتطوير المستمر',
      description: 'المجالات التي أركز على دراستها وتطبيقها لخلق قيمة مؤسسية ملموسة:',
      cards: [
        {
          title: 'علم وتحليل البيانات (Data Science)',
          subtitle: 'استخراج الأنماط ودعم القرارات',
          description: 'التركيز على تحويل تراكمات البيانات الخام إلى مؤشرات تنبؤية ونماذج تخدم استراتيجيات الأعمال ونمو المؤسسات.',
          iconType: 'data' as const,
          tags: ['Predictive Insights', 'Statistical Analysis', 'Business Intelligence'],
        },
        {
          title: 'هندسة النظم الرقمية (Systems Architecture)',
          subtitle: 'معماريات برمجية قوية وقابلة للتوسع',
          description: 'تصميم حلول رقمية قائمة على قواعد بيانات علائقية متينة، وواجهات برمجية آمنة، واستضافة مستقرة على خوادم لينكس.',
          iconType: 'web' as const,
          tags: ['Scalable Backends', 'Relational Schemas', 'Clean Code'],
        },
        {
          title: 'أتمتة الأعمال والأنظمة (Workflow Automation)',
          subtitle: 'رفع الكفاءة التشغيلية وتقليل الهدر',
          description: 'ربط الأنظمة المحاسبية والتشغيلية (ERP) بأدوات إعداد التقارير المؤتمتة لتقليص الأخطاء البشرية وتسريع الإنجاز.',
          iconType: 'automation' as const,
          tags: ['ERP Integration', 'Process Optimization', 'Reporting Pipelines'],
        },
        {
          title: 'الذكاء الاصطناعي التطبيقي (Applied AI)',
          subtitle: 'أدوات مساعدة لتعزيز الإنتاجية',
          description: 'توظيف نماذج الذكاء الاصطناعي الحديثة في تسريع تدقيق البيانات، وصياغة الاستعلامات، وتطوير البرمجيات بأمان.',
          iconType: 'ai' as const,
          tags: ['Prompt Engineering', 'AI-Augmented Dev', 'Automated QA'],
        },
      ],
    },
    projects: {
      badge: 'الأعمال والأنظمة المنفذة',
      title: 'مشاريع وأنظمة قمت بهندستها وتطويرها',
      description: 'حلول برمجية وتحليلية حقيقية مبنية بأكواد موثقة، تبرز التوازن بين هندسة الأنظمة وتحليل البيانات:',
      items: [
        {
          id: 'datx-platform',
          title: 'منظومة DATX التعليمية الحية',
          subtitle: 'نظام متكامل + لوحة تحكم إدارية مركزية (SSOT)',
          category: 'fullstack' as const,
          categoryLabel: 'تطوير الأنظمة وهندسة الويب',
          status: 'production' as const,
          role: 'كبير مهندسي البرمجيات وبنية النظام (Lead Software Architect & Full-Stack)',
          period: '2026 (إنتاج حي مستمر)',
          summary: 'منظومة تعليمية متكاملة في علوم وهندسة البيانات. قمت بهندسة بنيتها التحتية بالكامل: واجهة موقع سريعة وتفاعلية، لوحة تحكم إدارية متقدمة (Admin Dashboard)، ونواة خلفية (NestJS) مبنية على مصدر موحد للحقيقة (Single Source of Truth) مع قاعدة بيانات MySQL تضم 15+ جدولاً علائقياً، ونظام أمان وتدرج صلاحيات (RBAC & JWT) مجرّب وموثق بنسبة نجاح 100%، مستضافة على خوادم Ubuntu السحابية.',
          keyInsights: [
            'هندسة قاعدة بيانات علائقية موحدة (15+ جدول) مع NestJS و Prisma ORM تضمن عدم تكرار السجلات.',
            'بناء لوحة إدارة متقدمة بـ React و Material UI لإدارة الندوات والمسارات والشهادات لحظياً.',
            'نظام مصادقة وتدرج صلاحيات آمن (RBAC & JWT) مع حماية روابط Zoom للطلاب المسجلين فقط.',
            'نشر مستقر على خوادم Ubuntu السحابية مع Nginx Reverse Proxy وشهادات SSL مؤتمتة.',
          ],
          techStack: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Prisma ORM', 'Linux', 'Nginx'],
          liveUrl: 'https://datxsci.com/',
          githubUrl: 'https://github.com/loqmanalhetari/datx-platform',
        },
        {
          id: 'power-bi-lab',
          title: 'مختبر ذكاء الأعمال والتحليلات المتقدمة (Power BI & SQL)',
          subtitle: 'نمذجة بيانات ومؤشرات أداء تشغيلية ومالية',
          category: 'data' as const,
          categoryLabel: 'تحليل البيانات وذكاء الأعمال',
          status: 'active' as const,
          role: 'محلل بيانات ونمذجة ذكاء الأعمال (Data & BI Specialist)',
          period: '2024 – 2026',
          summary: 'بناء نماذج بيانات متقدمة (Star Schema) في Power BI واستخراج رؤى استراتيجية من مجموعات بيانات متعددة لدعم اتخاذ القرارات التنفيذية، مع أتمتة التقارير المتكررة.',
          keyInsights: [
            'أتمتة سحب ومطابقة البيانات وتقليص زمن استخراج التقارير الدورية بنسبة 35% بدون أخطاء يدوية.',
            'صياغة مقاييس DAX التفاعلية لحساب هوامش الربحية، ونمو الإيرادات، ومتابعة الأهداف الشهرية.',
            'تصميم لوحات تحكم بصرية تفاعلية وسهلة القراءة للمدراء وأصحاب المصلحة.',
          ],
          techStack: ['Power BI', 'Advanced Excel', 'SQL', 'DAX Measures', 'Power Query'],
        },
        {
          id: 'onyx-pro-model',
          title: 'نموذج مطابقة العمليات بنظام Onyx Pro المحاسبي',
          subtitle: 'إدارة القيود والدورة المستندية والربط التحليلي مع Excel',
          category: 'erp' as const,
          categoryLabel: 'أنظمة ERP وإدارة الأعمال',
          status: 'active' as const,
          role: 'أخصائي نظم محاسبية وتدقيق سجلات (ERP & Ledger Specialist)',
          period: 'خبرة تطبيقية ميدانية',
          summary: 'معالجة وتدقيق المعاملات المالية بنظام أونكس برو ERP (يمن سوفت)، ومطابقة موازين المراجعة وحسابات العملاء والموردين، وربطها بنماذج Excel التحليلية بدقة 100%.',
          keyInsights: [
            'مطابقة كاملة للفواتير وسندات القبض والصرف وإدخال القيود اليومية بدقة تامة وبلا فروقات.',
            'استخدام الجداول المحورية (Pivot Tables) وصيغ البحث المتقدمة في Excel لتحليل التدفقات النقدية.',
            'تنفيذ أعمال الطباعة السريعة باللمس باللغتين العربية والإنجليزية لسرعة الإنجاز تحت ضغط العمل.',
          ],
          techStack: ['Onyx Pro ERP', 'Odoo ERP', 'Microsoft Excel', 'General Ledger'],
        },
        {
          id: 'volt-3d',
          title: 'المعرض التفاعلي ثلاثي الأبعاد (Volt 3D Showroom)',
          subtitle: 'تطبيق ويب تفاعلي بتقنية WebGL و Three.js',
          category: 'interactive' as const,
          categoryLabel: 'تجارب الويب المتقدمة',
          status: 'opensource' as const,
          role: 'مطور واجهات تفاعلية ورسومات 3D (Interactive Web Developer)',
          period: 'مستودع مفتوح المصدر',
          summary: 'معرض رقمي متطور يعرض المنتجات بزاوية 360 درجة مع إضاءة فيزيائية حقيقية وظلال ديناميكية وتحكم كامل بالكاميرا عبر اللمس أو الفأرة، بأداء 60 إطار في الثانية.',
          keyInsights: [
            'أداء سريع ومستقر على شاشات الهواتف وأجهزة الكمبيوتر دون استهلاك زائد لمعالج الجهاز.',
            'استخدام خامات واقعية (PBR Materials) وتأثيرات إضاءة هندسية ثلاثية الأبعاد.',
          ],
          techStack: ['React', 'Three.js', 'WebGL', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/volt-3d-showroom',
        },
        {
          id: 'luqma-restaurant',
          title: 'تجربة مطعم لقمة التفاعلية (Luqma Experience)',
          subtitle: 'واجهة ويب حركية معتمدة على التمرير الانسيابي (GSAP)',
          category: 'interactive' as const,
          categoryLabel: 'تجارب الويب المتقدمة',
          status: 'opensource' as const,
          role: 'مطور واجهات حركية وتجربة مستخدم (Creative UI Developer)',
          period: 'مستودع مفتوح المصدر',
          summary: 'موقع ويب بتجربة حركية تفاعلية تستعرض الأطباق وقوائم الطعام عبر سكرول سينمائي انسيابي مستوحى من معايير Awwwards العالمية مع دعم كامل للاتجاه العربي (RTL).',
          keyInsights: [
            'تنسيق حركات متتابعة وسلسة (ScrollTrigger) مربوطة بنزول المستخدم دون أي تقطيع.',
            'تجربة مستخدم فائقة السرعة وخفيفة على متصفحات الهواتف الذكية.',
          ],
          techStack: ['React', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/luqma-restaurant',
        },
        {
          id: 'al-haidam-travel',
          title: 'موقع الحيدام للسياحة والسفر (Al-Haidam Travel)',
          subtitle: 'حل رقمي تجاري لاستعراض الباقات والرحلات السياحية',
          category: 'fullstack' as const,
          categoryLabel: 'تطوير الأنظمة وهندسة الويب',
          status: 'opensource' as const,
          role: 'مطور واجهات ومواقع تجارية (Frontend Web Developer)',
          period: 'مستودع مفتوح المصدر',
          summary: 'تطبيق ويب متكامل لعرض باقات السفر وتفاصيل برامج العمرة والرحلات الدولية، مصمم لتسهيل تجربة حجز واستفسار العملاء بسرعة وسلاسة على مختلف الأجهزة.',
          keyInsights: [
            'هيكلة متجاوبة 100% وسريعة التحميل على شبكات الهواتف المحمولة.',
            'تصميم واجهات عصرية بألوان مريحة ومسارات تحويل واضحة للمستخدم.',
          ],
          techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/al-haidam-travel',
        },
      ],
    },
    contact: {
      badge: 'التواصل المباشر',
      title: 'تواصل معنا',
      description: 'يسعدني التواصل معك ومناقشة تفاصيل المشاريع والفرص المهنية:',
      phone: '+967 772 350 130',
      email: 'Loqmanalheraty@gmail.com',
      location: 'صنعاء، اليمن (متاح للعمل الحضوري وعن بُعد)',
      whatsappBtn: 'محادثة فورية على واتساب',
      emailBtn: 'إرسال بريد إلكتروني',
      linkedinUrl: 'https://www.linkedin.com/in/loqman-alhetari',
      githubUrl: 'https://github.com/loqmanalhetari',
      websiteUrl: 'https://datxsci.com/',
    },
    footer: {
      rights: 'جميع الحقوق محفوظة © 2026 لقمان محمد الهتاري.',
      tagline: 'بُني بدقة وإتقان — ليعكس التوازن بين ذكاء الأعمال وهندسة النظم الرقمية.',
    },
  },
  en: {
    meta: {
      dir: 'ltr',
      lang: 'en',
      title: 'Loqman Al-Hetari | Professional Portfolio',
      downloadCV: 'Résumé (PDF)',
      location: "Sana'a, Yemen",
    },
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      interests: 'Interests',
      projects: 'Projects',
      contact: 'Get In Touch',
    },
    hero: {
      greeting: "Hello, I'm",
      name: 'Loqman Mohammed Al-Hetari',
      title: 'Analyzing Data, Engineering Digital Systems, and Applying AI with Precision.',
      description: 'Uniting data analysis, full-stack web engineering, and applied artificial intelligence to build pragmatic systems—transforming data into actionable insights, and ideas into high-value digital experiences, while keeping human discernment and strategic expertise at the core of every decision.',
      ctaProjects: 'Explore Projects',
      ctaContact: 'Direct WhatsApp Chat',
      stats: [
        { label: 'Automated BI Reporting', value: 'Power BI & SQL' },
        { label: 'Single Source of Truth', value: 'SSOT Architecture' },
        { label: 'Cloud Production Ready', value: 'Production-Ready' },
        { label: 'Applied AI Workflows', value: 'AI Multiplier' },
      ],
    },
    about: {
      badge: 'Professional Background',
      title: 'Who is Loqman Al-Hetari?',
      textP1: 'B.Sc. graduate in Management Information Systems (MIS) from Azal University (2026). My profile unites two core pillars: a grounded comprehension of business operations and documentary cycles, alongside strong technical mastery in data analytics and digital systems engineering.',
      textP2: 'I possess an agile, fast-learning mindset with the capability to onboard rapidly into any tech environment or cross-functional team. I architected and developed the DATX educational system from end to end, with hands-on enterprise ERP expertise in Onyx Pro and Odoo, while leveraging AI tools as an execution multiplier with strict human validation and data integrity.',
      highlights: [
        { title: 'Data Analytics & Business Intelligence', desc: 'Power BI, Advanced Excel, SQL, DAX' },
        { title: 'Systems & Software Engineering', desc: 'React, TypeScript, NestJS, MySQL' },
        { title: 'MIS & Enterprise ERP Systems', desc: 'Onyx Pro (YemenSoft), ledger reconciliation' },
        { title: 'Applied AI & Fast Adaptation', desc: 'Task automation, query acceleration, rapid tool adoption' },
      ],
    },
    skills: {
      badge: 'Technical & Analytical Arsenal',
      title: 'Skills & Core Competencies',
      categories: [
        {
          name: 'Business Intelligence & Analytics',
          type: 'bi',
          skills: ['Power BI', 'Advanced Microsoft Excel', 'DAX Measures', 'Power Query', 'Power Pivot', 'ETL Pipelines'],
        },
        {
          name: 'Databases & System Architecture',
          type: 'data',
          skills: ['SQL (Joins, Aggregations, CTEs)', 'MySQL', 'Prisma ORM', 'Relational Normalization', 'Schema Design'],
        },
        {
          name: 'Full-Stack Software Engineering',
          type: 'web',
          skills: ['React', 'TypeScript', 'Tailwind CSS', 'NestJS', 'REST APIs', 'RBAC Authorization', 'Git & Linux'],
        },
        {
          name: 'Enterprise ERP & Applied AI',
          type: 'ai',
          skills: ['Onyx Pro ERP (YemenSoft)', 'Odoo ERP', 'Applied Prompt Engineering', 'Python Data Processing', 'High-Speed Typing 99%+'],
        },
      ],
    },
    skillsVisual: [
      {
        name: 'Power BI & BI Modeling',
        category: 'Data Analytics',
        description: 'Building interactive dashboards, star schemas, and advanced DAX time-intelligence calculations.',
        gradient: 'from-amber-500 to-orange-600',
        icon3D: 'chart',
      },
      {
        name: 'SQL & Database Design',
        category: 'Databases',
        description: 'Relational normalization, high-performance querying, joins, and multi-tier CTE aggregations.',
        gradient: 'from-blue-600 to-indigo-700',
        icon3D: 'database',
      },
      {
        name: 'Python for Data Analysis',
        category: 'Data Preprocessing',
        description: 'Data cleaning, tabular transformation with Pandas, and exploratory statistical profiling.',
        gradient: 'from-emerald-500 to-teal-700',
        icon3D: 'code',
      },
      {
        name: 'Advanced Microsoft Excel',
        category: 'Financial Modeling',
        description: 'Mastery of Power Query, Power Pivot, financial models, and automated ledger reconciliations.',
        gradient: 'from-green-600 to-emerald-800',
        icon3D: 'excel',
      },
      {
        name: 'React & TypeScript',
        category: 'Frontend Engineering',
        description: 'Building modern responsive web frontends, component systems, and resilient client applications.',
        gradient: 'from-cyan-500 to-blue-600',
        icon3D: 'react',
      },
      {
        name: 'NestJS & Node.js',
        category: 'Backend Architectures',
        description: 'Engineered high-throughput REST APIs, Prisma ORM integrations, and strict RBAC authorization.',
        gradient: 'from-rose-600 to-red-700',
        icon3D: 'server',
      },
      {
        name: 'Onyx Pro ERP System',
        category: 'Enterprise ERP',
        description: 'Operational processing of journal vouchers, AR/AP, trial balances, and invoice reconciliations.',
        gradient: 'from-indigo-600 to-purple-800',
        icon3D: 'erp',
      },
      {
        name: 'Applied AI & Prompting',
        category: 'Productivity Multipliers',
        description: 'Prompt engineering for code refactoring, query drafting, and automated data cleaning.',
        gradient: 'from-purple-600 to-pink-600',
        icon3D: 'ai',
      },
    ],
    experience: {
      badge: 'Professional Track Record',
      title: 'Verifiable Work Experience',
      roles: [
        {
          company: 'DATX (Data & Technology Platform)',
          role: 'Systems Developer & Operations Lead',
          period: 'Apr 2026 – Present',
          location: "Sana'a, Yemen",
          bullets: [
            'Architected and deployed the DATX platform (Frontend, Backend, Database) on Ubuntu/Nginx production servers.',
            'Engineered a centralized admin dashboard with React & TypeScript managing seminars, tracks, and permissions.',
            'Structured a normalized MySQL database schema with Prisma ORM and secure NestJS REST APIs.',
          ],
          tech: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Prisma', 'Linux/Nginx', 'AI Tools'],
        },
        {
          company: 'Leading Technology Enterprise',
          role: 'Data Analyst Intern',
          period: 'Jan 2024 – May 2024',
          location: "Sana'a, Yemen",
          bullets: [
            'Cleaned and validated multi-source tabular datasets using Microsoft Excel and SQL with 100% data integrity.',
            'Designed interactive executive dashboards in Power BI tracking critical operational KPIs.',
            'Automated weekly reporting pipelines, reducing turnaround hours by 35%.',
          ],
          tech: ['Power BI', 'Microsoft Excel', 'SQL', 'Data Cleaning', 'KPIs'],
        },
        {
          company: 'Private Commercial Enterprise',
          role: 'Data Entry & Accounting Systems Specialist',
          period: 'Field Experience',
          location: "Sana'a, Yemen",
          bullets: [
            'Processed day-to-day entries and vouchers using Onyx Pro ERP (YemenSoft).',
            'Reconciled accounts receivable, ledger sheets, and supplier statements with Excel financial models.',
            'Executed high-speed bilingual touch typing with zero margin for error under pressure.',
          ],
          tech: ['Onyx Pro ERP', 'Excel Modeling', 'Reconciliation', 'High-Speed Typing'],
        },
      ],
    },
    interests: {
      badge: 'Focus & Ongoing Development',
      title: 'Areas of Technical Interest',
      description: 'Domains where I continuously deepen my focus to deliver measurable organizational value:',
      cards: [
        {
          title: 'Data Science & Analytics',
          subtitle: 'Patterns & Decision Support',
          description: 'Transforming complex transaction streams into actionable forecasting metrics and data-driven business models.',
          iconType: 'data' as const,
          tags: ['Predictive Insights', 'Statistical Analysis', 'Business Intelligence'],
        },
        {
          title: 'Digital Systems Architecture',
          subtitle: 'Resilient Scalable Backends',
          description: 'Designing resilient software solutions with normalized relational schemas, secure APIs, and stable Linux hosting.',
          iconType: 'web' as const,
          tags: ['Scalable Backends', 'Relational Schemas', 'Clean Code'],
        },
        {
          title: 'Workflow & Process Automation',
          subtitle: 'Operational Efficiency',
          description: 'Bridging enterprise ERP cycles with automated reporting pipelines to minimize human transcription errors.',
          iconType: 'automation' as const,
          tags: ['ERP Integration', 'Process Optimization', 'Reporting Pipelines'],
        },
        {
          title: 'Applied Generative AI',
          subtitle: 'Cognitive Execution Multipliers',
          description: 'Leveraging contemporary LLMs for rapid data validation, complex SQL drafting, and accelerated safe engineering.',
          iconType: 'ai' as const,
          tags: ['Prompt Engineering', 'AI-Augmented Dev', 'Automated QA'],
        },
      ],
    },
    projects: {
      badge: 'Verified Projects from GitHub & DATX',
      title: 'Systems & Analytics Solutions Built',
      description: 'Real production architectures and open-source systems with verified code and live links:',
      items: [
        {
          id: 'datx-platform',
          title: 'DATX Learning & Analytics Ecosystem',
          subtitle: 'End-to-End System & Centralized Admin Portal (SSOT)',
          category: 'fullstack' as const,
          categoryLabel: 'Full-Stack Systems & Web',
          status: 'production' as const,
          role: 'Lead Software Architect & Full-Stack Engineer',
          period: '2026 (Active Production)',
          summary: 'Integrated educational platform in data analytics and software engineering. Architected full infrastructure: responsive student portal, robust React/MUI Admin Dashboard, NestJS REST API with Single Source of Truth over 15+ MySQL relational tables, and hardened RBAC & JWT security on Ubuntu cloud servers.',
          keyInsights: [
            'Designed normalized MySQL schema (15+ tables) with Prisma ORM guaranteeing zero redundancy.',
            'Built responsive React/MUI admin dashboard managing seminars, students, and certificates in real-time.',
            'Hardened RBAC & JWT authentication with protected Zoom link delivery for registered students.',
            'Deployed on Ubuntu Linux cloud with Nginx Reverse Proxy and automated SSL certs.',
          ],
          techStack: ['React', 'TypeScript', 'NestJS', 'MySQL', 'Prisma ORM', 'Linux', 'Nginx'],
          liveUrl: 'https://datxsci.com/',
          githubUrl: 'https://github.com/loqmanalhetari/datx-platform',
        },
        {
          id: 'power-bi-lab',
          title: 'Executive BI & Analytics Intelligence Lab',
          subtitle: 'Data Modeling & Financial Dashboards (Power BI & SQL)',
          category: 'data' as const,
          categoryLabel: 'Data Analytics & Business Intelligence',
          status: 'active' as const,
          role: 'Data Analyst & BI Specialist',
          period: '2024 – 2026',
          summary: 'Built star-schema Power BI models generating actionable visibility from multi-source datasets to support executive decision-making, with automated recurring reports.',
          keyInsights: [
            'Automated recurring reporting turnaround by 35% with zero manual consolidation errors.',
            'Formulated dynamic Time-Intelligence DAX metrics tracking revenue velocity and profit margins.',
            'Designed clear executive visual layouts facilitating rapid data-driven decisions.',
          ],
          techStack: ['Power BI', 'Advanced Excel', 'SQL', 'DAX Measures', 'Power Query'],
        },
        {
          id: 'onyx-pro-model',
          title: 'Onyx Pro ERP Financial Reconciliation Model',
          subtitle: 'Operational Bookkeeping & Excel Integration',
          category: 'erp' as const,
          categoryLabel: 'Enterprise ERP & Business Systems',
          status: 'active' as const,
          role: 'Enterprise Systems & Ledger Specialist',
          period: 'Field Experience',
          summary: 'Audited daily ledger transactions in Onyx Pro ERP (YemenSoft), reconciling trial balances, vendor/customer statements, and cash flows with advanced Excel models at 100% precision.',
          keyInsights: [
            '100% reconciliation accuracy between banking statements and general ledger entries.',
            'Utilized Excel Pivot Models to extract immediate cash flow and liquidity visibility.',
            'High-speed bilingual touch typing ensuring rapid data processing under deadline pressure.',
          ],
          techStack: ['Onyx Pro ERP', 'Odoo ERP', 'Microsoft Excel', 'General Ledger'],
        },
        {
          id: 'volt-3d',
          title: 'Volt 3D WebGL Vehicle Showroom',
          subtitle: 'Interactive 3D Web Application (Three.js & WebGL)',
          category: 'interactive' as const,
          categoryLabel: 'Advanced Interactive Web',
          status: 'opensource' as const,
          role: 'Frontend & 3D WebGL Developer',
          period: 'Open-Source Repository',
          summary: 'WebGL 3D showcase enabling 360-degree orbital inspection with realistic materials and lighting, running at a smooth 60fps across mobile and desktop.',
          keyInsights: [
            'Consistent 60fps rendering across desktop and mobile viewports with zero CPU overhead.',
            'Full touch orbit controls and responsive camera projection.',
          ],
          techStack: ['React', 'Three.js', 'WebGL', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/volt-3d-showroom',
        },
        {
          id: 'luqma-restaurant',
          title: 'Luqma Interactive Dining Experience',
          subtitle: 'Cinematic Interactive Scroll Website (GSAP)',
          category: 'interactive' as const,
          categoryLabel: 'Advanced Interactive Web',
          status: 'opensource' as const,
          role: 'Creative Motion & UI Developer',
          period: 'Open-Source Repository',
          summary: 'Cinematic scrollytelling web experience delivering fluid narrative transitions with GSAP and ScrollTrigger, fully harmonious with Arabic RTL typography.',
          keyInsights: [
            'Awwwards-grade responsive scroll timelines synchronized with visual narrative.',
            'Zero layout shift and smooth inertia scrolling on mobile and desktop.',
          ],
          techStack: ['React', 'GSAP', 'ScrollTrigger', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/luqma-restaurant',
        },
        {
          id: 'al-haidam-travel',
          title: 'Al-Haidam Travel & Tourism Website',
          subtitle: 'Modern Travel Packages & Booking Showcase',
          category: 'fullstack' as const,
          categoryLabel: 'Full-Stack Systems & Web',
          status: 'opensource' as const,
          role: 'Frontend Web Developer',
          period: 'Open-Source Repository',
          summary: 'Commercial travel portal showcasing tourism packages, itineraries, and booking inquiries with fast loading and high conversion UX.',
          keyInsights: [
            'Clean modern user journey facilitating rapid package exploration.',
            '100% mobile-optimized layout with responsive card systems.',
          ],
          techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
          githubUrl: 'https://github.com/loqmanalhetari/al-haidam-travel',
        },
      ],
    },
    contact: {
      badge: 'Direct Dialogue',
      title: 'Get In Touch',
      description: 'Available for full-time roles, freelance technical consulting, and strategic data initiatives:',
      phone: '+967 772 350 130',
      email: 'Loqmanalheraty@gmail.com',
      location: "Sana'a, Yemen (Available locally & remotely)",
      whatsappBtn: 'WhatsApp Instant Chat',
      emailBtn: 'Send Direct Email',
      linkedinUrl: 'https://www.linkedin.com/in/loqman-alhetari',
      githubUrl: 'https://github.com/loqmanalhetari',
      websiteUrl: 'https://datxsci.com/',
    },
    footer: {
      rights: 'All rights reserved © 2026 Loqman Mohammed Al-Hetari.',
      tagline: 'Crafted with precision — balancing business intelligence with software engineering.',
    },
  },
};
