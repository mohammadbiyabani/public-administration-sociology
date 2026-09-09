import React from 'react';
import { BookOpen, Sparkles, AlertTriangle, Award, GraduationCap } from 'lucide-react';
import { Language, Thinker } from '../types/study';

interface ThinkerCardProps {
  thinker: Thinker;
  currentLang: Language;
  onSelect?: (thinker: Thinker) => void;
}

export const ThinkerCard: React.FC<ThinkerCardProps> = ({ thinker, currentLang, onSelect }) => {
  return (
    <div
      id={`thinker-card-${thinker.slug}`}
      onClick={() => onSelect && onSelect(thinker)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-xs transition-all hover:border-amber-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-500 cursor-pointer"
    >
      <div>
        {/* Subject & Era Tag */}
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-md bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">
            {thinker.subjectId === 'public-administration' ? 'Public Administration' : 'Sociology'}
          </span>
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{thinker.era}</span>
        </div>

        {/* Thinker Name */}
        <h3 className="mt-3 text-xl font-extrabold text-slate-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400">
          {thinker.name[currentLang] || thinker.name.en}
        </h3>

        {/* Biography */}
        <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
          {thinker.biography[currentLang] || thinker.biography.en}
        </p>

        {/* Major Works preview */}
        <div className="mt-4 border-t border-slate-100 pt-3 dark:border-slate-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Magnum Opus / Key Texts:
          </span>
          <ul className="mt-1.5 space-y-1">
            {thinker.majorWorks.slice(0, 2).map((work, idx) => (
              <li key={idx} className="flex items-center gap-1.5 text-xs italic text-slate-700 dark:text-slate-300">
                <BookOpen className="h-3 w-3 text-amber-600 shrink-0" />
                <span className="truncate">{work}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Core Concepts */}
        <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Key Formulations:
          </span>
          <div className="mt-1.5 space-y-1.5">
            {thinker.coreConcepts.slice(0, 2).map((c, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                <Sparkles className="h-3 w-3 text-amber-600 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{c[currentLang] || c.en}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Exam Indicator */}
      <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="flex items-center gap-1 text-amber-700 dark:text-amber-400 font-semibold">
          <Award className="h-3.5 w-3.5" />
          <span>UPSC Mains Pillar</span>
        </span>
        <span className="text-slate-400 group-hover:text-amber-600 font-medium">View Dossier →</span>
      </div>
    </div>
  );
};
