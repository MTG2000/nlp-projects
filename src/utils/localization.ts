import { VerbProperties } from "src/NLP/findVerb/types";

type TT = NonNullable<VerbProperties['count'] | VerbProperties['geneder'] | VerbProperties['tense']>

const dictionary: Record<TT, string> = {
    'present': 'حاضر',
    'past': 'ماضي',
    'future': 'مستقبل',
    'order': 'أمر',
    'single': 'مفرد',
    'pair': 'مثنى',
    'plural': 'جمع',
    "male": 'مذكر',
    "female": "مؤنث",

}


export function toArabic(word?: string) {
    if (word && word in dictionary)
        return dictionary[(word as TT)];
}