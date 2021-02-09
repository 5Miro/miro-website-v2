import React from "react";
import { BrowserRouter } from "react-router-dom";
import BoxCardCarrousel from "./components/BoxCardCarrousel/BoxCardCarrousel";
import "./style.css";
import "./queries.css";

/* Font Awesome imports */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faEye } from "@fortawesome/free-regular-svg-icons";

/* Component imports */
import ContactForm from "./components/ContactForm/ContactForm";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import ShapeTransition from "./components/ShapeTransition/ShapeTransition";
import NavFullscreen from "./components/NavFullscreen/NavFullscreen";

library.add(faCheckSquare, faEye);

const App = () => {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header>
					{/*------ NAV BAR ------*/}
					<div className="nav row">
						<div className="col-1 small left">
							<a className="brand" href="/">
								miroMIRO
							</a>
						</div>
						<div className="col-1 small center">
							<SocialLinks></SocialLinks>
						</div>
						<NavFullscreen
							navData={[
								{ label: "my work", id: "myWork" },
								{ label: "about me", id: "aboutMe" },
								{ label: "contact", id: "letsTalk" },
							]}
						></NavFullscreen>
					</div>

					{/*------ HERO ------*/}
					<div className="hero">
						<div>
							<h1>miroMIRO</h1>
						</div>
						<div>
							<h2>programmer &amp; game developer</h2>
						</div>
					</div>
					<ShapeTransition color="#f4f4f4"></ShapeTransition>
					{/*------ WELCOME TEXT ------*/}
					<div className="welcome">
						<h2>Hello! Thanks for showing up</h2>
					</div>
				</header>
				<main>
					{/*------ WORK SECTION ------*/}
					<div id="myWork">
						<h3>Would you like to take a look at some of my work?</h3>
					</div>
					<BoxCardCarrousel></BoxCardCarrousel>
					{/*------------*/}

					<ShapeTransition color="#fff"></ShapeTransition>

					<div className="row white-bg">
						{/*------ ABOUT ME SECTION ------*/}
						<div className="col-1" id="aboutMe">
							<div className="col-1 half-screen">
								<div>
									<h2>About me</h2>
								</div>
								<div>
									<p>
										<span>
											My name is <b>Ramiro Vázquez</b>. I'm a passionated
											programmer, indeed. But I'm also an amateur writer, an
											archery enthusiast, a videogame player and indie
											developer.
										</span>
										<br />
										<br />
										<span>
											Everything I've done throughout my life has shaped me into
											the person I am.
										</span>
										<br />
										<br />
										<span>
											Having that in mind, I believe we all put little pieces of
											who we are into the things we do.
										</span>
									</p>
								</div>
							</div>
						</div>
						{/*------------*/}

						{/*------ CONTACT SECTION ------*/}
						<div className="col-1" id="letsTalk">
							<ContactForm></ContactForm>
						</div>
						{/*------------*/}
					</div>
				</main>
				<footer>
					<h2>Available now</h2>
					<h3>drop a message at</h3>
					<SocialLinks></SocialLinks>
				</footer>
			</div>
		</BrowserRouter>
	);
};

export default App;
