"use client";
// components/EventTrailer.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventTrailer = () => {
	const videoRef = useRef(null);

	useEffect(() => {
		const video = videoRef.current;

		if (video) {
			gsap.to(video, {
				scrollTrigger: {
					trigger: video,
					start: "top center",
					end: "bottom center",
					scrub: true,
					// markers: true,
					onEnter: () => {
						video.play();
					},
					onLeave: () => {
						video.pause();
					},
				},
			});
		}
	}, []);

	return (
		<div className="h-screen w-screen flex justify-center items-center">
			<video
				ref={videoRef}
				className="w-[50%] md:w-[25%] md:h-[75%] border border-white"
				loop
				controls
			>
				<source src="/trailer.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default EventTrailer;
