import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav>
			<ul>
				<li><Link to="/" className="nav-item" style={props.style}>Home</Link></li>
				<li><Link to="/about" className="nav-item" style={props.style}>About</Link></li>
				<li><Link to="/menu" className="nav-item" style={props.style}>Menu</Link></li>
				<li><Link to="/reservations" className="nav-item" style={props.style}>Reservations</Link></li>
				<li><Link to="/order-online" style={props.style}>Order Online</Link></li>
				<li><Link to="/login" className="nav-item" style={props.style}>Login</Link></li>
			</ul>
		</nav>
	)
}

export default Nav;