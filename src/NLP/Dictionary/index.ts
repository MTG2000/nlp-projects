
const roots = [
    'لعب',
    "ذهب",
    "اكل",
    "شرب"
]

const rootsSet = new Set<string>(roots);

export function findRoot(word: string) {
    return rootsSet.has(word) && word;;
}
