
import dictData from './data.json'
import prepositionsData from './prepositions.json'

class _Dictionary {
    constructor() {
        this.wordToRoot = new Map();
        for (const root of Object.keys(dictData)) {
            for (const derivative of Object.keys(dictData[root])) {
                this.wordToRoot.set(derivative, root);
            }
        }
        console.log(this.wordToRoot.get('يلعب'));
    }

    getWord(word) {
        if (this.wordToRoot.has(word)) {
            const root = this.wordToRoot.get(word);
            return {
                root,
                ...dictData[root][word]
            }
        }
        if (prepositionsData[word])
            return prepositionsData[word];

    }
}

export const Dictionary = new _Dictionary();
