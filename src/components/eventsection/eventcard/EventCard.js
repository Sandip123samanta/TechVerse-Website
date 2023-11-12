import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";


const EventCard = ({imgUrl,eventName,headName,coHeadName}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.cols}>
				<div
					className={styles.col}
					ontouchstart="this.classList.toggle('hover');"
				>
					<div className={styles.container}>
						<div className={styles.front}>
							<div className={styles.inner}>
                <Image
                  src="/poster.jpeg"
                  width={1200}
                  height={900}
                />
							</div>
						</div>
						<div className={styles.back}>
							<div className={styles.inner}>
								<h1>Title</h1>
                <h1>Head</h1>
                <h1>Co-Heas</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
