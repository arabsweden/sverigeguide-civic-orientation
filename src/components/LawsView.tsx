import React from 'react';
import { LawUpdate, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { Scale, ExternalLink, AlertTriangle, ShieldCheck, Info } from 'lucide-react';

interface LawsViewProps {
  laws: LawUpdate[];
  language: Language;
}

export const LawsView: React.FC<LawsViewProps> = ({ laws, language }) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] flex items-center gap-2">
          <Scale className="w-7 h-7 text-[#5A5A40]" />
          <span>مستجدات التعديلات والقوانين السويدية 2026</span>
        </h1>
        <p className="text-[#909080] text-sm">
          تغطية مباشرة للقرارات والتعديلات التشريعية الصادرة عن البرلمان (Riksdagen) والحكومة المؤثرة على المقيمين الجدد.
        </p>
      </div>

      <div className="space-y-4">
        {laws.map((law) => {
          const title = language === 'sv' ? law.titleSv : language === 'en' ? law.titleEn : law.title;
          const summary = language === 'sv' ? law.summarySv : language === 'en' ? law.summaryEn : law.summary;

          return (
            <div key={law.id} className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5e5df] pb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                    law.importance === 'critical'
                      ? 'bg-[#fdfaf5] text-[#D4A373] border border-[#e5e5df]'
                      : 'bg-[#efefe9] text-[#5A5A40]'
                  }`}>
                    {law.importance === 'critical' ? 'تعديل هام جداً' : 'تحديث تشريعي'}
                  </span>
                  <span className="text-xs font-semibold text-[#5A5A40]">{law.category}</span>
                </div>
                <span className="text-xs text-[#909080]">{law.date}</span>
              </div>

              <h3 className="font-serif font-bold text-base text-[#1a1a1a] leading-snug">{title}</h3>
              <p className="text-xs text-[#606050] leading-relaxed">{summary}</p>

              {/* Impact on Newcomers */}
              <div className="p-4 bg-[#fdfaf5] border-l-4 border-[#D4A373] rounded-xl space-y-1 text-xs text-[#2c2c2c]">
                <div className="flex items-center gap-1.5 font-bold text-[#5A5A40]">
                  <Info className="w-4 h-4 text-[#D4A373]" />
                  <span>الأثر المباشر على القادمين الجدد:</span>
                </div>
                <p>{law.impactOnNewcomers}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <a
                  href={law.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#5A5A40] hover:underline flex items-center gap-1"
                >
                  <span>قراءة القرار في الجريدة الرسمية</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
