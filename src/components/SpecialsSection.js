import React from "react";
import "./SpecialsSection.css"
import DishCard from "./DishCard";

const dishes = [
	{
		name: "Greek Salad",
		price: "$12.99",
		description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		relPath: "greek-salad.jpg"
	},
	{
		name: "Bruchetta",
		price: "$ 5.99",
		description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		relPath: "bruchetta.jpg"
	},
	{
		name: "Lemon Dessert",
		price: "$ 5.00",
		description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		relPath: "lemon-dessert.jpg"
	}
]

const SpecialsSection = () => {
	
	return (
		<section className="specials-section">
			<div className="padding-left"></div>
			<section className="specials-content">
				<h1>This week's specials!</h1>
				<button>Online Menu</button>
				<div className="cards-section">
					{dishes.map((dish) => (
						<DishCard 
							name={dish.name}
							key={dish.name}
							price={dish.price}
							desc={dish.description}
							relPath={dish.relPath}
						/>))
					}
				</div>
			</section>
			<div className="padding-right"></div>
		</section>
	)
}

export default SpecialsSection;