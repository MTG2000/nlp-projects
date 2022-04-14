import { LexWordType } from "src/NLP"
import { NounProperties } from "src/NLP/findNoun/types";
import { VerbProperties } from "src/NLP/findVerb/types";
import { toArabic } from "src/utils";


export default function Word({ word }: { word: LexWordType }) {

    let Content: JSX.Element = <></>;


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

        Content = <>
            <p className="text-secondary-500 italic">{word.root}</p>
            <p>{toArabic(wordProps.tense)}</p>
            <p>{toArabic(wordProps.count)}</p>
            <p>{toArabic(wordProps.geneder)}</p>
        </>

    }

    if (word.type === 'noun') {

        let wordProps: NounProperties = {
            geneder: 'male',
            count: 'single'
        };
        for (const p of word.prefix) {
            const { value, desc, ...other } = p;
            wordProps = { ...wordProps, ...other }
        }
        for (const s of word.suffix) {
            const { value, desc, ...other } = s;
            wordProps = { ...wordProps, ...other }
        }

        Content = <>
            <p className="text-secondary-500 italic">{word.root}</p>
            <p>{word.stem.type}</p>
            <p>{toArabic(wordProps.count)}</p>
            <p>{toArabic(wordProps.geneder)}</p>
        </>

    }

    if (word.type === 'preposition') {
        Content = <>
            <p>حرف جر</p>
        </>
    }


    return <div className="bg-white p-16 rounded-16 shadow-md text-center text-gray-800">
        <p className="mb-12 border-b pb-8 text-purple-600">{word.word}</p>
        {Content}
    </div>;
}
