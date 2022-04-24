import axios from 'axios';
import { Recorder } from './helpers';

export default function Test() {

    const recordTestingAudio = () => {
        Recorder.record(async (audioFile) => {
            const formData = new FormData();
            formData.append('word', 'word')
            formData.append("audio", audioFile.blob, "audioFile.wav");
            const response = await axios.post("http://127.0.0.1:5000/test", formData);
            console.log(response.data);
        },
        );
    };

    return (
        <section className="">
            <h2 className="text-h3 text-gray-700">اختبار</h2>
            <button
                className="bg-primary-600 text-white py-8 px-16 rounded-8 mt-24"
                onClick={recordTestingAudio}
            >
                تسجيل صوت جديد 🎤
            </button>

        </section>
    )
}
