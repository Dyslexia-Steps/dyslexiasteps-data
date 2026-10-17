# dyslexiasteps-data

Free word lists from [Dyslexia Steps](https://dyslexiasteps.com), placed by grade with the source of each placement:
38 English phonics and sight word lists (1,079 different words, Pre-K to Grade 3), plus 216 lists in German, Spanish, French,
Dutch and Brazilian Portuguese. Every English list says why it sits at its grade: a Common Core Foundational Skills item,
Dolch's grade levels (public domain), or "typical sequence" when no standard names the skill.

```js
import { listsForGrade, wordsForGrade, listById } from "dyslexiasteps-data";

listsForGrade("kindergarten").map((l) => l.title); // sight words, short vowel CVC lists, word families, rhymes…
wordsForGrade("grade-1").length;                   // every different word from the lists that cover Grade 1
listById("short-a").basis;                         // "RF.K.2.d, RF.K.3.b"
```

Also importable as plain files: `dyslexiasteps-data/word-lists.json` and `dyslexiasteps-data/word-lists.csv`
(one row per word: language, grade range, section, list, group, word, placement basis and source links).

**Limits.** A grade is a guide, not a rule: children learn at different speeds and programs order skills differently. The lists in
other languages follow each language's own reading curriculum and are not mapped to US grades (their grade columns are empty).
The word lists are not an assessment of any child.

Live pages: https://dyslexiasteps.com/word-lists-by-grade · Licenses: data CC BY 4.0 (see `DATA-LICENSE.md`), code MIT.
