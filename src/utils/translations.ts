import { Language } from '../types';

export const TRANSLATIONS = {
  ar: {
    appName: 'SverigeGuide',
    appTagline: 'منصة التوجيه المجتمعي والاندماج السويدي للقادمين الجدد',
    searchPlaceholder: 'ابحث عن درس، قانون، هيئة حكومية، أو سؤال...',
    
    // Nav
    navHome: 'الرئيسية',
    navCategories: 'وحدات التوجيه',
    navQuestionBank: 'بنك الأسئلة والاختبارات',
    navAiAssistant: 'المستشار الذكي',
    navAuthorities: 'دليل الهيئات',
    navMunicipalities: 'دليل البلديات',
    navLaws: 'مستجدات القوانين',
    navEvents: 'الأنشطة والورش',
    navConsultation: 'حجز مستشار',
    navCertificate: 'شهادة التوجيه',
    navProfile: 'الملف الشخصي',

    // Language Selector
    langArabic: 'العربية',
    langSwedish: 'Svenska',
    langEnglish: 'English',

    // Buttons & Labels
    startLearning: 'ابدأ التعلم الآن',
    askAi: 'اسأل المستشار الذكي',
    takeQuiz: 'ابدأ الاختبار التفاعلي',
    viewDetails: 'عرض التفاصيل',
    readLesson: 'قراءة الدرس',
    bookmark: 'حفظ في المفضلة',
    bookmarked: 'محفوظ',
    officialSource: 'المصدر الرسمي',
    verifiedDate: 'آخر مراجعة رسمية:',
    readingTime: 'دقيقة قراءة',
    completed: 'مكتمل',
    markCompleted: 'تحديد كـ مكتمل',
    share: 'مشاركة',
    downloadCert: 'تحميل الشهادة الرسمية',
    verified2026: 'محدث لعام 2026',

    // Dashboard stats
    completedLessons: 'الدروس المكتملة',
    xpEarned: 'نقاط الخبرة (XP)',
    badgesUnlocked: 'الأوسمة المكتسبة',
    quizScoreAverage: 'معدل النجاح في الاختبارات',

    // Sections
    featuredCategories: 'وحدات التوجيه المجتمعي (Samhällsorientering)',
    recentLaws: 'أحدث التغيرات القانونية لعام 2026',
    upcomingEvents: 'الورش واللقاءات القادمة',
    officialAuthorities: 'دليل الهيئات الحكومية السويدية',
    
    // AI Assistant
    aiAssistantTitle: 'المستشار الذكي للتوجيه السويدي (AI Advisor)',
    aiAssistantDesc: 'طرح أي سؤال حول المعاملات، لم الشمل، الإقامة، SFI، والضرائب للحصول على توجيه دقيق مدعوم بالمصادر الرسمية.',
    askQuestionPlaceholder: 'مثال: كيف أقدم على الإقامة الدائمة؟ ما هي شروط إجازة الوالدين؟ كيف أحصل على BankID؟',
    quickQuestions: 'أسئلة شائعة موصى بها:',
    generatingAnswer: 'جاري جلب التوجيهات الرسمية من المصادر السويدية...',
    officialCitations: 'المصادر والروابط الرسمية المعتمدة:',
    practicalAdviceTitle: 'نصيحة هامة للقادمين الجدد:',
    disclaimerTitle: 'إخلاء مسؤولية قانونية:',

    // Question Bank
    questionBankTitle: 'بنك الأسئلة واختبارات المواطنة (Medborgarskapsprov)',
    questionBankDesc: 'تدرب على أسئلة اختبار المعرفة المجتمعية واللغة السويدية المعتمدة لعام 2026.',
    filterModule: 'تصفية حسب الوحدة',
    filterType: 'نوع السؤال',
    filterDifficulty: 'مستوى الصعوبة',
    filterStatus: 'الحالة القانونية',
    allModules: 'جميع الوحدات (1 - 8)',
    allTypes: 'جميع الأنواع',
    allDifficulties: 'جميع المستويات',
    beginner: 'مبتدئ',
    intermediate: 'متوسط',
    advanced: 'متقدم',
    currentLaw: 'قانون نافذ',
    adoptedDecision: 'قرار معتمد',
    proposalInvestigation: 'مقترح قيد الدراسة',

    // Certificate
    certificateTitle: 'شهادة إتمام التوجيه المجتمعي السويدي',
    certificateSubtitle: 'SverigeGuide Certificate of Swedish Civic Orientation',
    certificateIssuedTo: 'تمنح هذه الشهادة رسمياً إلى:',
    certificateRequirements: 'متطلبات استخراج الشهادة:',
    certReq1: 'إكمال قراءة جميع الدروس الأساسية في وحدات التوجيه.',
    certReq2: 'تحقيق نسبة نجاح لا تقل عن 80% في بنك الأسئلة.',
    issueCertificateBtn: 'إصدار الشهادة الرسمية الآن',

    // Toast & Alerts
    lessonCompletedToast: 'تهانينا! أكملت الدرس وحصلت على +50 XP',
    badgeUnlockedToast: 'وسام جديد مُكتسب!',
    rsvpSuccessToast: 'تم تسجيل حضورك في الورشة بنجاح!',
    bookingSuccessToast: 'تم حجز استشارتك بنجاح! سنرسل التفاصيل لبريدك الإلكتروني.'
  },
  sv: {
    appName: 'SverigeGuide',
    appTagline: 'Samhällsorientering och integrationsplattform för nyanlända i Sverige',
    searchPlaceholder: 'Sök efter lektion, lag, myndighet eller fråga...',
    
    // Nav
    navHome: 'Start',
    navCategories: 'Samhällsmoduler',
    navQuestionBank: 'Frågebank & Prov',
    navAiAssistant: 'AI-Rådgivare',
    navAuthorities: 'Myndighetsguide',
    navMunicipalities: 'Kommuner',
    navLaws: 'Lagändringar',
    navEvents: 'Aktiviteter',
    navConsultation: 'Boka rådgivning',
    navCertificate: 'Intyg',
    navProfile: 'Profil',

    // Language Selector
    langArabic: 'العربية',
    langSwedish: 'Svenska',
    langEnglish: 'English',

    // Buttons & Labels
    startLearning: 'Börja lära nu',
    askAi: 'Fråga AI-rådgivaren',
    takeQuiz: 'Starta quiz',
    viewDetails: 'Visa detaljer',
    readLesson: 'Läs lektion',
    bookmark: 'Spara favorit',
    bookmarked: 'Sparad',
    officialSource: 'Officiell källa',
    verifiedDate: 'Senast granskad:',
    readingTime: 'min läsning',
    completed: 'Märkt som klar',
    markCompleted: 'Markera som klar',
    share: 'Dela',
    downloadCert: 'Ladda ner intyg',
    verified2026: 'Uppdaterad för 2026',

    // Dashboard stats
    completedLessons: 'Gjorda lektioner',
    xpEarned: 'Erfarenhetspoäng (XP)',
    badgesUnlocked: 'Upplåsta märke',
    quizScoreAverage: 'Genomsnitt på prov',

    // Sections
    featuredCategories: 'Samhällsorienteringsmoduler',
    recentLaws: 'Senaste lagändringarna 2026',
    upcomingEvents: 'Kommande aktiviteter & workshops',
    officialAuthorities: 'Svenska myndigheter',

    // AI Assistant
    aiAssistantTitle: 'AI-Rådgivare för svensk samhällsorientering',
    aiAssistantDesc: 'Ställ frågor om myndighetskontakter, uppehållstillstånd, SFI och skatter.',
    askQuestionPlaceholder: 'T.ex. Hur ansöker jag om PUT? Vilka regler gäller för föräldrapenning?',
    quickQuestions: 'Vanliga frågor:',
    generatingAnswer: 'Hämtar officiell information från svenska myndigheter...',
    officialCitations: 'Officiella källor och länkar:',
    practicalAdviceTitle: 'Viktigt tips för nyanlända:',
    disclaimerTitle: 'Juridisk ansvarsfriskrivning:',

    // Question Bank
    questionBankTitle: 'Frågebank och samhällsprov 2026',
    questionBankDesc: 'Öva på testfrågor inför samhälls- och språkprovet.',
    filterModule: 'Filtrera på modul',
    filterType: 'Frågetyp',
    filterDifficulty: 'Svårighetsgrad',
    filterStatus: 'Rättslig status',
    allModules: 'Alla moduler (1 - 8)',
    allTypes: 'Alla typer',
    allDifficulties: 'Alla nivåer',
    beginner: 'Nybörjare',
    intermediate: 'Medel',
    advanced: 'Avancerad',
    currentLaw: 'Gällande lag',
    adoptedDecision: 'Beslutad regel',
    proposalInvestigation: 'Utredningsförslag',

    // Certificate
    certificateTitle: 'Intyg i svensk samhällsorientering',
    certificateSubtitle: 'SverigeGuide Certificate of Swedish Civic Orientation',
    certificateIssuedTo: 'Detta intyg tilldelas officiellt:',
    certificateRequirements: 'Krav för att erhålla intyg:',
    certReq1: 'Slutför alla lektioner i samhällsmodulerna.',
    certReq2: 'Uppnå minst 80% rätt på frågorna i frågebanken.',
    issueCertificateBtn: 'Utfärda officiellt intyg nu',

    // Toast & Alerts
    lessonCompletedToast: 'Grattis! Du slutförde lektionen (+50 XP)',
    badgeUnlockedToast: 'Nytt märke upplåst!',
    rsvpSuccessToast: 'Du är nu anmäld till aktiviteten!',
    bookingSuccessToast: 'Din rådgivning är bokad! Bekräftelse skickas via e-post.'
  },
  en: {
    appName: 'SverigeGuide',
    appTagline: 'Swedish Civic Orientation and Integration Platform for Newcomers',
    searchPlaceholder: 'Search for lessons, laws, agencies, or questions...',
    
    // Nav
    navHome: 'Home',
    navCategories: 'Civic Modules',
    navQuestionBank: 'Question Bank & Exams',
    navAiAssistant: 'AI Advisor',
    navAuthorities: 'Agencies Directory',
    navMunicipalities: 'Municipal Hub',
    navLaws: 'Law Updates',
    navEvents: 'Events & Workshops',
    navConsultation: 'Book Advisor',
    navCertificate: 'Certificate',
    navProfile: 'Profile',

    // Language Selector
    langArabic: 'العربية',
    langSwedish: 'Svenska',
    langEnglish: 'English',

    // Buttons & Labels
    startLearning: 'Start Learning Now',
    askAi: 'Ask AI Advisor',
    takeQuiz: 'Take Practice Quiz',
    viewDetails: 'View Details',
    readLesson: 'Read Lesson',
    bookmark: 'Save Bookmark',
    bookmarked: 'Bookmarked',
    officialSource: 'Official Source',
    verifiedDate: 'Last verified:',
    readingTime: 'min read',
    completed: 'Completed',
    markCompleted: 'Mark as Completed',
    share: 'Share',
    downloadCert: 'Download Official Certificate',
    verified2026: 'Updated for 2026',

    // Dashboard stats
    completedLessons: 'Completed Lessons',
    xpEarned: 'Experience Points (XP)',
    badgesUnlocked: 'Badges Unlocked',
    quizScoreAverage: 'Average Exam Score',

    // Sections
    featuredCategories: 'Civic Orientation Modules (Samhällsorientering)',
    recentLaws: 'Latest 2026 Legal Updates',
    upcomingEvents: 'Upcoming Workshops & Meetups',
    officialAuthorities: 'Swedish Official Agencies Directory',

    // AI Assistant
    aiAssistantTitle: 'Swedish Civic AI Assistant',
    aiAssistantDesc: 'Ask questions about bureaucracy, residency, SFI, taxes, and family benefits.',
    askQuestionPlaceholder: 'e.g., How do I apply for permanent residency? What are parental leave rules?',
    quickQuestions: 'Recommended questions:',
    generatingAnswer: 'Fetching official guidance from Swedish government sources...',
    officialCitations: 'Official Sources & Citations:',
    practicalAdviceTitle: 'Practical Tip for Newcomers:',
    disclaimerTitle: 'Legal Disclaimer:',

    // Question Bank
    questionBankTitle: 'Question Bank & Citizenship Test Prep',
    questionBankDesc: 'Practice with verified questions for Swedish civics and language requirements.',
    filterModule: 'Filter by Module',
    filterType: 'Question Type',
    filterDifficulty: 'Difficulty Level',
    filterStatus: 'Legal Status',
    allModules: 'All Modules (1 - 8)',
    allTypes: 'All Types',
    allDifficulties: 'All Levels',
    beginner: 'Beginner',
    intermediate: 'Intermediate',
    advanced: 'Advanced',
    currentLaw: 'Current Law',
    adoptedDecision: 'Adopted Decision',
    proposalInvestigation: 'Under Investigation',

    // Certificate
    certificateTitle: 'Certificate of Swedish Civic Orientation',
    certificateSubtitle: 'SverigeGuide Certificate of Swedish Civic Orientation',
    certificateIssuedTo: 'This certificate is officially issued to:',
    certificateRequirements: 'Requirements to receive your certificate:',
    certReq1: 'Complete reading all core civic orientation lessons.',
    certReq2: 'Achieve an average score of at least 80% in the Question Bank.',
    issueCertificateBtn: 'Issue Official Certificate Now',

    // Toast & Alerts
    lessonCompletedToast: 'Congratulations! Lesson completed (+50 XP)',
    badgeUnlockedToast: 'New Badge Unlocked!',
    rsvpSuccessToast: 'RSVP confirmed for the workshop!',
    bookingSuccessToast: 'Consultation booked successfully! Details sent to your email.'
  }
};

export function getTranslation(lang: Language, key: keyof typeof TRANSLATIONS['en']): string {
  return TRANSLATIONS[lang]?.[key] || TRANSLATIONS['en'][key] || String(key);
}
