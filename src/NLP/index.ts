import prepositions, { isPreposition } from "./Dictionary/prepositions";
import findVerb from "./findVerb";




export function lexAnalyzer(sentence: string) {
    const words = sentence.split(' ');

    // Clean up


    return words.map(word => {

        if (isPreposition(word)) {
            return { word, ...prepositions[word] }
        }
        const verb = findVerb(word);

        let x = verb[0];

        if (verb.length > 0)
            return { word, ...x };

        return { word }
    })

}
