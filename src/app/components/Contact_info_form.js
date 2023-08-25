import React from "react";
import styles from "@/app/styles/Contact.module.css";
import Contact_info_form_input from "./Contact_info_form_input";

const Contact_info_form = () => {
	return (
		<>
			<div className={`contact_info_formbg ${styles["contact_info_formbg"]}`}>
				<div className={styles.contact_form_container}>
					<p
						className={`${styles["form__description"]} text-xs text-[#a9a8a8] font-medium leading-[1.19rem]`}
					>
						Have a project in mind that you think we’d be a great fit for it?
						<br /> We’d love to know what you thinking
					</p>
					<div className={`${styles['Contact_info_form_input__container']} flex flex-row flex-wrap`}>
						<Contact_info_form_input field="First Name" />
						<Contact_info_form_input field="Last Name" />
						<Contact_info_form_input field="Email Address" />
						<Contact_info_form_input field="Contact Number" />
						<Contact_info_form_input field="Messages" />
					</div>
					<div className="h-[1rem] flex justify-center items-center">
						<button
							className={` text-lg gradient_button font-bold outfit ${styles["form__button"]}`}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact_info_form;
