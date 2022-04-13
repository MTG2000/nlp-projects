
const roots = [
    'لعب',
    "ذهب",
    "أكل",
    "طلب",
    "شرب"
]

const rootsSet = new Set<string>(roots);

export function findRootInDictionary(word: string) {
    return rootsSet.has(word) && word;;
}
