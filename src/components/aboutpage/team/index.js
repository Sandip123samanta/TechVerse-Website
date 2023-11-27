import React, { useEffect,useRef } from 'react'
import Team from '../team/ourteam'
import styles from './style.module.css'

function index() {
  return (
    <div className='w-screen h-auto pt-[10vw] text-white'>
        <div className='w-full h-full flex justify-between items-center mb-[8vw]'>
          <div className={`${styles.ourteam} -rotate-90 text-[10vw] translate-x-[-2vw]`}>
            <h1>OUR</h1>
          </div>
          <div className='text-center lg:text-[1.7vw] text-[2.3vw] translate-x-[3vw]'>
            <h1>Success is the ultimate outcome of teamwork. Our team is our greatest support and asset. We have immense collaborative spirit amongst us and we treat each other with trust and respect. We embrace and encourage partnerships to bring in our perception and deliver our aims in a convenient way.</h1>
          </div>
          <div className={`${styles.ourteam} -rotate-90 text-[10vw] translate-x-[2vw]`}>
            <h1>Team</h1>
          </div>
        </div>
        <Team/>
    </div>
  )
}

export default index