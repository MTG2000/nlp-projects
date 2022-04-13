import { findRootInDictionary } from "../Dictionary";

const stems = [
    {
        value: "فاعل",
        type: 'اسم فاعل'
    },
    {
        value: "مفعلل",
        type: 'اسم فاعل'
    },
    {
        value: "متفعلل",
        type: 'اسم فاعل'
    },
    {
        value: "مفعول",
        type: 'اسم مفعول'
    },
    {
        value: "فععال",
        type: 'اسم فاعل'
    },
]

export function findRoot(word: string) {

    for (const stem of stems) {

        let rootWord = ''

        if (stem.value.length === word.length) {
            for (let i = 0; i < word.length; i++) {
                if (['ف', 'ع', 'ل'].includes(stem.value[i])) {

                    rootWord += word[i];

                    if (i === word.length - 1) {
                        const root = findRootInDictionary(rootWord);
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
