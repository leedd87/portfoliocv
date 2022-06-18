import React from "react";

const NavBarEs = () => {
	return (
		<div>
			<div className="h-[10vh] w-full flex justify-between items-center ">
				<div className="pl-20">
					<h1>DL</h1>
				</div>
				<div className="w-1/2 pr-20 flex justify-between">
					<a href="/">Inicio</a>
					<a href="/">Sobre Mi</a>
					<a href="/">Proyectos</a>
					<a href="/">Tecnologias</a>
					<a href="/">Contacto</a>
					<a href="/">Descargar CV</a>
				</div>
			</div>
		</div>
	);
};

export default NavBarEs;
