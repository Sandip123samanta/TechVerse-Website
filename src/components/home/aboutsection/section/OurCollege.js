"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./styles.module.css";

gsap.registerPlugin(ScrollTrigger);

const RightSide = () => {
	useEffect(() => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: "#main-container",
				start: "top top",
				end: "bottom bottom",
				scrub: 8,
				// markers: true,
				// pin:true
			},
		});
		const isDesktop = window.innerWidth >= 768;
		if (isDesktop) {
			tl.fromTo(
				"#text-g",
				{
					y: "100%",
					duration: 4,
					delay: 1,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					stagger: 1,
					delay: 1,
				},
				"t"
			);
			tl.fromTo(
				"#text-n",
				{
					y: "100%",
					duration: 4,
					delay: 2,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					stagger: 1,
					delay: 2,
				},
				"t"
			);
			tl.fromTo(
				"#text-i",
				{
					y: "100%",
					duration: 4,
					delay: 3,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					stagger: 1,
					delay: 3,
				},
				"t"
			);
			tl.fromTo(
				"#text-t",
				{
					y: "100%",
					duration: 5,
					delay: 4,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 5,
					stagger: 1,
					delay: 4,
				},
				"t"
			);
			// 2nd animation
			tl.to(
				"#text-container1,#text-container2",
				{
					y: "-120%",
					duration: 4,
					delay: 10,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					y: "120%",
					duration: 4,
					delay: 10,
				},
				"t"
			);
			// 3rd animation
			tl.to(
				"#text-container1,#text-container2",
				{
					x: "-150%",
					duration: 4,
					delay: 14,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					x: "150%",
					duration: 4,
					delay: 14,
				},
				"t"
			);
			//Paragraph animation..
			tl.fromTo(
				"#paragraph",
				{
					scale: 0,
					opacity:0,
					duration: 15,
				},
				{
					scale: 1,
					opacity:1,
					duration: 10,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam1",
				{
					x: "100%",
					duration: 2,
				},
				{
					x: "-0%",
					duration: 5,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam2",
				{
					x: "-100%",
					duration: 2,
				},
				{
					x: "0%",
					duration: 5,
				},
				"t"
			);
			//Image section...
			tl.fromTo(
				"#img",
				{
					x: "-85%",
					duration: 4,
					delay: 2,
					opacity: 0,
				},
				{
					x: "-0%",
					duration: 3,
					delay: 14,
					opacity: 1,
				},
				"t"
			);
		}
		const isMobile = window.innerWidth <= 768;
		if (isMobile) {
			tl.fromTo(
				"#text-g",
				{
					y: "120%",
					duration: 2,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					delay: 1,
				},
				"t"
			);
			tl.fromTo(
				"#text-n",
				{
					y: "120%",
					duration: 3,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					delay: 2,
				},
				"t"
			);
			tl.fromTo(
				"#text-i",
				{
					y: "120%",
					duration: 2,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					delay: 3,
				},
				"t"
			);
			tl.fromTo(
				"#text-t",
				{
					y: "120%",
					duration: 2,
				},
				{
					y: "0%",
					ease: "back.out",
					duration: 4,
					delay: 4,
				},
				"t"
			);
			// // 2nd animation
			tl.to(
				"#text-container1,#text-container2",
				{
					y: "-250%",
					duration: 4,
					delay: 7,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					y: "250%",
					duration: 4,
					delay: 7,
				},
				"t"
			);
			//Paragraph animation
			tl.fromTo(
				"#paragraph",
				{
					scale: 0,
					opacity:0,
					duration: 10,
				},
				{
					scale: 1,
					opacity:1,
					duration: 10,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam1",
				{
					x: "110%",
					duration: 10,
				},
				{
					x: "0%",
					duration: 10,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam2",
				{
					x: "-80%",
					duration: 10,
				},
				{
					x: "-0%",
					duration: 10,
				},
				"t"
			);
		}
	}, []);

	return (
		<>
			<div
				id="main-container"
				className="flex justify-center items-center h-screen w-screen text-white"
			>
				<div className="flex gap-4 absolute">
					<div
						id="text-container1"
						className="md:text-[12rem] text-7xl font-roboto font-extrabold text-center h-28 w-20 md:h-[12rem] pt-5 md:w-36 overflow-hidden"
					>
						<h1 id="text-g">G</h1>
					</div>
					<div
						id="text-container2"
						className="md:text-[12rem] text-7xl font-roboto font-extrabold text-center h-28 w-20 md:h-[12rem] pt-5 md:w-36 overflow-hidden"
					>
						<h1 id="text-n">N</h1>
					</div>
					<div
						id="text-container3"
						className="md:text-[12rem] text-7xl font-roboto font-extrabold text-center h-28 w-20 md:h-[12rem] pt-5 md:w-36 overflow-hidden"
					>
						<h1 id="text-i">I</h1>
					</div>
					<div
						id="text-container4"
						className="md:text-[12rem] text-7xl font-roboto font-extrabold text-center h-28 w-20 md:h-[12rem] pt-5 md:w-36 overflow-hidden"
					>
						<h1 id="text-t">T</h1>
					</div>
				</div>
				<div className="w-screen flex justify-between md:justify-center items-center p-2 mt-32 md:ml-[50rem] md:mt-4">
					<section
						id="ourteam1"
						className="w-40 h-auto text-center mb-16  md:mb-52"
					>
						<h1
							className={`text-5xl md:text-8xl -rotate-90 font-roboto font-extrabold  ${styles.strokedtext}`}
						>
							OUR
						</h1>
					</section>
					<section id="paragraph" className="md:mb-60 mb-16">
						<p className="text-center text-[.5rem] md:text-base">
							Guru Nanak Institute of Technology was instituted
							with a vision to empower the aspiring professionals
							with the technological knowledge and professional
							expertise under the aegis of JIS Group Educational
							Initiatives in the year 2003. This technical campus
							offers undergraduate and post graduate courses under
							WBUT (now MAKAUT) and some courses are NBA
							Accredited.The Institute is approved by AICTE and
							accredited by UGC, NAAC and located in one of the
							prime locations inNorth Kolkata near Sodepur.
						</p>
					</section>
					<section id="ourteam2" className="w-32 h-auto text-center">
						<h1
							className={`text-5xl md:text-8xl -rotate-90 font-roboto font-extrabold ${styles.strokedtext}`}
						>
							COLLEGE
						</h1>
					</section>
				</div>
			</div>
			<div id="img" className="md:-mt-[24rem] md:ml-40 rounded-full p-2 ">
				<Image
					src="/gnit.jpeg"
					width={500}
					height={500}
					className="rounded-md"
				/>
			</div>
		</>
	);
};

export default RightSide;
