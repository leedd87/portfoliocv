import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const English = () => {
	return (
		<div className="bg-gradient-to-b  from-red-400 to-red-200 ">
			<NavBar />
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
};

export default English;
