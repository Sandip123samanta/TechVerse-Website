"use client";
import React from "react";
import { useRef, useEffect } from "react";
import CountDown from "./CountDown";
import TimeText from "./TimeText";

const TimerSection = () => {
	const plane = useRef(null);
	const maxRotate = 45;

	const manageMouseMove = (e) => {
		const x = e.clientX / window.innerWidth;
		const y = e.clientY / window.innerHeight;
		const perspective = window.innerWidth * 4;
		const rotateX = maxRotate * x - maxRotate / 2;
		const rotateY = (maxRotate * y - maxRotate / 2) * -1;
		plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
	};

	return (
		<div
			// onMouseMove={(e) => {
			// 	manageMouseMove(e);
			// }}
			className="w-screen h-screen"
		>
			{/* <TimeText plane={plane} primary={"We Are Coming"} secondary={"2nd January"} /> */}
			<CountDown />
		</div>
	);
};

export default TimerSection;
