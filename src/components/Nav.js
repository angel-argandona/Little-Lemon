import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Nav = ({sideMenu, visibility, handleClick}) => {
	return (
		<nav className={`${sideMenu? "side-menu": "nav-menu"}${visibility? " active" : ""}`}>
			<ul>
				{sideMenu? <li className="nav-close"><Link to="#" className="nav-item" onClick={() => handleClick(false)}><IoClose className="close-icon"/></Link></li> : null}
				<li className="nav-text"><Link to="/" className="nav-item" onClick={() => handleClick(false)}>Home</Link></li>
				<li className="nav-text"><Link to="/about" className="nav-item" onClick={() => handleClick(false)}>About</Link></li>
				<li className="nav-text"><Link to="/menu" className="nav-item" onClick={() => handleClick(false)}>Menu</Link></li>
				<li className="nav-text"><Link to="/reservations" className="nav-item" onClick={() => handleClick(false)}>Reservations</Link></li>
				<li className="nav-text"><Link to="/order-online" className="nav-item" onClick={() => handleClick(false)}>Order Online</Link></li>
				<li className="nav-text"><Link to="/login" className="nav-item" onClick={() => handleClick(false)}>Login</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;