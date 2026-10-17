export type GradeId = "pre-k" | "kindergarten" | "grade-1" | "grade-2" | "grade-3";
export interface WordList {
  id: string;
  language: string;
  title: string;
  section: string;
  /** Empty for lists in languages other than English. */
  gradeFrom: string;
  gradeTo: string;
  /** Source of the placement, e.g. "RF.K.2.d, RF.K.3.b" or "Dolch (1936)". Empty when there is no grade. */
  basis: string;
  url: string;
  updated: string;
  words: string[];
  groups: Record<string, string[]>;
}
export interface WordListsData {
  name: string;
  page: string;
  license: { name: string; url: string; note: string };
  citeAs: string;
  updated: string;
  grades: { id: GradeId; label: string; typicalAges: string }[];
  placementBasis: Record<string, { kind: "classic" | "standard" | "typical"; code: string; summary: string; url: string }>;
  lists: WordList[];
}
export const wordLists: WordListsData;
export function listsForGrade(grade: GradeId): WordList[];
export function wordsForGrade(grade: GradeId): string[];
export function listById(id: string): WordList | undefined;
