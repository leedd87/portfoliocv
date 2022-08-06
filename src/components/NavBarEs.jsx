import React from "react";

const NavBarEs = () => {
	return (
		<div>
			<div className="h-[10vh] w-full flex justify-between items-center bg-red-400 ">
				<div className="pl-20">
					<h1 className="">DL</h1>
				</div>
				<div className="w-1/2 pr-20 flex justify-between">
					<a href="/">Inicio</a>
					<a href="#sobremi">Sobre Mi</a>
					<a href="#proyectos">Proyectos</a>
					<a href="#tecnologia">Tecnologias</a>
					<a href="/">Contacto</a>
					<a href="/">Descargar CV</a>
				</div>
			</div>
		</div>
	);
};

export default NavBarEs;
