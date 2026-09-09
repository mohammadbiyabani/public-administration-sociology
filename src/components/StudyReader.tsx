import React, { useState, useEffect, useRef } from 'react';
import {
  Bookmark,
  CheckCircle2,
  Share2,
  Clock,
  Sparkles,
  Award,
  AlertTriangle,
  Lightbulb,
  GraduationCap,
  BookMarked,
  ListOrdered,
  ChevronRight,
  Printer,
  ChevronLeft
} from 'lucide-react';
import { Language, Topic, Unit } from '../types/study';
import { getUIText } from '../data/i18n';
import { COMPARISON_MATRICES } from '../data/comparisonsData';

interface StudyReaderProps {
  topic: Topic;
  unit?: Unit;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  fontSize: 'sm' | 'md' | 'lg';
  onFontSizeChange: (size: 'sm' | 'md' | 'lg') => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  isCompleted: boolean;
  onToggleCompleted: () => void;
  onSelectNextTopic?: () => void;
  onSelectPrevTopic?: () => void;
  hasNextTopic: boolean;
  hasPrevTopic: boolean;
}

export const StudyReader: React.FC<StudyReaderProps> = ({
  topic,
  unit,
  currentLang,
  onLanguageChange,
  fontSize,
  onFontSizeChange,
  isBookmarked,
  onToggleBookmark,
  isCompleted,
  onToggleCompleted,
  onSelectNextTopic,
  onSelectPrevTopic,
  hasNextTopic,
  hasPrevTopic
}) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [copiedNotification, setCopiedNotification] = useState(false);
  const readerContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll position for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const totalHeight = el.scrollHeight - el.clientHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (el.scrollTop / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = topic.content[currentLang] || topic.content.en;

  // Find relevant comparison matrix if available for this topic
  const matchingComparison = COMPARISON_MATRICES.find((m) =>
    (topic.slug.includes('taylor') && m.id === 'comp-taylor-fayol') ||
    (topic.slug.includes('emergence') && m.id === 'comp-marx-weber') ||
    (m.subjectId === topic.subjectId)
  );

  const fontSizeClass =
    fontSize === 'sm'
      ? 'text-sm leading-relaxed'
      : fontSize === 'lg'
      ? 'text-lg leading-loose'
      : 'text-base leading-relaxed';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const tocItems = [
    { id: 'sec-definition', label: getUIText('definition', currentLang) },
    { id: 'sec-introduction', label: getUIText('introduction', currentLang) },
    { id: 'sec-explanation', label: getUIText('detailedExplanation', currentLang) },
    { id: 'sec-features', label: getUIText('keyFeatures', currentLang) },
    { id: 'sec-thinkers', label: getUIText('importantThinkers', currentLang) },
    { id: 'sec-comparison', label: getUIText('comparisonTitle', currentLang) },
    { id: 'sec-examples', label: getUIText('examplesCaseStudies', currentLang) },
    { id: 'sec-criticism', label: getUIText('criticism', currentLang) },
    { id: 'sec-contemporary', label: getUIText('contemporaryRelevance', currentLang) },
    { id: 'sec-exam', label: getUIText('examPerspective', currentLang) },
    { id: 'sec-revision', label: getUIText('quickRevisionPoints', currentLang) },
    { id: 'sec-keywords', label: getUIText('keywords', currentLang) }
  ];

  return (
    <div id="study-reader-root" ref={readerContainerRef} className="relative w-full pb-24">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-30 h-1 bg-slate-200/50 dark:bg-slate-800/50">
        <div
          id="reading-progress-bar"
          className="h-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Reader Sticky Header Bar */}
      <div className="sticky top-[68px] z-20 mb-8 border-b border-slate-200 bg-white/90 backdrop-blur-md px-4 py-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Breadcrumb Info */}
          <div className="flex items-center gap-2 truncate text-xs text-slate-500 dark:text-slate-400">
            <span className="font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              {topic.subjectId === 'public-administration'
                ? getUIText('publicAdmin', currentLang)
                : getUIText('sociology', currentLang)}
            </span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300 dark:text-slate-600" />
            <span className="truncate hidden sm:inline">{unit?.title[currentLang] || unit?.title.en}</span>
          </div>

          {/* Controls: Font Size, Language, Actions */}
          <div className="flex items-center gap-2">
            {/* Instant Trilingual Switcher */}
            <div className="flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-900">
              {(['en', 'hi', 'te'] as Language[]).map((langCode) => (
                <button
                  key={langCode}
                  id={`reader-lang-toggle-${langCode}`}
                  onClick={() => onLanguageChange(langCode)}
                  className={`rounded-md px-2 py-1 text-xs font-bold transition-colors ${
                    currentLang === langCode
                      ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-800 dark:text-amber-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {langCode === 'en' ? 'EN' : langCode === 'hi' ? 'हिंदी' : 'తెలుగు'}
                </button>
              ))}
            </div>

            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center rounded-lg border border-slate-200 bg-slate-100 p-0.5 dark:border-slate-800 dark:bg-slate-900">
              <button
                id="font-size-sm-btn"
                onClick={() => onFontSizeChange('sm')}
                className={`rounded-md px-2 py-1 text-xs font-semibold ${
                  fontSize === 'sm'
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                title="Small Font"
              >
                A-
              </button>
              <button
                id="font-size-md-btn"
                onClick={() => onFontSizeChange('md')}
                className={`rounded-md px-2 py-1 text-xs font-semibold ${
                  fontSize === 'md'
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                title="Medium Font"
              >
                A
              </button>
              <button
                id="font-size-lg-btn"
                onClick={() => onFontSizeChange('lg')}
                className={`rounded-md px-2 py-1 text-xs font-semibold ${
                  fontSize === 'lg'
                    ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-800 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
                title="Large Font"
              >
                A+
              </button>
            </div>

            {/* Print / Save Notes Button */}
            <button
              id="reader-print-btn"
              onClick={handlePrint}
              title="Print / Save Notes as PDF"
              className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Printer className="h-3.5 w-3.5" />
            </button>

            {/* Share / Copy URL */}
            <button
              id="reader-share-btn"
              onClick={handleShare}
              title="Copy Topic Link"
              className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              <Share2 className="h-3.5 w-3.5" />
              {copiedNotification && (
                <span className="absolute -bottom-7 right-0 rounded bg-slate-900 px-2 py-0.5 text-[10px] text-white shadow-md">
                  Copied!
                </span>
              )}
            </button>

            {/* Bookmark Toggle */}
            <button
              id="reader-bookmark-btn"
              onClick={onToggleBookmark}
              className={`flex items-center gap-1 rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-all ${
                isBookmarked
                  ? 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-amber-400'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900'
              }`}
            >
              <Bookmark className={`h-3.5 w-3.5 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span className="hidden sm:inline">
                {isBookmarked ? getUIText('bookmarked', currentLang) : getUIText('bookmarkTopic', currentLang)}
              </span>
            </button>

            {/* Mark as Completed */}
            <button
              id="reader-complete-btn"
              onClick={onToggleCompleted}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
              }`}
            >
              <CheckCircle2 className="h-3.5 w-3.5" />
              <span>{isCompleted ? getUIText('completed', currentLang) : getUIText('markComplete', currentLang)}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Two-Column Reading Layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-3 flex items-center gap-2 border-b border-slate-100 pb-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <ListOrdered className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                <span>{getUIText('tableOfContents', currentLang)}</span>
              </div>
              <nav className="flex flex-col gap-1 text-xs">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    id={`toc-nav-${item.id}`}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center rounded-lg px-2.5 py-1.5 text-left text-slate-600 hover:bg-amber-50 hover:text-amber-800 transition-colors dark:text-slate-400 dark:hover:bg-amber-950/40 dark:hover:text-amber-300"
                  >
                    <span className="truncate">{item.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-4 border-t border-slate-100 pt-3 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-3.5 w-3.5 text-amber-600" />
                  <span>
                    {topic.readingTimeMinutes} {getUIText('readTime', currentLang)}
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Column: Academic Content Stream */}
          <main className="lg:col-span-9 max-w-3xl">
            {/* Header / Title Card */}
            <div className="mb-8 border-b border-slate-200 pb-6 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 mb-2">
                <GraduationCap className="h-4 w-4" />
                <span>Unit {unit?.number || 1} • Advanced Academic Notes</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {topic.readingTimeMinutes} min read
                </span>
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white leading-tight">
                {topic.title[currentLang] || topic.title.en}
              </h1>

              <p className="mt-3 text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                {topic.summary[currentLang] || topic.summary.en}
              </p>
            </div>

            {/* Section 1: Academic Definition Card */}
            <section id="sec-definition" className="mb-10 scroll-mt-28">
              <div className="relative overflow-hidden rounded-2xl border-l-4 border-l-amber-600 border border-slate-200 bg-amber-50/50 p-6 dark:border-slate-800 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400 mb-2">
                  <BookMarked className="h-4 w-4" />
                  <span>{getUIText('definition', currentLang)}</span>
                </div>
                <blockquote className={`font-serif italic text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>
                  &ldquo;{content.definition}&rdquo;
                </blockquote>
              </div>
            </section>

            {/* Section 2: Conceptual Introduction */}
            <section id="sec-introduction" className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {getUIText('introduction', currentLang)}
              </h2>
              <p className={`text-slate-700 dark:text-slate-300 ${fontSizeClass}`}>
                {content.introduction}
              </p>
            </section>

            {/* Section 3: Detailed Analytical Explanation */}
            <section id="sec-explanation" className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {getUIText('detailedExplanation', currentLang)}
              </h2>
              <div className="space-y-4">
                {content.detailedExplanation.map((paragraph, idx) => (
                  <div
                    key={idx}
                    className={`rounded-xl border border-slate-100 bg-slate-50/70 p-4.5 text-slate-700 dark:border-slate-800/80 dark:bg-slate-900/50 dark:text-slate-300 ${fontSizeClass}`}
                  >
                    <div className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-900 dark:bg-amber-900/60 dark:text-amber-300">
                        {idx + 1}
                      </span>
                      <p className="flex-1">{paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Key Features & Structural Dimensions */}
            <section id="sec-features" className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {getUIText('keyFeatures', currentLang)}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {content.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900"
                  >
                    <Sparkles className="h-4 w-4 shrink-0 text-amber-600 dark:text-amber-400 mt-0.5" />
                    <span className={`text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Core Thinkers & Perspectives */}
            {content.importantThinkers && content.importantThinkers.length > 0 && (
              <section id="sec-thinkers" className="mb-10 scroll-mt-28">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {getUIText('importantThinkers', currentLang)}
                </h2>
                <div className="space-y-3">
                  {content.importantThinkers.map((th, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900"
                    >
                      <h4 className="text-sm font-bold text-amber-700 dark:text-amber-400">
                        {th.name}
                      </h4>
                      <p className={`mt-1 text-slate-600 dark:text-slate-300 ${fontSizeClass}`}>
                        {th.contribution}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 6: Comparative Paradigm Matrix (Embedded) */}
            {matchingComparison && (
              <section id="sec-comparison" className="mb-10 scroll-mt-28">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        Comparative Academic Matrix
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {matchingComparison.title[currentLang] || matchingComparison.title.en}
                      </h3>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/60">
                          <th className="p-3 font-bold text-slate-700 dark:text-slate-300">Parameter</th>
                          <th className="p-3 font-bold text-amber-800 dark:text-amber-300">
                            {matchingComparison.entityA[currentLang] || matchingComparison.entityA.en}
                          </th>
                          <th className="p-3 font-bold text-blue-800 dark:text-blue-300">
                            {matchingComparison.entityB[currentLang] || matchingComparison.entityB.en}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {matchingComparison.rows.map((r, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/30">
                            <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">
                              {r.parameter[currentLang] || r.parameter.en}
                            </td>
                            <td className="p-3 text-slate-700 dark:text-slate-300">
                              {r.modelA[currentLang] || r.modelA.en}
                            </td>
                            <td className="p-3 text-slate-700 dark:text-slate-300">
                              {r.modelB[currentLang] || r.modelB.en}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {/* Section 7: Examples & Case Studies */}
            {content.examples && content.examples.length > 0 && (
              <section id="sec-examples" className="mb-10 scroll-mt-28">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
                  <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <h2>{getUIText('examplesCaseStudies', currentLang)}</h2>
                </div>
                <div className="space-y-3">
                  {content.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-blue-100 bg-blue-50/40 p-4 dark:border-blue-900/40 dark:bg-blue-950/20"
                    >
                      <p className={`text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>
                        {ex}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 8: Scholarly Criticisms & Limitations */}
            {content.criticism && content.criticism.length > 0 && (
              <section id="sec-criticism" className="mb-10 scroll-mt-28">
                <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
                  <AlertTriangle className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  <h2>{getUIText('criticism', currentLang)}</h2>
                </div>
                <div className="space-y-3">
                  {content.criticism.map((crit, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-rose-100 bg-rose-50/40 p-4 dark:border-rose-900/40 dark:bg-rose-950/20"
                    >
                      <p className={`text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>
                        {crit}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Section 9: Contemporary 21st Century Relevance */}
            <section id="sec-contemporary" className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {getUIText('contemporaryRelevance', currentLang)}
              </h2>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <p className={`text-slate-700 dark:text-slate-300 ${fontSizeClass}`}>
                  {content.contemporaryRelevance}
                </p>
              </div>
            </section>

            {/* Section 10: UPSC / State PSC Exam Perspective & Mains Answer Writing */}
            <section id="sec-exam" className="mb-10 scroll-mt-28">
              <div className="rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50/40 p-6 dark:border-amber-700/60 dark:from-amber-950/30 dark:to-orange-950/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 mb-2">
                  <Award className="h-5 w-5 text-amber-700 dark:text-amber-400" />
                  <span>{getUIText('examPerspective', currentLang)}</span>
                </div>
                <p className={`mt-2 font-medium text-slate-800 dark:text-slate-200 ${fontSizeClass}`}>
                  {content.examPerspective}
                </p>
              </div>
            </section>

            {/* Section 11: High-Yield Quick Revision Bullet Points */}
            <section id="sec-revision" className="mb-10 scroll-mt-28">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {getUIText('quickRevisionPoints', currentLang)}
              </h2>
              <ul className="space-y-2.5">
                {content.quickRevisionPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 rounded-lg bg-slate-50 p-3 text-slate-800 dark:bg-slate-900/60 dark:text-slate-200 ${fontSizeClass}`}
                  >
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 12: Analytical Keywords */}
            <section id="sec-keywords" className="mb-12 scroll-mt-28">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                {getUIText('keywords', currentLang)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {content.keywords.map((kw, idx) => (
                  <span
                    key={idx}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </section>

            {/* Next / Previous Topic Navigation Bar */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
              {hasPrevTopic ? (
                <button
                  id="reader-prev-topic-btn"
                  onClick={onSelectPrevTopic}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous Topic</span>
                </button>
              ) : (
                <div />
              )}

              {hasNextTopic && (
                <button
                  id="reader-next-topic-btn"
                  onClick={onSelectNextTopic}
                  className="flex items-center gap-1.5 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-amber-700"
                >
                  <span>Next Topic</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
