import wordLists from "./word-lists.json" with { type: "json" };

export { wordLists };

const GRADE_ORDER = wordLists.grades.map((g) => g.id);
const labelOf = (id) => wordLists.grades.find((g) => g.id === id)?.label;

/** Lists whose grade range includes `grade` (an id such as "kindergarten"). English lists only: other languages have no grades. */
export function listsForGrade(grade) {
  const label = labelOf(grade);
  if (!label) throw new Error(`Unknown grade "${grade}". Valid: ${GRADE_ORDER.join(", ")}`);
  const at = GRADE_ORDER.indexOf(grade);
  const idx = (l) => wordLists.grades.findIndex((g) => g.label === l);
  return wordLists.lists.filter((l) => l.language === "en" && idx(l.gradeFrom) <= at && at <= idx(l.gradeTo));
}

/** Every different word from the lists that cover `grade`. */
export function wordsForGrade(grade) {
  return [...new Set(listsForGrade(grade).flatMap((l) => l.words))];
}

export function listById(id) {
  return wordLists.lists.find((l) => l.id === id);
}
