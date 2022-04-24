import React, { useState } from "react";
import axios from "axios"

const AudioRecord = () => {
 
  const [audioSrc, setAudioSrc] = useState("")
  const [regressionedWord, setRegressionedWord] = useState("")
  const [trianAudios,setTrianAudios] = useState([])
  const [audioBlob, setAudioBlob] = useState("")
  

  const fetchAudio = (audios)=>{
    const formData = new FormData()
    formData.append("word",regressionedWord)
    for(let i=0;i<audios.length;i++)
     {
       formData.append("audios[]",audios[i] ,`audio${i}.wav`)
     }
     
     (async()=>{
       const response = await axios.post("http://127.0.0.1:5000/trian",{
         formData 
       });
       console.log(response.data)
     })();
   }
 const uploudAudioHandelr =(e)=>{
   fetchAudio(e.target.files)
 }
 const trainAudioRecordedHandler = ()=>{
   fetchAudio(trianAudios)
 }

  const recordAudioHandler = async () => { 
    const stream = await navigator.mediaDevices.getUserMedia({audio:true})
    const  mediaRecorder= new MediaRecorder(stream);
    let dataChunk = []
    mediaRecorder.start(); 
    setTimeout(()=>{
     mediaRecorder.stop()
    },2000)
    mediaRecorder.addEventListener("dataavailable",
     (event) =>dataChunk.push(event.data)
  );
  mediaRecorder.addEventListener("stop",
  ()=> {
    const _audioBlob = new Blob(dataChunk,{ type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(_audioBlob);
    setTrianAudios([...trianAudios,_audioBlob])
    setAudioSrc(audioUrl)
    setAudioBlob(_audioBlob)
    
   
    
  }
  )
}
const fetchTestAudioHandler= async()=>{
  const formData = new FormData()
  formData.append("audio_data",audioBlob,"audio.wav")
  formData.append("word","mem")
  const response = await axios.post("http://127.0.0.1:5000/test",{
    formData
  });
  console.log(response.data)
}
  return (
    <>
      <div className="recordContainer">
        <button onClick={recordAudioHandler}>
          record
        </button>
        <a href={audioSrc} download={`${new Date().toString()}.wav`}> download audio</a>
        <audio  src={audioSrc} controls></audio>
        <button onClick={fetchTestAudioHandler}>trian</button>
      </div>
      <div className="trainContainer">
        <input type="text" lang="" value={regressionedWord} onChange={(e)=>setRegressionedWord(e.target.value)}></input>
        <button onClick={trainAudioRecordedHandler}>train</button>
        <input type={"file"} accept="Audio/*" onChange={uploudAudioHandelr} multiple/>
      </div>
    </>
  );
};

export default AudioRecord;
