import React from "react";
import Image from "next/image";
import styles from "@/app/styles/Contact.module.css";
import Contact_info_card from "./Contact_info_card";
import Contact_info_form from "./Contact_info_form";

const Contacts = () => {
	return (
		<>
			<div className=" text-white bg-[#000130]">
				<div className={styles.contact__container}>
					<div
						className={`pt-12 flex justify-center items-center roundedfont font-bold text-6xl ${styles["contact__heading"]}`}
					>
						<h1>Contact Us</h1>
					</div>
					<div id="contact" className={`flex ${styles["contact_wrapper"]}`}>
						<div className="">
							<Contact_info_card />
						</div>
						<div className={`mt-[3rem] `}>
							<Contact_info_form />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contacts;
