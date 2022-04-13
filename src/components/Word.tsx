import { LexWordType } from "src/NLP"
import { VerbProperties } from "src/NLP/findNoun/types";
import { toArabic } from "src/utils";


export default function Word({ word }: { word: LexWordType }) {

    if (word.type === 'verb') {

        let wordProps: VerbProperties = {
            geneder: 'male',
            count: 'single',
            tense: 'past'
        };
        for (const p of word.prefix) {
            const { value, desc, ...other } = p;
            wordProps = { ...wordProps, ...other }
        }
        for (const s of word.suffix) {
            const { value, desc, ...other } = s;
            wordProps = { ...wordProps, ...other }
        }

        return <div className="word">
            <p>{word.word}</p>
            <p>{word.root}</p>
            <p>{toArabic(wordProps.tense)}</p>
            <p>{toArabic(wordProps.count)}</p>
            <p>{toArabic(wordProps.geneder)}</p>
        </div>
    }

    if (word.type === 'noun') {
        return <div className="word">
            <p>{word.word}</p>
            <p>{word.root}</p>
        </div>
    }

    if (word.type === 'preposition') {
        return <div className="word">
            <p>{word.word}</p>
            <p>حرف جر</p>
        </div>
    }


    return <></>;
}
