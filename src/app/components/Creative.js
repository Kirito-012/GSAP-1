import React from "react";
import Card from "./Card";
import styles from "@/app/styles/Creative.module.css";
const Creative = () => {
	return (
		<>
			<div id="services" className={styles.creative__container}>
				<h1
					className={`roundedfont font-bold text-6xl ${styles["creative__title"]}`}>
					Our Creative Services
				</h1>
				<div className="flex flex-wrap gap-8 justify-evenly items-center">
					<Card
						imageURL={"/insta_marketing.webp"}
						title={`Instagram Influencer Marketing`}
						descrip={`Influencers of varied niches on Instagram will promote your brand
					through posts, videos, Stories & Reels`}
					/>
					<Card
						imageURL={"/meme_marketing.png"}
						title={`Meme Marketing`}
						descrip={`Promote your brand in the most unique and quirky ways through influential meme pages`}
					/>
					<Card
						imageURL={"/youtube_marketing.png"}
						title={`YouTube Influencer Marketing`}
						descrip={`Creative brand integrations and dedicated videos, with relevant influencers to inform the audience about your products and services`}
					/>
					<Card
						imageURL={"/content_marketing.png"}
						title={`Content Amplification`}
						descrip={`Executing creative strategies and ideas that are relevant to your brand and relatable to your audience.`}
					/>
					<Card
						imageURL={"/ondemand_marketing.png"}
						title={`On-Demand UGC Creation`}
						descrip={`Establishing the reliability of your brand by curating video content, for the potential users and audience`}
					/>
					<Card
						imageURL={"/celebrity_marketing.png"}
						title={`Celebrity Endorsements`}
						descrip={`Get influential faces on-board to promote your brand in their unique style`}
					/>
					<Card
						imageURL={"/web_marketing.png"}
						title={`Web Development `}
						descrip={`Establishing the reliability of your brand by curating video content, for the potential users and audience`}
					/>
				</div>
			</div>
		</>
	);
};

export default Creative;
