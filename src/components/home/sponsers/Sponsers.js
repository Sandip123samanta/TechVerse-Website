import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsers = () => {
	return (
		<div className="w-screen flex flex-col justify-center items-center ">
			<h1 className="text-4xl md:text-7xl font-roboto font-extrabold text-white">
				OUR SPONSERS
			</h1>
			<marquee>
				<div className="w-[200vw] md:w-screen relative flex justify-center items-center gap-14 mt-20">
					<div className="relative w-60 h-28 md:w-40 md:h-40">
						<Image src="/sponsers/GNIT.png" alt="logo" fill />
					</div>
					<div className="relative w-96 h-20 md:w-40 md:h-40">
						<Image src="/sponsers/JIS.png" alt="logo" fill />
					</div>
          <div className="relative w-96 h-16 md:w-60 md:h-28">
						<Image src="/sponsers/council.png" alt="logo" fill />
					</div>
					<div className="relative w-96 h-10 md:w-80 md:h-20">
						<Image
							src="/sponsers/teenageresports.png"
							alt="logo"
							fill
						/>
					</div>
					<div className="relative w-96 h-10 md:w-56 md:h-20">
						<Image src="/sponsers/edugraph.jpg" alt="logo" fill />
					</div>
					<div className="relative w-96 h-16 md:w-52 md:h-32">
						<Image src="/sponsers/techghosh.png" alt="logo" fill />
					</div>
				</div>
			</marquee>
		</div>
	);
};

export default Sponsers;
