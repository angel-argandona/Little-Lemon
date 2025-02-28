import React from "react";
import Nav from "./Nav";

const Header = () => {
	return (
		<header>
			<div></div>
			<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
			<Nav></Nav>
			<div></div>
		</header>
	)
}

export default Header;