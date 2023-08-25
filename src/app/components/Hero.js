import React from "react";
import styles from "@/app/styles/Hero.module.css";

const Hero = () => {
	return (
		<>
			<div className={styles.hero__container}>
				<div
					className={` flex flex-col justify-end items-center ${styles["hero__section1"]}`}
				>
					<h1
						className={`text-8xl pt-4 font-bold roboto ${styles["hero__title"]}`}
					>
						Making Things,
					</h1>
					<h1
						className={`text-8xl pt-4 font-bold limegreen grandstander ${styles["hero__title"]}`}
					>
						Memetastic
					</h1>
				</div>
				<div
					className={` flex flex-col justify-end items-center h-48 ${styles["hero__section2"]}`}
				>
					<div
						className={`text-3xl font-bold outfit ${styles["hero__subtitle"]}`}
					>
						Our ads are shared, not ignored
					</div>
					<button
						className={` text-lg gradient_button font-bold outfit mt-11 ${styles["hero__button"]}`}
					>
						Learn More
					</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
