"use client";
import React, { useEffect, useRef, useState } from "react";
import { TweenMax, Power3 } from "gsap/gsap-core";
import { Tween } from "gsap/gsap-core";

const Test1 = () => {
	let dots1 = useRef(null);
	let dots2 = useRef(null);
	let dots3 = useRef(null);
	let app = useRef(null);
	const [state, setState] = useState(false);

	const handleExpand = () => {
		TweenMax.to(dots2, 0.8, { width: 200, height: 200, ease: Power3.easeOut });
		setState(true);
	};

	const handleShrink = () => {
		TweenMax.to(dots2, 0.8, { width: 75, height: 75, ease: Power3.easeOut });
		setState(false);
	};

	useEffect(() => {
		TweenMax.to(app, 0, { css: { visibility: "visible" } });
		TweenMax.staggerFrom([dots1, dots2, dots3], 0.8, {
			opacity: 0,
			x: 40,
			ease: Power3.easeOut,
		});
	}, []);

	return (
		<>
			<div
				ref={(lol) => (app = lol)}
				className="invisible flex h-screen gap-8 flex-col items-center justify-center">
				<div
					ref={(lol) => {
						dots1 = lol;
					}}
					className="h-[5rem] w-[5rem] rounded-full bg-[#fcc846]"></div>
				<div
					onClick={state !== true ? handleExpand : handleShrink}
					ref={(lol1) => {
						dots2 = lol1;
					}}
					className="h-[5rem] w-[5rem] rounded-full bg-[#301d6e]"></div>
				<div
					ref={(lol3) => {
						dots3 = lol3;
					}}
					className="h-[5rem] w-[5rem] rounded-full bg-[#fe4648]"></div>
			</div>
		</>
	);
};

export default Test1;
