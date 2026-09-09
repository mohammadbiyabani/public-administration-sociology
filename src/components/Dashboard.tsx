import React from 'react';
import {
  Flame,
  CheckCircle2,
  Bookmark,
  Award,
  BookOpen,
  ArrowRight,
  TrendingUp,
  Clock,
  RotateCcw
} from 'lucide-react';
import { Language, Topic, UserStudyState } from '../types/study';
import { getAllTopics } from '../data/studyData';
import { getUIText } from '../data/i18n';

interface DashboardProps {
  currentLang: Language;
  studyState: UserStudyState;
  onNavigateToTopic: (topic: Topic) => void;
  onNavigateToQuiz: () => void;
  onRemoveBookmark: (topicId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  currentLang,
  studyState,
  onNavigateToTopic,
  onNavigateToQuiz,
  onRemoveBookmark
}) => {
  const allTopics = getAllTopics();
  const paTopics = allTopics.filter((t) => t.subjectId === 'public-administration');
  const socTopics = allTopics.filter((t) => t.subjectId === 'sociology');

  const paCompleted = paTopics.filter((t) => studyState.completedTopics.includes(t.id)).length;
  const socCompleted = socTopics.filter((t) => studyState.completedTopics.includes(t.id)).length;

  const paPercentage = paTopics.length > 0 ? Math.round((paCompleted / paTopics.length) * 100) : 0;
  const socPercentage = socTopics.length > 0 ? Math.round((socCompleted / socTopics.length) * 100) : 0;

  const bookmarkedTopics = allTopics.filter((t) => studyState.bookmarkedTopics.includes(t.id));

  // Calculate quiz averages
  const totalQuizzes = studyState.quizHistory.length;
  const totalQuestions = studyState.quizHistory.reduce((acc, q) => acc + q.total, 0);
  const totalCorrect = studyState.quizHistory.reduce((acc, q) => acc + q.score, 0);
  const quizAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  return (
    <div id="student-dashboard-root" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Top Banner with Streak & Greetings */}
      <div className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 p-6 sm:p-8 text-white shadow-lg">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
              UPSC Aspirant Portal
            </span>
            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
              {getUIText('dashboard', currentLang)}
            </h1>
            <p className="mt-1 max-w-xl text-xs text-amber-100 sm:text-sm">
              Track your syllabus completion, revision bookmarks, and Prelims MCQ test metrics.
            </p>
          </div>

          {/* Streak Counter Block */}
          <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-amber-600 shadow-md">
              <Flame className="h-7 w-7 fill-amber-500 text-amber-500 animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black">{studyState.streakDays} Day{studyState.streakDays !== 1 ? 's' : ''}</span>
              <span className="block text-[11px] font-semibold text-amber-100 uppercase tracking-wider">
                {getUIText('streakCount', currentLang)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Cards Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Public Administration Progress */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              Syllabus Coverage
            </span>
            <span className="text-xs font-bold text-slate-500">{paCompleted}/{paTopics.length} Topics</span>
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
            {getUIText('publicAdmin', currentLang)}
          </h3>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="text-slate-600 dark:text-slate-400">Progress</span>
              <span className="text-amber-700 dark:text-amber-400">{paPercentage}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full bg-amber-600 transition-all duration-300"
                style={{ width: `${paPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sociology Progress */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              Syllabus Coverage
            </span>
            <span className="text-xs font-bold text-slate-500">{socCompleted}/{socTopics.length} Topics</span>
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
            {getUIText('sociology', currentLang)}
          </h3>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="text-slate-600 dark:text-slate-400">Progress</span>
              <span className="text-purple-700 dark:text-purple-400">{socPercentage}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className="h-full bg-purple-600 transition-all duration-300"
                style={{ width: `${socPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* MCQ Test Metrics */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              Prelims Readiness
            </span>
            <Award className="h-4 w-4 text-emerald-600" />
          </div>
          <h3 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
            MCQ Diagnostic Stats
          </h3>

          <div className="mt-3 grid grid-cols-2 gap-2 text-center">
            <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
              <span className="text-lg font-black text-slate-900 dark:text-white">{totalQuizzes}</span>
              <span className="block text-[10px] uppercase font-semibold text-slate-500">Drills Taken</span>
            </div>
            <div className="rounded-xl bg-slate-50 p-2.5 dark:bg-slate-800/60">
              <span className="text-lg font-black text-emerald-600 dark:text-emerald-400">{quizAccuracy}%</span>
              <span className="block text-[10px] uppercase font-semibold text-slate-500">Overall Accuracy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Section: Bookmarks & Recent Activity */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Bookmarked Topics */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Bookmark className="h-4 w-4 text-amber-600" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {getUIText('bookmarked', currentLang)} Topics ({bookmarkedTopics.length})
                </h3>
              </div>
            </div>

            {bookmarkedTopics.length === 0 ? (
              <div className="py-12 text-center text-xs text-slate-500 dark:text-slate-400">
                <p>No topics bookmarked for revision yet.</p>
                <p className="mt-1 text-slate-400">
                  Click the bookmark icon in the Study Reader on key high-yield topics.
                </p>
              </div>
            ) : (
              <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800">
                {bookmarkedTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="group flex items-center justify-between py-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-lg px-2"
                  >
                    <div
                      className="cursor-pointer flex-1 min-w-0"
                      onClick={() => onNavigateToTopic(topic)}
                    >
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400 truncate">
                        {topic.title[currentLang] || topic.title.en}
                      </h4>
                      <p className="text-xs text-slate-500 capitalize">
                        {topic.subjectId.replace('-', ' ')} • {topic.readingTimeMinutes} min read
                      </p>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => onRemoveBookmark(topic.id)}
                        className="p-1 text-slate-400 hover:text-rose-600 text-xs"
                        title="Remove bookmark"
                      >
                        ✕
                      </button>
                      <button
                        onClick={() => onNavigateToTopic(topic)}
                        className="rounded-lg bg-amber-50 p-1.5 text-amber-800 hover:bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300"
                      >
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions & Recent Drill History */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Quiz Callout */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 dark:border-amber-900/60 dark:bg-amber-950/30">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
              <Award className="h-4 w-4" />
              <span>Practice Makes Rank</span>
            </div>
            <h4 className="mt-1 text-base font-bold text-slate-900 dark:text-white">
              Ready for a Rapid Revision Drill?
            </h4>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Test your recall on Taylor&apos;s Foremen, Simon&apos;s Decision-Making, Marxian Alienation, and Durkheim&apos;s Suicide typology.
            </p>
            <button
              id="dashboard-start-quiz-btn"
              onClick={onNavigateToQuiz}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-amber-700"
            >
              <span>Launch Quiz Practice</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Recent Quiz Logs */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
              Recent Drill Attempts
            </h3>
            {studyState.quizHistory.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">No tests completed yet.</p>
            ) : (
              <div className="space-y-2.5 text-xs">
                {studyState.quizHistory.slice(-4).reverse().map((attempt) => (
                  <div
                    key={attempt.id}
                    className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-800/40"
                  >
                    <div>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
                        {attempt.subjectId.replace('-', ' ')}
                      </span>
                      <span className="block text-[10px] text-slate-500 uppercase">{attempt.mode} mode</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-amber-700 dark:text-amber-400">
                        {attempt.score}/{attempt.total}
                      </span>
                      <span className="block text-[10px] text-slate-400">
                        {Math.round((attempt.score / attempt.total) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
