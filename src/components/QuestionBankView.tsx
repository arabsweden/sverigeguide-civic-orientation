import React, { useState } from 'react';
import { PremiumQuestion, UserProfile, Language, QuestionType, DifficultyLevel, LegalStatus } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  HelpCircle, 
  Filter, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  RotateCcw, 
  Award, 
  ShieldCheck, 
  Scale, 
  Info,
  Sparkles
} from 'lucide-react';

interface QuestionBankViewProps {
  questions: PremiumQuestion[];
  userProfile: UserProfile;
  language: Language;
  onSaveBookmarkQuestion: (questionId: string) => void;
  onRecordAttempt: (scorePercentage: number, wrongQuestionIds: string[]) => void;
}

export const QuestionBankView: React.FC<QuestionBankViewProps> = ({
  questions,
  userProfile,
  language,
  onSaveBookmarkQuestion,
  onRecordAttempt
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  // Filters state
  const [selectedModule, setSelectedModule] = useState<number | 'all'>('all');
  const [selectedType, setSelectedType] = useState<QuestionType | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<LegalStatus | 'all'>('all');

  // Interactive exam state
  const [userChoices, setUserChoices] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  // Filter logic
  const filteredQuestions = questions.filter(q => {
    if (selectedModule !== 'all' && q.moduleId !== selectedModule) return false;
    if (selectedType !== 'all' && q.questionType !== selectedType) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (selectedStatus !== 'all' && q.legalStatus !== selectedStatus) return false;
    return true;
  });

  const handleSelectChoice = (questionId: string, choiceIdx: number) => {
    if (submitted) return;
    setUserChoices(prev => ({ ...prev, [questionId]: choiceIdx }));
  };

  const handleSubmitExam = () => {
    if (filteredQuestions.length === 0) return;

    let correct = 0;
    const wrongIds: string[] = [];

    filteredQuestions.forEach(q => {
      if (userChoices[q.id] === q.correctAnswer) {
        correct++;
      } else {
        wrongIds.push(q.id);
      }
    });

    const scorePct = Math.round((correct / filteredQuestions.length) * 100);
    setSubmitted(true);
    onRecordAttempt(scorePct, wrongIds);
  };

  const handleResetExam = () => {
    setUserChoices({});
    setSubmitted(false);
  };

  const getDifficultyBadge = (level: DifficultyLevel) => {
    switch (level) {
      case 'beginner': return <span className="px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider">مبتدئ</span>;
      case 'intermediate': return <span className="px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider">متوسط</span>;
      case 'advanced': return <span className="px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider">متقدم</span>;
    }
  };

  const getStatusBadge = (status: LegalStatus) => {
    switch (status) {
      case 'current_law': return <span className="px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] text-[10px] font-semibold">قانون نافذ</span>;
      case 'adopted_decision': return <span className="px-2.5 py-0.5 rounded-full bg-[#fdfaf5] text-[#D4A373] border border-[#e5e5df] text-[10px] font-semibold">قرار معتمد 2026</span>;
      case 'proposal_investigation': return <span className="px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] text-[10px] font-semibold">مقترح قيد الدراسة</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] flex items-center gap-2">
            <HelpCircle className="w-7 h-7 text-[#5A5A40]" />
            <span>{t('questionBankTitle')}</span>
          </h1>
          <p className="text-[#909080] text-sm mt-1">
            {t('questionBankDesc')}
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {/* Module filter */}
          <div>
            <label className="text-xs font-bold text-[#5A5A40] mb-1 block">{t('filterModule')}</label>
            <select
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] focus:outline-none"
            >
              <option value="all">{t('allModules')}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(m => (
                <option key={m} value={m}>الوحدة {m}</option>
              ))}
            </select>
          </div>

          {/* Type filter */}
          <div>
            <label className="text-xs font-bold text-[#5A5A40] mb-1 block">{t('filterType')}</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as QuestionType | 'all')}
              className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] focus:outline-none"
            >
              <option value="all">{t('allTypes')}</option>
              <option value="mcq">اختيار من متعدد (MCQ)</option>
              <option value="true_false">صح أو خطأ</option>
              <option value="scenario">سيناريو وحالة عملية</option>
              <option value="faq">سؤال شائع</option>
            </select>
          </div>

          {/* Difficulty filter */}
          <div>
            <label className="text-xs font-bold text-[#5A5A40] mb-1 block">{t('filterDifficulty')}</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
              className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] focus:outline-none"
            >
              <option value="all">{t('allDifficulties')}</option>
              <option value="beginner">{t('beginner')}</option>
              <option value="intermediate">{t('intermediate')}</option>
              <option value="advanced">{t('advanced')}</option>
            </select>
          </div>

          {/* Status filter */}
          <div>
            <label className="text-xs font-bold text-[#5A5A40] mb-1 block">{t('filterStatus')}</label>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as LegalStatus | 'all')}
              className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] focus:outline-none"
            >
              <option value="all">جميع الحالات القانونية</option>
              <option value="current_law">{t('currentLaw')}</option>
              <option value="adopted_decision">{t('adoptedDecision')}</option>
              <option value="proposal_investigation">{t('proposalInvestigation')}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Count & Action Bar */}
      <div className="flex items-center justify-between bg-[#fdfaf5] p-4 rounded-xl border border-[#e5e5df] text-xs text-[#5A5A40] font-bold">
        <span>عرض {filteredQuestions.length} سؤال مطابق للفلتر</span>

        {submitted && (
          <button
            onClick={handleResetExam}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e5e5df] text-[#5A5A40] rounded-full shadow-2xs hover:bg-[#efefe9] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة التقييم</span>
          </button>
        )}
      </div>

      {/* Question Cards List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, idx) => {
          const isSaved = userProfile.savedQuestionIds?.includes(q.id);
          const selectedChoice = userChoices[q.id];

          return (
            <div key={q.id} className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
              {/* Question Header tags */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e5e5df] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#5A5A40] bg-[#efefe9] px-2.5 py-1 rounded-full">
                    الوحدة {q.moduleId}: {q.moduleTitle}
                  </span>
                  {getDifficultyBadge(q.difficulty)}
                  {getStatusBadge(q.legalStatus)}
                </div>

                <button
                  onClick={() => onSaveBookmarkQuestion(q.id)}
                  className={`p-1.5 rounded-full border text-xs cursor-pointer ${
                    isSaved ? 'bg-[#D4A373] text-white border-[#D4A373]' : 'text-[#909080] hover:text-[#5A5A40] border-[#e5e5df]'
                  }`}
                  title="حفظ السؤال في المفضلة"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Question Prompt */}
              <div className="space-y-1">
                <h3 className="text-base font-serif font-bold text-[#1a1a1a] leading-snug">
                  {idx + 1}. {q.questionArabic}
                </h3>
                <p className="text-xs text-[#909080] font-mono font-medium">
                  المصطلح السويدي المرتبط: <span className="text-[#5A5A40] font-bold">{q.swedishTerm}</span>
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2">
                {q.choices.map((choice, choiceIdx) => {
                  const isSelected = selectedChoice === choiceIdx;
                  const isCorrectChoice = q.correctAnswer === choiceIdx;

                  let style = 'bg-[#fafaf8] border-[#e5e5df] text-[#2c2c2c] hover:bg-[#efefe9]';

                  if (submitted) {
                    if (isCorrectChoice) {
                      style = 'bg-[#efefe9] border-[#5A5A40] text-[#5A5A40] font-bold';
                    } else if (isSelected && !isCorrectChoice) {
                      style = 'bg-[#FFEFEF] border-[#CC5555] text-[#CC5555]';
                    }
                  } else if (isSelected) {
                    style = 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold shadow-2xs';
                  }

                  return (
                    <button
                      key={choiceIdx}
                      disabled={submitted}
                      onClick={() => handleSelectChoice(q.id, choiceIdx)}
                      className={`w-full p-3.5 rounded-xl border text-xs text-right transition-all cursor-pointer flex items-center justify-between gap-3 ${style}`}
                    >
                      <span>{choice}</span>
                      {submitted && isCorrectChoice && <CheckCircle2 className="w-4 h-4 text-[#5A5A40] shrink-0" />}
                      {submitted && isSelected && !isCorrectChoice && <XCircle className="w-4 h-4 text-[#CC5555] shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation section when submitted */}
              {submitted && (
                <div className="p-4 bg-[#fdfaf5] rounded-xl border-l-4 border-[#D4A373] space-y-2 text-xs text-[#2c2c2c] animate-in fade-in">
                  <div className="flex items-center gap-1.5 font-bold text-[#5A5A40]">
                    <Info className="w-4 h-4 text-[#D4A373]" />
                    <span>التوضيح والشرح القانوني:</span>
                  </div>
                  <p className="leading-relaxed text-[#606050]">{q.explanationArabic}</p>

                  <div className="pt-2 border-t border-[#e5e5df] flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="font-semibold text-[#5A5A40] bg-[#efefe9] px-2.5 py-0.5 rounded-full">
                      💡 {q.practicalAdvice}
                    </span>
                    <a
                      href={q.officialSourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5A5A40] font-bold hover:underline flex items-center gap-1"
                    >
                      <span>{q.authorityName}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Submit Button */}
      {filteredQuestions.length > 0 && !submitted && (
        <button
          onClick={handleSubmitExam}
          className="w-full py-3.5 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-sm rounded-full shadow-md transition-all cursor-pointer"
        >
          تسليم وتقييم جميع الأسئلة المعروضة
        </button>
      )}
    </div>
  );
};
