"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import logo from "../../../../public/logo2.png";
import useReadingProgress from "@/components/utils/useReadingProgress";
import { slideInFromTop } from "../../utils/motion";

function Home() {
	const completion = useReadingProgress();
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);
	return (
		<>
			<motion.div initial="hidden" animate="visible">
				<motion.div
					variants={slideInFromTop}
					className="one w-screen h-15 overflow-hidden flex justify-between items-center p-6 text-white z-[10] fixed top-0 left-0"
				>
					<div className={`${styles.logo} relative w-[6vw]`}>
						<Link href="/">
							<Image
								className="object-cover w-full"
								src={logo}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="w-[20vw] h-full flex items-center justify-end gap-5">
						<div className="h-full z-10">
							<button className={`${styles.brochure}`}>
								Brochure
							</button>
						</div>
						<div className={styles.header}>
							<div
								onClick={() => {
									setIsActive(!isActive);
								}}
								className={styles.button}
							>
								<div
									className={`${styles.burger} ${
										isActive ? styles.burgerActive : ""
									}`}
								></div>
							</div>
						</div>
					</div>
					<span
						style={{
							transform: `translateX(${completion - 100}%)`,
						}}
						className="absolute bg-gradient-to-r from-[#090979] to-[#0088ff] h-1 w-full top-0 left-0 transition-all ease-linear"
					/>
				</motion.div>
			</motion.div>
			<AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
		</>
	);
}

export default Home;
