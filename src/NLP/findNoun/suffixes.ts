
// 
const suffixesStage1: Suffix[] = [
    {
        value: "ات",
        desc: "تاء جمع المؤنث السالم"
    },
    {
        value: "ة",
        desc: 'تاء التأنيث'
    },
    {
        value: "ون",
        desc: 'واو الجمع'
    },
    {
        value: "ين",
        desc: 'ياء الجمع'
    },
    {
        value: "ان",
        desc: 'ألف التثنية '
    },
    {
        value: "تان",
        desc: 'ألف التثنية للمؤنث'
    }
]

// مستقبل
const suffixesStage2: Suffix[] = [

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

