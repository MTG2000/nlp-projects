import { findRootInDictionary } from "../Dictionary";

const stems = [
    {
        value: "فعل"
    },
    {
        value: "أفعل"
    },
    {
        value: "فاعل"
    },
    {
        value: "فععل"
    },
]

export function findRoot(word: string) {

    for (const stem of stems) {
        if (stem.value.length === word.length) {
            for (let i = 0; i < word.length; i++) {
                if (['ف', 'ع', 'ل'].includes(stem.value[i])) {

                    if (i === word.length - 1) {
                        const root = findRootInDictionary(word);
                        if (root)
                            return {
                                stem,
                                root,
                            }
                    }
                    continue;
                }

                if (word[i] !== stem.value[i])
                    break;
            }
        }
    }
}
