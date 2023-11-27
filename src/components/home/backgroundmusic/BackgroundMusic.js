// components/BackgroundMusic.js
'use client';
import { useState } from 'react';
import './style.scss'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const audioUrl = 'background.mp3'; 

  const toggleAudio = () => {
    const audio = document.getElementById('background-music');

    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="background-music fixed bottom-8 left-8 z-20 ">
      <button className="music overflow-hidden" onClick={toggleAudio}>
        <img className='w-full h-full object-cover' src={`${isPlaying ? 'pause.png' : 'play.png'}`}/>
      </button>
      <audio id="background-music" autoPlay loop>
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
