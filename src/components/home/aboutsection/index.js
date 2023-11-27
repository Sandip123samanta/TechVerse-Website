"use client"
import React from "react";
import Image from "next/image";
import { useState, useEffect } from 'react';
import styles from "./style.module.css";

const AboutSection = () => {
    const [windowsWidth, setWindowsWidth] = useState(0);

    useEffect(() => {
      setWindowsWidth(window.innerWidth);
    }, [])
  
    const getBlocks = () => {
      const blockSize = windowsWidth * 0.05;
      const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
        return [...Array(nbOfBlocks).keys()].map((_, index) => {
          return <div onMouseEnter={(e) => {colorize(e.target)}} key={index}></div>
      })
    }
  
    const colorize = (el) => {
      el.style.backgroundColor = 'white'
      setTimeout( () => {
        el.style.backgroundColor = 'transparent';
      }, 300)
    }
	return (
		<div className={styles.container}>
			<section className="z-10 pointer-events-none text-white">
				<div className="text-9xl font-young font-extrabold">
					{/* <h1>GNIT</h1> */}
				</div>
			</section>
			<div className={styles.grid}>
				{windowsWidth > 0 &&
					[...Array(20).keys()].map((_, index) => {
						return (
							<div key={index} className={styles.column}>
								{getBlocks()}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default AboutSection;
