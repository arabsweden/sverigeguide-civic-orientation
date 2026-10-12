import { Authority, Municipality } from '../types';

export const AUTHORITIES_DATA: Authority[] = [
  {
    id: 'migrationsverket',
    name: 'مصلحة الهجرة السويدية',
    nameSv: 'Migrationsverket',
    nameEn: 'Swedish Migration Agency',
    category: 'الهجرة والإقامة',
    phone: '0771-235 235',
    emergencyPhone: undefined,
    website: 'https://www.migrationsverket.se',
    hours: 'الأثنين - الجمعة: 08:00 - 16:00',
    description: 'المصلحة المسؤولة عن طلبات الإقامة، اللجوء، تصاريح العمل والدراسة، ولم الشمل، والجنسية السويدية.',
    descriptionSv: 'Ansvarar för uppehållstillstånd, arbetstillstånd, asyl, familjeåterförening och medborgarskap.',
    descriptionEn: 'Responsible for residence permits, work permits, asylum, family reunification, and citizenship.',
    services: ['تجديد الإقامة المؤقتة', 'طلبات الإقامة الدائمة (PUT)', 'طلب الجنسية السويدية', 'دعوة لم الشمل']
  },
  {
    id: 'skatteverket',
    name: 'مصلحة الضرائب السويدية',
    nameSv: 'Skatteverket',
    nameEn: 'Swedish Tax Agency',
    category: 'الضرائب والسجل المدني',
    phone: '0771-567 567',
    website: 'https://www.skatteverket.se',
    hours: 'الأثنين - الجمعة: 09:00 - 16:00',
    description: 'المصلحة المسؤولة عن القيد المدني (Folkbokföring)، إصدار الرقم الشخصي والهوية السويدية، والإقرار الضريبي.',
    descriptionSv: 'Ansvarar för folkbokföring, personnummer, ID-kort och skattedeklaration.',
    descriptionEn: 'Manages population registration, Personnummer issuing, ID cards, and tax returns.',
    services: ['إصدار الرقم الشخصي (Personnummer)', 'إصدار بطاقة الهوية السويدية (ID-kort)', 'تغيير العنوان (Adressändring)', 'تقديم الإقرار الضريبي']
  },
  {
    id: 'arbetsformedlingen',
    name: 'مكتب العمل السويدي',
    nameSv: 'Arbetsförmedlingen',
    nameEn: 'Public Employment Service',
    category: 'التشغيل والترسيخ',
    phone: '0771-416 416',
    website: 'https://arbetsformedlingen.se',
    hours: 'الأثنين - الجمعة: 08:00 - 16:30',
    description: 'مصلحة مساعدة الباحثين عن عمل، وتنسيق خطة الترسيخ (Etableringsprogram) للمهاجرين الجدد.',
    descriptionSv: 'Hjälper arbetssökande och samordnar etableringsprogrammet för nyandlända.',
    descriptionEn: 'Assists job seekers and coordinates the integration program (Etablering) for newcomers.',
    services: ['تسجيل الباحثين عن عمل', 'برنامج الترسيخ (Etablering)', 'دعم التدريب المهني (Praktik)', 'التعويضات المالية للترسيخ']
  },
  {
    id: 'forsakringskassan',
    name: 'صندوق التأمينات الاجتماعية',
    nameSv: 'Försäkringskassan',
    nameEn: 'Swedish Social Insurance Agency',
    category: 'التأمين الاجتماعي والتعويضات',
    phone: '0771-524 524',
    website: 'https://www.forsakringskassan.se',
    hours: 'الأثنين - الجمعة: 08:00 - 16:00',
    description: 'مسؤولة عن صرف تعويضات إجازة الوالدين، علاوة الطفل، السكن، والتأمين الصحي والمرضي.',
    descriptionSv: 'Betalar ut föräldrapenning, barnbidrag, bostadsbidrag och sjukpenning.',
    descriptionEn: 'Pays parental benefits, child allowances, housing benefits, and sick pay.',
    services: ['علاوة الأطفال (Barnbidrag)', 'تعويض إجازة الوالدين (Föräldrapenning)', 'مساعدة السكن (Bostadsbidrag)', 'بطاقة التأمين الصحي الأوروبية']
  },
  {
    id: 'socialstyrelsen',
    name: 'المجلس الوطني للصحة والرفاه',
    nameSv: 'Socialstyrelsen',
    nameEn: 'National Board of Health and Welfare',
    category: 'الرعاية الصحية والاجتماعية',
    phone: '075-247 30 00',
    website: 'https://www.socialstyrelsen.se',
    hours: 'الأثنين - الجمعة: 08:30 - 16:00',
    description: 'الإشراف على جودة الخدمات الصحية والاجتماعية، وإصدار التراخيص المهنية للأطباء والممرضين المهاجرين.',
    descriptionSv: 'Utfärdar legitimation för utländsk sjukvårdspersonal och övervakar vårdens kvalitet.',
    descriptionEn: 'Issues professional licenses for foreign medical professionals and monitors care quality.',
    services: ['معادلة شهادات الطب والصيدلة والتمريض', 'التراخيص المهنية (Legitimation)']
  },
  {
    id: 'polisen',
    name: 'الشرطة السويدية',
    nameSv: 'Polismyndigheten',
    nameEn: 'Swedish Police Authority',
    category: 'الأمن والقضاء',
    phone: '114 14',
    emergencyPhone: '112',
    website: 'https://polisen.se',
    hours: '24/7 (الطوارئ: 112 / بلاغات غير عاجلة: 114 14)',
    description: 'مسؤولة عن الأمن العام، إصدار الجوازات السويدية، واستخراج السجل العدلي الخالي من السوابق (Utdrag ur belastningsregistret).',
    descriptionSv: 'Ansvarar för trygghet, svenskt pass och utdrag ur belastningsregistret.',
    descriptionEn: 'Responsible for public safety, Swedish passports, and police record checks.',
    services: ['السجل العدلي للعمل (Belastningsregister)', 'إصدار الجواز السويدي', 'الإبلاغ عن الحوادث والجرائم']
  }
];

export const MUNICIPALITIES_DATA: Municipality[] = [
  {
    id: 'stockholm',
    name: 'ستوكهولم',
    nameSv: 'Stockholms stad',
    region: 'Stockholms län',
    website: 'https://start.stockholm',
    sfiContact: '08-508 35 400',
    socialServicesPhone: '08-508 25 000',
    housingAgencyUrl: 'https://bostad.stockholm.se'
  },
  {
    id: 'goteborg',
    name: 'غوتنبرغ',
    nameSv: 'Göteborgs stad',
    region: 'Västra Götalands län',
    website: 'https://goteborg.se',
    sfiContact: '031-368 00 00',
    socialServicesPhone: '031-365 00 00',
    housingAgencyUrl: 'https://www.boplats.se'
  },
  {
    id: 'malmo',
    name: 'مالمو',
    nameSv: 'Malmö stad',
    region: 'Skåne län',
    website: 'https://malmo.se',
    sfiContact: '040-34 10 00',
    socialServicesPhone: '040-34 50 00',
    housingAgencyUrl: 'https://www.boplatssyd.se'
  },
  {
    id: 'uppsala',
    name: 'أوبسالا',
    nameSv: 'Uppsala kommun',
    region: 'Uppsala län',
    website: 'https://www.uppsala.se',
    sfiContact: '018-727 00 00',
    socialServicesPhone: '018-727 00 00',
    housingAgencyUrl: 'https://www.uppsalabostadsformedling.se'
  },
  {
    id: 'linkoping',
    name: 'لينشوبينغ',
    nameSv: 'Linköpings kommun',
    region: 'Östergötlands län',
    website: 'https://www.linkoping.se',
    sfiContact: '013-20 60 00',
    socialServicesPhone: '013-20 60 00',
    housingAgencyUrl: 'https://www.studentbostader.se'
  }
];
