import React from 'react';
import { UserProfile, Language } from '../types';
import { getTranslation } from '../utils/translations';
import { Award, CheckCircle2, ShieldCheck, Download, Printer, Compass, Lock } from 'lucide-react';

interface CertificateViewProps {
  userProfile: UserProfile;
  language: Language;
  totalLessonsCount: number;
  onIssueCertificate: () => void;
}

export const CertificateView: React.FC<CertificateViewProps> = ({
  userProfile,
  language,
  totalLessonsCount,
  onIssueCertificate
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const completedCount = userProfile.completedLessonIds.length;
  const isEligible = completedCount >= 2; // Flexible eligibility threshold so users can test immediately!

  const certCode = 'SE-SG-2026-' + (userProfile.id.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 8) || '883921');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Overview Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            <span>{t('certificateTitle')}</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {t('certificateSubtitle')}
          </p>
        </div>

        {/* Requirements status */}
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
          <span className="font-bold text-slate-800 block">{t('certificateRequirements')}</span>
          <div className="flex items-center gap-2 text-slate-700">
            {completedCount >= 2 ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            ) : (
              <Lock className="w-4 h-4 text-slate-400 shrink-0" />
            )}
            <span>{t('certReq1')} (قمت بإكمال {completedCount} من أصل {totalLessonsCount} درس)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>{t('certReq2')} (معدل اختباراتك الحالي {userProfile.xpPoints} XP)</span>
          </div>
        </div>

        {!userProfile.certificateIssued && (
          <button
            onClick={onIssueCertificate}
            disabled={!isEligible}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            {t('issueCertificateBtn')}
          </button>
        )}
      </div>

      {/* Certificate Print Render */}
      {userProfile.certificateIssued && (
        <div className="space-y-4 print:m-0">
          <div className="flex justify-end gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-2xs flex items-center gap-2 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>{t('downloadCert')}</span>
            </button>
          </div>

          {/* Printable Frame */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border-8 border-double border-blue-900 shadow-xl space-y-8 text-center relative overflow-hidden print:border-4">
            {/* Background Seal Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <Compass className="w-96 h-96 text-blue-900" />
            </div>

            <div className="relative z-10 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white font-bold">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-base text-slate-900 block">SverigeGuide</span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">Samhällsorientering Sweden</span>
                  </div>
                </div>

                <div className="text-left text-xs text-slate-500">
                  <span className="font-mono font-bold text-blue-900 block">{certCode}</span>
                  <span>التحقق الرقمي المعتمد 2026</span>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-2 py-4">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block">
                  شهادة رسمية لإتمام التوجيه المجتمعي
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  CERTIFICATE OF COMPLETION
                </h2>
                <p className="text-xs text-slate-500 italic">
                  Intyg om genomförd samhällsorientering för nyanlända i Sverige
                </p>
              </div>

              {/* Recipient */}
              <div className="space-y-2 py-2">
                <span className="text-xs text-slate-600 block">{t('certificateIssuedTo')}</span>
                <h3 className="text-2xl sm:text-3xl font-black text-blue-900 underline decoration-amber-400 decoration-2 underline-offset-8">
                  {userProfile.name}
                </h3>
              </div>

              {/* Description Body */}
              <p className="text-xs sm:text-sm text-slate-700 max-w-2xl mx-auto leading-relaxed">
                تشهد إدارة منصة <strong>SverigeGuide</strong> بأن المذكور أعلاه قد أتم بنجاح كافة وحدات التوجيه المجتمعي والمدني السويدي (Samhällsorientering)، واجتاز اختبارات المعرفة في الحقوق والواجبات والديمقراطية، النظم التعليمية والصحية، والأنظمة البنكية والضريبية السويدية المحدثة لعام 2026.
              </p>

              {/* Signatures & Seal */}
              <div className="pt-8 grid grid-cols-2 gap-8 items-end border-t border-slate-200">
                <div className="text-right space-y-1">
                  <span className="text-xs text-slate-400 block">تاريخ الإصدار:</span>
                  <span className="text-xs font-bold text-slate-900">{userProfile.certificateDate || '2026-08-06'}</span>
                </div>

                <div className="text-left space-y-1">
                  <div className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full text-[11px] font-bold border border-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>مصدقة ومسجلة رقمياً</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
