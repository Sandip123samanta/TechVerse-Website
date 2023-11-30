import React from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/logo2.png";
import GNIT from "../../../../public/GNIT.png";
import JIS from "../../../../public/jisgroup.png";

function Footer() {
	return (
		<div className="text-white flex md:flex-row flex-col p-9">
			<div className="flex flex-col gap-6 h-auto w-full md:w-[30vw]">
				<div className="flex md:flex-col flex-row">
					<div className="relative w-36 h-36 overflow-hidden logo">
						<Link href="/">
							<Image
								src={Logo}
								alt="logo"
								fill
								className="object-cover w-full h-full"
							/>
						</Link>
					</div>
				</div>
				<div>
					<h1 className="text-3xl font-bold md:text-left text-center">
						Techverse
					</h1>
				</div>
				<div className="md:w-[20vw] w-full md:text-left text-center">
					<p>
						It is a platform for students to showcase their
						technical and creative skills, participate in
						competitions.
					</p>
				</div>
			</div>
			<div className="flex md:mt-0 mt-5 md:flex-row flex-col">
				<div className="venue flex-col flex md:justify-between md:items-start items-center justify-center md:w-[25vw] w-full md:text-left text-center">
					<h1 className="text-2xl text-gray-400 font-young md:mb-0 mb-5">
						Venue Location
					</h1>
					<div className="h-2/3">
						<p className="text-xl text-yellow-200">
							18-19 January, 2024
						</p>
						<p>
							Guru Nanak Institute of Technology 157/F, Nilgunj
							Rd, Sahid Colony, Panihati, Kolkata, West Bengal
							700114
						</p>
					</div>
				</div>
				<div className="general flex flex-col justify-between md:w-[25vw] w-full items-center">
					<h1 className="text-2xl text-gray-400 font-young md:mt-0 md:mb-0 mt-5 mb-5">
						General
					</h1>
					<div className="flex md:flex-col flex-row md:gap-0 gap-3 md:mb-0 mb-3">
						<Link
							href="/"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							Home
						</Link>
						<Link
							href="/about"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							About
						</Link>
						<Link
							href="/events"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							Events
						</Link>
						<Link
							href="/contact"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							Contact
						</Link>
					</div>
					<Link href="/privacyPolicy">Privacy policy</Link>
				</div>
				<div className="social md:w-[25vw] w-full flex flex-col justify-between items-center">
					<h1 className="text-2xl text-gray-400 font-young md:mt-0 md:mb-0 mt-5 mb-5">
						SOCIAL
					</h1>
					<div className="flex md:flex-col flex-row md:gap-0 gap-3 md:mb-0 mb-5">
						<Link
							href="https://www.facebook.com/profile.php?id=61553361925877&mibextid=ZbWKwL"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							Facebook
						</Link>
						<Link
							href="https://instagram.com/techverse2.0?igshid=eHA1c29oNGFuYmJy"
							className="hover:translate-x-3 transition-all ease-linear duration-75 text-xl"
						>
							Instagram
						</Link>
					</div>
					<div className="flex flex-col ">
						<p className="md:text-left text-center">
							©{" "}
							<Link href="/" className="text-blue-500">
								Techverse
							</Link>
							. All rights reserved | Developed by
						</p>
						<div className="flex flex-col justify-center items-center">
							<div>
								<Link
									href="https://www.facebook.com/parthiv.sarker"
									className="text-blue-500"
								>
									Parthiv Sarkar
								</Link>{" "}
								&
								<Link
									href="https://www.facebook.com/kousik.bose.18"
									className="text-blue-500"
								>
									{" "}
									Kousik Bose
								</Link>{" "}
								&
							</div>
							<Link
								href="https://www.facebook.com/profile.php?id=100069326365665"
								className="text-blue-500"
							>
								Sandip Samanta
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
