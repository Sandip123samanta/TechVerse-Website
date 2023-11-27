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
				translateX: "-200vw",
				ease: "none",
				direction: 1,
				scrollTrigger: {
					trigger: triggerRef.current,
					start: "top top",
					end: "2000px top",
					scrub: 0.6,
					pin: true,
				},
			}
		);
		return () => {
			pin.kill();
		};
	}, []);

	return (
		<div className="scroll-section-outer overflow-x-hidden">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="scroll-section-inner h-screen w-[800vw] flex"
				>
					<div className="scroll-section h-screen w-screen bg-slate-950 flex justify-center items-center">
						<h1 className=" md:text-9xl font-lora font-extrabold text-white">
							EVENTS
						</h1>
					</div>
					<div className="scroll-section h-screen w-screen justify-center items-center">
						<div className="w-full h-full flex justify-center items-center">
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