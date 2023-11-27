'use client';
import React,{useEffect, useRef} from 'react'
import './style.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const phrase = "Techvesre is tech fiesta, organized by Computer Science Department of Guru Nanak Institute of Technology, Kolkata. It is a platform for students to showcase their technical and creative skills, participate in competitions."

function index() {
  return (
    <section className='hero'>
        <div className='controls mt-[5vw]'>
          <h1 className='abtTech'>Techvesre</h1>
        </div>
        <MaskText/>
    </section>
  )
}

export default index

export function MaskText() {

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: true
  });

  return(
    <div ref={ref} className='body'>
      {
        <div className='lineMask'>
          <motion.p variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
        </div>  
      }
    </div>
  )
}