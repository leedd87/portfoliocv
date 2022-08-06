import React from "react";

const NavBarEs = () => {
	return (
		<div>
			<div className="h-[10vh] w-full flex justify-between items-center bg-red-400 ">
				<div className=" rounded-full bg-white w-[75px] h-[75px] items-center justify-center flex">
					<h1 className=" text-4xl">DL</h1>
				</div>
				<div className="w-1/2 pr-20 flex justify-between">
					<a href="/" className="text-lg hover:text-white">
						Inicio
					</a>
					<a href="#sobremi" className="text-lg hover:text-white">
						Sobre Mi
					</a>
					<a href="#proyectos" className="text-lg hover:text-white">
						Proyectos
					</a>
					<a href="#tecnologia" className="text-lg hover:text-white">
						Tecnologias
					</a>
					<a href="/" className="text-lg hover:text-white">
						Contacto
					</a>
					<a href="/" className="text-lg hover:text-white">
						Descargar CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default NavBarEs;
