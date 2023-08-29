import React from "react";
import foto2 from "../images/mymemoji-hi-blue.png";

const Hero = () => {
	return (
		<div className="h-[30vh] flex justify-around align-middle p-10">
			<div className="container flex flex-col justify-center">
				<div>
					<p className="text-xl">Hello! My name is</p>
					<h1 className="text-8xl font-semibold text-white animate-text">
						DAVID LEE
					</h1>
					<h2 className="text-4xl text-white">
						Full Stack MERN & Mobile Developer
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
