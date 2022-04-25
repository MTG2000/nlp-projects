import axios from 'axios';
import { useState } from 'react';
import { Recorder } from './helpers';

export default function Test() {
    const [isRecording, setIsRecording] = useState(false)
    const [result, setResult] = useState('--')

    const recordTestingAudio = () => {
        setIsRecording(true);
        Recorder().record(async (audioFile) => {
            setIsRecording(false);
            const formData = new FormData();
            formData.append('word', 'word')
            formData.append("audio", audioFile.blob, "audioFile.wav");
            const response = await axios.post("http://127.0.0.1:5000/test", formData);
            setResult(response.data.result)
        },
        );
    };

    return (
        <section className="">
            <h2 className="text-h3 text-gray-700">اختبار</h2>
            <div className="flex gap-24 mt-24">
                <button
                    disabled={isRecording}
                    className={`bg-primary-600 text-white py-8 px-16 rounded-8 ${isRecording && 'opacity-50'}`}
                    onClick={recordTestingAudio}
                >
                    تسجيل صوت جديد 🎤
                </button>

                <p className='text-body1 font-bolder text-red-600'>{result ? result : "لم يتعرف"}</p>
            </div>

        </section>
    )
}
