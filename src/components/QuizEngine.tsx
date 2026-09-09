import React, { useState, useEffect } from 'react';
import {
  HelpCircle,
  Clock,
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  BookOpen,
  Zap,
  ArrowRight,
  Filter
} from 'lucide-react';
import { Language, MCQQuestion, Topic } from '../types/study';
import { getMCQs, getAllTopics } from '../data/studyData';
import { getUIText } from '../data/i18n';
import { recordQuizAttemptInStorage } from '../lib/storage';

interface QuizEngineProps {
  currentLang: Language;
  onNavigateToTopic?: (topic: Topic) => void;
  initialSubject?: 'public-administration' | 'sociology';
}

type QuizMode = 'quick' | 'unit' | 'exam';

export const QuizEngine: React.FC<QuizEngineProps> = ({
  currentLang,
  onNavigateToTopic,
  initialSubject
}) => {
  const [selectedSubject, setSelectedSubject] = useState<'public-administration' | 'sociology' | 'all'>(
    initialSubject || 'all'
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [quizMode, setQuizMode] = useState<QuizMode>('quick');
  const [activeQuestions, setActiveQuestions] = useState<MCQQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerActive, setTimerActive] = useState(false);

  // Initialize questions based on mode and filters
  const startQuiz = () => {
    const rawList = getMCQs(
      selectedSubject === 'all' ? undefined : selectedSubject,
      selectedDifficulty === 'all' ? undefined : selectedDifficulty
    );

    // Shuffle
    const shuffled = [...rawList].sort(() => 0.5 - Math.random());
    const limit = quizMode === 'quick' ? 4 : quizMode === 'unit' ? 8 : 10;
    const questions = shuffled.slice(0, Math.min(limit, shuffled.length));

    setActiveQuestions(questions);
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation(false);
    setIsCompleted(false);

    if (quizMode === 'exam') {
      setTimeLeft(questions.length * 60); // 1 minute per question
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  };

  useEffect(() => {
    startQuiz();
  }, [selectedSubject, selectedDifficulty, quizMode]);

  // Countdown timer for Exam Mode
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (timerActive && timeLeft > 0 && !isCompleted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            finishQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft, isCompleted]);

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (quizMode !== 'exam' && selectedAnswers[currentIndex] !== undefined) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentIndex]: index
    });
    if (quizMode !== 'exam') {
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowExplanation(selectedAnswers[currentIndex + 1] !== undefined);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsCompleted(true);
    setTimerActive(false);

    // Calculate score
    let correctCount = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctOptionIndex) {
        correctCount++;
      }
    });

    // Record in local storage
    recordQuizAttemptInStorage({
      subjectId: selectedSubject,
      mode: quizMode,
      score: correctCount,
      total: activeQuestions.length,
      difficulty: selectedDifficulty
    });
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const scoreCount = activeQuestions.reduce((acc, q, idx) => {
    return selectedAnswers[idx] === q.correctOptionIndex ? acc + 1 : acc;
  }, 0);

  const percentage = activeQuestions.length > 0 ? Math.round((scoreCount / activeQuestions.length) * 100) : 0;

  return (
    <div id="quiz-engine-root" className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Header & Mode Selector Card */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <Zap className="h-4 w-4" />
              <span>Civil Services Exam Testing Engine</span>
            </div>
            <h1 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
              {getUIText('quizPractice', currentLang)}
            </h1>
          </div>

          {/* Mode Selector Buttons */}
          <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
              id="quiz-mode-quick"
              onClick={() => setQuizMode('quick')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                quizMode === 'quick'
                  ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-700 dark:text-amber-300'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Quick Drill
            </button>
            <button
              id="quiz-mode-unit"
              onClick={() => setQuizMode('unit')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                quizMode === 'unit'
                  ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-700 dark:text-amber-300'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Unit Test
            </button>
            <button
              id="quiz-mode-exam"
              onClick={() => setQuizMode('exam')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                quizMode === 'exam'
                  ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-700 dark:text-amber-300'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              Prelims Sim (Timed)
            </button>
          </div>
        </div>

        {/* Filters: Subject & Difficulty */}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 text-xs dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
            <Filter className="h-3.5 w-3.5" />
            <span className="font-semibold">Filters:</span>
          </div>

          <select
            id="quiz-subject-filter"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value as any)}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <option value="all">All Subjects (Combined)</option>
            <option value="public-administration">Public Administration</option>
            <option value="sociology">Sociology</option>
          </select>

          <select
            id="quiz-difficulty-filter"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value as any)}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <option value="all">All Difficulties</option>
            <option value="easy">Level: Easy</option>
            <option value="medium">Level: Medium</option>
            <option value="hard">Level: Hard (UPSC Standard)</option>
          </select>

          {/* Active Question / Timer stats */}
          <div className="ml-auto flex items-center gap-4">
            {quizMode === 'exam' && (
              <div className="flex items-center gap-1 rounded-md bg-rose-50 px-2 py-1 font-mono text-xs font-bold text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
                <Clock className="h-3.5 w-3.5" />
                <span>Time Remaining: {formatTime(timeLeft)}</span>
              </div>
            )}
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {activeQuestions.length} Questions Loaded
            </span>
          </div>
        </div>
      </div>

      {/* Quiz Area */}
      {!isCompleted && currentQ ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs dark:border-slate-800 dark:bg-slate-900">
          {/* Question Meta Bar */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-xs font-extrabold text-amber-900 dark:bg-amber-900/60 dark:text-amber-300">
                {currentIndex + 1}
              </span>
              <span className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                of {activeQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                currentQ.difficulty === 'hard'
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  : currentQ.difficulty === 'medium'
                  ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
              }`}>
                {currentQ.difficulty}
              </span>
              <span className="text-xs text-slate-400 capitalize">
                {currentQ.subjectId.replace('-', ' ')}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug sm:text-xl">
            {currentQ.question[currentLang] || currentQ.question.en}
          </h3>

          {/* Options Grid */}
          <div className="mt-6 space-y-3">
            {((currentQ.options[currentLang] || currentQ.options.en) as string[]).map((optionText, optIdx) => {
              const isSelected = selectedAnswers[currentIndex] === optIdx;
              const isCorrect = currentQ.correctOptionIndex === optIdx;
              const hasAnswered = selectedAnswers[currentIndex] !== undefined;

              let style =
                'border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 dark:border-slate-700 dark:hover:border-amber-500 dark:hover:bg-amber-950/20';

              if (hasAnswered && quizMode !== 'exam') {
                if (isCorrect) {
                  style = 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:border-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-200';
                } else if (isSelected && !isCorrect) {
                  style = 'border-rose-500 bg-rose-50 text-rose-950 dark:border-rose-600 dark:bg-rose-950/40 dark:text-rose-200';
                }
              } else if (isSelected) {
                style = 'border-amber-500 bg-amber-50 text-amber-950 dark:border-amber-500 dark:bg-amber-950/40 dark:text-amber-200';
              }

              return (
                <button
                  key={optIdx}
                  id={`quiz-option-${currentIndex}-${optIdx}`}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm font-medium transition-all ${style}`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-300 text-xs font-bold text-slate-700 dark:border-slate-600 dark:text-slate-300">
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="flex-1 pt-0.5">{optionText}</span>
                  {hasAnswered && quizMode !== 'exam' && isCorrect && (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  )}
                  {hasAnswered && quizMode !== 'exam' && isSelected && !isCorrect && (
                    <XCircle className="h-5 w-5 text-rose-600 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible on Answer in practice mode) */}
          {showExplanation && (
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 p-5 dark:border-amber-900/60 dark:bg-amber-950/30">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-1">
                <Award className="h-4 w-4" />
                <span>{getUIText('explanation', currentLang)}</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {currentQ.explanation[currentLang] || currentQ.explanation.en}
              </p>
            </div>
          )}

          {/* Next / Submit Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
            <button
              onClick={() => {
                if (currentIndex > 0) {
                  setCurrentIndex((p) => p - 1);
                  setShowExplanation(selectedAnswers[currentIndex - 1] !== undefined);
                }
              }}
              disabled={currentIndex === 0}
              className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Previous
            </button>

            <button
              id="quiz-next-btn"
              onClick={handleNext}
              disabled={selectedAnswers[currentIndex] === undefined}
              className="flex items-center gap-1.5 rounded-xl bg-amber-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-amber-700 disabled:opacity-40 transition-all"
            >
              <span>{currentIndex === activeQuestions.length - 1 ? getUIText('submitQuiz', currentLang) : getUIText('nextQuestion', currentLang)}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      ) : isCompleted ? (
        /* Results Summary Screen */
        <div id="quiz-results-card" className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md dark:border-slate-800 dark:bg-slate-900">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300">
            <Award className="h-8 w-8" />
          </div>

          <h2 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
            Quiz Completed!
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Your performance has been logged to your Student Dashboard.
          </p>

          <div className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
              <span className="text-2xl font-black text-slate-900 dark:text-white">{scoreCount}</span>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Correct</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
              <span className="text-2xl font-black text-slate-900 dark:text-white">{activeQuestions.length - scoreCount}</span>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Incorrect</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
              <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{percentage}%</span>
              <span className="block text-[11px] font-semibold text-slate-500 uppercase">Accuracy</span>
            </div>
          </div>

          {/* Recommended Review Topics */}
          <div className="mt-8 text-left border-t border-slate-100 pt-6 dark:border-slate-800">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5 mb-3">
              <BookOpen className="h-4 w-4 text-amber-600" />
              <span>Recommended Topics for Conceptual Revision:</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {getAllTopics().slice(0, 2).map((top) => (
                <div
                  key={top.id}
                  onClick={() => onNavigateToTopic && onNavigateToTopic(top)}
                  className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3 hover:border-amber-400 hover:bg-amber-50 cursor-pointer dark:border-slate-800 dark:bg-slate-800/50 dark:hover:border-amber-500 dark:hover:bg-amber-950/20"
                >
                  <div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-amber-700">
                      {top.title[currentLang] || top.title.en}
                    </span>
                    <span className="block text-[10px] text-slate-500 capitalize">{top.subjectId.replace('-', ' ')}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 transition-transform group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button
              id="quiz-retake-btn"
              onClick={startQuiz}
              className="flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-amber-700"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{getUIText('retakeQuiz', currentLang)}</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="py-12 text-center text-slate-500">No questions available for this filter.</div>
      )}
    </div>
  );
};
