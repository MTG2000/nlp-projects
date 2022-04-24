import React, { useState } from "react";
import axios from "axios"

const AudioRecord = () => {
 
  const [audioSrc, setAudioSrc] = useState("")
  const [regressionedWord, setRegressionedWord] = useState("")
  const [trianAudios,setTrianAudios] = useState([])
  

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
    let stream = await navigator.mediaDevices.getUserMedia({audio:true})
    
    let  mediaRecorder= new MediaRecorder(stream);
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
    const audioBlob = new Blob(dataChunk,{ type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(audioBlob);
    setTrianAudios([...trianAudios,audioBlob])
    setAudioSrc(audioUrl)
    (async()=>{
      const formData = new FormData()
      formData.append("audio_data",audioBlob,"audio.wav")
      formData.append("word","mem")
      const response = await axios.post("http://127.0.0.1:5000/test",{
        formData
      });
      console.log(response.data)
    })();
   
    
  }
  )
}
  return (
    <>
      <div>AudioRecord</div>
      <button onClick={recordAudioHandler}>
        record
      </button>
      <button onClick={trainAudioRecordedHandler}>train</button>
      <a href={audioSrc} download={`${new Date().toString()}.wav`}> download audio</a>
      <input type={"file"} accept="Audio/*" onChange={uploudAudioHandelr} multiple/>
      <audio  src={audioSrc} controls></audio>
      <input type="text" lang="" value={regressionedWord} onChange={(e)=>setRegressionedWord(e.target.value)}></input>
    </>
  );
};

export default AudioRecord;
