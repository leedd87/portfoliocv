import React from "react";
import AboutEs from "../components/AboutEs";

import ContactEs from "../components/ContactEs";
import Footer from "../components/Footer";
import HeroEs from "../components/HeroEs";
import NavBarEs from "../components/NavBarEs";
import ProjectsEs from "../components/ProjectsEs";
import SkillsEs from "../components/SkillsEs";

const Espanol = () => {
	return (
		<div>
			<div className="bg-gradient-to-b from-blue-400 to-blue-200 ">
				<NavBarEs />
				<HeroEs />
				<AboutEs />
				<ProjectsEs />
				<SkillsEs />
				<ContactEs />
				<Footer />
			</div>
		</div>
	);
};

export default Espanol;
