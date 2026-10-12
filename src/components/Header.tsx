import React from 'react';
import { Language, ViewTab, UserProfile } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  Compass, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  Building2, 
  MapPin, 
  Scale, 
  Calendar, 
  Award, 
  User, 
  Globe,
  Trophy
} from 'lucide-react';

interface HeaderProps {
  currentTab: ViewTab;
  onSelectTab: (tab: ViewTab) => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  userProfile: UserProfile;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  language,
  onSelectLanguage,
  userProfile
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const navItems: { tab: ViewTab; label: string; icon: React.ReactNode }[] = [
    { tab: 'home', label: t('navHome'), icon: <Compass className="w-4 h-4" /> },
    { tab: 'categories', label: t('navCategories'), icon: <BookOpen className="w-4 h-4" /> },
    { tab: 'question_bank', label: t('navQuestionBank'), icon: <HelpCircle className="w-4 h-4" /> },
    { tab: 'ai_assistant', label: t('navAiAssistant'), icon: <Sparkles className="w-4 h-4 text-amber-500" /> },
    { tab: 'authorities', label: t('navAuthorities'), icon: <Building2 className="w-4 h-4" /> },
    { tab: 'municipalities', label: t('navMunicipalities'), icon: <MapPin className="w-4 h-4" /> },
    { tab: 'laws', label: t('navLaws'), icon: <Scale className="w-4 h-4" /> },
    { tab: 'events', label: t('navEvents'), icon: <Calendar className="w-4 h-4" /> },
    { tab: 'certificate', label: t('navCertificate'), icon: <Award className="w-4 h-4" /> },
    { tab: 'profile', label: t('navProfile'), icon: <User className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5e5df] shadow-xs">
      {/* Top Banner */}
      <div className="bg-[#5A5A40] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-[#D4A373] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              {t('verified2026')}
            </span>
            <span className="hidden sm:inline font-medium text-white/90">
              {t('appTagline')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* XP Points */}
            <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-0.5 rounded-full border border-white/10">
              <Trophy className="w-3.5 h-3.5 text-[#D4A373]" />
              <span className="font-bold text-white text-xs">{userProfile.xpPoints} XP</span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-[#efefe9] p-1 rounded-full text-[#5A5A40]">
              <Globe className="w-3.5 h-3.5 text-[#5A5A40]/70 ml-1" />
              <button
                onClick={() => onSelectLanguage('ar')}
                className={`px-3 py-0.5 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                  language === 'ar'
                    ? 'bg-white text-[#1a1a1a] shadow-xs'
                    : 'text-[#6a6a60] hover:text-[#1a1a1a]'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => onSelectLanguage('sv')}
                className={`px-3 py-0.5 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                  language === 'sv'
                    ? 'bg-white text-[#1a1a1a] shadow-xs'
                    : 'text-[#6a6a60] hover:text-[#1a1a1a]'
                }`}
              >
                Svenska
              </button>
              <button
                onClick={() => onSelectLanguage('en')}
                className={`px-3 py-0.5 text-[11px] font-semibold rounded-full transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-[#1a1a1a] shadow-xs'
                    : 'text-[#6a6a60] hover:text-[#1a1a1a]'
                }`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#5A5A40] flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform">
              S
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl tracking-tight text-[#1a1a1a] font-serif">
                  Sverige<span className="text-[#D4A373]">Guide</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 bg-[#efefe9] text-[#5A5A40] rounded-md uppercase tracking-wider">
                  SE
                </span>
              </div>
              <p className="text-[11px] text-[#5A5A40] font-medium hidden sm:block uppercase tracking-wider">
                Integration Portal
              </p>
            </div>
          </div>

          {/* AI Quick Button */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTab('ai_assistant')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t('askAi')}</span>
            </button>
          </div>
        </div>

        {/* Scrollable Nav Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-2 border-t border-[#e5e5df] text-sm font-medium">
          {navItems.map((item) => {
            const isActive = currentTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => onSelectTab(item.tab)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5A5A40] text-white shadow-sm font-semibold'
                    : 'text-[#5a5a50] hover:bg-[#efefe9] hover:text-[#1a1a1a]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
