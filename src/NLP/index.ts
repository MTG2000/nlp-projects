import { Dictionary } from "./Dictionary";
import conjunctions from "./Dictionary/conjs";
import prepositions, { isPreposition } from "./Dictionary/prepositions";


export { Dictionary } from "./Dictionary";


export function lexAnalyzer(sentence: string) {
    // Clean up sentence
    sentence = sentence.replaceAll(".","")
    sentence = sentence.replaceAll("،","")
    
    for (const con in conjunctions) {
        sentence = sentence.replaceAll(` ${con} `,' ');
    }

    
    for (const pre in prepositions) {
        console.log(pre);
        
        sentence = sentence.replaceAll(` ${pre} `,' ');
        console.log(sentence);
    }
    sentence = sentence.trim()
    sentence = sentence.replaceAll(/ +/g," ")
    
    
    const words = sentence.split(' ');
    return words.map(word => {

        if (isPreposition(word)) {
            return { word, ...prepositions[word] }
        }

        return { word, ...Dictionary.getWord(word) };
    })

}
