"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EventCard from "./eventcard/EventCard";

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
					end: "2000 top",
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
					<div className="scroll-section h-screen w-screen bg-red-300 flex justify-center items-center">
						<h1 className=" md:text-9xl font-lora font-extrabold">
							EVENTS
						</h1>
					</div>
					<div className="scroll-section h-screen w-screen justify-center items-center">
						<div className="flex gap-20">
							<EventCard />
							<EventCard />
							<EventCard />
						</div>
						<div className="flex gap-20">
							<EventCard />
							<EventCard />
							<EventCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalScroll;
