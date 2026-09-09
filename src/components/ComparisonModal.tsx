import React, { useState } from 'react';
import { X, Columns, Check, Copy } from 'lucide-react';
import { Language } from '../types/study';
import { COMPARISON_MATRICES } from '../data/comparisonsData';
import { getUIText } from '../data/i18n';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ComparisonModal: React.FC<ComparisonModalProps> = ({ isOpen, onClose, currentLang }) => {
  const [activeMatrixId, setActiveMatrixId] = useState(COMPARISON_MATRICES[0].id);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentMatrix = COMPARISON_MATRICES.find((m) => m.id === activeMatrixId) || COMPARISON_MATRICES[0];

  const handleCopy = () => {
    const text = currentMatrix.rows
      .map(
        (r) =>
          `${r.parameter[currentLang] || r.parameter.en} | ${r.modelA[currentLang] || r.modelA.en} | ${
            r.modelB[currentLang] || r.modelB.en
          }`
      )
      .join('\n');
    navigator.clipboard.writeText(
      `${currentMatrix.title[currentLang] || currentMatrix.title.en}\n\n${text}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="comparison-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="comparison-modal-container"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <Columns className="h-4 w-4" />
          <span>High-Yield Academic Matrices</span>
        </div>
        <h2 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">
          {getUIText('comparisonTitle', currentLang)}
        </h2>

        {/* Matrix Tab Switcher */}
        <div className="mt-4 flex flex-wrap gap-2 border-b border-slate-200 pb-4 dark:border-slate-800">
          {COMPARISON_MATRICES.map((matrix) => (
            <button
              key={matrix.id}
              onClick={() => setActiveMatrixId(matrix.id)}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeMatrixId === matrix.id
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              {matrix.id === 'comp-taylor-fayol' ? 'Taylor vs Fayol' : 'Marx vs Weber'}
            </button>
          ))}

          <button
            onClick={handleCopy}
            className="ml-auto flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? 'Copied Table!' : 'Copy Table'}</span>
          </button>
        </div>

        {/* Context Card */}
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/50 p-4 text-xs leading-relaxed text-slate-800 dark:border-amber-900/60 dark:bg-amber-950/20 dark:text-slate-200">
          <span className="font-bold text-amber-900 dark:text-amber-300">Exam Context: </span>
          {currentMatrix.context[currentLang] || currentMatrix.context.en}
        </div>

        {/* Comparison Table */}
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-800">
                <th className="p-4 font-bold text-slate-900 dark:text-white w-1/4">Comparative Dimension</th>
                <th className="p-4 font-extrabold text-amber-900 dark:text-amber-300 w-3/8 bg-amber-50/70 dark:bg-amber-950/30">
                  {currentMatrix.entityA[currentLang] || currentMatrix.entityA.en}
                </th>
                <th className="p-4 font-extrabold text-blue-900 dark:text-blue-300 w-3/8 bg-blue-50/70 dark:bg-blue-950/30">
                  {currentMatrix.entityB[currentLang] || currentMatrix.entityB.en}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {currentMatrix.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                  <td className="p-4 font-bold text-slate-800 dark:text-slate-200">
                    {row.parameter[currentLang] || row.parameter.en}
                  </td>
                  <td className="p-4 leading-relaxed text-slate-700 dark:text-slate-300">
                    {row.modelA[currentLang] || row.modelA.en}
                  </td>
                  <td className="p-4 leading-relaxed text-slate-700 dark:text-slate-300">
                    {row.modelB[currentLang] || row.modelB.en}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
