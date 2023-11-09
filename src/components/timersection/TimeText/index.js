"use client";
import styles from "./TimeCom.module.css";
import TextBox3D from "./TextBox";

const TimeText = ({plane,primary,secondary}) => {
	return (
		<div className="flex justify-center items-center">
			<div ref={plane} className={styles.body}>
				<TextBox3D primary={primary} secondary={secondary} />
			</div>
		</div>
	);
};

export default TimeText;
