import React from 'react';
import { Language, ViewTab } from '../types';
import { getTranslation } from '../utils/translations';
import { Compass, ExternalLink, Shield, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  onSelectTab: (tab: ViewTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onSelectTab }) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  return (
    <footer className="bg-white border-t border-[#e5e5df] text-[#606050] text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#5A5A40] flex items-center justify-center text-white font-bold text-base">
                S
              </div>
              <span className="font-serif font-bold text-lg text-[#1a1a1a]">
                Sverige<span className="text-[#D4A373]">Guide</span>
              </span>
            </div>
            <p className="text-xs text-[#909080] leading-relaxed">
              {t('appTagline')}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[#5A5A40] font-bold">
              <Shield className="w-4 h-4 text-[#D4A373]" />
              <span>{t('verified2026')}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-[#1a1a1a] font-serif font-bold text-xs uppercase tracking-wider mb-3">
              {t('navCategories')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectTab('categories')} className="hover:text-[#5A5A40] transition-colors cursor-pointer">
                  {t('featuredCategories')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('question_bank')} className="hover:text-[#5A5A40] transition-colors cursor-pointer">
                  {t('navQuestionBank')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('ai_assistant')} className="hover:text-[#5A5A40] transition-colors cursor-pointer">
                  {t('navAiAssistant')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('laws')} className="hover:text-[#5A5A40] transition-colors cursor-pointer">
                  {t('navLaws')}
                </button>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h4 className="text-[#1a1a1a] font-serif font-bold text-xs uppercase tracking-wider mb-3">
              {t('officialSource')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.informationsverige.se" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] flex items-center gap-1">
                  <span>Informationsverige.se</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.migrationsverket.se" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] flex items-center gap-1">
                  <span>Migrationsverket</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.skatteverket.se" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] flex items-center gap-1">
                  <span>Skatteverket</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://arbetsformedlingen.se" target="_blank" rel="noopener noreferrer" className="hover:text-[#5A5A40] flex items-center gap-1">
                  <span>Arbetsförmedlingen</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h4 className="text-[#1a1a1a] font-serif font-bold text-xs uppercase tracking-wider mb-3">
              {t('navEvents')}
            </h4>
            <p className="text-xs text-[#909080] mb-3 leading-relaxed">
              أنشطة وورش عمل حضورية وإلكترونية لمساعدة القادمين الجدد في السويد.
            </p>
            <button
              onClick={() => onSelectTab('consultation')}
              className="w-full text-center px-4 py-2 bg-[#f5f5f0] hover:bg-[#efefe9] text-[#5A5A40] rounded-full text-xs font-bold border border-[#e5e5df] transition-colors cursor-pointer"
            >
              {t('navConsultation')}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#e5e5df] flex flex-col sm:flex-row items-center justify-between text-xs text-[#909080] gap-3">
          <p>© 2026 SverigeGuide. Built for Swedish Civic Orientation & Integration.</p>
          <div className="flex items-center gap-1 text-[#909080]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#D4A373] fill-[#D4A373]" />
            <span>for newcomers to Sweden</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
