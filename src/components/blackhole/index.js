import React from "react";
import Hero from "./Hero";

const HeroText = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<Hero/>
			<h1 className="absolute text-box font-young text-[2.7rem] sm:text-5xl md:text-6xl lg:text-9xl">
				TECHVERSE 2.0
			</h1>
		</div>
	);
};

export default HeroText;
