import React, { useEffect, useState } from "react";
import "./HeroSection.css"

const HeroSection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(()=>{
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize)
	},[]);

	if (windowWidth > 600){
		return (
			<section className="hero-section">
				<div className="padding-left"></div>
				<section className="hero-content">
					<div className="hero-text">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
						<p className="lead-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					</div>
					<button>Reserve a Table</button>
					<img src={require("../images/hero-image.jpg")}></img>
				</section>
				<div className="padding-right"></div>
			</section>
		)
	} else {
		return (
			<section className="hero-section">
				<section className="hero-content">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<button>Reserve a Table</button>
				</section>
			</section>
		)
	}

}

export default HeroSection;