"use client";
import React, { useState,useEffect } from 'react'
import styles from './style.module.scss'
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

function Home() {
    const [isActive,setIsActive]=useState(false)
    const pathname = usePathname();

    useEffect( () => {
        if(isActive) setIsActive(false)
    }, [pathname])
  return (
    <>
        <div className='one w-screen h-15 overflow-hidden flex justify-between items-center p-6 text-white z-[10] fixed top-0 left-0'>
            <div>
                <h1 className='text-2xl font-bold'>Logo</h1>
            </div>
            <div className='w-[20vw] h-full flex items-center justify-end gap-5'>
                <div className='h-full z-10'>
                    <button 
                    className={styles.brochure}
                    >Brochure</button>
                </div>
                <div className={styles.header}>
                <div onClick={()=>{setIsActive(!isActive)}} className={styles.button}>
                        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    </div>
                </div>
            </div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
        </AnimatePresence>
    </>
  )
}

export default Home