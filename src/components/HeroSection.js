import React, { useEffect, useState } from "react";

const HeroSection = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	useEffect(()=>{
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize)
	},[]);

	if (windowWidth >= 600){
		return (
			<section className="hero-section">
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
			</section>
		)
	} else {
		return (
			<section className="hero-section">
				<div className="hero-content">
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<button>Reserve a Table</button>
				</div>
			</section>
		)
	}

}

export default HeroSection;