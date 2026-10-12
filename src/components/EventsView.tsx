import React, { useState } from 'react';
import { CommunityEvent, Language, UserProfile } from '../types';
import { getTranslation } from '../utils/translations';
import { Calendar, MapPin, Users, CheckCircle2, Clock, Video, ExternalLink } from 'lucide-react';

interface EventsViewProps {
  events: CommunityEvent[];
  userProfile: UserProfile;
  language: Language;
  onRsvpEvent: (eventId: string) => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  events,
  userProfile,
  language,
  onRsvpEvent
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] flex items-center gap-2">
          <Calendar className="w-7 h-7 text-[#5A5A40]" />
          <span>{t('upcomingEvents')}</span>
        </h1>
        <p className="text-[#909080] text-sm">
          ورش عمل، لقاءات مقهى اللغة السويدية (Språkcafé)، وجلسات الاستشارات القانونية الحضورية والإلكترونية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((evt) => {
          const title = language === 'sv' ? evt.titleSv : language === 'en' ? evt.titleEn : evt.title;
          const summary = language === 'sv' ? evt.summarySv : language === 'en' ? evt.summaryEn : evt.summary;
          const desc = language === 'sv' ? evt.descriptionSv : language === 'en' ? evt.descriptionEn : evt.description;

          const isRegistered = userProfile.registeredEventIds?.includes(evt.id);

          return (
            <div key={evt.id} className="bg-white p-6 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 border-b border-[#e5e5df] pb-3">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#efefe9] text-[#5A5A40] uppercase tracking-wider">
                    {evt.isFree ? 'مجاني بالكامل' : 'ورشة مدفوعة'}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#909080]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{evt.date} ({evt.time})</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-[#1a1a1a] leading-snug">{title}</h3>
                <p className="text-xs text-[#606050] leading-relaxed">{desc}</p>

                <div className="space-y-1 text-xs text-[#2c2c2c] font-medium">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#D4A373] shrink-0" />
                    <span>الموقع: {evt.venueName || evt.city}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#909080]">
                    <Users className="w-4 h-4 text-[#5A5A40] shrink-0" />
                    <span>الجهة المنظمة: {evt.organizer}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#e5e5df] flex items-center justify-between">
                {evt.spotsLeft && (
                  <span className="text-xs font-semibold text-[#5A5A40] bg-[#fdfaf5] border border-[#e5e5df] px-2.5 py-1 rounded-full">
                    متبقي {evt.spotsLeft} مقعد فقط
                  </span>
                )}

                <button
                  onClick={() => onRsvpEvent(evt.id)}
                  disabled={isRegistered}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                    isRegistered
                      ? 'bg-[#efefe9] text-[#5A5A40] border border-[#e5e5df]'
                      : 'bg-[#5A5A40] hover:bg-[#4a4a34] text-white shadow-xs'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isRegistered ? 'تم التسجيل بنجاح' : 'تأكيد الحضور (RSVP)'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
