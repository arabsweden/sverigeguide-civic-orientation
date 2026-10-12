import React from 'react';
import { Category, LawUpdate, CommunityEvent, Authority, UserProfile, Language, ViewTab } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  Sparkles, 
  BookOpen, 
  HelpCircle, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Building2, 
  Calendar, 
  Scale, 
  Briefcase, 
  Home, 
  HeartPulse, 
  GraduationCap, 
  Receipt, 
  Users, 
  ChevronRight,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

interface HomeDashboardProps {
  categories: Category[];
  laws: LawUpdate[];
  events: CommunityEvent[];
  authorities: Authority[];
  userProfile: UserProfile;
  language: Language;
  onSelectTab: (tab: ViewTab) => void;
  onSelectLesson: (lessonId: string) => void;
}

export const HomeDashboard: React.FC<HomeDashboardProps> = ({
  categories,
  laws,
  events,
  authorities,
  userProfile,
  language,
  onSelectTab,
  onSelectLesson
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-emerald-600" />;
      case 'Home': return <Home className="w-6 h-6 text-amber-600" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-rose-600" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-teal-600" />;
      case 'Users': return <Users className="w-6 h-6 text-purple-600" />;
      case 'Scale': return <Scale className="w-6 h-6 text-blue-800" />;
      default: return <BookOpen className="w-6 h-6 text-blue-600" />;
    }
  };

  const totalLessons = categories.reduce((acc, cat) => acc + cat.lessons.length, 0);
  const completedCount = userProfile.completedLessonIds.length;
  const progressPercent = Math.round((completedCount / (totalLessons || 1)) * 100);

  return (
    <div className="space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-[32px] bg-[#5A5A40] text-white p-6 sm:p-10 shadow-lg border border-[#e5e5df]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('appTagline')}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-normal leading-tight">
            دليلك الشامل للعيش والاندماج والنجاح في السويد
          </h1>

          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
            وحدات تفاعلية، بنك أسئلة معتمد لاختبار الجنسية والمعرفة المجتمعية 2026، مستشار ذكي مدعوم بذكاء Gemini، ودليل رسمي للهيئات الحكومية والبلديات.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onSelectTab('categories')}
              className="px-6 py-2.5 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-sm rounded-full shadow-md transition-colors flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('startLearning')}</span>
            </button>

            <button
              onClick={() => onSelectTab('ai_assistant')}
              className="px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white font-bold text-sm rounded-full transition-colors flex items-center gap-2 cursor-pointer border border-white/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('askAi')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Progress Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-[24px] border border-[#e5e5df] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#909080] text-xs mb-2 font-medium">
            <span>{t('completedLessons')}</span>
            <BookOpen className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1a1a1a]">{completedCount}</span>
            <span className="text-xs text-[#909080]">/ {totalLessons}</span>
          </div>
          <div className="mt-3 w-full bg-[#efefe9] rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#D4A373] h-1.5 rounded-full" style={{ width: `${progressPercent}%` }} />
          </div>
        </div>

        <div className="bg-white p-5 rounded-[24px] border border-[#e5e5df] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#909080] text-xs mb-2 font-medium">
            <span>{t('xpEarned')}</span>
            <Award className="w-4 h-4 text-[#D4A373]" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1a1a1a]">{userProfile.xpPoints} XP</span>
          <p className="text-[11px] text-[#D4A373] font-bold mt-1">مستوى رائد التوجيه السويدي</p>
        </div>

        <div className="bg-white p-5 rounded-[24px] border border-[#e5e5df] shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-[#909080] text-xs mb-2 font-medium">
            <span>{t('badgesUnlocked')}</span>
            <ShieldCheck className="w-4 h-4 text-[#5A5A40]" />
          </div>
          <span className="text-2xl sm:text-3xl font-bold font-serif text-[#1a1a1a]">{userProfile.earnedBadgeIds.length}</span>
          <p className="text-[11px] text-[#5A5A40] font-bold mt-1">أوسمة إتقان مجتمعي</p>
        </div>

        <div 
          onClick={() => onSelectTab('certificate')}
          className="bg-[#fdfaf5] p-5 rounded-[24px] border border-[#e5e5df] shadow-xs flex flex-col justify-between cursor-pointer hover:border-[#D4A373] transition-all"
        >
          <div className="flex items-center justify-between text-[#5A5A40] text-xs mb-2">
            <span className="font-bold">{t('navCertificate')}</span>
            <Award className="w-4 h-4 text-[#D4A373]" />
          </div>
          <span className="text-xs text-[#606050] font-medium leading-tight">
            {userProfile.certificateIssued ? 'شهادتك جاهزة للتحميل!' : 'أكمل الوحدات للحصول على الشهادة الرسمية'}
          </span>
          <span className="text-xs font-bold text-[#D4A373] flex items-center gap-1 mt-2">
            <span>{t('viewDetails')}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Featured Civic Modules */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-serif text-[#1a1a1a]">{t('featuredCategories')}</h2>
            <p className="text-xs text-[#909080]">وحدات التوجيه المجتمعي الرسمية (Samhällsorientering)</p>
          </div>
          <button
            onClick={() => onSelectTab('categories')}
            className="text-xs font-bold text-[#D4A373] hover:text-[#c39262] flex items-center gap-1 cursor-pointer uppercase tracking-wider"
          >
            <span>عرض الكل ({categories.length})</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.slice(0, 4).map((category) => {
            const title = language === 'sv' ? category.titleSv : language === 'en' ? category.titleEn : category.title;
            const desc = language === 'sv' ? category.descriptionSv : language === 'en' ? category.descriptionEn : category.description;
            
            const categoryCompletedCount = category.lessons.filter(l => userProfile.completedLessonIds.includes(l.id)).length;
            const isCatComplete = categoryCompletedCount === category.lessons.length && category.lessons.length > 0;

            return (
              <div
                key={category.id}
                onClick={() => onSelectTab('categories')}
                className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs hover:shadow-md hover:border-[#D4A373] transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#f5f5f0] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    {isCatComplete && (
                      <span className="p-1 bg-[#efefe9] text-[#5A5A40] rounded-full" title="وحدة مكتملة">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg text-[#1a1a1a] mb-1 group-hover:text-[#5A5A40] transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs text-[#606050] leading-relaxed line-clamp-2 mb-4">
                    {desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#e5e5df] flex items-center justify-between text-xs text-[#909080]">
                  <span>{category.lessons.length} دروس</span>
                  <span className="font-bold text-[#D4A373] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>عرض الدروس</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* AI Assistant Callout Box */}
      <section className="bg-[#5A5A40] rounded-[32px] p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>توجيه فوري بالذكاء الاصطناعي</span>
          </div>
          <h3 className="text-2xl font-serif text-white">
            لديك سؤال محدد حول معاملة أو إجراء في السويد؟
          </h3>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            احصل على إجابة فورية ومباشرة مستندة للتعليمات الرسمية الصادرة عن Skatteverket و Migrationsverket و Arbetsförmedlingen.
          </p>
        </div>

        <button
          onClick={() => onSelectTab('ai_assistant')}
          className="px-6 py-3 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-sm rounded-full shadow-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 relative z-10"
        >
          <Sparkles className="w-4 h-4 text-white" />
          <span>اسأل المستشار الذكي الآن</span>
        </button>
      </section>

      {/* Recent Legal Updates & Upcoming Events Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Law Updates */}
        <div className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-[#5A5A40]" />
              <h3 className="font-serif text-xl text-[#1a1a1a]">{t('recentLaws')}</h3>
            </div>
            <button
              onClick={() => onSelectTab('laws')}
              className="text-xs font-bold text-[#D4A373] hover:text-[#c39262] uppercase tracking-wider cursor-pointer"
            >
              عرض الكل
            </button>
          </div>

          <div className="space-y-3">
            {laws.map((law) => {
              const title = language === 'sv' ? law.titleSv : language === 'en' ? law.titleEn : law.title;
              const summary = language === 'sv' ? law.summarySv : language === 'en' ? law.summaryEn : law.summary;

              return (
                <div key={law.id} className="p-4 bg-[#fdfaf5] rounded-xl border-l-4 border-[#D4A373] space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFEFEF] text-[#CC5555] uppercase">
                      {law.importance === 'critical' ? 'تحديث هام جداً' : 'تغيير قانوني'}
                    </span>
                    <span className="text-[11px] text-[#909080] font-mono">{law.date}</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#1a1a1a]">{title}</h4>
                  <p className="text-xs text-[#606050] leading-relaxed">{summary}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Community Events */}
        <div className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#5A5A40]" />
              <h3 className="font-serif text-xl text-[#1a1a1a]">{t('upcomingEvents')}</h3>
            </div>
            <button
              onClick={() => onSelectTab('events')}
              className="text-xs font-bold text-[#D4A373] hover:text-[#c39262] uppercase tracking-wider cursor-pointer"
            >
              عرض الكل
            </button>
          </div>

          <div className="space-y-3">
            {events.map((evt) => {
              const title = language === 'sv' ? evt.titleSv : language === 'en' ? evt.titleEn : evt.title;
              const summary = language === 'sv' ? evt.summarySv : language === 'en' ? evt.summaryEn : evt.summary;

              return (
                <div key={evt.id} className="p-3.5 rounded-xl bg-[#fafaf8] border border-[#e5e5df] space-y-1.5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#f5f5f0] rounded-xl flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-[#5A5A40]">AUG</span>
                      <span className="text-lg font-bold leading-none text-[#1a1a1a]">14</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1a1a1a]">{title}</p>
                      <p className="text-xs text-[#909080]">{evt.city} • {evt.time}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[#606050] leading-relaxed pt-1">{summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Authorities Directory Grid */}
      <section className="bg-white border border-[#e5e5df] rounded-[24px] p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-5 h-5 text-[#5A5A40]" />
              <h2 className="text-xl font-serif text-[#1a1a1a]">{t('officialAuthorities')}</h2>
            </div>
            <p className="text-xs text-[#909080]">دليل التواصل السريع والتراخيص مع أهم الهيئات الحكومية في السويد</p>
          </div>

          <button
            onClick={() => onSelectTab('authorities')}
            className="px-5 py-2.5 bg-[#5A5A40] hover:bg-[#4a4a34] text-white rounded-full text-xs font-bold transition-all cursor-pointer self-start sm:self-auto shadow-sm"
          >
            عرض جميع الهيئات
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {authorities.slice(0, 3).map((auth) => (
            <div key={auth.id} className="p-5 rounded-2xl bg-[#fafaf8] border border-[#e5e5df] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-[#1a1a1a]">{auth.name}</span>
                <span className="text-[11px] text-[#5A5A40] font-bold">{auth.nameSv}</span>
              </div>
              <p className="text-xs text-[#606050] line-clamp-2 leading-relaxed">
                {auth.description}
              </p>
              <div className="pt-2 flex items-center justify-between text-xs border-t border-[#e5e5df]">
                <span className="text-[#5A5A40] font-bold">{auth.phone}</span>
                <a
                  href={auth.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#909080] hover:text-[#1a1a1a] flex items-center gap-1"
                >
                  <span>الموقع الرسمي</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
