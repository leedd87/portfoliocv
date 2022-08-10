import React from "react";
import {
	SiHtml5,
	SiCss3,
	SiBootstrap,
	SiTailwindcss,
	SiReact,
	SiMongodb,
	SiExpress,
	SiRedux,
	SiNodedotjs,
	SiGit,
	SiJavascript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
	return (
		<div className="py-10">
			<h2 className="text-center font-mono text-4xl text-white mb-5">
				SKILLS
			</h2>
			<div className=" min-h-[20vh] grid grid-cols-4 container mx-auto gap-5 w-1/2">
				<div className="bg-red-200 rounded shadow w-full h-full pt-5 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiHtml5 size={55} />
					<h2 className="mt-3">HTML</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-5 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiCss3 size={55} />
					<h2 className="mt-3">CSS</h2>
				</div>

				<div className="bg-red-200  rounded shadow w-full   h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiBootstrap size={55} />
					<h2 className="mt-3">Bootstrap</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full  h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiTailwindcss size={55} />
					<h2 className="mt-3 ">Tailwind</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiJavascript size={55} />
					<h2 className="mt-3">Javascript</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full  h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiReact size={55} />
					<h2 className="mt-3">React</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full   h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<TbBrandReactNative size={55} />
					<h2 className="mt-3">React Native</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full  h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiMongodb size={55} />
					<h2 className="mt-3">MondoDB</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiExpress size={55} />
					<h2 className="mt-3">Express</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiRedux size={55} />
					<h2 className="mt-3">Redux</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiNodedotjs size={55} />
					<h2 className="mt-3">NodeJS</h2>
				</div>
				<div className="bg-red-200 rounded shadow w-full h-full pt-4 flex align-middle justify-center flex-col items-center mx-auto border-8 border-blue-400">
					<SiGit size={55} />
					<h2 className="mt-3">Git</h2>
				</div>
			</div>
		</div>
	);
};

export default Skills;
