import React from "react";
import Nav from "./Nav";
import { useWindowContext } from "./context/windowContext";

const Header = () => {
	const windowWidth = useWindowContext();
	
	if (windowWidth > 1350){
		return (
			<header>
				<div></div>
				<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
				<Nav></Nav>
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
}

export default Header;