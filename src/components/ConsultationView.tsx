import React, { useState } from 'react';
import { Booking, Language, UserProfile } from '../types';
import { getTranslation } from '../utils/translations';
import { UserCheck, Calendar, Clock, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationViewProps {
  userProfile: UserProfile;
  language: Language;
  onBookConsultation: (booking: Booking) => void;
}

export const ConsultationView: React.FC<ConsultationViewProps> = ({
  userProfile,
  language,
  onBookConsultation
}) => {
  const t = (key: Parameters<typeof getTranslation>[1]) => getTranslation(language, key);

  const [userName, setUserName] = useState(userProfile.name);
  const [userEmail, setUserEmail] = useState(userProfile.email);
  const [userPhone, setUserPhone] = useState('070-123 45 67');
  const [consultationType, setConsultationType] = useState('استشارة إقامة ولم شمل');
  const [date, setDate] = useState('2026-08-20');
  const [timeSlot, setTimeSlot] = useState('10:00 - 10:45');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBooking: Booking = {
      id: 'bk_' + Date.now(),
      userName,
      userEmail,
      userPhone,
      consultationType,
      date,
      timeSlot,
      municipality: userProfile.municipalityId,
      notes,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    onBookConsultation(newBooking);
    setSubmitted(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-2">
        <h1 className="text-2xl sm:text-3xl font-serif text-[#1a1a1a] flex items-center gap-2">
          <UserCheck className="w-7 h-7 text-[#5A5A40]" />
          <span>حجز الجلسات الاستشارية والتوجيه الفردي</span>
        </h1>
        <p className="text-[#909080] text-sm">
          احجز موعداً افتراضياً مدته 45 دقيقة مع موجه ترسيخ معتمد للإجابة عن أسئلتك وتحديث ملفك المهني والقانوني.
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-[24px] border border-[#e5e5df] shadow-xs space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-[#5A5A40]">نوع الاستشارة المطلوبة:</label>
            <select
              value={consultationType}
              onChange={(e) => setConsultationType(e.target.value)}
              className="w-full p-3 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c] focus:outline-none"
            >
              <option value="استشارة إقامة ولم شمل">استشارة شروط الإقامة ولم الشمل والجنسية 2026</option>
              <option value="تحديث السيرة الذاتية للسوق السويدي">مراجعة وتحسين الـ CV لسوق العمل السويدي</option>
              <option value="توجيه دراسة SFI و Komvux">تخطيط مسارات دراسة SFI و Komvux ودعم CSN</option>
              <option value="استشارة سكن وشقق">توجيه قوائم السكن المباشرة والثانوية</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#5A5A40]">الاسم الكامل:</label>
              <input
                type="text"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#5A5A40]">البريد الإلكتروني:</label>
              <input
                type="email"
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#5A5A40]">رقم الهاتف:</label>
              <input
                type="text"
                required
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#5A5A40]">التاريخ:</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-[#5A5A40]">التوقيت المتاح:</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full p-2.5 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
              >
                <option value="10:00 - 10:45">10:00 - 10:45 صباحاً</option>
                <option value="14:00 - 14:45">14:00 - 14:45 ظهرًا</option>
                <option value="17:00 - 17:45">17:00 - 17:45 مساءً</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-[#5A5A40]">تفاصيل أو ملاحظات إضافية:</label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="اكتب أية استفسارات ترغب بتحديدها للمستشار مسبقاً..."
              className="w-full p-3 bg-[#f5f5f0] border border-[#e5e5df] rounded-xl text-xs text-[#2c2c2c]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold text-xs rounded-full shadow-md transition-all cursor-pointer"
          >
            تأكيد حجز الاستشارة المباشرة
          </button>
        </form>
      ) : (
        <div className="bg-[#fdfaf5] border border-[#e5e5df] p-8 rounded-[24px] text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-[#5A5A40] mx-auto" />
          <h2 className="text-xl font-serif text-[#1a1a1a]">تم تأكيد موعد استشارتك بنجاح!</h2>
          <p className="text-xs text-[#606050] max-w-md mx-auto leading-relaxed">
            تمت إضافة الحجز إلى جدول الاستشارات. أرسلنا رسالة تفاصيل الاجتماع ورابط الزوم الافتراضي لبريدك الإلكتروني: <strong>{userEmail}</strong>.
          </p>

          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2.5 bg-[#5A5A40] hover:bg-[#4a4a34] text-white font-bold text-xs rounded-full shadow-xs transition-all cursor-pointer"
          >
            حجز موعد استشارة آخر
          </button>
        </div>
      )}
    </div>
  );
};
