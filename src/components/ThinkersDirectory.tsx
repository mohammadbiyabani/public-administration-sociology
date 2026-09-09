import React, { useState } from 'react';
import { Users, Search, BookOpen, Sparkles, AlertTriangle, Award, X, GraduationCap } from 'lucide-react';
import { Language, Thinker } from '../types/study';
import { getThinkers } from '../data/studyData';
import { ThinkerCard } from './ThinkerCard';
import { getUIText } from '../data/i18n';

interface ThinkersDirectoryProps {
  currentLang: Language;
  initialSubject?: 'public-administration' | 'sociology';
}

export const ThinkersDirectory: React.FC<ThinkersDirectoryProps> = ({ currentLang, initialSubject }) => {
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'public-administration' | 'sociology'>(
    initialSubject || 'all'
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalThinker, setActiveModalThinker] = useState<Thinker | null>(null);

  const thinkers = getThinkers(selectedSubject === 'all' ? undefined : selectedSubject);

  const filteredThinkers = thinkers.filter((t) => {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      t.name[currentLang]?.toLowerCase().includes(q) ||
      t.name.en.toLowerCase().includes(q) ||
      t.biography[currentLang]?.toLowerCase().includes(q) ||
      t.biography.en.toLowerCase().includes(q) ||
      t.majorWorks.some((w) => w.toLowerCase().includes(q))
    );
  });

  return (
    <div id="thinkers-directory-root" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Title & Filter Header */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
              <Users className="h-4 w-4" />
              <span>Classical & Contemporary Theorists</span>
            </div>
            <h1 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
              {getUIText('thinkersDatabase', currentLang)}
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Biographical analysis, magnum opus texts, core formulations, critiques, and UPSC PYQ angles.
            </p>
          </div>

          {/* Subject Switcher Filter */}
          <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800">
            <button
              id="thinkers-filter-all"
              onClick={() => setSelectedSubject('all')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedSubject === 'all'
                  ? 'bg-white text-slate-900 shadow-xs dark:bg-slate-700 dark:text-white'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              All Thinkers
            </button>
            <button
              id="thinkers-filter-pa"
              onClick={() => setSelectedSubject('public-administration')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedSubject === 'public-administration'
                  ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-700 dark:text-amber-300'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {getUIText('publicAdmin', currentLang)}
            </button>
            <button
              id="thinkers-filter-soc"
              onClick={() => setSelectedSubject('sociology')}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                selectedSubject === 'sociology'
                  ? 'bg-white text-amber-900 shadow-xs dark:bg-slate-700 dark:text-amber-300'
                  : 'text-slate-600 dark:text-slate-400'
              }`}
            >
              {getUIText('sociology', currentLang)}
            </button>
          </div>
        </div>

        {/* Search Field */}
        <div className="mt-4 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs dark:border-slate-800 dark:bg-slate-800/60">
          <Search className="h-4 w-4 text-slate-400 mr-2.5" />
          <input
            type="text"
            id="thinkers-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search thinkers by name, concept (e.g., Alienation, POSDCORB, Sanskritization), or work..."
            className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Thinkers Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredThinkers.map((thinker) => (
          <ThinkerCard
            key={thinker.id}
            thinker={thinker}
            currentLang={currentLang}
            onSelect={(th) => setActiveModalThinker(th)}
          />
        ))}
      </div>

      {/* Full Thinker Dossier Modal */}
      {activeModalThinker && (
        <div
          id="thinker-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
          onClick={() => setActiveModalThinker(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalThinker(null)}
              className="absolute right-4 top-4 rounded-lg bg-slate-100 p-1.5 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="border-b border-slate-100 pb-4 dark:border-slate-800">
              <span className="rounded-md bg-amber-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
                {activeModalThinker.subjectId === 'public-administration' ? 'Public Administration' : 'Sociology'} • {activeModalThinker.era}
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
                {activeModalThinker.name[currentLang] || activeModalThinker.name.en}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {activeModalThinker.biography[currentLang] || activeModalThinker.biography.en}
              </p>
            </div>

            {/* Major Works */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                <BookOpen className="h-4 w-4 text-amber-600" />
                <span>Major Works & Treatises</span>
              </h4>
              <div className="space-y-1.5">
                {activeModalThinker.majorWorks.map((work, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium italic text-slate-800 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-200"
                  >
                    📖 {work}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span>Pioneering Conceptual Formulations</span>
              </h4>
              <div className="space-y-2">
                {activeModalThinker.coreConcepts.map((concept, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200 bg-white p-3.5 text-xs leading-relaxed text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {concept[currentLang] || concept.en}
                  </div>
                ))}
              </div>
            </div>

            {/* Scholarly Criticism */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                <AlertTriangle className="h-4 w-4 text-rose-600" />
                <span>Major Scholarly Criticisms</span>
              </h4>
              <div className="rounded-xl border border-rose-100 bg-rose-50/50 p-4 text-xs leading-relaxed text-slate-800 dark:border-rose-900/40 dark:bg-rose-950/20 dark:text-slate-200">
                {activeModalThinker.criticism[currentLang] || activeModalThinker.criticism.en}
              </div>
            </div>

            {/* UPSC Exam Relevance */}
            <div className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5 mb-2">
                <Award className="h-4 w-4 text-amber-600" />
                <span>Civil Services Exam (UPSC / State PSC) Relevance</span>
              </h4>
              <div className="rounded-xl border-2 border-amber-200 bg-amber-50/60 p-4 text-xs font-medium leading-relaxed text-slate-900 dark:border-amber-800/80 dark:bg-amber-950/40 dark:text-slate-100">
                {activeModalThinker.examRelevance[currentLang] || activeModalThinker.examRelevance.en}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
