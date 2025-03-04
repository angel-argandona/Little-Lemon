import React from "react";

const DishCard = ({name, price, desc, relPath}) => {
	
	return (
		<div className="dish-card">
			<img className="dish-picture" src={require(`../images/${relPath}`)}></img>
			<div className="card-title">
				<h5>{name}</h5>
				<p className="highlight-text price">{price}</p>
			</div>
			<p>{desc}</p>
			<div className="delivery-call">
				<p className="highlight-text">Order a delivery</p>
				<img className="delivery-icon" src={require("../images/delivery-icon.jpg")}></img>
			</div>
		</div>
	)
}

export default DishCard;