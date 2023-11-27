import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const EventCard = ({ imgUrl, eventName, details }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cols}>
				<div
					className={styles.col}
					// onTouchStart="this.classList.toggle('hover');"
				>
					<div className={styles.container}>
						<div className={styles.front}>
							<div className={`${styles.inner}`}>
								<Image
									src={imgUrl}
									width={1200}
									height={900}
									className="rounded-lg"
									alt="EventImage"
								/>
								<div className={styles.overlayText}>
									<h1 className="text-2xl font-lora font-extrabold text-white">
										{eventName}
									</h1>
								</div>
							</div>
						</div>
						<div className={styles.back}>
							<div className={styles.inner}>
								<div className="text-center flex flex-col gap-4">
									<h1 className="text-2xl font-lora font-extrabold">
										{eventName}
									</h1>
									<p className="text-base font-serif font-thin">{details}</p>
									<p className="font-roboto font-normal">Click Here To Register</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
