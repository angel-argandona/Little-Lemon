import React, { useState } from "react";
import Nav from "./Nav";
import { useWindowContext } from "./context/windowContext";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa6";

const Header = () => {
	const windowWidth = useWindowContext();
	const [showSideMenu, setShowSideMenu] = useState(false);

	const handleClick = (bool) => {
		setShowSideMenu(bool);
	}
	
	if (windowWidth > 1350){
		if (showSideMenu){
			setShowSideMenu(!showSideMenu);
		}
		return (
			<header>
				<div></div>
				<Link className="logo-link" to="/">
					<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
				</Link>
				<Nav sideMenu={false}/>
				<div></div>
			</header>
		);
	} else {
		return (
			<header>
				<img className="header-logo" src={require("../images/logos/big-logo-1.png")}></img>
				<Link to="#" onClick={()=>handleClick(!showSideMenu)}><FaBars className="burger-icon"/></Link>
				<Nav sideMenu={true} visibility={showSideMenu} handleClick={handleClick}/>
			</header>
		);
	}
}

export default Header;