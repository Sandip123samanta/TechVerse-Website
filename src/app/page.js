"use client";
// import Image from 'next/image'
// import Lenis from '@studio-freight/lenis'
import { useEffect, useState } from "react";
// import StarsCanvas from '@/components/common/starbackground/StarBackground'
import AboutSection from "@/components/home/aboutsection";
import Hero from "../components/home/blackhole/Hero";
// import PreLoader from '../components/home/preloader'
// import { AnimatePresence } from 'framer-motion';
// import TimerSection from '@/components/home/countdown'
import Gallery from "../components/home/gallery/index";
// import CustomCursor from '@/components/common/customCursor/CustomCursor';
import EventSection from "@/components/home/eventsection";

export default function Home() {
	// const [isLoading,setIsLoading] = useState(true)

	// useEffect(()=>{

	//   (
	//     async () => {
	//       const LocomotiveScroll = (await import('locomotive-scroll')).default;
	//       const locomotiveScroll = new LocomotiveScroll();
	//     }
	//   )()

	//   setTimeout(()=>{
	//     setIsLoading(false);
	//     document.body.style.cursor = 'default'
	//     window.scrollTo(0,0);
	//   },2000)
	// },[])

	return (
		<>
			{/* <AnimatePresence mode='wait'>
          {isLoading && <PreLoader/>}
      </AnimatePresence> */}
			{/* <CustomCursor/> */}
			<main className="h-auto w-screen">
				<div className="flex flex-col h-full gap-20">
					{/* <StarsCanvas/> */}
					<Hero />
					{/* <TimerSection/> */}
					<AboutSection />
					<EventSection />
					<Gallery />
				</div>
			</main>
		</>
	);
}
