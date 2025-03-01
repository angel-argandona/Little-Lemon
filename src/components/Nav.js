import React from "react";

const Nav = (props) => {
	return (
		<nav>
			<ul>
				<li><a href="#home" style={props.style}>Home</a></li>
				<li><a href="#about" style={props.style}>About</a></li>
				<li><a href="#menu" style={props.style}>Menu</a></li>
				<li><a href="#reservations" style={props.style}>Reservations</a></li>
				<li><a href="#order-online" style={props.style}>Order Online</a></li>
				<li><a href="#login" style={props.style}>Login</a></li>
			</ul>
		</nav>
	)
}

export default Nav;