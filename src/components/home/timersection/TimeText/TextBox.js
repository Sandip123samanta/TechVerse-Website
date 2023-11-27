import React, { useRef } from 'react'
import styles from "./TimeCom.module.css"

const TextBox3D = ({primary, secondary}) => {
	const text1 = useRef(null);
	const text2 = useRef(null);

	return (
		<div className={styles.textContainer}>
			<p className={styles.primary} ref={text1}>
				{primary}
			</p>
			<p className={styles.secondary} ref={text2}>
				{secondary}
			</p>
		</div>
	);
};

export default TextBox3D;
