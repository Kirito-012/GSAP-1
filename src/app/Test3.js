"use client";
import { Power3 } from "gsap";
import { TweenMax } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

const Test3 = () => {
	let image1 = useRef(null);
	let container1 = useRef(null);
	let image2 = useRef(null);
	let container2 = useRef(null);
	let heading1 = useRef(null);
	let heading2 = useRef(null);
	let heading3 = useRef(null);
	useEffect(() => {
		TweenMax.to(container2, 2, { marginTop: 10, ease: Power3.easeInOut });
		TweenMax.to(image2, 1.5, { scale: 1, ease: Power3.easeInOut, delay: 0.5 });
		TweenMax.to(container1, 2, { marginTop: 350, ease: Power3.easeInOut });
		TweenMax.to(image1, 1.5, { scale: 1, ease: Power3.easeInOut, delay: 0.5 });
		TweenMax.to(heading1, 1, { height: 0, ease: Power3.easeInOut });
		TweenMax.to(heading2, 1, { height: 0, ease: Power3.easeInOut });
		TweenMax.to(heading3, 1, { height: 0, ease: Power3.easeInOut });
	}, []);
	return (
		<>
			<div className="flex">
				<div className="w-[50%] flex flex-col items-center mt-[20rem]">
					<div className="mb-[1rem]">
						<div className="bg-white"></div>
						<div>
							<h1 className="w-[30vw] font-semibold text-2xl">
								Relieving the burden of disease
							</h1>
							<h1
								ref={(lol) => (heading1 = lol)}
								className="w-[30vw] absolute bottom-[56%] h-[7vh] bg-white"></h1>
							<h1 className="w-[30vw] font-semibold text-2xl">
								caused by behaviors.
							</h1>
							<h1
								ref={(lol) => (heading2 = lol)}
								className="w-[30vw] absolute bottom-[56%] h-[7vh] bg-white"></h1>
						</div>
					</div>
					<div>
						<p className="w-[30vw]">
							Better treats serious cardiometabolic diseases to transform lives
							and reduce healthcare utilization through the use of digital
							therapeutics.
						</p>
						<h1
							ref={(lol) => (heading3 = lol)}
							className="w-[30vw] absolute bottom-[48%] h-[10vh] bg-white"></h1>
					</div>
				</div>
				<div className="flex gap-9">
					<div
						ref={(lol) => (container1 = lol)}
						className="mt-[-55rem] h-[30rem] w-[20rem] overflow-hidden">
						<img
							ref={(lol) => (image1 = lol)}
							className="scale-[1.7]"
							src="/unsplash1.jpg"
						/>
					</div>
					<div
						ref={(lol) => (container2 = lol)}
						className="mt-[55rem] w-[19rem] h-[30rem] overflow-hidden">
						<img
							ref={(lol) => (image2 = lol)}
							className="scale-[1.5]"
							src="/unsplash2.jpg"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Test3;
