import { Howl } from 'howler';
import { useState, FormEvent } from 'react';
import Input from 'src/components/Input';


function say(word: string, onEnd: () => void) {
    let cur = 0;

    const tashkeel = ['ُ', "َ", "ِ"];

    const playLetter = () => {

        if (cur >= word.length) return onEnd();
        let letter = word[cur++];

        if (cur < word.length && tashkeel.includes(word[cur]))
            letter += word[cur++]

        if (letter === ' ')
            setTimeout(playLetter, 300)
        else {
            const sound = new Howl({
                src: [
                    (process.env.REACT_APP_GITHUB ? "/nlp-projects" : "") +
                    `/assets/audios/audioSynth/${letter}.mp3`],
                rate: 1.3
            });

            sound.on('end', playLetter)
            sound.play();
        }
    }

    playLetter();
}

export default function AudioSynthesizer() {
    const [isPlaying, setIsPlaying] = useState(false)
    const [wordInput, setWordInput] = useState("لَعِبَ مُحَمَد");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsPlaying(true);
        say(wordInput, () => setIsPlaying(false));
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='bg-white p-32 rounded-12 shadow-md border'>
            <Input
                placeholder='أدخل كلمة ليتم لفظها'
                value={wordInput}
                onChange={setWordInput}
            />
            <button
                disabled={isPlaying}
                className={`bg-primary-600 text-white py-8 px-16 rounded-8 mt-16 ${isPlaying && 'opacity-60'}`}
            >
                تشغيل الصوت 🔉
            </button>
        </form>
    )
}
