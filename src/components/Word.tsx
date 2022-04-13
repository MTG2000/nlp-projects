import { LexWordType } from "src/NLP"


export default function Word({ word }: { word: LexWordType }) {

    if (word.type === 'verb') {
        return <div className="word">
            <p>{word.word}</p>
            <p>{word.root}</p>
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
