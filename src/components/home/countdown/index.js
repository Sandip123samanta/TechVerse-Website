'use client';
import React from 'react'
import styles from './style.module.css'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Timer from './timer/Timer'

const targetDate = new Date('2024-01-21T23:59:59').getTime();

const Earth = dynamic(()=>import('@/components/home/countdown/earth/index'),{
    ssr: false,
    loading: ()=>
    <Image 
      src={'/earth/placeholder.png'}
      alt="Earth"
      fill={true}
    />
})


function index() {
  return (
    <div className={styles.main}>
        <Earth />
        <Timer targetDate={targetDate}/>
    </div>
  )
}

export default index