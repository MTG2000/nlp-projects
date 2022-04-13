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


    const words = sentence.split(' ');

    // ------------------
    // Process Words
    // ------------------

    return words.map(_word => {

        let word = _word;

        // Preproccess word
        // ----------------
        while (word.indexOf('ّ') !== -1) {
            const idx = word.indexOf('ّ');
            word = word.substring(0, idx) + word[idx - 1] + word.substring(idx + 1);
        }
        word = word.replaceAll('آ', "أا");
        // ----------------


        if (isPreposition(word)) {
            return { word: _word, ...prepositions[word] }
        }

        // Check if word is Vern
        const verbResults = findVerb(word);
        let x = verbResults[0];
        if (verbResults.length > 0)
            return { word: _word, ...x };



        // Check if word is Noun
        const nounResults = findNoun(word);
        let y = nounResults[0];
        if (nounResults.length > 0)
            return { word: _word, ...y };



        return {
            type: 'not found' as const,
            word: _word
        }
    })

}


export type LexWordType = ReturnType<typeof lexAnalyzer>[number]