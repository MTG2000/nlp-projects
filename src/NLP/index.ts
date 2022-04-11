import conjunctions from "./Dictionary/conjs";
import prepositions, { isPreposition } from "./Dictionary/prepositions";
import findVerb from "./findVerb";




export function lexAnalyzer(sentence: string) {
    // Clean up sentence
    sentence = sentence.replaceAll(".", "")
    sentence = sentence.replaceAll("،", "")

    for (const con in conjunctions) {
        sentence = sentence.replaceAll(` ${con} `, ' ');
    }


    for (const pre in prepositions) {
        console.log(pre);

        sentence = sentence.replaceAll(` ${pre} `, ' ');
        console.log(sentence);
    }
    sentence = sentence.trim()
    sentence = sentence.replaceAll(/ +/g, " ")


    const words = sentence.split(' ');
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
