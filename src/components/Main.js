import React from "react";
import "./Main.css";

const Main = () => {
	return (
		<main>
			<section className="hero-section">
				<div className="padding-left"></div>
				<div className="hero-info">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
				</div>
				<img src={require("../images/hero-image.jpg")}></img>
				<div className="padding-right"></div>
			</section>
			<section className="specials-section">

			</section>
			<section className="testimonials-section">

			</section>
			<section className="chicago-section">

			</section>

			<h3>This is h3</h3>
			<h4>This is h4</h4>
			<h5>This is h5</h5>
		</main>
	)
}

export default Main;