import React from "react";
import Nav from "./Nav";

const Footer = () => {
	return (
		<footer>
			<div className="padding-1"></div>
			<img className="footer-logo" src={require("../images/logos/small-logo-1.png")}></img>
			<Nav className="footer-nav"/>
			<div className="contact-info">
				<h2>Contact</h2>
				<p>Adress</p>
				<p>Phone number</p>
				<p>Email</p>
			</div>
			<div className="social-links">
				<h2>Social Media Links</h2>
				<p>Links here</p>
			</div>
			<div className="padding-2"></div>
		</footer>
	)
}

export default Footer;