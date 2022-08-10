import React from "react";
import amazing from "../images/amazing_events.png";
import mindy from "../images/mindy_pet_shop.png";
import sushi from "../images/sushi_ecommerce.png";
import capita from "../images/capita_snow.png";
import booking from "../images/booking_app.png";
import mytinerary from "../images/mytinerary.png";
import daftlab from "../images/daftlab_ecommerce.png";
import daftlabMobile from "../images/mobile-daftlab.png";
import mytineraryMobile from "../images/mobile-mytinerary.png";

const Projects = () => {
	return (
		<div className="bg-blue-400 py-10">
			<h1
				className="text-center font-mono text-4xl text-white"
				id="proyectos"
			>
				PROJECTS
			</h1>
			<div className=" min-h-[20vh]  grid grid-cols-3 container  mx-auto my-10 gap-5 w-2/3">
				<div className="border-8 border-red-400 flex bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img
						src={daftlab}
						alt="amazing_events"
						className="mb-5 daftlab p-4"
					/>
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="http://daftlab.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									DAFTLAB - ECOMMERCE - GRUPAL
								</a>
							</span>
						</span>
					</button>
				</div>
				<div className="border-8 border-red-400 flex bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img
						src={daftlabMobile}
						alt="amazing_events"
						className="mb-5 daftlab p-4"
					/>
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="https://drive.google.com/file/d/1xOARO1gLr50PkzW69-sYd29CTdU3phCu/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
								>
									DAFTLAB - MOBILE
								</a>
							</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img
						src={mytinerary}
						alt="amazing_events"
						className="mb-5 daftlab p-4"
					/>
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="https://mytinerary-lee-frontend.herokuapp.com/"
									target="_blank"
									rel="noreferrer"
								>
									MyTINERARY
								</a>
							</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img
						src={mytineraryMobile}
						alt="amazing_events"
						className="mb-5 daftlab p-4"
					/>
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="https://drive.google.com/file/d/1r59xvZvAAbsZdS-x5ROO7kS0qXvry-ru/view?usp=sharing"
									target="_blank"
									rel="noreferrer"
								>
									MyTINERARY - MOBILE
								</a>
							</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={mindy} alt="amazing_events" className="mb-5 p-4" />
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="https://mindy-ecommerce.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									MINDY PET SHOP - GRUPAL
								</a>
							</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400  bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={amazing} alt="amazing_events" className="mb-5 p-4" />
					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">
								<a
									href="https://amazing-events-mindhub.vercel.app/"
									target="_blank"
									rel="noreferrer"
								>
									AMAZING EVENTS
								</a>
							</span>
						</span>
					</button>
				</div>

				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={sushi} alt="amazing_events" className="mb-5 p-4" />

					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">SUSHI E-COMMERCE</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={booking} alt="amazing_events" className="mb-5 p-4" />

					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">RESERVA DE HOTELES</span>
						</span>
					</button>
				</div>
				<div className="border-8 flex border-red-400 bg-white flex-col rounded justify-center items-center w-[380px] mx-auto h-[400px]">
					<img src={capita} alt="amazing_events" className="mb-5 p-4" />

					<button class="buttonEs">
						<span class="button_lgEs">
							<span class="button_slEs"></span>
							<span class="button_textEs">CAPITA SNOWBOARD</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
