import React from "react";
import Image from "next/image";
import styles from "@/app/styles/Aboutus.module.css";

const Aboutus = () => {
	return (
		<>
			<div className={`pt-24 ${styles["aboutus__container"]}`}>
				<div id="aboutus" className="About__grid">
					<h1
						className={`roundedfont font-bold text-6xl ${styles["aboutus__title"]}`}
					>
						About Us
					</h1>
					{/* IMAGE AND ABOUT */}
					<div className={`flex flex-row ${styles["aboutus__wrapper"]}`}>
						<div className={` ${styles["aboutus__info"]}`}>
							<h1
								className={`robotoslab text-3xl font-extrabold ${styles["aboutus__subtitle"]}`}
							>
								We are making things{" "}
								<strong className={styles.aboutus__strong}>Memestic</strong>
							</h1>
							<p className={`description ${styles["aboutus__description"]}`}>
								Social hikers is a meme and influencer network helping brand to
								get their desiered auidence and content push. We create memes
								and make them viral so that brands can get humungous reach while
								making people laugh.
							</p>
							<h1
								className={`robotoslab text-3xl font-extrabold ${styles["aboutus__subtitle"]}`}
							>
								We have done some great stuff
							</h1>
							<p className={`description ${styles["aboutus__description"]}`}>
								Our multichannel expertise and cost-effective strategies have
								delivered disruptive digital growth to hundreds of companies.
								Your business can be next!
							</p>
							<button
								className={` text-lg gradient_button font-bold outfit mt-11 ${styles["aboutus__button"]}`}
							>
								Learn More
							</button>
						</div>
						<div className={` flex justify-center items-center `}>
							<Image
								className={styles.aboutus__image}
								src="/about_us.png"
								width={581}
								height={478}
							></Image>
						</div>
					</div>
					{/* ICONS */}
					<div
						className={`flex h-64 justify-center items-center ${styles["aboutus__container_height"]}`}
					>
						<div
							className={`h-48 w-64 flex flex-col justify-evenly items-center ${styles["aboutus__icon-holder"]}`}
						>
							<Image
								className={styles.aboutus__icon}
								src="/clients.png"
								width={75}
								height={75}
							></Image>
							<h1
								className={`text-4xl font-bold roboto ${styles["aboutus__number"]}`}
							>
								100+
							</h1>
							<h1
								className={`text-sm font-medium text-[#acb5c1] outfit ${styles["aboutus__label"]}`}
							>
								Happy Clients
							</h1>
						</div>
						<div
							className={`h-48 w-64 flex flex-col justify-evenly items-center ${styles["aboutus__icon-holder"]}`}
						>
							<Image
								className={styles.aboutus__icon}
								src="/influencers.png"
								width={75}
								height={75}
							></Image>
							<h1
								className={`text-4xl font-bold roboto ${styles["aboutus__number"]}`}
							>
								10,000+
							</h1>
							<h1
								className={`text-sm font-medium text-[#acb5c1] outfit ${styles["aboutus__label"]}`}
							>
								Influencers
							</h1>
						</div>
						<div
							className={`${styles["aboutus__icon-holder"]} h-48 w-64 flex flex-col justify-evenly items-center `}
						>
							<Image
								className={styles.aboutus__icon}
								src="/partnership.png"
								width={75}
								height={75}
							></Image>
							<h1
								className={`text-4xl font-bold roboto ${styles["aboutus__number"]}`}
							>
								5,000+
							</h1>
							<h1
								className={`text-sm font-medium text-[#acb5c1] outfit ${styles["aboutus__label"]}`}
							>
								Partnership
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Aboutus;
