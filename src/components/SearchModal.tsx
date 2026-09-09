import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, User, HelpCircle, ArrowRight } from 'lucide-react';
import { Language, Topic, Thinker, MCQQuestion } from '../types/study';
import { searchAcademicStore, SearchResultItem } from '../data/studyData';
import { getUIText } from '../data/i18n';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSelectTopic: (topic: Topic) => void;
  onSelectThinker: (thinker: Thinker) => void;
  onSelectMCQ: (mcq: MCQQuestion) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSelectTopic,
  onSelectThinker,
  onSelectMCQ
}) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchAcademicStore(query, lang));
    } else {
      setResults([]);
    }
  }, [query, lang]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div id="search-modal-backdrop" className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/60 p-4 pt-16 backdrop-blur-sm sm:pt-24">
      <div
        id="search-modal-container"
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <Search className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            id="global-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={getUIText('searchPlaceholder', lang)}
            className="w-full bg-transparent text-base text-slate-900 placeholder:text-slate-400 focus:outline-none dark:text-slate-100 dark:placeholder:text-slate-500"
          />
          {query && (
            <button
              id="clear-search-btn"
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 mr-1"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            id="close-search-btn"
            onClick={onClose}
            className="rounded-lg bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {query.trim().length >= 2 && results.length === 0 && (
            <div className="py-12 text-center text-slate-500 dark:text-slate-400">
              <p className="text-sm">No academic matches found for &quot;{query}&quot;.</p>
              <p className="mt-1 text-xs text-slate-400">Try searching for Taylor, Wilson, Marx, Weber, NPA, or Suicide.</p>
            </div>
          )}

          {query.trim().length < 2 && (
            <div className="p-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Suggested Academic Keywords:
              </span>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Wilsonian Dichotomy', 'Scientific Management', 'Ideal Bureaucracy', 'Minnowbrook', 'Karl Marx', 'Sociological Imagination', 'Sanskritization', 'Verstehen'].map((tag) => (
                  <button
                    key={tag}
                    id={`search-suggest-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => setQuery(tag)}
                    className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700 hover:border-amber-500 hover:text-amber-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300 dark:hover:border-amber-500 dark:hover:text-amber-400"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((item) => {
            const isTopic = item.type === 'topic';
            const isThinker = item.type === 'thinker';
            const isMCQ = item.type === 'mcq';

            return (
              <div
                key={`${item.type}-${item.id}`}
                id={`search-result-${item.id}`}
                onClick={() => {
                  if (isTopic) onSelectTopic(item.data as Topic);
                  if (isThinker) onSelectThinker(item.data as Thinker);
                  if (isMCQ) onSelectMCQ(item.data as MCQQuestion);
                  onClose();
                }}
                className="group flex cursor-pointer items-start gap-3 rounded-xl p-3 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors"
              >
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  isTopic ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' :
                  isThinker ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' :
                  'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                }`}>
                  {isTopic && <BookOpen className="h-4 w-4" />}
                  {isThinker && <User className="h-4 w-4" />}
                  {isMCQ && <HelpCircle className="h-4 w-4" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      {item.type.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 capitalize">
                      {item.subjectId.replace('-', ' ')}
                    </span>
                  </div>
                  <h4 className="mt-0.5 text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 truncate">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>

                <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-amber-600 dark:text-slate-600 dark:group-hover:text-amber-400 shrink-0 self-center transition-transform group-hover:translate-x-0.5" />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
          <span>Trilingual Index: English • हिंदी • తెలుగు</span>
          <span>Click to open or use ESC to exit</span>
        </div>
      </div>
    </div>
  );
};
