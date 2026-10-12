import React, { useState, useEffect } from 'react';
import { 
  ViewTab, 
  Language, 
  UserProfile, 
  Lesson, 
  ToastNotification, 
  Booking 
} from './types';
import { 
  CATEGORIES_DATA, 
  PREMIUM_QUESTIONS_DATA, 
  AUTHORITIES_DATA, 
  MUNICIPALITIES_DATA, 
  LAW_UPDATES_DATA, 
  EVENTS_DATA, 
  BADGES_DATA, 
  INITIAL_USER_PROFILE 
} from './data/mockData';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { HomeDashboard } from './components/HomeDashboard';
import { CategoryList } from './components/CategoryList';
import { LessonDetail } from './components/LessonDetail';
import { QuestionBankView } from './components/QuestionBankView';
import { AiAssistantView } from './components/AiAssistantView';
import { AuthoritiesView } from './components/AuthoritiesView';
import { MunicipalitiesView } from './components/MunicipalitiesView';
import { LawsView } from './components/LawsView';
import { EventsView } from './components/EventsView';
import { ConsultationView } from './components/ConsultationView';
import { CertificateView } from './components/CertificateView';
import { ProfileView } from './components/ProfileView';

export function App() {
  const [currentTab, setCurrentTab] = useState<ViewTab>('home');
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile>(INITIAL_USER_PROFILE);
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  // Update HTML document direction when language changes
  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ar';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = language;
    }
  }, [language]);

  const addNotification = (notif: Omit<ToastNotification, 'id'>) => {
    const newNotif: ToastNotification = {
      ...notif,
      id: 'notif_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4)
    };
    setNotifications(prev => [...prev, newNotif]);
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Toggle lesson completion (+50 XP)
  const handleToggleCompleteLesson = (lessonId: string) => {
    const isAlreadyCompleted = userProfile.completedLessonIds.includes(lessonId);

    let updatedCompleted = [...userProfile.completedLessonIds];
    let xpDiff = 0;

    if (isAlreadyCompleted) {
      updatedCompleted = updatedCompleted.filter(id => id !== lessonId);
      xpDiff = -50;
    } else {
      updatedCompleted.push(lessonId);
      xpDiff = 50;

      addNotification({
        title: 'تهانينا! أكملت الدرس',
        titleSv: 'Grattis! Lektionen är slutförd',
        titleEn: 'Congratulations! Lesson completed',
        message: 'حصلت على +50 XP في رصيد معرفتك السويدية!',
        messageSv: 'Du fick +50 XP till din erfarenhetspoäng!',
        messageEn: 'You gained +50 XP towards your civic knowledge!',
        type: 'success'
      });
    }

    // Check badges
    let updatedBadges = [...userProfile.earnedBadgeIds];
    if (updatedCompleted.length >= 3 && !updatedBadges.includes('badge_civic_certified')) {
      updatedBadges.push('badge_civic_certified');
      addNotification({
        title: 'وسام جديد! خبير التوجيه المجتمعي',
        titleSv: 'Nytt märke! Samhällsexpert',
        titleEn: 'New Badge! Civic Expert',
        message: 'استحققت وسام إتمام وحدات التوجيه بنجاح!',
        messageSv: 'Du har låst upp märket för samhällsorientering!',
        messageEn: 'You unlocked the civic orientation badge!',
        type: 'success'
      });
    }

    setUserProfile(prev => ({
      ...prev,
      completedLessonIds: updatedCompleted,
      xpPoints: Math.max(0, prev.xpPoints + xpDiff),
      earnedBadgeIds: updatedBadges
    }));
  };

  // Toggle bookmark lesson
  const handleToggleBookmarkLesson = (lessonId: string) => {
    const isBookmarked = userProfile.savedLessonIds.includes(lessonId);
    const updated = isBookmarked
      ? userProfile.savedLessonIds.filter(id => id !== lessonId)
      : [...userProfile.savedLessonIds, lessonId];

    setUserProfile(prev => ({ ...prev, savedLessonIds: updated }));
  };

  // Bookmark question in Question Bank
  const handleBookmarkQuestion = (questionId: string) => {
    const saved = userProfile.savedQuestionIds || [];
    const isSaved = saved.includes(questionId);
    const updated = isSaved ? saved.filter(id => id !== questionId) : [...saved, questionId];

    setUserProfile(prev => ({ ...prev, savedQuestionIds: updated }));

    addNotification({
      title: isSaved ? 'تم إزالة السؤال من المفضلة' : 'تم حفظ السؤال في المفضلة',
      titleSv: isSaved ? 'Borttagen från favoriter' : 'Fråga sparad i favoriter',
      titleEn: isSaved ? 'Removed from saved' : 'Question bookmarked',
      message: 'تستطيع مراجعة الأسئلة المحفوظة في ملفك الشخصي.',
      messageSv: 'Du kan granska dina sparade frågor i profilen.',
      messageEn: 'You can review saved questions in your profile.',
      type: 'info'
    });
  };

  // Save lesson note
  const handleSaveLessonNote = (lessonId: string, noteText: string) => {
    setUserProfile(prev => ({
      ...prev,
      lessonNotes: {
        ...(prev.lessonNotes || {}),
        [lessonId]: noteText
      }
    }));
  };

  // Record exam attempt
  const handleRecordAttempt = (scorePercentage: number, wrongQuestionIds: string[]) => {
    const newHistory = {
      id: 'att_' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      moduleId: 1,
      moduleTitle: 'بنك الأسئلة الشامل 2026',
      totalQuestions: 10,
      correctAnswers: Math.round((scorePercentage / 100) * 10),
      scorePercentage,
      wrongQuestionIds,
      topicsToReview: []
    };

    setUserProfile(prev => ({
      ...prev,
      xpPoints: prev.xpPoints + Math.round(scorePercentage / 2),
      questionBankHistory: [newHistory, ...prev.questionBankHistory]
    }));

    addNotification({
      title: `نتيجة التقييم: ${scorePercentage}%`,
      titleSv: `Ditt resultat: ${scorePercentage}%`,
      titleEn: `Exam Score: ${scorePercentage}%`,
      message: `تم إضافة +${Math.round(scorePercentage / 2)} XP إلى رصيدك!`,
      messageSv: `Du fick +${Math.round(scorePercentage / 2)} XP!`,
      messageEn: `You gained +${Math.round(scorePercentage / 2)} XP!`,
      type: scorePercentage >= 80 ? 'success' : 'warning'
    });
  };

  // RSVP Event
  const handleRsvpEvent = (eventId: string) => {
    const currentReg = userProfile.registeredEventIds || [];
    if (!currentReg.includes(eventId)) {
      setUserProfile(prev => ({
        ...prev,
        registeredEventIds: [...currentReg, eventId]
      }));

      addNotification({
        title: 'تم تسجيل حضورك في الورشة بنجاح!',
        titleSv: 'Din anmälan till aktiviteten är bekräftad!',
        titleEn: 'Workshop registration confirmed!',
        message: 'أرسلنا لك تفاصيل الموعد وتأكيد الحضور.',
        messageSv: 'Vi har skickat alla detaljer för aktiviteten.',
        messageEn: 'Workshop details have been sent to you.',
        type: 'success'
      });
    }
  };

  // Book consultation
  const handleBookConsultation = (booking: Booking) => {
    addNotification({
      title: 'تم تأكيد حجز الاستشارة المباشرة!',
      titleSv: 'Din rådgivning är nu bokad!',
      titleEn: 'Consultation booking confirmed!',
      message: `تاريخ الموعد: ${booking.date} (${booking.timeSlot}).`,
      messageSv: `Datum: ${booking.date} (${booking.timeSlot}).`,
      messageEn: `Scheduled date: ${booking.date} (${booking.timeSlot}).`,
      type: 'success'
    });
  };

  // Issue Certificate
  const handleIssueCertificate = () => {
    setUserProfile(prev => ({
      ...prev,
      certificateIssued: true,
      certificateDate: new Date().toISOString().split('T')[0]
    }));

    addNotification({
      title: 'تهانينا! تم إصدار شهادتك الرسمية',
      titleSv: 'Grattis! Ditt officiella intyg är nu utfärdat',
      titleEn: 'Congratulations! Your official certificate has been issued',
      message: 'تستطيع الآن طباعة أو تحميل شهادة التوجيه المجتمعي السويدي.',
      messageSv: 'Du kan nu skriva ut eller ladda ner ditt intyg.',
      messageEn: 'You can now print or download your civic orientation certificate.',
      type: 'success'
    });
  };

  // Select lesson helper
  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#2c2c2c] flex flex-col font-sans selection:bg-[#D4A373]/30 selection:text-[#5A5A40]">
      {/* Header Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setSelectedLesson(null);
        }}
        language={language}
        onSelectLanguage={(lang) => setLanguage(lang)}
        userProfile={userProfile}
      />

      {/* Main Body View */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {selectedLesson ? (
          <LessonDetail
            lesson={selectedLesson}
            userProfile={userProfile}
            language={language}
            onBack={() => setSelectedLesson(null)}
            onToggleComplete={handleToggleCompleteLesson}
            onToggleBookmark={handleToggleBookmarkLesson}
            onSaveNote={handleSaveLessonNote}
            onAnswerQuizQuestion={(lessonId, scorePct) => handleRecordAttempt(scorePct, [])}
          />
        ) : (
          <>
            {currentTab === 'home' && (
              <HomeDashboard
                categories={CATEGORIES_DATA}
                laws={LAW_UPDATES_DATA}
                events={EVENTS_DATA}
                authorities={AUTHORITIES_DATA}
                userProfile={userProfile}
                language={language}
                onSelectTab={setCurrentTab}
                onSelectLesson={(lessonId) => {
                  const found = CATEGORIES_DATA.flatMap(c => c.lessons).find(l => l.id === lessonId);
                  if (found) setSelectedLesson(found);
                }}
              />
            )}

            {currentTab === 'categories' && (
              <CategoryList
                categories={CATEGORIES_DATA}
                userProfile={userProfile}
                language={language}
                onSelectLesson={handleSelectLesson}
              />
            )}

            {currentTab === 'question_bank' && (
              <QuestionBankView
                questions={PREMIUM_QUESTIONS_DATA}
                userProfile={userProfile}
                language={language}
                onSaveBookmarkQuestion={handleBookmarkQuestion}
                onRecordAttempt={handleRecordAttempt}
              />
            )}

            {currentTab === 'ai_assistant' && (
              <AiAssistantView language={language} />
            )}

            {currentTab === 'authorities' && (
              <AuthoritiesView
                authorities={AUTHORITIES_DATA}
                language={language}
              />
            )}

            {currentTab === 'municipalities' && (
              <MunicipalitiesView
                municipalities={MUNICIPALITIES_DATA}
                language={language}
              />
            )}

            {currentTab === 'laws' && (
              <LawsView
                laws={LAW_UPDATES_DATA}
                language={language}
              />
            )}

            {currentTab === 'events' && (
              <EventsView
                events={EVENTS_DATA}
                userProfile={userProfile}
                language={language}
                onRsvpEvent={handleRsvpEvent}
              />
            )}

            {currentTab === 'consultation' && (
              <ConsultationView
                userProfile={userProfile}
                language={language}
                onBookConsultation={handleBookConsultation}
              />
            )}

            {currentTab === 'certificate' && (
              <CertificateView
                userProfile={userProfile}
                language={language}
                totalLessonsCount={CATEGORIES_DATA.reduce((acc, c) => acc + c.lessons.length, 0)}
                onIssueCertificate={handleIssueCertificate}
              />
            )}

            {currentTab === 'profile' && (
              <ProfileView
                userProfile={userProfile}
                badges={BADGES_DATA}
                municipalities={MUNICIPALITIES_DATA}
                language={language}
                onUpdateMunicipality={(mId) => setUserProfile(prev => ({ ...prev, municipalityId: mId }))}
                onSelectTab={setCurrentTab}
              />
            )}
          </>
        )}
      </main>

      {/* Floating Toast Notifications */}
      <ToastContainer
        notifications={notifications}
        onDismiss={handleDismissNotification}
        language={language}
      />

      {/* Footer */}
      <Footer
        language={language}
        onSelectTab={setCurrentTab}
      />
    </div>
  );
}

export default App;
