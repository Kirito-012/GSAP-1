"use client";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite } from "gsap/gsap-core";
import { Timeline } from "gsap/gsap-core";
import { Power4, TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";

const Test2 = () => {
	let container = useRef(null);
	let image = useRef(null);
	// let imageReveal = CSSRulePlugin.getRule(".img-container:after");

	// let t1 = new TimelineLite();

	// useEffect(() => {
	// 	t1.to(container, 0, { css: { visibility: "visible" } })
	// 		.to(imageReveal, 1.4, {
	// 			width: "100%",
	// 			ease: Power2.easeInOut,
	// 		})
	// 		.from(image, 1.4, {
	// 			scale: 1.6,

	// 			ease: Power2.easeInOut,
	// 			delay: -1.6,
	// 		});
	// }, []);

	useEffect(() => {
		TweenMax.to(image, 3.9, {
			scale: 1,
			delay: 0.9,
			ease: Power4.easeInOut,
		});

		TweenMax.to(container, 3.9, {
			left: "120vw",
			ease: Power4.easeInOut,
		});
	});

	return (
		<>
			<section className="main">
				<div className=" h-screen  mx-0 my-auto flex justify-center items-center ">
					<div className="w-[1040px] flex  overflow-hidden ">
						<img
							className="scale-[1.5]"
							ref={(lol) => (image = lol)}
							src="1318311.png"
						/>
					</div>

					<div
						ref={(lol) => (container = lol)}
						className="fixed w-screen h-screen bg-white top-0 left-0 z-[9999]"></div>
				</div>
			</section>
		</>
	);
};

export default Test2;
