import React from "react";
import Nav from "./Nav";

const Footer = () => {
	return (
		<footer>
			<div></div>
			<img src={require("../images/logos/small-logo-1.png")}></img>
			<Nav/>
			<div>
				<h2>Contact</h2>
				<p>Adress</p>
				<p>Phone number</p>
				<p>Email</p>
			</div>
			<div>
				<h2>Social Media Links</h2>
				<p>Links here</p>
			</div>
			<div></div>
		</footer>
	)
}

export default Footer;