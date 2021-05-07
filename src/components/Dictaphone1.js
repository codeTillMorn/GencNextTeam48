import React, { useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button} from "react-bootstrap"
import { jsPDF } from "jspdf";

const Dictaphone1 = () => {
//  const [message, setMessage] = useState('');
//  const commands = [
//    {
//      command: 'reset',
//      callback: () => resetTranscript()
//    },
//    {
//      command: 'shut up',
//      callback: () => setMessage('I wasn\'t talking.')
//    },
//    {
//      command: 'Hello',
//      callback: () => setMessage('Hi there!')
//    },
//  ]
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition( );

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);
 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en',
   });
  }
   const stopListen = () => {
    console.log("stopping and saving pdf");
    SpeechRecognition.stopListening();

 };
 const savePdf = () => {

  var doc = new jsPDF();
  doc.text(10, 10, finalTranscript);
  doc.save('transcript.pdf');
 };

 return (
   <div>
     <div>
       <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>
         <Button type="button" variant="outline-secondary" onClick={resetTranscript}>Reset</Button>{"  "}
         <Button color="#70ff5c" variant="outline-success" onClick={listenContinuously}  >Start</Button>{"  "}
         <Button type="button" variant="outline-danger" onClick={stopListen}>Stop</Button>{"  "}
       </div>
       <br/>
       <Button type="button" variant="outline-primary" onClick={savePdf}>SAVE pdf</Button>{"  "}
     </div>
     {/* <div>
       {message}
     </div> */}
     <div>
       <span>{transcript}</span>
     </div>
   </div>
 );
  }
export default Dictaphone1;