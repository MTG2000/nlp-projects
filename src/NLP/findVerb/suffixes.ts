
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
    },
    {
        value: "م",
    },
    {
        value: "ن"
    },
    {
        value: "وا"
    },
    {
        value: "ون"
    },
    {
        value: "ين"
    },
    {
        value: "ان"
    }
]

type Suffix = {
    value: string
    desc?: string
}

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

