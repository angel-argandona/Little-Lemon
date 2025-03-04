import "./ChicagoSection.css"
import { useWindowContext } from "./context/windowContext";

const ChicagoSection = () => {
	const windowWidth = useWindowContext();

	if (windowWidth > 600){
		return (
			<section className="chicago-section">
				<div className="padding-left"></div>
				<section className="chicago-content">
					<div className="chicago-text">
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
						<h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br/>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
					</div>
					<div className="chicago-images">
						<img id="one" src={require("../images/restaurant-chef-B.jpg")}></img>
						<img id="two" src={require("../images/restaurant.jpg")}></img>
					</div>
				</section>
				<div className="padding-right"></div>
			</section>
		)
	} else {
		return (
			<section className="chicago-section">
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<h5>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br/>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h5>
				<img id="one" src={require("../images/restaurant-chef-B.jpg")}></img>
				<img id="two" src={require("../images/restaurant.jpg")}></img>
			</section>
		)
	}

}

export default ChicagoSection;