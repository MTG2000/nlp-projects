import conjunctions from "./Dictionary/conjs";
import prepositions, { isPreposition } from "./Dictionary/prepositions";
import findNoun from "./findNoun";
import findVerb from "./findVerb";




export function lexAnalyzer(sentence: string) {


    // ------------------
    // Clean up sentence
    // ------------------
    sentence = sentence.replaceAll(".", "")
    sentence = sentence.replaceAll("،", "")

    for (const con in conjunctions) {
        sentence = sentence.replaceAll(`${con} `, '');
    }


    for (const pre in prepositions) {
        sentence = sentence.replaceAll(`${pre} `, '');
    }
    sentence = sentence.trim()
    sentence = sentence.replaceAll(/ +/g, " ")

    sentence = sentence.replaceAll('آ', "أا");

    while (sentence.indexOf('ّ') !== -1) {
        const idx = sentence.indexOf('ّ');
        sentence = sentence.substring(0, idx) + sentence[idx - 1] + sentence.substring(idx + 1);
    }



    const words = sentence.split(' ');

    // ------------------
    // Process Words
    // ------------------

    return words.map(word => {

        if (isPreposition(word)) {
            return { word, ...prepositions[word] }
        }
        const verbResults = findVerb(word);

        let x = verbResults[0];

        if (verbResults.length > 0)
            return { word, ...x };


        const nounResults = findNoun(word);

        let y = nounResults[0];

        if (nounResults.length > 0)
            return { word, ...y };



        return {
            type: 'not found' as const,
            word
        }
    })

}


export type LexWordType = ReturnType<typeof lexAnalyzer>[number]