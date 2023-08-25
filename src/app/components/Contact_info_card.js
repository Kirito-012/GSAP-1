import React from "react";
import Image from "next/image";
import styles from "@/app/styles/Contact.module.css";

const Contact_info_card = () => {
	return (
		<>
			<div className={styles.Contact_info_card_container}>
				<div
					className={`text-3xl mb-3 font-semibold grandstander ${styles["info__heading"]}`}
				>
					Get in Touch:
				</div>
				<div className="relative">
					<div
						className={`absolute overflow-hidden ${styles["contact__info"]}`}
					>
						<div
							className={`${styles["contact__info_boxbg"]} overflow-hidden h-[30rem] w-[21rem] bg-[#192966] rounded-2xl font-medium`}
						>
							<div
								class={`absolute mt-[19rem] ml-[12.25rem] z-10 form__limecircle ${styles["form__limecircle"]} `}
							></div>
							<div>
								<div
									class={`mt-[20rem] ml-[13rem] form__pinkcircle ${styles["form__pinkcircle"]}`}
								></div>
							</div>
							<div className="z-20"></div>
						</div>
					</div>
					<div
						className={`relative ${styles["contact__info_boxbg"]} h-[30rem] w-[21rem] ${styles["contact__info"]} bg-transparent`}
					>
						<div className={`pt-[2rem] ml-[2rem] mr-[2rem] robotoslab `}>
							<h1
								className={`${styles["info__subheading"]} font-semibold text-[1.25rem] tracking-wide`}
							>
								Contact Information
							</h1>
							<p className={`${styles["info__description"]} text-xs pt-1 `}>
								Fill up the form and our Team will get back to you within 24
								hours.
							</p>
						</div>
						<div className={`mt-14 ml-8 ${styles["info__contact"]}`}>
							<div
								className={`flex items-center roboto tracking-[0.05rem] text-[0.75rem] ${styles["info__number"]}`}
							>
								<Image
									className={`cursor-pointer ${styles["info__icons"]}`}
									src="/phone.png"
									width={25}
									height={25}
								></Image>
								<h3
									className={`ml-6 cursor-pointer ${styles["info__icon_desc"]}`}
								>
									+91 7017979071
								</h3>
							</div>
							<div
								className={`flex items-center roboto tracking-[0.05rem] mt-8 text-[0.75rem] ${styles["info__mail"]}`}
							>
								<Image
									className={` cursor-pointer ${styles["info__icons"]}`}
									src="/mail.png"
									width={25}
									height={25}
								></Image>
								<h3
									className={`ml-6 cursor-pointer ${styles["info__icon_desc"]}`}
								>
									hello@socialhikers.in
								</h3>
							</div>
							<div
								className={`flex items-center roboto tracking-[0.05rem] mt-8 text-[0.75rem] ${styles["info__mail"]}`}
							>
								<Image
									className={`${styles["info__icons"]}`}
									src="/location.png"
									width={25}
									height={25}
								></Image>
								<h3 className={`ml-6 ${styles["info__icon_desc"]}`}>
									Roorkee, Uttarakhand
								</h3>
							</div>
						</div>
						<div className={`flex mt-20 ml-8 ${styles["info__logos"]}`}>
							<div className={`contact__info__logo`}>
								<Image src="/instagram.png" width={21} height={18}></Image>
							</div>
							<div className={`contact__info__logo`}>
								<Image src="/facebook.png" width={21} height={18}></Image>
							</div>
							<div className={`contact__info__logo`}>
								<Image src="/linkedin.png" width={21} height={18}></Image>
							</div>
							<div className={`contact__info__logo`}>
								<Image src="/twitter.png" width={21} height={18}></Image>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact_info_card;
