"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EventCard from "./eventcard/EventCard";
import { images } from "./images";


gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
	const triggerRef = useRef(null);
	const sectionRef = useRef(null);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-175vw",
				ease: "none",
				direction: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top 2%",
					end: "150% 20%",
					scrub: 2,
					pin: true,
					// markers:true,
				},
				
			}
		);
		
		const isDesktop = window.innerWidth >= 768;
		
		const isMobile = window.innerWidth <= 768;
		
		return () => {
			pin.kill();
		};
	}, []);

	return (
		<div className="main scroll-section-outer overflow-x-hidden">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="scroll-section-inner h-screen w-[700vw] flex"
				>
					<div className="scroll-section h-screen w-screen flex justify-center items-center">
						<h1 id="text" className="text-2xl md:text-9xl font-young font-bold">
							EVENTS
						</h1>
					</div>
					<div className="scroll-section h-screen w-auto justify-center items-center">
						<div className="flex mt-40">
						<EventCard posterUrl={images[0].poster} characterUrl={images[0].charecter} eventName={images[0].eventName}/>
							<EventCard posterUrl={images[1].poster} characterUrl={images[1].charecter} eventName={images[1].eventName}/>
							<EventCard posterUrl={images[2].poster} characterUrl={images[2].charecter} eventName={images[2].eventName}/>
							<EventCard posterUrl={images[3].poster} characterUrl={images[3].charecter} eventName={images[3].eventName}/>
							<EventCard posterUrl={images[4].poster} characterUrl={images[4].charecter} eventName={images[4].eventName}/>
							<EventCard posterUrl={images[5].poster} characterUrl={images[5].charecter} eventName={images[5].eventName}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalScroll;
