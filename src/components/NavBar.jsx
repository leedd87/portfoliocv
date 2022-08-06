import React from "react";

const NavBar = () => {
	return (
		<div>
			<div className="h-[10vh] w-full flex justify-between items-center ">
				<div className="pl-20">
					<h1 className=" ">DL</h1>
				</div>
				<div className="w-1/2 pr-20 flex justify-between">
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Projects</a>
					<a href="/">Skills</a>
					<a href="/">Contact</a>
					<a href="/">CV Download</a>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
