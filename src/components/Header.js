import React from "react";
import Nav from "./Nav";

const Header = () => {
	const navStyle = {
		fontFamily: "sans-serif",
		fontSize: "18pt",
		fontWeight: 800,
		textTransform: "uppercase",
		color: "black",
	};
	
	return (
		<header>
			<div></div>
			<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
			<Nav style={navStyle}></Nav>
			<div></div>
		</header>
	)
}

export default Header;