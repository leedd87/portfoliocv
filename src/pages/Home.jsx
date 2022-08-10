import React from "react";
import { Link as LinkRouter } from "react-router-dom";

const Home = () => {
	return (
		<div className="bg-blue-200 min-h-screen grid place-content-center">
			<div className="w-[500px] flex justify-center flex-col items-center">
				<h1 className="text-4xl">DAVID LEE</h1>
				<div className=" w-[250px] my-5 flex items-center justify-around">
					<LinkRouter to="/english" className="btn-engEn">
						EN
					</LinkRouter>
					<LinkRouter to="/espanol" className="btn-engEs">
						ES
					</LinkRouter>
				</div>
			</div>
		</div>
	);
};

export default Home;
