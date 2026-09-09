import React, { useState, useEffect } from 'react';
import { Language, Topic, Unit, Thinker, MCQQuestion, UserStudyState } from './types/study';
import {
  loadUserStateFromStorage,
  saveUserStateToStorage,
  toggleTopicBookmarkInStorage,
  toggleTopicCompletedInStorage
} from './lib/storage';
import { getAllUnits, findTopicById, getAllTopics, getThinkers } from './data/studyData';
import { Header } from './components/Header';
import { SyllabusTree } from './components/SyllabusTree';
import { StudyReader } from './components/StudyReader';
import { QuizEngine } from './components/QuizEngine';
import { ThinkersDirectory } from './components/ThinkersDirectory';
import { Dashboard } from './components/Dashboard';
import { SearchModal } from './components/SearchModal';
import { ComparisonModal } from './components/ComparisonModal';
import { PrismaModal } from './components/PrismaModal';

export default function App() {
  const [studyState, setStudyState] = useState<UserStudyState>(() => loadUserStateFromStorage());
  const [currentLang, setCurrentLang] = useState<Language>(studyState.preferredLang || 'en');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const [currentTab, setCurrentTab] = useState<string>('syllabus');
  const [selectedSubject, setSelectedSubject] = useState<'public-administration' | 'sociology'>('public-administration');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  // Active topic for Study Reader
  const initialUnits = getAllUnits('public-administration');
  const initialTopic = initialUnits[0]?.topics[0] || getAllTopics()[0];
  const [activeTopic, setActiveTopic] = useState<Topic>(initialTopic);
  const [activeUnit, setActiveUnit] = useState<Unit | undefined>(initialUnits[0]);

  // Modals state
  const [searchOpen, setSearchOpen] = useState(false);
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const [prismaOpen, setPrismaOpen] = useState(false);

  // Initialize theme from system or user preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setCurrentTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    const updated = { ...studyState, preferredLang: lang };
    setStudyState(updated);
    saveUserStateToStorage(updated);
  };

  // Keyboard shortcut: CMD+K or CTRL+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectTopicFromTree = (topic: Topic, unit: Unit) => {
    setActiveTopic(topic);
    setActiveUnit(unit);
    setSelectedSubject(topic.subjectId);
    setCurrentTab('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToTopicDirectly = (topic: Topic) => {
    const units = getAllUnits(topic.subjectId);
    const foundUnit = units.find((u) => u.topics.some((t) => t.id === topic.id));
    setActiveTopic(topic);
    if (foundUnit) setActiveUnit(foundUnit);
    setSelectedSubject(topic.subjectId);
    setCurrentTab('reader');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = () => {
    const updated = toggleTopicBookmarkInStorage(activeTopic.id);
    setStudyState(updated);
  };

  const handleToggleCompleted = () => {
    const updated = toggleTopicCompletedInStorage(activeTopic.id);
    setStudyState(updated);
  };

  const handleRemoveBookmark = (topicId: string) => {
    const updated = toggleTopicBookmarkInStorage(topicId);
    setStudyState(updated);
  };

  // Traversal for next/prev topic in current unit or subject
  const currentSubjectUnits = getAllUnits(selectedSubject);
  const allSubjectTopics: Topic[] = [];
  currentSubjectUnits.forEach((u) => allSubjectTopics.push(...u.topics));
  const currentTopicIndex = allSubjectTopics.findIndex((t) => t.id === activeTopic.id);
  const hasPrevTopic = currentTopicIndex > 0;
  const hasNextTopic = currentTopicIndex < allSubjectTopics.length - 1;

  const handleSelectPrevTopic = () => {
    if (hasPrevTopic) {
      const prev = allSubjectTopics[currentTopicIndex - 1];
      handleNavigateToTopicDirectly(prev);
    }
  };

  const handleSelectNextTopic = () => {
    if (hasNextTopic) {
      const next = allSubjectTopics[currentTopicIndex + 1];
      handleNavigateToTopicDirectly(next);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100 flex flex-col selection:bg-amber-500 selection:text-white">
      {/* Global Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        currentTheme={currentTheme}
        onThemeToggle={handleThemeToggle}
        currentTab={currentTab}
        onTabChange={setCurrentTab}
        selectedSubject={selectedSubject}
        onSubjectChange={(sub) => {
          setSelectedSubject(sub);
          const firstTopic = getAllUnits(sub)[0]?.topics[0];
          if (firstTopic) {
            setActiveTopic(firstTopic);
            setActiveUnit(getAllUnits(sub)[0]);
          }
        }}
        onOpenSearch={() => setSearchOpen(true)}
        bookmarkCount={studyState.bookmarkedTopics.length}
        onOpenPrismaSchema={() => setPrismaOpen(true)}
        onOpenComparisonMatrix={() => setComparisonOpen(true)}
      />

      {/* Main Content Router */}
      <div className="flex-1">
        {currentTab === 'syllabus' && (
          <SyllabusTree
            subjectId={selectedSubject}
            currentLang={currentLang}
            studyState={studyState}
            onSelectTopic={handleSelectTopicFromTree}
          />
        )}

        {currentTab === 'reader' && activeTopic && (
          <StudyReader
            topic={activeTopic}
            unit={activeUnit}
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
            fontSize={fontSize}
            onFontSizeChange={setFontSize}
            isBookmarked={studyState.bookmarkedTopics.includes(activeTopic.id)}
            onToggleBookmark={handleToggleBookmark}
            isCompleted={studyState.completedTopics.includes(activeTopic.id)}
            onToggleCompleted={handleToggleCompleted}
            onSelectNextTopic={handleSelectNextTopic}
            onSelectPrevTopic={handleSelectPrevTopic}
            hasNextTopic={hasNextTopic}
            hasPrevTopic={hasPrevTopic}
          />
        )}

        {currentTab === 'quiz' && (
          <QuizEngine
            currentLang={currentLang}
            onNavigateToTopic={handleNavigateToTopicDirectly}
            initialSubject={selectedSubject}
          />
        )}

        {currentTab === 'thinkers' && (
          <ThinkersDirectory
            currentLang={currentLang}
            initialSubject={selectedSubject}
          />
        )}

        {currentTab === 'dashboard' && (
          <Dashboard
            currentLang={currentLang}
            studyState={studyState}
            onNavigateToTopic={handleNavigateToTopicDirectly}
            onNavigateToQuiz={() => setCurrentTab('quiz')}
            onRemoveBookmark={handleRemoveBookmark}
          />
        )}
      </div>

      {/* Global Academic Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">StudySphere</span>
            <span>• Multilingual Academic Curriculum for UPSC & State PSC Aspirants</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setComparisonOpen(true)}
              className="hover:text-amber-600 dark:hover:text-amber-400"
            >
              Comparison Matrices
            </button>
            <span>•</span>
            <button
              onClick={() => setPrismaOpen(true)}
              className="hover:text-amber-600 dark:hover:text-amber-400"
            >
              Prisma Database Schema
            </button>
            <span>•</span>
            <span>English • हिंदी • తెలుగు</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        lang={currentLang}
        onSelectTopic={handleNavigateToTopicDirectly}
        onSelectThinker={(thinker: Thinker) => {
          setSelectedSubject(thinker.subjectId);
          setCurrentTab('thinkers');
        }}
        onSelectMCQ={(mcq: MCQQuestion) => {
          setSelectedSubject(mcq.subjectId);
          setCurrentTab('quiz');
        }}
      />

      <ComparisonModal
        isOpen={comparisonOpen}
        onClose={() => setComparisonOpen(false)}
        currentLang={currentLang}
      />

      <PrismaModal
        isOpen={prismaOpen}
        onClose={() => setPrismaOpen(false)}
      />
    </div>
  );
}
