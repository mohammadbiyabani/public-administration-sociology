import React, { useState } from 'react';
import {
  Globe,
  Search,
  Moon,
  Sun,
  Menu,
  X,
  Bookmark,
  BookOpen,
  HelpCircle,
  Users,
  LayoutDashboard,
  Columns,
  Code2,
  GraduationCap
} from 'lucide-react';
import { Language } from '../types/study';
import { getUIText } from '../data/i18n';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  currentTheme: 'light' | 'dark';
  onThemeToggle: () => void;
  currentTab: string;
  onTabChange: (tab: string) => void;
  selectedSubject: 'public-administration' | 'sociology';
  onSubjectChange: (sub: 'public-administration' | 'sociology') => void;
  onOpenSearch: () => void;
  bookmarkCount: number;
  onOpenPrismaSchema: () => void;
  onOpenComparisonMatrix: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  currentTheme,
  onThemeToggle,
  currentTab,
  onTabChange,
  selectedSubject,
  onSubjectChange,
  onOpenSearch,
  bookmarkCount,
  onOpenPrismaSchema,
  onOpenComparisonMatrix
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'hi', label: 'Hindi', native: 'हिंदी' },
    { code: 'te', label: 'Telugu', native: 'తెలుగు' }
  ];

  return (
    <header id="app-global-header" className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/95">
      {/* Top Academic Context Banner */}
      <div className="hidden border-b border-slate-100 bg-slate-50/80 px-4 py-1 text-xs text-slate-600 sm:flex sm:items-center sm:justify-between dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
            UPSC & State PSC Exam Prep
          </span>
          <span>Public Administration & Sociology Academic Portal</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            id="header-comparison-btn"
            onClick={onOpenComparisonMatrix}
            className="flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            <Columns className="h-3.5 w-3.5" />
            <span>{getUIText('comparisonTitle', currentLang)}</span>
          </button>
          <button
            id="header-prisma-btn"
            onClick={onOpenPrismaSchema}
            className="flex items-center gap-1 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
          >
            <Code2 className="h-3.5 w-3.5" />
            <span>Prisma ORM DB Schema</span>
          </button>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Brand & Logo */}
        <div className="flex items-center gap-6">
          <button
            id="brand-logo-btn"
            onClick={() => onTabChange('syllabus')}
            className="flex items-center gap-2.5 text-left transition-opacity hover:opacity-90"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-600 to-amber-500 text-white shadow-md shadow-amber-500/20">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  StudySphere
                </span>
                <span className="rounded-full bg-amber-100 px-2 py-0.2 text-[10px] font-extrabold uppercase text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                  i18n
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                {currentLang === 'hi' ? 'लोक प्रशासन एवं समाजशास्त्र' : currentLang === 'te' ? 'ప్రజా పరిపాలన & సమాజశాస్త్రం' : 'Pub Admin & Sociology'}
              </p>
            </div>
          </button>

          {/* Subject Pills */}
          <div className="hidden md:flex items-center rounded-xl bg-slate-100 p-1 dark:bg-slate-900">
            <button
              id="header-subject-pa"
              onClick={() => onSubjectChange('public-administration')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedSubject === 'public-administration'
                  ? 'bg-white text-amber-900 shadow-sm dark:bg-slate-800 dark:text-amber-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {getUIText('publicAdmin', currentLang)}
            </button>
            <button
              id="header-subject-soc"
              onClick={() => onSubjectChange('sociology')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                selectedSubject === 'sociology'
                  ? 'bg-white text-amber-900 shadow-sm dark:bg-slate-800 dark:text-amber-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {getUIText('sociology', currentLang)}
            </button>
          </div>
        </div>

        {/* Center Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            id="nav-tab-syllabus"
            onClick={() => onTabChange('syllabus')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              currentTab === 'syllabus'
                ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>{getUIText('syllabus', currentLang)}</span>
          </button>

          <button
            id="nav-tab-reader"
            onClick={() => onTabChange('reader')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              currentTab === 'reader'
                ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span>{getUIText('studyReader', currentLang)}</span>
          </button>

          <button
            id="nav-tab-quiz"
            onClick={() => onTabChange('quiz')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              currentTab === 'quiz'
                ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <HelpCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{getUIText('quizPractice', currentLang)}</span>
          </button>

          <button
            id="nav-tab-thinkers"
            onClick={() => onTabChange('thinkers')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              currentTab === 'thinkers'
                ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span>{getUIText('thinkersDatabase', currentLang)}</span>
          </button>

          <button
            id="nav-tab-dashboard"
            onClick={() => onTabChange('dashboard')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${
              currentTab === 'dashboard'
                ? 'bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-400'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>{getUIText('dashboard', currentLang)}</span>
          </button>
        </nav>

        {/* Right Utility Actions */}
        <div className="flex items-center gap-2">
          {/* Global Search Button */}
          <button
            id="header-search-trigger"
            onClick={onOpenSearch}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500 hover:border-amber-400 hover:bg-white hover:text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-amber-500 dark:hover:text-slate-100"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search...</span>
            <kbd className="hidden rounded bg-slate-200 px-1 py-0.5 text-[10px] font-mono text-slate-600 sm:inline dark:bg-slate-800 dark:text-slate-300">
              ⌘K
            </kbd>
          </button>

          {/* Bookmarks Counter Button */}
          <button
            id="header-bookmarks-btn"
            onClick={() => onTabChange('dashboard')}
            title="Bookmarked Topics"
            className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            <Bookmark className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            {bookmarkCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white">
                {bookmarkCount}
              </span>
            )}
          </button>

          {/* Trilingual Language Selector Dropdown */}
          <div className="relative">
            <button
              id="header-language-dropdown-btn"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-2.5 py-1.5 text-xs font-semibold text-slate-800 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              <Globe className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {langDropdownOpen && (
              <div
                id="header-language-dropdown-menu"
                className="absolute right-0 mt-2 w-44 rounded-xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50"
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Select Language
                </div>
                {languages.map((l) => (
                  <button
                    key={l.code}
                    id={`lang-option-${l.code}`}
                    onClick={() => {
                      onLanguageChange(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-left transition-colors ${
                      currentLang === l.code
                        ? 'bg-amber-50 font-bold text-amber-800 dark:bg-amber-950/50 dark:text-amber-300'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">{l.native}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            id="header-theme-toggle-btn"
            onClick={onThemeToggle}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            aria-label="Toggle Theme"
          >
            {currentTheme === 'light' ? (
              <Moon className="h-4 w-4 text-slate-700" />
            ) : (
              <Sun className="h-4 w-4 text-amber-400" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="header-mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 lg:hidden dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="border-b border-slate-200 bg-white p-4 lg:hidden dark:border-slate-800 dark:bg-slate-950">
          {/* Mobile Subject Switcher */}
          <div className="mb-3 flex rounded-lg bg-slate-100 p-1 dark:bg-slate-900">
            <button
              onClick={() => {
                onSubjectChange('public-administration');
              }}
              className={`flex-1 rounded-md py-1.5 text-xs font-bold text-center ${
                selectedSubject === 'public-administration'
                  ? 'bg-white text-amber-900 shadow-sm dark:bg-slate-800 dark:text-amber-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {getUIText('publicAdmin', currentLang)}
            </button>
            <button
              onClick={() => {
                onSubjectChange('sociology');
              }}
              className={`flex-1 rounded-md py-1.5 text-xs font-bold text-center ${
                selectedSubject === 'sociology'
                  ? 'bg-white text-amber-900 shadow-sm dark:bg-slate-800 dark:text-amber-400'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {getUIText('sociology', currentLang)}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onTabChange('syllabus');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
                currentTab === 'syllabus' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-400' : 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>{getUIText('syllabus', currentLang)}</span>
            </button>

            <button
              onClick={() => {
                onTabChange('reader');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
                currentTab === 'reader' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-400' : 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span>{getUIText('studyReader', currentLang)}</span>
            </button>

            <button
              onClick={() => {
                onTabChange('quiz');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
                currentTab === 'quiz' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-400' : 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <HelpCircle className="h-4 w-4 text-emerald-600" />
              <span>{getUIText('quizPractice', currentLang)}</span>
            </button>

            <button
              onClick={() => {
                onTabChange('thinkers');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
                currentTab === 'thinkers' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-400' : 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <Users className="h-4 w-4 text-purple-600" />
              <span>{getUIText('thinkersDatabase', currentLang)}</span>
            </button>

            <button
              onClick={() => {
                onTabChange('dashboard');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 rounded-xl p-3 text-xs font-semibold ${
                currentTab === 'dashboard' ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-400' : 'bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>{getUIText('dashboard', currentLang)}</span>
            </button>

            <button
              onClick={() => {
                onOpenComparisonMatrix();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 text-xs font-semibold text-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              <Columns className="h-4 w-4" />
              <span>{getUIText('comparisonTitle', currentLang)}</span>
            </button>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-xs">
            <button
              onClick={() => {
                onOpenPrismaSchema();
                setMobileMenuOpen(false);
              }}
              className="text-amber-700 dark:text-amber-400 font-semibold"
            >
              View Prisma / Supabase Schema
            </button>
            <span className="text-slate-400">EN • HI • TE</span>
          </div>
        </div>
      )}
    </header>
  );
};
