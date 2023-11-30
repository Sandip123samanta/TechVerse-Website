"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import EventCard from "./eventcard/EventCard";
import { images } from "./images";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
	const triggerRef = useRef(null);
	const sectionRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	useEffect(() => {
		const isMobile = window.innerWidth <= 768;
		if (isMobile) {
			setIsMobile(true);
		}
		if (!isMobile) {
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
		}
	}, []);

	return (
		<div className="scroll-section-outer overflow-x-hidden">
			<div ref={triggerRef}>
				<div
					ref={sectionRef}
					className="scroll-section-inner md:h-screen h-auto w-screen md:w-[800vw] md:flex"
				>
					<div className="scroll-section md:h-screen w-screen flex justify-center items-center">
						<h1 className="text-4xl mb-20 md:mb-0 md:text-9xl font-lora font-extrabold text-white">
							EVENTS
						</h1>
					</div>
					<div className="scroll-section h-auto md:h-screen md:w-auto justify-center items-center">
						<div className="w-full h-full flex flex-col gap-16 md:gap-0 md:flex-row justify-center items-center">
							<EventCard
								posterUrl={images[0].poster}
								characterUrl={images[0].charecter}
								eventName={images[0].eventName}
								link="/eventregistration/registration/bgmi"
							/>
							<EventCard
								posterUrl={images[1].poster}
								characterUrl={images[1].charecter}
								eventName={images[1].eventName}
								link="/eventregistration/registration/codegolf"
							/>
							<EventCard
								posterUrl={images[2].poster}
								characterUrl={images[2].charecter}
								eventName={images[2].eventName}
								link="/eventregistration/registration/bishopbattle"
							/>
							
							<EventCard
								posterUrl={images[3].poster}
								characterUrl={images[3].charecter}
								eventName={images[3].eventName}
								link="/eventregistration/registration/roborampage"
							/>
							<EventCard
								posterUrl={images[4].poster}
								characterUrl={images[4].charecter}
								eventName={images[4].eventName}
								link="/eventregistration/registration/posterexhibition"
							/>
							<EventCard
								posterUrl={images[5].poster}
								characterUrl={images[5].charecter}
								eventName={images[5].eventName}
								link="/eventregistration/registration/freezetheframe"
							/>
							<Link
								href="/events"
								className="relative md:h-20 md:w-20 md:ml-12 bg-blue-500 hover:bg-blue-600 border border-spacing-1 rounded-lg md:rounded-full overflow-hidden"
							>
								{isMobile ? (
									<h1 className="text-xl p-4 font-bold text-white">
										Explore More
									</h1>
								) : (
									<Image
										src="/arrow.png"
										fill
										alt="Arrow"
										className="object-cover p-4"
									/>
								)}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HorizontalScroll;
