"use client";
import { useEffect } from "react";
import React from "react";

const SmoothScroll = () => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return <></>;
};

export default SmoothScroll;
