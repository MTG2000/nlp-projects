import { Howl, Howler } from 'howler';
import { useState } from 'react';
import Input from 'src/components/Input';


function say(word: string) {
    let cur = 0;

    const tashkeel = ['ُ', "َ", "ِ"];

    const playLetter = () => {

        if (cur >= word.length) return;
        let letter = word[cur++];

        if (cur < word.length && tashkeel.includes(word[cur]))
            letter += word[cur++]

        if (letter === ' ')
            setTimeout(playLetter, 300)
        else {
            const sound = new Howl({
                src: [
                    (process.env.REACT_APP_GITHUB ? "/nlp-projects" : "") +
                    `/assets/audios/audioSynth/${letter}.mp3`]
            });

            sound.on('end', playLetter)
            sound.play();
        }
    }

    playLetter();
}

export default function AudioSynthesizer() {
    const [wordInput, setWordInput] = useState("حَمَدَ مُحَمَد")

    return (
        <div className='bg-white p-32 rounded-12 shadow-md border'>
            <Input
                placeholder='أدخل كلمة ليتم لفظها'
                value={wordInput}
                onChange={setWordInput}
            />
            <button
                className={`bg-primary-600 text-white py-8 px-16 rounded-8 mt-16`}
                onClick={() => say(wordInput)}
            >
                تشغيل الصوت 🔉
            </button>
        </div>
    )
}
