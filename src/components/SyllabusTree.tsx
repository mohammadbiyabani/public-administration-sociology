import React, { useState } from 'react';
import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Language, Unit, Topic, UserStudyState } from '../types/study';
import { getAllUnits } from '../data/studyData';
import { getUIText } from '../data/i18n';

interface SyllabusTreeProps {
  subjectId: 'public-administration' | 'sociology';
  currentLang: Language;
  studyState: UserStudyState;
  onSelectTopic: (topic: Topic, unit: Unit) => void;
}

export const SyllabusTree: React.FC<SyllabusTreeProps> = ({
  subjectId,
  currentLang,
  studyState,
  onSelectTopic
}) => {
  const units = getAllUnits(subjectId);
  const [expandedUnits, setExpandedUnits] = useState<Record<string, boolean>>({
    [units[0]?.id || '']: true
  });

  const toggleUnit = (unitId: string) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  const expandAll = () => {
    const all: Record<string, boolean> = {};
    units.forEach((u) => {
      all[u.id] = true;
    });
    setExpandedUnits(all);
  };

  const collapseAll = () => {
    setExpandedUnits({});
  };

  return (
    <div id="syllabus-tree-root" className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      {/* Syllabus Header */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
              <GraduationCap className="h-4 w-4" />
              <span>Official UPSC / State PSC Standard Curriculum</span>
            </div>
            <h1 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
              {subjectId === 'public-administration'
                ? getUIText('publicAdmin', currentLang)
                : getUIText('sociology', currentLang)}{' '}
              Curriculum (10 Units)
            </h1>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Complete hierarchical syllabus structure with reading times, key thinkers, and direct Study Reader access.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={expandAll}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      {/* Units List */}
      <div className="space-y-4">
        {units.map((unit) => {
          const isExpanded = !!expandedUnits[unit.id];
          const completedCount = unit.topics.filter((t) =>
            studyState.completedTopics.includes(t.id)
          ).length;

          return (
            <div
              key={unit.id}
              id={`unit-card-${unit.id}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Unit Header Bar */}
              <div
                onClick={() => toggleUnit(unit.id)}
                className="flex cursor-pointer items-center justify-between p-5 hover:bg-slate-50 dark:hover:bg-slate-800/40"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-serif text-base font-bold text-amber-900 dark:bg-amber-900/50 dark:text-amber-300">
                    {unit.number}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        Unit {unit.number}
                      </span>
                      {completedCount > 0 && (
                        <span className="rounded-full bg-emerald-100 px-2 py-0.2 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                          {completedCount}/{unit.topics.length} Done
                        </span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white truncate sm:text-lg">
                      {unit.title[currentLang] || unit.title.en}
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                      {unit.description[currentLang] || unit.description.en}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-2 shrink-0">
                  <span className="hidden text-xs font-semibold text-slate-400 sm:inline">
                    {unit.topics.length} Topics
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400">
                    {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                  </div>
                </div>
              </div>

              {/* Topics Drawer */}
              {isExpanded && (
                <div className="border-t border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-950/40">
                  {unit.topics.length === 0 ? (
                    <div className="py-4 text-center text-xs text-slate-400 italic">
                      Specialized advanced syllabus topics in this unit are catalogued in the comprehensive exam syllabus.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {unit.topics.map((topic) => {
                        const isDone = studyState.completedTopics.includes(topic.id);
                        const isBookmarked = studyState.bookmarkedTopics.includes(topic.id);

                        return (
                          <div
                            key={topic.id}
                            id={`topic-item-${topic.id}`}
                            onClick={() => onSelectTopic(topic, unit)}
                            className="group flex cursor-pointer items-start justify-between rounded-xl border border-slate-200 bg-white p-4 shadow-xs transition-all hover:border-amber-400 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-500"
                          >
                            <div className="flex-1 min-w-0 pr-3">
                              <div className="flex items-center gap-2">
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-700 dark:text-white dark:group-hover:text-amber-400 truncate">
                                  {topic.title[currentLang] || topic.title.en}
                                </h4>
                                {isDone && (
                                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                                )}
                              </div>
                              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                                {topic.summary[currentLang] || topic.summary.en}
                              </p>

                              <div className="mt-3 flex items-center gap-3 text-[11px] text-slate-400">
                                <span className="flex items-center gap-1 font-medium">
                                  <Clock className="h-3 w-3 text-amber-600" />
                                  {topic.readingTimeMinutes} min
                                </span>
                                {isBookmarked && (
                                  <span className="font-semibold text-amber-600">★ Saved</span>
                                )}
                              </div>
                            </div>

                            <button
                              className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-amber-600 group-hover:text-white transition-colors dark:bg-slate-800"
                              title="Open in Study Reader"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
