import RecorderJs from "recorder-js";

export interface AudioFile {
    name: string
    blob: Blob
    dataUrl: string
}

class _Recorder {
    recorder: RecorderJs;

    constructor() {
        const audioContext = new window.AudioContext()
        this.recorder = new RecorderJs(audioContext);
        navigator.mediaDevices
            .getUserMedia({
                audio: true
            })
            .then((stream) => this.recorder.init(stream))
            .catch((err) => console.log("Uh oh... unable to get stream...", err));
    }


    record(cb: (audio: AudioFile) => void) {
        this.startRecording();
        setTimeout(() => this.stopRecording(cb), 1100)
    }

    startRecording() {
        this.recorder.start();
    }

    async stopRecording(cb: (audio: AudioFile) => void) {
        this.recorder.stop().then(({ blob }) => {
            const dataUrl = URL.createObjectURL(blob);
            const name = Date.now().toString();

            cb({
                blob,
                dataUrl,
                name
            })
        });
    }
}

let recorder: _Recorder;

export const Recorder = () => {
    return recorder = recorder ?? new _Recorder()
} 
