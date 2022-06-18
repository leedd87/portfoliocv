import React from "react";
import foto2 from "../images/mymemoji-hi-blue.png";

const HeroEs = () => {
	return (
		<div className="h-[30vh] flex justify-around align-middle p-10">
			<div className="container flex justify-center align-middle   w-80">
				<img src={foto2} alt="" className="object-cover w-6/6" />
			</div>
			<div className="container flex flex-col justify-center">
				<div>
					<h2>Hola! Mi nombre es</h2>
					<h1>David Lee</h1>
					<h2>Soy un desarrollador Full Stack</h2>
					<h2>Bienvenido a mi PORTFOLIO</h2>
				</div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
					provident minima laborum cupiditate eveniet laudantium architecto
					officiis ad sequi, accusantium, culpa consequuntur, adipisci
					officia? Voluptatum aperiam doloremque tempora neque dolores!
				</p>
			</div>
		</div>
	);
};

export default HeroEs;
