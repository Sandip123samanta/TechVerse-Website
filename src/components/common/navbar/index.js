"use client";
import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import styles from './style.module.scss'
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import GalaxyBtn from '../Buttons/galaxyButton/galaxyBtn';
import logo from '../../../../public/logo2.png'
import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "../../utils/motion";

function Home() {
    const [isActive,setIsActive]=useState(false)
    const pathname = usePathname();

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname])
  return (
    <>
        <motion.div
        initial='hidden'
        animate='visible'
        >
        <motion.div 
        variants={slideInFromTop}
        className='one w-screen h-15 overflow-hidden flex justify-between items-center p-6 text-white z-[10] fixed top-0 left-0'>
            <div className={`${styles.logo} relative w-[8vw]`}>
                <Image className='object-cover w-full' src={logo} alt='logo'/>
            </div>
            {/* <div className='w-[20vw] h-full flex items-center justify-end gap-5'>
                <div className='h-full z-10'>
                    <GalaxyBtn/>
                </div>
                <div className={styles.header}>
                <div onClick={()=>{setIsActive(!isActive)}} className={styles.button}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>
            </div> */}
        </motion.div>
        </motion.div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
    </>
  )
}

export default Home