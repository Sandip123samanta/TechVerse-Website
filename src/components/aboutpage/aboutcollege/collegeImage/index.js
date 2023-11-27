'use client';
import React, { useRef } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { useLayoutEffect,useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function index() {
    const container = useRef(null)
    const backgroundImage = useRef(null)
    const introImage = useRef(null)

    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
        const isMobile = window.innerWidth <= 768;
       if(!isMobile){
        ScrollTrigger.update()
        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top 50%',
                end: "+=500px",
                scrub: true,
            }
        })

        timeLine
            .from(backgroundImage.current,{clipPath: "inset(15%)"})
            .to(introImage.current,{height: '30vw'})
       }
    },[])

  return (
    <div ref={container} className={styles.intro}>
        <div ref={backgroundImage} className={styles.backgroundImage}>
            <Image
            src={'/gnitbgimage.jpeg'}
            fill={true}
            alt='gnit background image'
            />
        </div>

        <div className={styles.introContainer}>
            <div ref={introImage} data-scroll data-scroll-speed='0.4' className={styles.introImage}>
                <Image
                src={'/gnitbgimage.jpeg'}
                fill={true}
                alt='gnit image'
                />
            </div>
            <h1 data-scroll data-scroll-speed='0.7'>GURU NANAK INSTITUTE OF TECHNOLOGY</h1>
        </div>
    </div>
  )
}

export default index