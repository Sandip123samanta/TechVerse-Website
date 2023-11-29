import React from 'react'
import './style.css'
import GlowBtn from '@/components/common/Buttons/glowbtn/glowBtn'

function index() {
  return (
    <div className="content flex flex-col items-center justify-center mt-[5vw] mb-[5vw]">
        <h1 className="title">Participate Now
            <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            </div>
        </h1>
        <div className='lg:max-w-[60vw] max-w-[80vw] flex flex-col justify-center items-center'>
            <p className="subtitle text-white text-[4vw] lg:text-[2vw] text-center">
            Feeling hyped? We ALL Are! Bask in this exuberant aura, let the electrifying vibe zing you from head to toe!
            Come on now, RUSH & TAKE PART! You're just a CLICK away!
            </p>
        </div>
        <GlowBtn/>
    </div>
  )
}

export default index