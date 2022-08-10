import React from "react";

const AboutEs = () => {
	return (
		<div className=" min-h-[20vh] flex flex-col justify-center items-center w-full  mx-0">
			<h1 className=" text-white text-4xl font-mono " id="sobremi">
				SOBRE MI
			</h1>
			<div className="flex items-center justify-center my-10">
				<div className="flex-col flex justify-center items-center">
					<p className="w-1/2 text-start text-2xl">
						Soy una persona curiosa, con espíritu de aprendizaje y con
						pasión por la enseñanza.
					</p>
					<p className="w-1/2 text-start text-2xl">
						Comprometido y enfocado siempre en cumplir todas las metas que
						me propongo tanto de manera individual como grupal.
					</p>
					<p className="w-1/2 text-start text-2xl">
						Mi objetivo se encuentra en seguir avanzando individual como
						grupalmente y tener la oportunidad de compartir mis
						conocimientos y aprender junto a mis pares para poder
						desarrollarme en el ámbito de trabajo que me toque ejercer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutEs;
