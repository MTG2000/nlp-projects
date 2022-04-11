
// عطف و استفهام
const prefixesStage1: Prefix[] = [
    {
        value: "ف",
        desc: 'فاء العطف'
    },
    {
        value: "أ",
    },
    {
        value: "ل",
    }
]

// مستقبل
const prefixesStage2: Prefix[] = [
    {
        value: "س",
        desc: 'سين الاستقبال'
    }
]

// ضمير متصل
const prefixesStage3: Prefix[] = [
    {
        value: "ي",
        desc: 'ياء المضارعة'
    },
    {
        value: "ت",
        desc: 'تاء المضارعة'
    },
    {
        value: "أ",
        desc: 'ألف المضارعة'
    },
    {
        value: "ن",
        desc: 'نون المضارعة'
    }
]

type Prefix = {
    value: string
    desc?: string
}

const stages = [prefixesStage1, prefixesStage2, prefixesStage3];

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

