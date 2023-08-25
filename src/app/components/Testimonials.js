import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "@/app/styles/Testimonial.module.css";

const Testimonials = () => {
	return (
		<>
			<div id="testimonials" className={styles.testimonial_container}>
				<div
					className={`flex flex-col justify-center items-center text-center ${styles["test_wrapper"]}`}
				>
					<div
						className={`heading justify-center text-black ${styles["test__title-container"]}`}
					>
						<h1
							className={`text-[1.25rem] outfit font-bold tracking-[0.1rem]  ${styles["test__subtitle"]}`}
						>
							TESTIMONIALS
						</h1>
						<h1
							className={`roundedfont text-[3.8rem] font-bold roboto leading-[100%] ${styles["test__title"]}`}
						>
							Read What Others Have To Say
						</h1>
					</div>
					<div
						className={`mt-24 Testimonials__cards flex justify-evenly items-center ${styles["tcard__container"]}`}
					>
						<TestimonialCard
							imageURL="/youtube_marketing.png"
							name="OLIVIA COLE"
							review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel."
						/>
						<TestimonialCard
							imageURL="/youtube_marketing.png"
							name="OLIVIA COLE"
							review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel."
						/>
						<TestimonialCard
							imageURL="/youtube_marketing.png"
							name="OLIVIA COLE"
							review="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
						ullamcorper scelerisque mi, in malesuada felis malesuada vel."
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Testimonials;
