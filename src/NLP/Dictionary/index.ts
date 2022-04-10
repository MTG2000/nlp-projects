
import dictData, { nounsSuffixes } from './data'



class _Dictionary {

    wordToRoot: Map<string, string>;
    dictionary: Record<string, any>;

    constructor() {


        this.dictionary = dictData;
        this.wordToRoot = new Map();
        for (const root of Object.keys(dictData)) {
            for (const derivative of Object.keys(this.dictionary[root])) {
                this.wordToRoot.set(derivative, root);
            }
        }
        console.log(this.wordToRoot.get('يلعب'));
    }

    getWord(_word: string) {

        let word = _word;

        if (word.startsWith('ال'))
            word = word.slice(2);




        if (this.wordToRoot.has(word)) {
            const root = this.wordToRoot.get(word);

            return {
                root,
                ...this.dictionary[root!][word]
            }
        }

        const suffix = extractSuffix(word);
        if (suffix) {
            const wordWithoutSuffix = word.slice(0, word.length - suffix.suffix.length);
            if (this.wordToRoot.has(wordWithoutSuffix)) {
                const root = this.wordToRoot.get(wordWithoutSuffix);
                const { suffix: _, ...nounProps } = suffix
                return {
                    root,
                    ...this.dictionary[root!][wordWithoutSuffix],
                    ...nounProps
                }
            }

        }



    }

}

function extractSuffix(word: string) {
    for (const suffix in nounsSuffixes) {
        if (word.endsWith(suffix))
            return { suffix, ...nounsSuffixes[suffix] }

    }
    return false;

}




export const Dictionary = new _Dictionary();
