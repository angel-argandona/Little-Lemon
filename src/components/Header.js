import React from "react";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="header">
			<div></div>
			<img src={require("../images/logos/big-logo-1.png")}></img>
			<Nav></Nav>
			<div></div>
		</header>
	)
}

export default Header;