import React from "react";

const About = () => {
	return (
		<div className=" min-h-[20vh] flex flex-col justify-center items-center w-full  mx-0">
			<h1 className=" text-white text-4xl font-mono " id="sobremi">
				About me
			</h1>
			<div className="flex items-center justify-center my-10">
				<div className="flex-col flex justify-center items-center">
					<p className="w-1/2 text-start text-2xl">
						I am a curious person, with a spirit of learning and passion
						for teaching.
					</p>
					<p className="w-1/2 text-start text-2xl">
						Committed and always focused on achiving all the goals that I
						propose both individually and in groups.
					</p>
					<p className="w-1/2 text-start text-2xl">
						My goal is to continue advancing individually and in groups.
						Have the opportunity to share my knowledge and learn together
						with my companions to be able to Develop myself in work.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
