import React from "react";
import style from "@/app/styles/Featured.module.css";
import Image from "next/image";
const Featured = () => {
	return (
		<>
			<div>
				<div className={style.featured__container}>
					<h1
						className={`outfit font-medium text-lg ${style["featured__title"]}`}
					>
						Featured On
					</h1>
					<div className={style.slider}>
						<div
							className={`${style["featured__iconholder"]} opacity-80  flex justify-center gap-12 items-center `}
						>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__swiggylogo"]}`}
									src="/Swiggy-logo.png"
									width={206}
									height={57}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__realmelogo"]}`}
									src="/realme-logo.png"
									width={214}
									height={60}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__mxplayerlogo"]}`}
									src="/mx_logo.png"
									width={255}
									height={63}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__whitehilllogo"]}`}
									src="/whitehill-logo.jpg"
									width={100}
									height={55}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__patanjalilogo"]}`}
									src="/patanjali-logo.jpeg"
									width={150}
									height={95}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__zee5logo"]}`}
									src="/Zee5-logo.jpg"
									width={150}
									height={95}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__mpllogo"]}`}
									src="/mpl-logo.png"
									width={110}
									height={105}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__swiggylogo"]}`}
									src="/Swiggy-logo.png"
									width={206}
									height={57}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__realmelogo"]}`}
									src="/realme-logo.png"
									width={214}
									height={60}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__mxplayerlogo"]}`}
									src="/mx_logo.png"
									width={255}
									height={63}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__whitehilllogo"]}`}
									src="/whitehill-logo.jpg"
									width={100}
									height={55}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__patanjalilogo"]}`}
									src="/patanjali-logo.jpeg"
									width={150}
									height={95}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__zee5logo"]}`}
									src="/Zee5-logo.jpg"
									width={150}
									height={95}
								></Image>
							</div>
							<div className={style.icon_slider}>
								<Image
									className={`${style["logo"]} ${style["featured__mpllogo"]}`}
									src="/mpl-logo.png"
									width={110}
									height={105}
								></Image>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Featured;
