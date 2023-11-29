"use client";
import React, { useEffect } from "react";
import AboutHero from "@/components/aboutpage/aboutherosection";
import AboutCollege from "@/components/aboutpage/aboutcollege/collegeImage";
import Description from "@/components/aboutpage/aboutcollege/description";
import AboutTeam from "@/components/aboutpage/team";
import AboutFooter from "@/components/aboutpage/aboutfooter/index";


function page() {
	return (
		<div className="w-full h-full overflow-x-hidden">
			<AboutHero />
			<AboutCollege />
			<Description />
			<AboutTeam />
			<AboutFooter />
		</div>
	);
}

export default page;
