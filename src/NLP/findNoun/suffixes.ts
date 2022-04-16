import { NounProperties } from "./types"

// 
const suffixesStage1: Suffix[] = [
    {
        value: "ات",
        desc: "تاء جمع المؤنث السالم",
        geneder: 'female',
        count: "plural"
    },
    {
        value: "ة",
        desc: 'تاء التأنيث',
        geneder: 'female',
    },
    {
        value: "ون",
        desc: 'واو الجمع',
        count: "plural"
    },
    {
        value: "ين",
        desc: 'ياء الجمع',
        count: "plural"
    },
    {
        value: "ان",
        desc: 'ألف التثنية ',
        count: "pair"
    },
    {
        value: "تان",
        desc: 'ألف التثنية للمؤنث',
        count: "pair",
        geneder: 'female'
    }
]

// --
const suffixesStage2: Suffix[] = [

]

type Suffix = {
    value: string
    desc?: string
} & NounProperties

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

