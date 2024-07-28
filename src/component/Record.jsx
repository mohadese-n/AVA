import React, { useState } from 'react';
import { GREEN } from './helpers/color';

const Record = () =>{
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleListen = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'fa-IR';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        let finalTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          }
        }
        setTranscript(finalTranscript);
      };

      recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  };

  return (
      <div className='d-flex flex-column bg-white'>
        <div className=' py-5 'style={{borderRadius:'25px 0 25px 25px',border:`1px solid ${GREEN}`}} >
          <button className='btn rounded-circle text-white' onClick={handleListen} style={{backgroundColor:GREEN}}>
            {isListening ? <i className='fa fa-stop'></i> : 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c-1.7 0-3 1.2-3 2.6v6.8c0 1.4 1.3 2.6 3 2.6s3-1.2 3-2.6V4.6C15 3.2 13.7 2 12 2z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18.4v3.3M8 22h8"/></svg>
            // <i className='fa fa-microphone'></i>
            }
          </button>
          <p className='text-muted'>{
            transcript?transcript:
            <p className='w-50 mx-auto'>برای شروع به صحبت، دکمه را فشار دهید 
            متن پیاده شده آن در اینجا ظاهر میشود
            </p>
          }</p>
        </div>
      </div>
  );
}
export default Record;