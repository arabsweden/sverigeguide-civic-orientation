import React, { useState } from 'react';
import { Category, Lesson, UserProfile, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  BookOpen, 
  Search, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Briefcase, 
  Home, 
  HeartPulse, 
  GraduationCap, 
  Receipt, 
  Users, 
  Scale 
} from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  userProfile: UserProfile;
  language: Language;
  onSelectLesson: (lesson: Lesson) => void;
}

export const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  userProfile,
  language,
  onSelectLesson
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');

  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#5A5A40]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#5A5A40]" />;
      case 'Home': return <Home className="w-6 h-6 text-[#D4A373]" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-[#5A5A40]" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-[#5A5A40]" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-[#D4A373]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#5A5A40]" />;
      case 'Scale': return <Scale className="w-6 h-6 text-[#5A5A40]" />;
      default: return <BookOpen className="w-6 h-6 text-[#5A5A40]" />;
    }
  };

  const filteredCategories = categories.filter(cat => {
    if (selectedCategoryFilter !== 'all' && cat.id !== selectedCategoryFilter) {
      return false;
    }
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const titleMatch = cat.title.toLowerCase().includes(query) || cat.titleSv.toLowerCase().includes(query) || cat.titleEn.toLowerCase().includes(query);
    const descMatch = cat.description.toLowerCase().includes(query);
    const lessonMatch = cat.lessons.some(l => l.title.toLowerCase().includes(query) || l.summary.toLowerCase().includes(query));

    return titleMatch || descMatch || lessonMatch;
  });

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a]">
            {t('featuredCategories')}
          </h1>
          <p className="text-[#909080] text-sm mt-1">
            منهاج التوجيه المجتمعي المقسم إلى 8 وحدات متكاملة تغطي كافة جوانب الحياة والنظم الحكومية في السويد.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#909080] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-10 pr-4 py-2 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] transition-all"
            />
          </div>

          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="px-4 py-2 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-sm text-[#2c2c2c] focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40]"
          >
            <option value="all">جميع الوحدات (8 وحدات)</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {language === 'sv' ? c.titleSv : language === 'en' ? c.titleEn : c.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-6">
        {filteredCategories.map((category) => {
          const categoryTitle = language === 'sv' ? category.titleSv : language === 'en' ? category.titleEn : category.title;
          const categoryDesc = language === 'sv' ? category.descriptionSv : language === 'en' ? category.descriptionEn : category.description;

          const completedCount = category.lessons.filter(l => userProfile.completedLessonIds.includes(l.id)).length;
          const totalCatLessons = category.lessons.length;
          const progressPct = totalCatLessons > 0 ? Math.round((completedCount / totalCatLessons) * 100) : 0;

          return (
            <div key={category.id} className="bg-white rounded-[24px] border border-[#e5e5df] shadow-xs overflow-hidden">
              {/* Category Header */}
              <div className="p-6 bg-[#fafaf8] border-b border-[#e5e5df] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f5f0] flex items-center justify-center shrink-0 border border-[#e5e5df]">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-serif text-[#1a1a1a]">{categoryTitle}</h2>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] uppercase tracking-wider">
                        {category.badgeTag}
                      </span>
                    </div>
                    <p className="text-xs text-[#606050] leading-relaxed">{categoryDesc}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="shrink-0 text-left min-w-[140px]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#5A5A40] mb-1">
                    <span>التقدم</span>
                    <span>{progressPct}% ({completedCount}/{totalCatLessons})</span>
                  </div>
                  <div className="w-full bg-[#efefe9] rounded-full h-2 overflow-hidden">
                    <div className="bg-[#D4A373] h-2 rounded-full transition-all" style={{ width: `${progressPct}%` }} />
                  </div>
                </div>
              </div>

              {/* Lessons List inside Category */}
              <div className="divide-y divide-[#e5e5df]">
                {category.lessons.map((lesson) => {
                  const lessonTitle = language === 'sv' ? lesson.titleSv : language === 'en' ? lesson.titleEn : lesson.title;
                  const lessonSummary = language === 'sv' ? lesson.summarySv : language === 'en' ? lesson.summaryEn : lesson.summary;

                  const isCompleted = userProfile.completedLessonIds.includes(lesson.id);

                  return (
                    <div
                      key={lesson.id}
                      onClick={() => onSelectLesson(lesson)}
                      className="p-5 hover:bg-[#fdfaf5] transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                    >
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2">
                          {isCompleted ? (
                            <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0" />
                          ) : (
                            <BookOpen className="w-4 h-4 text-[#909080] shrink-0" />
                          )}
                          <h3 className="font-serif font-bold text-sm text-[#1a1a1a] group-hover:text-[#5A5A40] transition-colors">
                            {lessonTitle}
                          </h3>
                        </div>
                        <p className="text-xs text-[#606050] leading-relaxed line-clamp-2 pr-6">
                          {lessonSummary}
                        </p>
                      </div>

                      <div className="flex items-center gap-4 text-xs shrink-0 self-end sm:self-auto">
                        <div className="flex items-center gap-1 text-[#909080]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{lesson.readingTimeMinutes} {t('readingTime')}</span>
                        </div>

                        <button className="px-4 py-2 rounded-full bg-[#efefe9] text-[#5A5A40] font-bold group-hover:bg-[#5A5A40] group-hover:text-white transition-all flex items-center gap-1">
                          <span>{t('readLesson')}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
