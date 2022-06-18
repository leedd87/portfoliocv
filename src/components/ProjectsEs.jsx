import React from "react";
import amazing from "../images/amazing_events.png";
import mindy from "../images/mindy_pet_shop.png";
import sushi from "../images/sushi_ecommerce.png";
import capita from "../images/capita_snow.png";
import booking from "../images/booking_app.png";

const ProjectsEs = () => {
	return (
		<>
			<h1 className="text-center font-mono text-4xl text-white">
				PROYECTOS
			</h1>
			<div className=" min-h-[20vh]  grid grid-cols-3 container  mx-auto my-10 gap-5 w-2/3">
				<div className="flex bg-blue-100 flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={amazing} alt="amazing_events" className="mb-5" />

					<button className="rounded bg-indigo-400 w-2/4">
						<a
							href="https://amazing-events-mindhub.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							AMAZING EVENTS
						</a>
					</button>
				</div>

				<div className="flex bg-blue-100 flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={mindy} alt="amazing_events" className="mb-5" />
					<button className="rounded bg-indigo-400 w-2/4">
						<a
							href="https://finalfinal-mindy.vercel.app/index.html"
							target="_blank"
							rel="noreferrer"
						>
							MINDY PET SHOP
						</a>
					</button>
				</div>
				<div className="flex bg-blue-100 flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={sushi} alt="amazing_events" className="mb-5" />
					<button className="rounded bg-indigo-400 w-2/4">
						<a
							href="https://react-ecommerce-lee-final.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							SUSHI E-COMMERCE
						</a>
					</button>
				</div>
				<div className="flex bg-blue-100 flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={booking} alt="amazing_events" className="mb-5" />
					<button className="rounded bg-indigo-400 w-2/4">
						<a
							href="https://reservas-hoteles.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							RESERVA DE HOTELES
						</a>
					</button>
				</div>
				<div className="flex bg-blue-100 flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={capita} alt="amazing_events" className="mb-5" />
					<button className="rounded bg-indigo-400 w-2/4">
						<a
							href="https://capita-snowboard.vercel.app/"
							target="_blank"
							rel="noreferrer"
						>
							CAPITA SNOWBOARD
						</a>
					</button>
				</div>
			</div>
		</>
	);
};

export default ProjectsEs;
