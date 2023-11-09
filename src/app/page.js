'use client';
import Image from 'next/image'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import StarsCanvas from '@/components/starbackground/StarBackground'
import Hero from '@/components/blackhole/Hero'

export default function Home() {
  
  useEffect(()=>{
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  },[])

  return (
    <main className='h-auto w-full'>
      <div className='flex flex-col h-full gap-20'>
        <StarsCanvas/>
        <Hero />
      </div>  
    </main>
  )
}
