import React from "react";
import Nav from "./Nav";

const Footer = () => {
	const footerStyle = {
		fontFamily: "sans-serif",
		fontSize: "1.6rem",
		fontWeight: 500,
		color: "white",
	};
	
	return (
		<footer>
			<div className="padding-left"></div>
			<img className="footer-logo" src={require("../images/logos/small-logo-white.png")}></img>
			<Nav style={footerStyle}/>
			<div className="contact-info">
				<h3 style={{color:"white"}}>Contact</h3>
				<p style={footerStyle}>Adress</p>
				<p style={footerStyle}>Phone number</p>
				<p style={footerStyle}>Email</p>
			</div>
			<div className="social-links">
				<h3 style={{color:"white"}}>Social Media Links</h3>
				<p>Links here</p>
			</div>
			<div className="padding-right"></div>
		</footer>
	)
}

export default Footer;