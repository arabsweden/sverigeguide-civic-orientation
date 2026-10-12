import { UserProfile } from '../types';
import { CATEGORIES_DATA } from './categoriesData';
import { PREMIUM_QUESTIONS_DATA } from './questionBankData';
import { AUTHORITIES_DATA, MUNICIPALITIES_DATA } from './authoritiesData';
import { LAW_UPDATES_DATA } from './lawUpdatesData';
import { EVENTS_DATA } from './eventsData';
import { BADGES_DATA } from './badgesData';

export const INITIAL_USER_PROFILE: UserProfile = {
  id: 'user_newcomer_01',
  name: 'سامر أحمد',
  email: 'samer.ahmed@example.se',
  municipalityId: 'stockholm',
  language: 'ar',
  completedLessonIds: ['fundamental_rights'],
  quizScores: {
    'fundamental_rights': 100
  },
  earnedBadgeIds: ['badge_welcome_pioneer', 'badge_rights_master'],
  xpPoints: 350,
  subscriptionPlan: 'free',
  savedAnswerIds: [],
  savedLessonIds: ['fundamental_rights', 'employment_contracts'],
  savedQuestionIds: ['q_mod1_01', 'q_mod2_01'],
  questionBankHistory: [
    {
      id: 'att_01',
      date: '2026-08-05',
      moduleId: 1,
      moduleTitle: 'المجتمع والحقوق والديمقراطية (Samhälle & Demokrati)',
      totalQuestions: 5,
      correctAnswers: 5,
      scorePercentage: 100,
      wrongQuestionIds: [],
      topicsToReview: []
    }
  ],
  lessonNotes: {
    'fundamental_rights': 'مبدأ العلنية (Offentlighetsprincipen) يتيح قراءة القرارات الرسمية للبلدية بسهولة.'
  },
  certificateIssued: false,
  certificateDate: undefined,
  isGuest: false,
  registeredEventIds: ['evt_orientation_workshop']
};

export {
  CATEGORIES_DATA,
  PREMIUM_QUESTIONS_DATA,
  AUTHORITIES_DATA,
  MUNICIPALITIES_DATA,
  LAW_UPDATES_DATA,
  EVENTS_DATA,
  BADGES_DATA
};
