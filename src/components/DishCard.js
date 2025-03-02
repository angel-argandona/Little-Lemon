import React from "react";

const DishCard = ({name, price, desc, relPath}) => {
	
	return (
		<div>
			<img className="dish-picture" src={require(`../images/${relPath}`)}></img>
			<h5>{name}</h5>
			<p className="highlight-text">{price}</p>
			<p>{desc}</p>
			<p className="highlight-text">Order a delivery</p>
			<img className="delivery-logo" src={require("../images/delivery-icon.jpg")}></img>
		</div>
	)
}

export default DishCard;