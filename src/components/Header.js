import React from "react";
import Nav from "./Nav";
import { useWindowContext } from "./context/windowContext";

const Header = () => {
	const windowWidth = useWindowContext();
	
	const navStyle = {
		fontFamily: "sans-serif",
		fontSize: "1.8rem",
		fontWeight: 800,
		textTransform: "uppercase",
		color: "black",
	};
	
	if (windowWidth > 600){
		return (
			<header>
				<div></div>
				<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
				<Nav style={navStyle}></Nav>
				<div></div>
			</header>
		)
	} else {
		return (
			<header>
				<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
				<img className="burger-icon" src={require("../images/hamburger-icon.png")}></img>
			</header>
		)
	}

	return (
		<header>
			<div></div>
			<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
			{windowWidth>600? <Nav style={navStyle}></Nav>: <img style={{height:"4rem", width:"auto"}} src={require("../images/hamburger-icon.png")}></img>}
			<div></div>
		</header>
	)
}

export default Header;