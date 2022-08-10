import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../home.css";

const Home = () => {
	return (
		<>
			<div className="container-animation projects">
				<h1 className="animation-h1">DAVID LEE</h1>
				<div className="overlay"></div>
				<div className=" w-[250px] my-5 flex items-center justify-around">
					<LinkRouter to="/english" className="btn-engEn">
						EN
					</LinkRouter>
					<LinkRouter to="/espanol" className="btn-engEs">
						ES
					</LinkRouter>
				</div>
			</div>
		</>
	);
};

export default Home;
