import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ posterUrl, characterUrl, eventName }) => {
	return (
		<Link href="#">
			<div className={styles.card}>
				<div className={styles.wrapper}>
					<Image
						src={posterUrl}
						fill={true}
						className={styles.cover_image}
						alt="img"
					/>
				</div>
				<div className={`hoverable ${styles.title}`}>
					<h1>{eventName}</h1>
				</div>
				<Image
					src={characterUrl}
					fill={true}
					className={styles.character}
					alt="img"
				/>
			</div>
		</Link>
	);
};

export default EventCard;
