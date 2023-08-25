import Image from "next/image";
import React from "react";
import styles from "@/app/styles/Testimonial.module.css";

const TestimonialCard = ({ imageURL, name, review }) => {
	return (
		<>
			<div
				className={`relative h-[27.9rem] flex justify-center text-center text-sm ${styles["test__card"]}`}
			>
				<div
					className={`absolute flex justify-center align-middle shadow-black shadow-[0_-10px_40px_-15px] bg-[#0e1940] w-[11rem] h-[11rem] rounded-full ${styles["tcard__imagebg"]}`}
				>
					<Image
						className={`rounded-full object-cover ${styles["tcard__image"]}`}
						alt=""
						src={imageURL}
						width={200}
						height={190}
					></Image>
				</div>
				<div
					className={`mt-32 shadow-black shadow-xl bg-[#0e1940] rounded-[20px] w-[21rem] h-[19.5rem] ${styles["tcard__infobg"]}`}
				>
					<div className=" mt-16 pr-4 pl-4 tracking-[0.1rem] leading-[1.7rem] outfit text-lg uppercase font-bold">
						{name}
					</div>
					<div className="mt-8 pr-4 pl-4 text-[0.95rem] leading-[1.72rem] roboto">
						{review}
					</div>
				</div>
			</div>
		</>
	);
};

export default TestimonialCard;
