import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const English = () => {
	return (
		<div className="bg-gradient-to-b from-blue-900 to-blue-200 ">
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
};

export default English;
