import React from "react";
import foto2 from "../images/mymemoji-hi.png";

const HeroEs = () => {
	return (
		<div className="h-[30vh] flex justify-around align-middle p-10">
			<div className=" flex justify-center align-middle w-64 h-64 rounded-full button-border  overflow-hidden">
				{/* border-red-400  bg-white border-8 */}
				<img src={foto2} alt="" className="object-cover imagen " />
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
				</div>
			</div>
		</div>
	);
};

export default HeroEs;
