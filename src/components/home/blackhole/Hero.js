import React from 'react'
import HeroContext from '../herocontext/HeroContext'
import BackgroundMusic from '../backgroundmusic/BackgroundMusic'

function Hero() {
  return (
    <div className='relative flex flex-col justify-center items-center min-h-[70vh] w-screen overflow-y-hidden'>
        <HeroContext/>
        <BackgroundMusic/>
    </div>
  )
}

export default Hero