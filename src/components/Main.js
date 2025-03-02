import React from "react";
import HeroSection from "./HeroSection";
import SpecialsSection from "./SpecialsSection";

/*<section className="hero-section">
				<div className="padding-left"></div>
				<div className="hero-content">
					<div className="hero-text">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
						<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
						<button>Reserve a Table</button>
					</div>
					<img src={require("../images/hero-image.jpg")}></img>
				</div>
				<div className="padding-right"></div>
			</section>*/

const Main = () => {
	return (
		<main>
			<HeroSection/>
			<SpecialsSection/>
			<section className="testimonials-section">
				
			</section>
			<section className="chicago-section">

			</section>
		</main>
	)
}

export default Main;