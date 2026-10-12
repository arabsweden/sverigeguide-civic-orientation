import React, { useState } from 'react';
import { Lesson, Language, UserProfile } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  ArrowLeft, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  HelpCircle, 
  Bookmark, 
  FileText, 
  Globe, 
  Lightbulb, 
  Sparkles,
  Award
} from 'lucide-react';

interface LessonDetailProps {
  lesson: Lesson;
  userProfile: UserProfile;
  language: Language;
  onBack: () => void;
  onToggleComplete: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string) => void;
  onSaveNote: (lessonId: string, noteText: string) => void;
  onAnswerQuizQuestion: (lessonId: string, scorePercentage: number) => void;
}

export const LessonDetail: React.FC<LessonDetailProps> = ({
  lesson,
  userProfile,
  language,
  onBack,
  onToggleComplete,
  onToggleBookmark,
  onSaveNote,
  onAnswerQuizQuestion
}) => {
  const [contentLanguage, setContentLanguage] = useState<'ar' | 'sv' | 'en'>(language);
  const [activeTab, setActiveTab] = useState<'content' | 'quiz' | 'notes'>('content');
  const [noteText, setNoteText] = useState(userProfile.lessonNotes?.[lesson.id] || '');
  const [savedNoteSuccess, setSavedNoteSuccess] = useState(false);

  // Quiz state
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [matchingPairsAnswers, setMatchingPairsAnswers] = useState<Record<string, string>>({});

  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const isCompleted = userProfile.completedLessonIds.includes(lesson.id);
  const isBookmarked = userProfile.savedLessonIds.includes(lesson.id);

  // Language specific content selection
  const title = contentLanguage === 'sv' ? lesson.titleSv : contentLanguage === 'en' ? lesson.titleEn : lesson.title;
  const summary = contentLanguage === 'sv' ? lesson.summarySv : contentLanguage === 'en' ? lesson.summaryEn : lesson.summary;
  const fullContent = contentLanguage === 'sv' ? lesson.fullContentSv : contentLanguage === 'en' ? lesson.fullContentEn : lesson.fullContent;
  const practicalExamples = contentLanguage === 'sv' ? lesson.practicalExamplesSv : contentLanguage === 'en' ? lesson.practicalExamplesEn : lesson.practicalExamples;

  const handleSaveNotes = () => {
    onSaveNote(lesson.id, noteText);
    setSavedNoteSuccess(true);
    setTimeout(() => setSavedNoteSuccess(false), 3000);
  };

  const handleQuizSubmit = () => {
    if (!lesson.quiz || lesson.quiz.length === 0) return;

    let correctCount = 0;
    lesson.quiz.forEach((q) => {
      if (q.type === 'matching' && q.matchingPairs) {
        let matchingCorrect = true;
        q.matchingPairs.forEach(pair => {
          if (matchingPairsAnswers[pair.id] !== pair.right) {
            matchingCorrect = false;
          }
        });
        if (matchingCorrect) correctCount += 1;
      } else {
        if (quizAnswers[q.id] === q.correctAnswerIndex) {
          correctCount += 1;
        }
      }
    });

    const pct = Math.round((correctCount / lesson.quiz.length) * 100);
    setQuizSubmitted(true);
    onAnswerQuizQuestion(lesson.id, pct);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Bar Actions */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#e5e5df] text-xs font-bold text-[#5A5A40] hover:bg-[#efefe9] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>العودة للدروس</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Content Language Toggle */}
          <div className="flex items-center gap-1 bg-[#efefe9] p-1 rounded-full text-xs">
            <Globe className="w-3.5 h-3.5 text-[#5A5A40] ml-1" />
            <button
              onClick={() => setContentLanguage('ar')}
              className={`px-3 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                contentLanguage === 'ar' ? 'bg-white shadow-2xs text-[#1a1a1a]' : 'text-[#6a6a60]'
              }`}
            >
              العربية
            </button>
            <button
              onClick={() => setContentLanguage('sv')}
              className={`px-3 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                contentLanguage === 'sv' ? 'bg-white shadow-2xs text-[#1a1a1a]' : 'text-[#6a6a60]'
              }`}
            >
              Svenska
            </button>
            <button
              onClick={() => setContentLanguage('en')}
              className={`px-3 py-0.5 rounded-full font-bold transition-all cursor-pointer ${
                contentLanguage === 'en' ? 'bg-white shadow-2xs text-[#1a1a1a]' : 'text-[#6a6a60]'
              }`}
            >
              English
            </button>
          </div>

          <button
            onClick={() => onToggleBookmark(lesson.id)}
            className={`p-2 rounded-full border text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-[#D4A373] border-[#D4A373] text-white'
                : 'bg-white border-[#e5e5df] text-[#5A5A40] hover:bg-[#efefe9]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-white text-white' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#909080]">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.readingTimeMinutes} {t('readingTime')}</span>
            </span>
            <span className="text-[#e5e5df]">•</span>
            <span className="text-[#909080]">{t('verifiedDate')} {lesson.lastVerifiedDate}</span>
          </div>

          <button
            onClick={() => onToggleComplete(lesson.id)}
            className={`px-4 py-2 rounded-full font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              isCompleted
                ? 'bg-[#efefe9] text-[#5A5A40] border border-[#e5e5df]'
                : 'bg-[#5A5A40] text-white hover:bg-[#4a4a34] shadow-sm'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isCompleted ? t('completed') : t('markCompleted')}</span>
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] leading-snug">
          {title}
        </h1>

        <div className="p-4 bg-[#fdfaf5] rounded-xl border-l-4 border-[#D4A373] text-xs sm:text-sm text-[#2c2c2c] leading-relaxed">
          <strong className="text-[#5A5A40]">ملخص الدرس: </strong>{summary}
        </div>
      </div>

      {/* Navigation Tabs (Content, Quiz, Notes) */}
      <div className="flex items-center gap-2 border-b border-[#e5e5df] pb-2 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'content'
              ? 'bg-[#5A5A40] text-white shadow-xs font-bold'
              : 'text-[#6a6a60] hover:bg-[#efefe9]'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>محتوى الدرس والمعرفة</span>
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'quiz'
              ? 'bg-[#5A5A40] text-white shadow-xs font-bold'
              : 'text-[#6a6a60] hover:bg-[#efefe9]'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>الاختبار التفاعلي ({lesson.quiz.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('notes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all cursor-pointer ${
            activeTab === 'notes'
              ? 'bg-[#5A5A40] text-white shadow-xs font-bold'
              : 'text-[#6a6a60] hover:bg-[#efefe9]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>ملاحظاتي الشخصية</span>
        </button>
      </div>

      {/* Tab 1: Full Content */}
      {activeTab === 'content' && (
        <div className="space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-6">
            <div className="prose max-w-none text-[#2c2c2c] text-sm sm:text-base leading-relaxed whitespace-pre-line">
              {fullContent}
            </div>

            {/* Practical Examples */}
            {practicalExamples && practicalExamples.length > 0 && (
              <div className="p-5 bg-[#fdfaf5] border-l-4 border-[#D4A373] rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#5A5A40] font-serif font-bold text-sm">
                  <Lightbulb className="w-5 h-5 text-[#D4A373]" />
                  <span>تطبيقات وأمثلة عملية في الحياة اليومية بالسويد:</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#606050]">
                  {practicalExamples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D4A373] font-bold">•</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Official Source link */}
            <div className="pt-4 border-t border-[#e5e5df] flex items-center justify-between text-xs text-[#909080]">
              <span className="font-medium">{t('officialSource')}: {lesson.officialSource}</span>
              <a
                href={lesson.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A5A40] font-bold hover:underline flex items-center gap-1"
              >
                <span>زيارة الموقع الرسمي</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Quiz */}
      {activeTab === 'quiz' && (
        <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif text-[#1a1a1a]">اختبار الفهم التفاعلي لهذا الدرس</h2>
            <span className="text-xs text-[#909080]">{lesson.quiz.length} أسئلة موجهة</span>
          </div>

          <div className="space-y-6">
            {lesson.quiz.map((q, idx) => {
              const questionText = contentLanguage === 'sv' ? q.questionSv : contentLanguage === 'en' ? q.questionEn : q.question;
              const options = contentLanguage === 'sv' ? q.optionsSv : contentLanguage === 'en' ? q.optionsEn : q.options;
              const explanation = contentLanguage === 'sv' ? q.explanationSv : contentLanguage === 'en' ? q.explanationEn : q.explanation;

              if (q.type === 'matching' && q.matchingPairs) {
                return (
                  <div key={q.id} className="p-5 bg-[#fafaf8] rounded-2xl border border-[#e5e5df] space-y-4">
                    <h3 className="font-serif text-sm font-bold text-[#1a1a1a]">
                      السؤال {idx + 1}: {questionText}
                    </h3>

                    <div className="space-y-3">
                      {q.matchingPairs.map((pair) => (
                        <div key={pair.id} className="p-3 bg-white rounded-xl border border-[#e5e5df] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                          <span className="font-bold text-[#5A5A40]">{pair.left}</span>
                          <select
                            disabled={quizSubmitted}
                            value={matchingPairsAnswers[pair.id] || ''}
                            onChange={(e) => setMatchingPairsAnswers({ ...matchingPairsAnswers, [pair.id]: e.target.value })}
                            className="p-2 border border-[#e5e5df] rounded-lg text-[#2c2c2c] bg-[#f5f5f0] focus:outline-none"
                          >
                            <option value="">-- اختر الإجابة المناسبة --</option>
                            {q.matchingPairs?.map(p => (
                              <option key={p.id} value={p.right}>{p.right}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>

                    {quizSubmitted && (
                      <div className="p-3 bg-[#fdfaf5] text-[#5A5A40] text-xs rounded-xl font-medium border-l-4 border-[#D4A373]">
                        <strong>التوضيح: </strong>{explanation}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <div key={q.id} className="p-5 bg-[#fafaf8] rounded-2xl border border-[#e5e5df] space-y-3">
                  <h3 className="font-serif text-sm font-bold text-[#1a1a1a]">
                    السؤال {idx + 1}: {questionText}
                  </h3>

                  <div className="space-y-2">
                    {options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correctAnswerIndex === optIdx;

                      let btnStyle = 'bg-white border-[#e5e5df] text-[#2c2c2c] hover:bg-[#efefe9]';
                      if (quizSubmitted) {
                        if (isCorrect) btnStyle = 'bg-[#efefe9] border-[#5A5A40] text-[#5A5A40] font-bold';
                        else if (isSelected && !isCorrect) btnStyle = 'bg-[#FFEFEF] border-[#CC5555] text-[#CC5555]';
                      } else if (isSelected) {
                        btnStyle = 'bg-[#5A5A40] text-white border-[#5A5A40] font-bold';
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={quizSubmitted}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                          className={`w-full p-3 rounded-xl border text-xs text-right transition-all cursor-pointer ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {quizSubmitted && (
                    <div className="p-3 bg-[#fdfaf5] text-[#5A5A40] text-xs rounded-xl font-medium border-l-4 border-[#D4A373]">
                      <strong>التوضيح: </strong>{explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!quizSubmitted ? (
            <button
              onClick={handleQuizSubmit}
              className="w-full py-3 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-sm rounded-full shadow-md transition-all cursor-pointer"
            >
              تسليم ومراجعة إجابات الاختبار
            </button>
          ) : (
            <div className="p-4 bg-[#fdfaf5] text-[#5A5A40] rounded-xl border border-[#e5e5df] text-center space-y-1">
              <p className="font-bold text-sm">تم تقييم الاختبار وحفظ النتيجة بنجاح! 🎉</p>
              <p className="text-xs text-[#909080]">تستطيع الآن العودة أو مراجعة الدروس الأخرى.</p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Notes */}
      {activeTab === 'notes' && (
        <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
          <h2 className="text-lg font-serif text-[#1a1a1a]">ملاحظاتي الشخصية حول هذا الدرس</h2>
          <p className="text-xs text-[#909080]">سجل استفساراتك أو النقاط الهامة لتدوينها ومراجعتها لاحقاً.</p>

          <textarea
            rows={6}
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
            placeholder="اكتب ملاحظاتك هنا (مثال: أحتاج مراجعة شروط الرقم الشخصي لدى Skatteverket)..."
            className="w-full p-4 border border-[#e5e5df] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40] bg-[#fafaf8]"
          />

          <div className="flex items-center justify-between">
            <button
              onClick={handleSaveNotes}
              className="px-6 py-2.5 bg-[#5A5A40] hover:bg-[#4a4a34] text-white font-bold text-xs rounded-full shadow-xs transition-all cursor-pointer"
            >
              حفظ الملاحظات
            </button>

            {savedNoteSuccess && (
              <span className="text-xs text-[#5A5A40] font-bold animate-in fade-in">
                ✓ تم حفظ الملاحظة بنجاح
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
