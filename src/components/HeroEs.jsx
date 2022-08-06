import React from "react";
import foto2 from "../images/mymemoji-hi.png";

const HeroEs = () => {
	return (
		<div className="h-[30vh] flex justify-around align-middle p-10">
			<div className="container flex justify-center align-middle   w-80">
				<img src={foto2} alt="" className="object-cover w-6/6" />
			</div>
			<div className="container flex flex-col justify-center">
				<div>
					<p className="text-xl">Hola! Mi nombre es</p>
					<h1 className="text-8xl font-semibold text-white animate-text">
						DAVID LEE
					</h1>
					<h2 className="text-4xl text-white">
						Desarrollador Full Stack MERN & Mobile
					</h2>
					<h2 className="text-2xl">Bienvenido a mi PORTFOLIO</h2>
				</div>
			</div>
		</div>
	);
};

export default HeroEs;
