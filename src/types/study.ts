export type Language = 'en' | 'hi' | 'te';

export type MultilingualText = Record<Language, string>;

export interface ThinkerContribution {
  name: string;
  contribution: string;
}

export interface TopicContent {
  definition: string;
  introduction: string;
  detailedExplanation: string[];
  keyFeatures: string[];
  importantThinkers?: ThinkerContribution[];
  examples: string[];
  criticism: string[];
  contemporaryRelevance: string;
  examPerspective: string;
  quickRevisionPoints: string[];
  keywords: string[];
}

export interface Topic {
  id: string;
  slug: string;
  unitId: string;
  subjectId: 'public-administration' | 'sociology';
  title: MultilingualText;
  summary: MultilingualText;
  content: Record<Language, TopicContent>;
  readingTimeMinutes: number;
}

export interface Unit {
  id: string;
  number: number;
  slug: string;
  subjectId: 'public-administration' | 'sociology';
  title: MultilingualText;
  description: MultilingualText;
  topics: Topic[];
}

export interface Thinker {
  id: string;
  slug: string;
  subjectId: 'public-administration' | 'sociology';
  name: MultilingualText;
  era: string;
  biography: MultilingualText;
  majorWorks: string[];
  coreConcepts: MultilingualText[];
  criticism: MultilingualText;
  examRelevance: MultilingualText;
}

export interface MCQQuestion {
  id: string;
  subjectId: 'public-administration' | 'sociology';
  topicSlug?: string;
  unitSlug?: string;
  question: MultilingualText;
  options: Record<Language, string[]>;
  correctOptionIndex: number;
  explanation: MultilingualText;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface QuizAttempt {
  id: string;
  subjectId: 'public-administration' | 'sociology' | 'all';
  mode: 'quick' | 'unit' | 'exam';
  score: number;
  total: number;
  date: string;
  difficulty?: 'easy' | 'medium' | 'hard' | 'all';
}

export interface UserStudyState {
  preferredLang: Language;
  theme: 'light' | 'dark';
  fontSize: 'sm' | 'md' | 'lg';
  bookmarkedTopicIds: string[];
  completedTopicIds: string[];
  quizAttempts: QuizAttempt[];
  streakDays: number;
  lastActiveDate: string;
  bookmarkedTopics: string[];
  completedTopics: string[];
  quizHistory: QuizAttempt[];
}
