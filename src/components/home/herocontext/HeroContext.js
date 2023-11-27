import React from "react";
import './style.css'
import GlowBtn from "@/components/common/Buttons/glowbtn/glowBtn";

import {
	slideInFromLeft,
	slideInFromRight,
	slideInFromTop,
} from "../../utils/motion";
import { motion } from "framer-motion";

const HeroContext = () => {

	return (
        <motion.div
        initial='hidden'
        animate='visible'
        className="flex flex-col items-center justify-center w-full h-full mt-[10vw]"
        data-scroll data-scroll-speed='.5'
        >
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[5px] px-[7px] opacity-[0.9]"
            >
                <h1 className="Welcome-text font-young text-[2vw] text-white">
                    GNIT Presents
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(2.5)}
                className="py-[8px] px-[7px] opacity-[0.9]"
            >
                <h1 className="hoverable text-box text-box font-young text-[9vw] sm:text-5xl md:text-6xl lg:text-9xl">
                    TECHVERSE 2.0
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(2.6)}
                className="py-[8px] px-[7px] opacity-[0.9]"
            >
                <h1 className="font-young lg:text-[1.5vw] text-[3vw] text-white">
                    a departmental techfest organized by CSE department
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(2.7)}
                className="py-[8px] px-[7px] opacity-[0.9]"
            >
                <div className="w-full font-sarif font-bold flex items-center justify-center gap-2 text-purple-500">
                    <div className="calendar">
                        <img src="calendar.png"/>
                    </div>
                    20-21 JANUARY, 2024
                </div>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(2.8)}
                className="py-[8px] px-[7px] opacity-[0.9]"
            >
                <GlowBtn/>
            </motion.div>
        </motion.div>
    )
};

export default HeroContext;
