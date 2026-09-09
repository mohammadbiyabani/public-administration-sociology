import { Unit, Topic, Thinker, MCQQuestion, Language } from '../types/study';
import { ALL_PUBLIC_ADMIN_UNITS } from './publicAdminData';
import { ALL_SOCIOLOGY_UNITS } from './sociologyData';
import { THINKERS_DATABASE } from './thinkersData';
import { MCQ_DATABASE } from './mcqData';
import { COMPARISON_MATRICES, ComparisonMatrix } from './comparisonsData';

export const ALL_UNITS: Record<'public-administration' | 'sociology', Unit[]> = {
  'public-administration': ALL_PUBLIC_ADMIN_UNITS,
  'sociology': ALL_SOCIOLOGY_UNITS
};

export function getAllUnits(subjectId: 'public-administration' | 'sociology'): Unit[] {
  return ALL_UNITS[subjectId] || [];
}

export function getAllTopics(): Topic[] {
  const topics: Topic[] = [];
  [...ALL_PUBLIC_ADMIN_UNITS, ...ALL_SOCIOLOGY_UNITS].forEach((unit) => {
    if (unit.topics && unit.topics.length > 0) {
      topics.push(...unit.topics);
    }
  });
  return topics;
}

export function findTopicById(topicId: string): Topic | undefined {
  return getAllTopics().find((t) => t.id === topicId);
}

export function findTopicBySlug(subjectId: 'public-administration' | 'sociology', topicSlug: string): Topic | undefined {
  const units = getAllUnits(subjectId);
  for (const unit of units) {
    const found = unit.topics.find((t) => t.slug === topicSlug);
    if (found) return found;
  }
  return undefined;
}

export function getThinkers(subjectId?: 'public-administration' | 'sociology'): Thinker[] {
  if (!subjectId) return THINKERS_DATABASE;
  return THINKERS_DATABASE.filter((t) => t.subjectId === subjectId);
}

export function getMCQs(subjectId?: 'public-administration' | 'sociology', difficulty?: string): MCQQuestion[] {
  let list = MCQ_DATABASE;
  if (subjectId) {
    list = list.filter((q) => q.subjectId === subjectId);
  }
  if (difficulty && difficulty !== 'all') {
    list = list.filter((q) => q.difficulty === difficulty);
  }
  return list;
}

export function getComparisonMatrices(subjectId?: 'public-administration' | 'sociology'): ComparisonMatrix[] {
  if (!subjectId) return COMPARISON_MATRICES;
  return COMPARISON_MATRICES.filter((m) => m.subjectId === subjectId);
}

export interface SearchResultItem {
  type: 'topic' | 'thinker' | 'mcq';
  id: string;
  title: string;
  subtitle: string;
  subjectId: 'public-administration' | 'sociology';
  data: Topic | Thinker | MCQQuestion;
}

export function searchAcademicStore(query: string, lang: Language): SearchResultItem[] {
  if (!query || query.trim().length < 2) return [];
  const q = query.trim().toLowerCase();
  const results: SearchResultItem[] = [];

  // Search Topics
  getAllTopics().forEach((topic) => {
    const titleMatch = topic.title[lang]?.toLowerCase().includes(q) || topic.title.en.toLowerCase().includes(q);
    const summaryMatch = topic.summary[lang]?.toLowerCase().includes(q) || topic.summary.en.toLowerCase().includes(q);
    const keywordMatch = topic.content[lang]?.keywords.some((k) => k.toLowerCase().includes(q)) ||
      topic.content.en.keywords.some((k) => k.toLowerCase().includes(q));

    if (titleMatch || summaryMatch || keywordMatch) {
      results.push({
        type: 'topic',
        id: topic.id,
        title: topic.title[lang] || topic.title.en,
        subtitle: topic.summary[lang] || topic.summary.en,
        subjectId: topic.subjectId,
        data: topic
      });
    }
  });

  // Search Thinkers
  THINKERS_DATABASE.forEach((thinker) => {
    const nameMatch = thinker.name[lang]?.toLowerCase().includes(q) || thinker.name.en.toLowerCase().includes(q);
    const bioMatch = thinker.biography[lang]?.toLowerCase().includes(q) || thinker.biography.en.toLowerCase().includes(q);
    const workMatch = thinker.majorWorks.some((w) => w.toLowerCase().includes(q));

    if (nameMatch || bioMatch || workMatch) {
      results.push({
        type: 'thinker',
        id: thinker.id,
        title: thinker.name[lang] || thinker.name.en,
        subtitle: `${thinker.era} — ${thinker.biography[lang] || thinker.biography.en}`,
        subjectId: thinker.subjectId,
        data: thinker
      });
    }
  });

  // Search MCQs
  MCQ_DATABASE.forEach((mcq) => {
    const qMatch = mcq.question[lang]?.toLowerCase().includes(q) || mcq.question.en.toLowerCase().includes(q);
    if (qMatch) {
      results.push({
        type: 'mcq',
        id: mcq.id,
        title: mcq.question[lang] || mcq.question.en,
        subtitle: `Difficulty: ${mcq.difficulty.toUpperCase()} • ${mcq.explanation[lang] || mcq.explanation.en}`,
        subjectId: mcq.subjectId,
        data: mcq
      });
    }
  });

  return results.slice(0, 15);
}
