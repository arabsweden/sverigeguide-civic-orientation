import { LawUpdate } from '../types';

export const LAW_UPDATES_DATA: LawUpdate[] = [
  {
    id: 'law_2026_citizenship_test',
    title: 'اشتراط اختبار اللغة والمجتمع للحصول على الجنسية السويدية',
    titleSv: 'Krav på språk- och samhällskunskapsprov för medborgarskap 2026',
    titleEn: 'Mandatory Swedish Language and Civic Knowledge Tests for Citizenship 2026',
    date: '2026-06-01',
    category: 'الجنسية والهجرة',
    importance: 'critical',
    summary: 'أقرت الحكومة السويدية تطبيق اختبارات إلزامية في المعرفة باللغة والمجتمع للحصول على المواطنة.',
    summarySv: 'Riksdagen har beslutat om obligatoriska prov i svenska och samhällskunskap för svenskt medborgarskap.',
    summaryEn: 'The Swedish Parliament passed mandatory tests in Swedish language and civics for naturalization.',
    impactOnNewcomers: 'يتعين على الراغبين في التقديم للجنسية تحضير شهادة إتقان اللغة السويدية واجتياز اختبار الثقافة والسياسة السويدية.',
    officialLink: 'https://www.regeringen.se'
  },
  {
    id: 'law_2026_income_maintenance',
    title: 'تعديل الحد الأدنى لشرط الإعالة لم الشمل والإقامة الدائمة',
    titleSv: 'Justerat försörjningskrav för anhöriginvandring och PUT',
    titleEn: 'Adjusted Income Maintenance Requirement for Family Reunification and Permanent Residence',
    date: '2026-05-15',
    category: 'الإقامة ولم الشمل',
    importance: 'high',
    summary: 'رفع مستوى الدخل الشهري الأدنى المطلوب لكفالة الأسرة وتجديد تصاريح الإقامة الدائمة.',
    summarySv: 'Höjt inkomstkrav för att kunna försörja sin familj vid återförening.',
    summaryEn: 'Raised monthly income threshold required to sponsor family members and transition to PUT.',
    impactOnNewcomers: 'يجب التأكد من أن عقد العمل والراتب الشهري الصافي يلبي الشروط المالية الجديدة قبل التقديم.',
    officialLink: 'https://www.migrationsverket.se'
  },
  {
    id: 'law_2026_bankid_access',
    title: 'تسهيل حصول حاملي الرقم التنسيقي (Samordningsnummer) على BankID',
    titleSv: 'Förenklad tillgång till BankID för personer med samordningsnummer',
    titleEn: 'Simplified Access to BankID for Coordination Number Holders',
    date: '2026-04-10',
    category: 'البنوك والخدمات الرقمية',
    importance: 'medium',
    summary: 'إلزام البنوك بتقديم خدمات التوثيق الرقمي الأساسية لمن يملكون هوية مسبقة مؤكدة.',
    summarySv: 'Nya direktiv till banker att tillhandahålla e-legitimation till fler nyanlända.',
    summaryEn: 'New directives for banks to grant digital ID access to confirmed newcomers.',
    impactOnNewcomers: 'يسهل على المهاجرين الجدد الوصول للخدمات الحكومية وتطبيقات البلدية بسرعة دون انتظار طويل.',
    officialLink: 'https://www.fi.se'
  }
];
