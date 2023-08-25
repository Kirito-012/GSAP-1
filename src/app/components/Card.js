import Image from "next/image";
import React from "react";
import styles from "@/app/styles/Creative.module.css";
const Card = ({ imageURL, title, descrip }) => {
	return (
		<div
			className={`bg-[#192966] w-[25rem] h-[35rem] rounded-2xl ${styles["card__container"]}`}
		>
			<div
				className={`bg-[#19D2AF] w-[25rem] h-[21rem] rounded-xl flex items-center justify-center ${styles["card__imagebg"]}`}
			>
				<Image
					className={styles.card__image}
					alt=""
					src={imageURL}
					width={361}
					height={321}
				></Image>
			</div>
			<div className="Info flex justify-center pt-6 items-center flex-col">
				<div
					className={`Heading leading-[2.2rem] flex items-center font-semibold robotoslab text-[1.6rem] tracking-[-0.02rem] text-center max-w-[21rem] ${styles["card__title"]}`}
				>
					{title}
				</div>
				<div
					className={`robotoslab pt-3 leading-[1.4rem] font-normal text-center ${styles["card__description"]}`}
				>
					{descrip}
				</div>
			</div>
		</div>
	);
};

export default Card;
