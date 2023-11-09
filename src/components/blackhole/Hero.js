import React from 'react'

function Hero() {
  return (
    <div className='relative flex flex-col h-screen w-screen overflow-y-hidden'>
        <video 
        autoPlay
        muted
        loop
        className='absolute top-0 left-0 -z-[2] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'></source>
        </video>
    </div>
  )
}

export default Hero