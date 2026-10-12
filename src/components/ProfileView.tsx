import React from 'react';
import { UserProfile, Badge, Municipality, Language, ViewTab } from '../types';
import { getTranslation } from '../utils/translations';
import { User, Trophy, ShieldCheck, MapPin, Bookmark, Award, HelpCircle, BookOpen, Clock } from 'lucide-react';

interface ProfileViewProps {
  userProfile: UserProfile;
  badges: Badge[];
  municipalities: Municipality[];
  language: Language;
  onUpdateMunicipality: (municipalityId: string) => void;
  onSelectTab: (tab: ViewTab) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({
  userProfile,
  badges,
  municipalities,
  language,
  onUpdateMunicipality,
  onSelectTab
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const selectedMunicipality = municipalities.find(m => m.id === userProfile.municipalityId);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* User Header Profile Card */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-700 to-amber-500 flex items-center justify-center text-white text-2xl font-black shadow-md">
            {userProfile.name.charAt(0)}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-extrabold text-slate-900">{userProfile.name}</h1>
              <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">
                {userProfile.subscriptionPlan} Plan
              </span>
            </div>
            <p className="text-xs text-slate-500">{userProfile.email}</p>
            <div className="flex items-center gap-2 pt-1 text-xs text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              <span>البلدية المحددة: <strong>{selectedMunicipality?.name || 'Stockholm'}</strong></span>
            </div>
          </div>
        </div>

        {/* XP Card */}
        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-950 space-y-1 shrink-0 w-full sm:w-auto text-center sm:text-right">
          <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-amber-900">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>رصيد النقاط (XP)</span>
          </div>
          <span className="text-2xl font-black text-amber-800 block">{userProfile.xpPoints} XP</span>
          <span className="text-[10px] text-amber-700 font-semibold block">مكتسبة من قراءة الدروس والاختبارات</span>
        </div>
      </div>

      {/* Municipality Preference Selector */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
        <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span>تحديد البلدية التابع لها لمحتوى مخصص:</span>
        </h3>
        <select
          value={userProfile.municipalityId}
          onChange={(e) => onUpdateMunicipality(e.target.value)}
          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none"
        >
          {municipalities.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name} ({m.nameSv}) - {m.region}
            </option>
          ))}
        </select>
      </div>

      {/* Earned Badges Grid */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <span>الأوسمة والمكافآت المكتسبة ({userProfile.earnedBadgeIds.length})</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {badges.map((b) => {
            const isUnlocked = userProfile.earnedBadgeIds.includes(b.id);
            const title = language === 'sv' ? b.titleSv : language === 'en' ? b.titleEn : b.title;

            return (
              <div
                key={b.id}
                className={`p-4 rounded-xl border transition-all space-y-2 ${
                  isUnlocked
                    ? 'bg-emerald-50/60 border-emerald-200 text-emerald-950'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                    isUnlocked ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'
                  }`}>
                    <Award className="w-4 h-4" />
                  </div>
                  {isUnlocked && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      مفتوح
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-xs">{title}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">{b.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam History Logs */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600" />
          <span>سجل محاولات بنك الأسئلة والاختبارات</span>
        </h2>

        {userProfile.questionBankHistory.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {userProfile.questionBankHistory.map((h) => (
              <div key={h.id} className="py-3 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{h.moduleTitle}</h4>
                  <span className="text-slate-400">{h.date}</span>
                </div>
                <div className="text-left font-bold">
                  <span className="text-emerald-600 text-sm">{h.scorePercentage}%</span>
                  <span className="text-slate-500 block text-[10px]">({h.correctAnswers}/{h.totalQuestions} صحيحة)</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-slate-500">لم تقم بإجراء أية اختبارات في بنك الأسئلة بعد.</p>
        )}
      </div>
    </div>
  );
};
