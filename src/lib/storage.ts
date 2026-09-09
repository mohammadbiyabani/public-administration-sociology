import { Language, UserStudyState, QuizAttempt } from '../types/study';

const STORAGE_KEY = 'studysphere_user_state_v1';

const DEFAULT_STATE: UserStudyState = {
  preferredLang: 'en',
  theme: 'light',
  fontSize: 'md',
  bookmarkedTopicIds: ['pa-u1-t1', 'soc-u1-t1'],
  completedTopicIds: [],
  quizAttempts: [],
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  bookmarkedTopics: ['pa-u1-t1', 'soc-u1-t1'],
  completedTopics: [],
  quizHistory: []
};

export function loadUserState(): UserStudyState {
  if (typeof window === 'undefined') {
    return DEFAULT_STATE;
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      saveUserState(DEFAULT_STATE);
      return DEFAULT_STATE;
    }
    const parsed = JSON.parse(raw);
    const bookmarks = parsed.bookmarkedTopics || parsed.bookmarkedTopicIds || ['pa-u1-t1', 'soc-u1-t1'];
    const completed = parsed.completedTopics || parsed.completedTopicIds || [];
    const quizzes = parsed.quizHistory || parsed.quizAttempts || [];

    // update streak if necessary
    const today = new Date().toISOString().split('T')[0];
    if (parsed.lastActiveDate && parsed.lastActiveDate !== today) {
      const lastDate = new Date(parsed.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        parsed.streakDays = (parsed.streakDays || 1) + 1;
      } else if (diffDays > 1) {
        parsed.streakDays = 1;
      }
      parsed.lastActiveDate = today;
    }

    const merged: UserStudyState = {
      ...DEFAULT_STATE,
      ...parsed,
      bookmarkedTopicIds: bookmarks,
      bookmarkedTopics: bookmarks,
      completedTopicIds: completed,
      completedTopics: completed,
      quizAttempts: quizzes,
      quizHistory: quizzes
    };

    saveUserState(merged);
    return merged;
  } catch (error) {
    console.error('Error loading study state from localStorage:', error);
    return DEFAULT_STATE;
  }
}

export const loadUserStateFromStorage = loadUserState;

export function saveUserState(state: UserStudyState): void {
  if (typeof window === 'undefined') return;
  try {
    const normalized: UserStudyState = {
      ...state,
      bookmarkedTopics: state.bookmarkedTopics || state.bookmarkedTopicIds || [],
      bookmarkedTopicIds: state.bookmarkedTopicIds || state.bookmarkedTopics || [],
      completedTopics: state.completedTopics || state.completedTopicIds || [],
      completedTopicIds: state.completedTopicIds || state.completedTopics || [],
      quizAttempts: state.quizAttempts || state.quizHistory || [],
      quizHistory: state.quizHistory || state.quizAttempts || []
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  } catch (error) {
    console.error('Error saving study state to localStorage:', error);
  }
}

export const saveUserStateToStorage = saveUserState;

export function toggleTopicBookmarkInStorage(topicId: string): UserStudyState {
  const current = loadUserState();
  const currentList = current.bookmarkedTopics || current.bookmarkedTopicIds || [];
  const exists = currentList.includes(topicId);
  const updatedBookmarks = exists
    ? currentList.filter((id) => id !== topicId)
    : [...currentList, topicId];
  const newState: UserStudyState = {
    ...current,
    bookmarkedTopicIds: updatedBookmarks,
    bookmarkedTopics: updatedBookmarks
  };
  saveUserState(newState);
  return newState;
}

export const toggleBookmarkInStorage = toggleTopicBookmarkInStorage;

export function toggleTopicCompletedInStorage(topicId: string): UserStudyState {
  const current = loadUserState();
  const currentList = current.completedTopics || current.completedTopicIds || [];
  const exists = currentList.includes(topicId);
  const updatedCompleted = exists
    ? currentList.filter((id) => id !== topicId)
    : [...currentList, topicId];
  const newState: UserStudyState = {
    ...current,
    completedTopicIds: updatedCompleted,
    completedTopics: updatedCompleted
  };
  saveUserState(newState);
  return newState;
}

export const toggleCompletedInStorage = toggleTopicCompletedInStorage;

export function recordQuizAttemptInStorage(attempt: Omit<QuizAttempt, 'id' | 'date'>): QuizAttempt {
  const current = loadUserState();
  const newAttempt: QuizAttempt = {
    ...attempt,
    id: 'attempt_' + Date.now(),
    date: new Date().toISOString()
  };
  const updatedAttempts = [newAttempt, ...(current.quizAttempts || [])].slice(0, 50);
  saveUserState({ ...current, quizAttempts: updatedAttempts });
  return newAttempt;
}
