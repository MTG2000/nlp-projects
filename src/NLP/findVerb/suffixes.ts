import { VerbProperties } from "./types"

// عطف و استفهام
const suffixesStage1: Suffix[] = [
    {
        value: "تْ",
        desc: 'تاء التأنيث الساكنة'
    },
    {
        value: "ت",
        desc: 'تاء الفاعل المتحركة'
    }
]

// مستقبل
const suffixesStage2: Suffix[] = [
    {
        value: "ما",
        count: 'pair'
    },
    {
        value: "م",
        count: 'plural'
    },
    {
        value: "ن",
        count: 'plural',
        geneder: 'female'
    },
    {
        value: "وا",
        count: 'plural'
    },
    {
        value: "ون",
        count: 'plural'
    },
    {
        value: "ين",
        count: 'single',
        geneder: 'female'
    },
    {
        value: "ان",
        count: 'pair'
    }
]

type Suffix = {
    value: string
    desc?: string
} & VerbProperties

const stages = [suffixesStage2, suffixesStage1];

let allResults: Suffix[][] = [];
let currentStack: Suffix[] = [];


export function getPossibleSuffixes(word: string) {
    allResults = [
        [], // No Suffix
    ];
    currentStack = [];

    rec(word, 0);
    return allResults;
}


function copyResult() {
    allResults.push([...currentStack].reverse());
}

function rec(word: string, stage: number) {
    if (stage === stages.length)
        return;

    for (const suf of stages[stage]) {
        if (word.endsWith(suf.value)) {
            const newWord = word.slice(0, word.length - suf.value.length);
            currentStack.push(suf);
            copyResult();
            rec(newWord, stage + 1);
            currentStack.pop()
        }
    }

    rec(word, stage + 1);
}

