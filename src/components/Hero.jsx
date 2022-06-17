import React from "react";
import foto2 from "../images/mymemoji-hi-blue.png";

const Hero = () => {
	return (
		<div className="bg-blue-400 min-h-[20vh] flex justify-around align-middle p-10">
			<div className="container flex justify-center align-middle   w-80">
				<img src={foto2} alt="" className="object-cover w-6/6" />
			</div>
			<div className="container flex flex-col justify-center">
				<div>
					<h2>Hi! My name is</h2>
					<h1>David Lee</h1>
					<h2>I'm a Full Stack Developer</h2>
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

export default Hero;
