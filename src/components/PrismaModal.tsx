import React, { useState } from 'react';
import { X, Code2, Copy, Check, Database } from 'lucide-react';

interface PrismaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrismaModal: React.FC<PrismaModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const prismaSchemaCode = `// StudySphere Production Prisma Schema (PostgreSQL / Supabase)
// Supports Trilingual i18n JSON fields & relational performance indexes

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum Role {
  STUDENT
  ASPIRANT
  EDUCATOR
  ADMIN
}

enum Language {
  EN
  HI
  TE
}

enum Difficulty {
  EASY
  MEDIUM
  HARD
}

model User {
  id            String         @id @default(cuid())
  email         String         @unique
  name          String?
  role          Role           @default(ASPIRANT)
  preferredLang Language       @default(EN)
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt

  progress      UserProgress[]
  bookmarks     Bookmark[]
  quizAttempts  QuizAttempt[]

  @@map("users")
}

model Subject {
  id          String   @id @default(cuid())
  slug        String   @unique
  title       Json     // Record<"en" | "hi" | "te", string>
  description Json     // Record<"en" | "hi" | "te", string>
  order       Int      @default(0)

  units       Unit[]
  thinkers    Thinker[]

  @@map("subjects")
}

model Unit {
  id          String   @id @default(cuid())
  subjectId   String
  number      Int
  slug        String
  title       Json     // Record<"en" | "hi" | "te", string>
  description Json     // Record<"en" | "hi" | "te", string>

  subject     Subject  @relation(fields: [subjectId], references: [id], onDelete: Cascade)
  topics      Topic[]

  @@unique([subjectId, slug])
  @@index([subjectId])
  @@map("units")
}

model Topic {
  id                 String         @id @default(cuid())
  unitId             String
  slug               String
  readingTimeMinutes Int            @default(15)
  title              Json           // Record<"en" | "hi" | "te", string>
  summary            Json           // Record<"en" | "hi" | "te", string>
  content            Json           // Detailed Trilingual Content Object
  isHighYield        Boolean        @default(false)
  createdAt          DateTime       @default(now())
  updatedAt          DateTime       @updatedAt

  unit               Unit           @relation(fields: [unitId], references: [id], onDelete: Cascade)
  bookmarks          Bookmark[]
  progress           UserProgress[]
  mcqs               MCQQuestion[]

  @@unique([unitId, slug])
  @@index([unitId])
  @@map("topics")
}

model Thinker {
  id            String   @id @default(cuid())
  subjectId     String
  slug          String   @unique
  name          Json     // Record<"en" | "hi" | "te", string>
  era           String
  biography     Json     // Record<"en" | "hi" | "te", string>
  majorWorks    String[] // Array of book titles
  coreConcepts  Json     // Array of formulations
  criticism     Json     // Trilingual critiques
  examRelevance Json     // UPSC pyq mappings

  subject       Subject  @relation(fields: [subjectId], references: [id], onDelete: Cascade)

  @@index([subjectId])
  @@map("thinkers")
}

model MCQQuestion {
  id                 String     @id @default(cuid())
  topicId            String?
  subjectId          String
  difficulty         Difficulty @default(MEDIUM)
  question           Json       // Record<"en" | "hi" | "te", string>
  options            Json       // Record<"en" | "hi" | "te", string[]>
  correctOptionIndex Int
  explanation        Json       // Record<"en" | "hi" | "te", string>
  previousYearExam   String?

  topic              Topic?     @relation(fields: [topicId], references: [id], onDelete: SetNull)

  @@index([subjectId, difficulty])
  @@map("mcq_questions")
}

model UserProgress {
  id          String   @id @default(cuid())
  userId      String
  topicId     String
  isCompleted Boolean  @default(false)
  lastReadAt  DateTime @default(now())

  user        User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  topic       Topic    @relation(fields: [topicId], references: [id], onDelete: Cascade)

  @@unique([userId, topicId])
  @@map("user_progress")
}

model Bookmark {
  id        String   @id @default(cuid())
  userId    String
  topicId   String
  createdAt DateTime @default(now())

  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  topic     Topic    @relation(fields: [topicId], references: [id], onDelete: Cascade)

  @@unique([userId, topicId])
  @@map("bookmarks")
}

model QuizAttempt {
  id         String   @id @default(cuid())
  userId     String
  subjectId  String
  mode       String
  score      Int
  total      Int
  difficulty String
  createdAt  DateTime @default(now())

  user       User     @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@map("quiz_attempts")
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(prismaSchemaCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="prisma-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="prisma-modal-container"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-xl bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
          <Database className="h-4 w-4" />
          <span>PostgreSQL / Supabase Ready Schema</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            prisma/schema.prisma
          </h2>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-xl bg-amber-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-amber-700"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span>{copied ? 'Copied Schema!' : 'Copy Schema'}</span>
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Designed for Next.js 14 App Router, Prisma ORM, and Supabase. Stores multilingual text via JSON fields (`Record&lt;&quot;en&quot; | &quot;hi&quot; | &quot;te&quot;, string&gt;`) to allow seamless zero-latency trilingual switching.
        </p>

        {/* Code Box */}
        <div className="mt-4 overflow-x-auto rounded-2xl bg-slate-950 p-4 font-mono text-xs text-emerald-400 leading-relaxed border border-slate-800">
          <pre>{prismaSchemaCode}</pre>
        </div>
      </div>
    </div>
  );
};
