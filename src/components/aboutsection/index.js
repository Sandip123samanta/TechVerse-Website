"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import OurCollege from "./section/OurCollege";
import EventTrailer from "./section/EventTrailer";

gsap.registerPlugin(ScrollTrigger);

const index = () => {
	return (
		<div className="">
			<OurCollege/>
			<EventTrailer/>
		</div>
	);
};

export default index;
