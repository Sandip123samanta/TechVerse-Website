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
				end: "10% 98%",
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
					delay: 8,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					y: "120%",
					duration: 4,
					delay: 8,
				},
				"t"
			);
			// 3rd animation
			tl.to(
				"#text-container1,#text-container2",
				{
					x: "-150%",
					duration: 4,
					delay: 12,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					x: "150%",
					duration: 4,
					delay: 12,
				},
				"t"
			);
			//Paragraph animation..
			tl.fromTo(
				"#paragraph",
				{
					scale: 0,
					duration: 5,
				},
				{
					scale: 1,
					duration: 5,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam1",
				{
					x: "85%",
					duration: 1,
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
					x: "-85%",
					duration: 1,
				},
				{
					x: "-0%",
					duration: 10,
				},
				"t"
			);
			//Image section...
			tl.fromTo(
				"#img",
				{
					x: "-85%",
					duration: 5,
					delay: 2,
					opacity: 0,
				},
				{
					x: "-0%",
					duration: 5,
					delay: 12,
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
					duration: 2,
					delay: 3,
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
					duration: 2,
					delay: 4,
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
					duration: 2,
					delay: 4.5,
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
					duration: 2,
					delay: 5,
				},
				"t"
			);
			// // 2nd animation
			tl.to(
				"#text-container1,#text-container2",
				{
					y: "-250%",
					duration: 2,
					delay: 6,
				},
				"t"
			);
			tl.to(
				"#text-container3,#text-container4",
				{
					y: "250%",
					duration: 2,
					delay: 6,
				},
				"t"
			);
			//Paragraph animation
			tl.fromTo(
				"#paragraph",
				{
					scale: 0,
					duration: 10,
				},
				{
					scale: 1,
					duration: 10,
				},
				"t"
			);
			tl.fromTo(
				"#ourteam1",
				{
					x: "120%",
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
					x: "-120%",
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
				className="flex justify-center items-center h-[130vh] w-screen text-white"
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
				<div className="flex justify-center items-center md:-mt-64 md:ml-[45rem]">
					<section id="ourteam1" className="-rotate-90 md:h-[5.5rem]">
						<h1
							className={`text-4xl md:text-8xl font-roboto font-extrabold ${styles.strokedtext}`}
						>
							OUR
						</h1>
					</section>
					<section
						id="paragraph"
						className="text-center w-[14rem] md:w-[20rem]"
					>
						<p className="md:text-xl text-center">
							The main aim of this program is to enlighten the
							students to empower their innovativeness in
							different field of Engineering. We also want to
							encourage our students on their hidden endowment to
							get success in different National as well as
							International Technical Competition. The program is
							also expected to be beneficial to the participants
							and the researchers on the utility, ease, and
							effectiveness of the software buildup within a
							finite duration.
						</p>
					</section>
					<section id="ourteam2" className="-rotate-90 md:h-[5.5rem]">
						<h1
							className={`text-4xl md:text-8xl font-roboto font-extrabold ${styles.strokedtext}`}
						>
							TEAM
						</h1>
					</section>
				</div>
			</div>
			<div id="img" className="md:-mt-[24rem] md:ml-40 rounded-full">
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
