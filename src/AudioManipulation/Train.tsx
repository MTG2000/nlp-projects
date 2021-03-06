import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import Input from "src/components/Input";
import { AudioFile, Recorder } from "./helpers";

export default function Train() {
  const [trianAudios, setTrianAudios] = useState<AudioFile[]>([]);
  const [trainWord, setTrainWord] = useState("");
  const [isRecording, setIsRecording] = useState(false)

  const postTrainApi = async () => {
    const formData = new FormData();
    formData.append("word", trainWord);
    for (let i = 0; i < trianAudios.length; i++) {
      formData.append("audios[]", trianAudios[i].blob);
    }

    const response = await axios.post("http://127.0.0.1:5000/train", formData);
    console.log(response.data);
  };

  const recordTrainingAudio = () => {
    Recorder().startRecording();
    setIsRecording(true);

    Recorder().record((audioFile) => {
      setTrianAudios([...trianAudios, audioFile]);
      setIsRecording(false);
    });
  };
  const uploadAudiosHandler = (e: React.ChangeEvent<HTMLInputElement>) => {

    const event = e.target.files!;
    let files = [];
    console.log(event.length);

    for (let i = 0; i < event.length; i++) {
      const file = event[i];
      files.push({
        name: file.name,
        blob: file,
        dataUrl: URL.createObjectURL(file),
      })
    }
    console.log(files);

    setTrianAudios([
      ...trianAudios,
      ...files
    ]);
  };
  return (
    <section>
      <h2 className="text-h3 text-gray-700">تدريب</h2>
      <div className="flex gap-12">
        <button
          disabled={isRecording}
          className={`bg-primary-600 text-white py-8 px-16 rounded-8 mt-24 ${isRecording && 'opacity-50'}`}
          onClick={recordTrainingAudio}
        >
          تسجيل صوت جديد 🎤
        </button>

        <label htmlFor="uploadAudios">
          <p className="bg-primary-600 text-white py-8 px-16 rounded-8 mt-24 cursor-pointer">
            رفع ملف
          </p>
          <input
            className="uploadAudios"
            id="uploadAudios"
            type={"file"}
            accept="audio/wav"
            multiple
            onChange={uploadAudiosHandler}
          />
        </label>
      </div>

      <div className="flex flex-col gap-10 mt-16">
        {trianAudios.map((audio) => (
          <div className="flex gap-12 items-center">
            <audio src={audio.dataUrl} controls></audio>
            <a
              className="bg-secondary-600 text-white py-4 px-12 rounded-8"
              href={audio.dataUrl}
              download={`${audio.name}.wav`}
            >
              {" "}
              تحميل الملف
            </a>
            <button
              className="bg-red-600 text-white py-4 px-12 rounded-8"
              onClick={() =>
                setTrianAudios(trianAudios.filter((a) => a.name !== audio.name))
              }
            >
              إزالة
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-10 mt-24">
        <Input
          placeholder="حرف التدريب"
          value={trainWord}
          onChange={setTrainWord}
        />
        <button
          className={`bg-primary-600 text-white py-8 px-16 rounded-8 ${trianAudios.length < 3 && "pointer-events-none opacity-60"
            }`}
          onClick={postTrainApi}
        >
          تدريب
        </button>
      </div>
    </section>
  );
}
