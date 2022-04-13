import { findRootInDictionary } from "../Dictionary";

const stems = [
    {
        value: "فاعل"
    },
    {
        value: "مفعول"
    },
    {
        value: "فععال"
    },
]

export function findRoot(word: string) {

    for (const stem of stems) {
        if (stem.value.length === word.length) {
            for (let i = 0; i < word.length; i++) {
                if (['ف', 'ع', 'ل'].includes(stem.value[i])) {

                    if (i === word.length - 1) {
                        let rootWord = '';
                        for (const letter of 'فعل') {
                            rootWord += word[stem.value.indexOf(letter)]
                        }
                        console.log(rootWord);

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
