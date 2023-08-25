import React from "react";
import styles from "@/app/styles/Contact.module.css";

const Contact_info_form_input = ({ field }) => {
	return (
		<>
			<div className={`mb-[4rem] mr-[3rem] ropasans  ${styles["form__title"]}`}>
				<h1 className={`text-[1.13rem] mb-2 ${styles['form__input_title']}`}>{field}:</h1>
				<input
					className={`${styles['form__input']} pl-2 opacity-70 text-[0.7rem] leading-[1.94rem] tracking-[0.07rem] bg-[#3b3b3b] rounded-lg pt-[0.2rem] pb-[0.2rem] w-[13.125rem] `}
					type="text"
					placeholder={`Enter ${field}`}
				></input>
			</div>
		</>
	);
};

export default Contact_info_form_input;
