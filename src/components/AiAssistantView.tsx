import React, { useState } from 'react';
import { AIAnswer, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  ExternalLink, 
  Lightbulb, 
  AlertCircle, 
  CheckCircle2, 
  Compass,
  MessageSquare
} from 'lucide-react';

interface AiAssistantViewProps {
  language: Language;
}

export const AiAssistantView: React.FC<AiAssistantViewProps> = ({ language }) => {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentAnswer, setCurrentAnswer] = useState<AIAnswer | null>(null);
  const [history, setHistory] = useState<AIAnswer[]>([]);

  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const recommendedQuestions = [
    'كيف أقدم على الإقامة الدائمة (PUT) وما الشروط المالية لعام 2026؟',
    'ما هي خطوات فتح حساب بنكي واقتناء BankID في السويد؟',
    'كيف تحسب أيام إجازة الوالدين (Föräldrapenning) وتستحق علاوة الطفل؟',
    'ما هو الفرق بين عقد الإيجار المباشر (Förstahand) والعقد الثانوي (Andrahand)؟'
  ];

  const handleAsk = async (promptText?: string) => {
    const q = promptText || question;
    if (!q.trim() || loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          language: language
        })
      });

      if (!response.ok) {
        throw new Error('فشل جلب التوجيهات الرقمية من الخادم.');
      }

      const data: AIAnswer = await response.json();
      data.question = q;

      setCurrentAnswer(data);
      setHistory(prev => [data, ...prev]);
      if (!promptText) setQuestion('');
    } catch (err: any) {
      console.error('AI Assistant Fetch Error:', err);
      setError('حدث خطأ أثناء جلب المعلومات الرسمية. يرجى المحاولة مرة أخرى.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Banner */}
      <div className="bg-[#2c2c22] text-[#f5f5f0] p-6 sm:p-8 rounded-[24px] border border-[#3c3c32] shadow-xl space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4A373]/20 text-[#D4A373] text-xs font-bold border border-[#D4A373]/30">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SverigeGuide AI Advisor</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
          {t('aiAssistantTitle')}
        </h1>

        <p className="text-[#c0c0b0] text-xs sm:text-sm leading-relaxed max-w-2xl">
          {t('aiAssistantDesc')}
        </p>
      </div>

      {/* Question Input Form */}
      <div className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-serif font-bold text-[#1a1a1a] block">
            طرح سؤالك حول المعاملات أو الحياة في السويد:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
              placeholder={t('askQuestionPlaceholder')}
              className="flex-1 p-3 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 focus:border-[#5A5A40]"
            />

            <button
              onClick={() => handleAsk()}
              disabled={loading || !question.trim()}
              className="px-6 py-3 bg-[#5A5A40] hover:bg-[#4a4a34] disabled:opacity-50 text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
              <span>إرسال</span>
            </button>
          </div>
        </div>

        {/* Recommended Prompts */}
        <div className="space-y-2 pt-2 border-t border-[#e5e5df]">
          <span className="text-xs font-bold text-[#5A5A40] block">{t('quickQuestions')}</span>
          <div className="flex flex-wrap gap-2">
            {recommendedQuestions.map((qText, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(qText)}
                disabled={loading}
                className="text-xs text-[#5A5A40] bg-[#efefe9] hover:bg-[#5A5A40] hover:text-white px-3 py-1.5 rounded-full text-right transition-colors border border-[#e5e5df] cursor-pointer"
              >
                {qText}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="p-8 bg-white rounded-[24px] border border-[#e5e5df] shadow-xs text-center space-y-3">
          <Loader2 className="w-8 h-8 text-[#5A5A40] animate-spin mx-auto" />
          <p className="text-xs font-bold text-[#5A5A40]">{t('generatingAnswer')}</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="p-4 bg-[#FFEFEF] border border-[#CC5555] text-[#CC5555] rounded-xl text-xs flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-[#CC5555] shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Active Output */}
      {currentAnswer && !loading && (
        <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-md space-y-6">
          <div className="flex items-center justify-between border-b border-[#e5e5df] pb-3">
            <div className="flex items-center gap-2 text-[#5A5A40] font-serif font-bold text-sm">
              <Sparkles className="w-5 h-5 text-[#D4A373]" />
              <span>التوجيه الرسمي للمستشار الذكي</span>
            </div>
            {currentAnswer.relatedCategory && (
              <span className="text-[10px] font-bold px-2.5 py-0.5 bg-[#efefe9] text-[#5A5A40] rounded-full uppercase tracking-wider">
                {currentAnswer.relatedCategory}
              </span>
            )}
          </div>

          {currentAnswer.question && (
            <h2 className="text-lg font-serif text-[#1a1a1a]">
              السؤال: "{currentAnswer.question}"
            </h2>
          )}

          {/* Summary Box */}
          <div className="p-4 bg-[#fdfaf5] rounded-xl border-l-4 border-[#D4A373] text-[#2c2c2c] font-bold text-xs sm:text-sm">
            {currentAnswer.summary}
          </div>

          {/* Detailed Content */}
          <div className="prose max-w-none text-xs sm:text-sm text-[#2c2c2c] leading-relaxed whitespace-pre-line">
            {currentAnswer.detailedAnswer}
          </div>

          {/* Practical Tip */}
          {currentAnswer.practicalTip && (
            <div className="p-4 bg-[#fdfaf5] border border-[#e5e5df] rounded-xl space-y-1.5 text-xs text-[#2c2c2c]">
              <div className="flex items-center gap-2 font-serif font-bold text-[#5A5A40]">
                <Lightbulb className="w-4 h-4 text-[#D4A373]" />
                <span>{t('practicalAdviceTitle')}</span>
              </div>
              <p>{currentAnswer.practicalTip}</p>
            </div>
          )}

          {/* Official Sources Citations */}
          {currentAnswer.officialSources && currentAnswer.officialSources.length > 0 && (
            <div className="pt-4 border-t border-[#e5e5df] space-y-2">
              <span className="text-xs font-bold text-[#5A5A40] block">{t('officialCitations')}</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentAnswer.officialSources.map((src, idx) => (
                  <a
                    key={idx}
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-[#fafaf8] hover:bg-[#efefe9] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] flex items-center justify-between font-medium transition-colors"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#5A5A40] shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-[11px] text-[#909080] border-t border-[#e5e5df] pt-3 italic">
            {currentAnswer.disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};
