// components/BackgroundMusic.js
'use client';
import { useState } from 'react';
import Image from "next/image";

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
    <div className="fixed md:-bottom-2 md:left-2 -bottom-5 -left-5 z-20 ">
      <button className="overflow-hidden relative md:w-32 md:h-32 w-36 h-36" onClick={toggleAudio}>
        <Image className='w-full h-full object-cover top-0 bottom-0' src={`${isPlaying ? '/playpause.gif' : '/pause.png'}`} alt='playpause button' fill={true}/>
      </button>
      <audio id="background-music" autoPlay loop>
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default BackgroundMusic;
