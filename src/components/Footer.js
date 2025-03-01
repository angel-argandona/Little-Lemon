import React from "react";
import Nav from "./Nav";

const Footer = () => {
	const footerStyle = {
		fontFamily: "sans-serif",
		fontSize: "16pt",
		fontWeight: 500,
		color: "black",
	};
	
	return (
		<footer>
			<div className="padding-1"></div>
			<img className="footer-logo" src={require("../images/logos/small-logo-white.png")}></img>
			<Nav style={footerStyle}/>
			<div className="contact-info">
				<h3>Contact</h3>
				<p style={footerStyle}>Adress</p>
				<p style={footerStyle}>Phone number</p>
				<p style={footerStyle}>Email</p>
			</div>
			<div className="social-links">
				<h3>Social Media Links</h3>
				<p>Links here</p>
			</div>
			<div className="padding-2"></div>
		</footer>
	)
}

export default Footer;