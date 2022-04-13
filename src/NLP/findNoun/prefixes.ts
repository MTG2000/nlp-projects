
// أحرف الجر
const prefixesStage1: Prefix[] = [
    {
        value: "ف",
        desc: 'فاء العطف'
    },
    {
        value: "ب",
    },
    {
        value: "لل",
    }
]

// 
const prefixesStage2: Prefix[] = [
    {
        value: "ال",
        desc: 'ال التعريف'
    }
]


type Prefix = {
    value: string
    desc?: string
}

const stages = [prefixesStage1, prefixesStage2];

let allResults: Prefix[][] = [];
let currentStack: Prefix[] = [];


export function getPossiblePrefixes(word: string) {
    allResults = [
        [], // No Prefix
    ];
    currentStack = [];

    rec(word, 0);
    return allResults;
}


function copyResult() {
    allResults.push([...currentStack]);
}

function rec(word: string, stage: number) {
    if (stage === stages.length)
        return;

    for (const pre of stages[stage]) {
        if (word.startsWith(pre.value)) {
            const newWord = word.slice(pre.value.length);
            currentStack.push(pre);
            copyResult();
            rec(newWord, stage + 1);
            currentStack.pop()
        }
    }

    rec(word, stage + 1);
}

