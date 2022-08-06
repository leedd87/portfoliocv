import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import cv from "../pdf/CV-E-LEE-DAVID.pdf";

const Contact = () => {
	return (
		<div className="min-h-[10vh] flex-col flex justify-center items-center mx-auto py-10">
			<div className="text-center font-mono text-4xl text-white mb-5">
				<h1>CONTACT</h1>
			</div>
			<div>
				<a href={cv} download="CV-LEE">
					CV DOWNLOAD
				</a>
			</div>
			<div className="flex w-1/2 justify-center items-center mx-auto gap-5">
				<a
					href="https://www.linkedin.com/in/david-lee-full-stack-dev/"
					target="_blank"
					rel="noreferrer"
				>
					<SiLinkedin size={50} />
				</a>

				<a
					href="https://github.com/leedd87"
					target="_blank"
					rel="noreferrer"
				>
					<SiGithub size={50} />
				</a>
			</div>
		</div>
	);
};

export default Contact;
