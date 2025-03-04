import "./ChicagoSection.css"
import { useWindowContext } from "./context/windowContext";

const ChicagoSection = () => {
	const windowWidth = useWindowContext();

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
					<div>
						<img src={require("../images/hero-image.jpg")}></img>
					</div>
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

export default ChicagoSection;