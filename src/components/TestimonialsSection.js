import React from "react";
import "./TestimonialsSection.css"
import ReviewCard from "./ReviewCard";

const reviews = [
	{
		name: "Bruce Wayne",
		rating: 4,
		description: "Great food. Will definitely be back.",
		imageSource: "https://i.pravatar.cc/150?img=57"
	},
	{
		name: "Clark Kent",
		rating: 3,
		description: "Love the ambience. Excellent service.",
		imageSource: "https://i.pravatar.cc/150?img=58"
	},
	{
		name: "Edward Nigma",
		rating: 5,
		description: "Very convenient location. This is my new favorite restaurant.",
		imageSource: "https://i.pravatar.cc/150?img=61"
	}
]

const TestimonialsSection = () => {
	return (
		<section className="testimonials-section">
			<div className="padding-left"></div>
			<section className="testimonials-content">
				<h2>Testimonials</h2>
				<div className="cards-section">
					{reviews.map((review) => (
						<ReviewCard 
							name={review.name}
							rating={review.rating}
							desc={review.description}
							imgSrc={review.imageSource}
						/>))
					}
				</div>
			</section>
			<div className="padding-right"></div>
		</section>
	)
}

export default TestimonialsSection;