import { Dictionary } from "./Dictionary";
import prepositions, { isPreposition } from "./Dictionary/prepositions";


export { Dictionary } from "./Dictionary";


export function lexAnalyzer(sentence: string) {
    const words = sentence.split(' ');

    return words.map(word => {

        if (isPreposition(word)) {
            return { word, ...prepositions[word] }
        }

        return { word, ...Dictionary.getWord(word) };
    })

}
