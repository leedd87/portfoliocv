import React from "react";
import cv from "../pdf/CV-E-LEE-DAVID.pdf";

const NavBar = () => {
	return (
		<div>
			<div
				className="h-[10vh] w-full flex justify-between items-center bg-gradient-to-b from-blue-400 to-blue-200
			pl-10"
			>
				{/* bg-red-400  */}
				<div className=" rounded-full bg-white w-[75px] h-[75px] items-center justify-center flex">
					<h1 className=" text-4xl">DL</h1>
				</div>
				<div className="w-1/2 pr-20 flex justify-between">
					<a href="/" className="text-lg  cssbuttons-io">
						Home
					</a>
					<a href="#sobremi" className="text-lg hover:text-white">
						About Me
					</a>
					<a href="#proyectos" className="text-lg hover:text-white">
						Projects
					</a>
					<a href="#tecnologia" className="text-lg hover:text-white">
						Skills
					</a>
					<a href="#contact" className="text-lg hover:text-white">
						Contact
					</a>
					<a
						href={cv}
						className="text-lg hover:text-white"
						download="CV-LEE"
					>
						CV DOWNLOAD
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
