'use client'
import React from 'react'
import styles from './style.module.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef,useLayoutEffect,useEffect } from 'react'

function index() {

    const phrases = "Guru Nanak Institute of Technology is a top engineering college in Kolkata.The vision of the college is to entrust the endeavoring professionals with the technical knowledge and professional mastery under the aegis of JIS group, in the year 2003 The technical campus offers undergraduate and postgraduate courses in various fields of engineering.This institute is approved by AICTE, affiliated to West Bengal University of Technology and accredited by UGC, NAAC. It has 'A+' NAAC grade.To amplify teaching and learning in more competent approach, the institute nurtures creative minds,innovations in every technological fields and research initiatives."

    let refs = useRef([])
    const body = useRef(null)
    const container = useRef(null)
    
    useEffect( () => {
        gsap.registerPlugin(ScrollTrigger);
        createAnimation();
      }, [])
    
      const createAnimation = () => {
          gsap.to(refs.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: `top 40%`,
                end: `+=${window.innerHeight / 2}`,
            },
            opacity: 1,
            ease: "none",
            stagger: 0.1
        })
      }
    
      const splitWords = (phrase) => {
        let body = [];
        phrase.split(" ").forEach( (word, i) => {
          const letters = splitLetters(word);
          body.push(<p key={word + "_" + i}>{letters}</p>)
        })
        return body
      }
    
      const splitLetters = (word) => {
        let letters = []
        word.split("").forEach( (letter, i) => {
          letters.push(<span key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
        })
        return letters;
      }

  return (
    <div ref={container} className={styles.main}>
       <div ref={body} className={styles.body}>
            {
                splitWords(phrases)
            }
       </div>
    </div>
  )
}

export default index