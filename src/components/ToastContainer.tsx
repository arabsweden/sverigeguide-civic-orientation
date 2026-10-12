import React, { useEffect } from 'react';
import { ToastNotification, Language } from '../types';
import { CheckCircle2, AlertCircle, Info, HelpCircle, X } from 'lucide-react';

interface ToastContainerProps {
  notifications: ToastNotification[];
  onDismiss: (id: string) => void;
  language: Language;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  notifications,
  onDismiss,
  language
}) => {
  useEffect(() => {
    notifications.forEach((item) => {
      const duration = item.autoCloseDuration || 5000;
      const timer = setTimeout(() => {
        onDismiss(item.id);
      }, duration);
      return () => clearTimeout(timer);
    });
  }, [notifications, onDismiss]);

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full px-4">
      {notifications.map((item) => {
        const title =
          language === 'sv'
            ? item.titleSv || item.title
            : language === 'en'
            ? item.titleEn || item.title
            : item.title;

        const message =
          language === 'sv'
            ? item.messageSv || item.message
            : language === 'en'
            ? item.messageEn || item.message
            : item.message;

        const actionLabel =
          language === 'sv'
            ? item.actionLabelSv || item.actionLabel
            : language === 'en'
            ? item.actionLabelEn || item.actionLabel
            : item.actionLabel;

        let icon = <Info className="w-5 h-5 text-blue-600" />;
        let borderClass = 'border-blue-200 bg-blue-50/95 text-blue-900';

        if (item.type === 'success') {
          icon = <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
          borderClass = 'border-emerald-200 bg-emerald-50/95 text-emerald-900';
        } else if (item.type === 'warning') {
          icon = <AlertCircle className="w-5 h-5 text-amber-600" />;
          borderClass = 'border-amber-200 bg-amber-50/95 text-amber-900';
        } else if (item.type === 'quiz_reminder') {
          icon = <HelpCircle className="w-5 h-5 text-indigo-600" />;
          borderClass = 'border-indigo-200 bg-indigo-50/95 text-indigo-900';
        }

        return (
          <div
            key={item.id}
            className={`p-3.5 rounded-xl border shadow-lg backdrop-blur-md flex items-start gap-3 transition-all animate-in slide-in-from-bottom-2 duration-200 ${borderClass}`}
          >
            <div className="shrink-0 mt-0.5">{icon}</div>
            <div className="flex-1 text-xs">
              <h5 className="font-bold mb-0.5">{title}</h5>
              <p className="text-slate-600 leading-relaxed">{message}</p>
              {item.onAction && actionLabel && (
                <button
                  onClick={() => {
                    item.onAction?.();
                    onDismiss(item.id);
                  }}
                  className="mt-2 font-semibold text-blue-700 underline cursor-pointer hover:text-blue-900"
                >
                  {actionLabel}
                </button>
              )}
            </div>
            <button
              onClick={() => onDismiss(item.id)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
