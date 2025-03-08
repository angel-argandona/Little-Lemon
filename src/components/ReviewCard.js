import React from "react";

const ReviewCard = ({name, rating, desc, imgSrc}) => {
	return (
		<div className="review-card">
			<div className="star-rating">
				{[...Array(5)].map((el, index)=>{
					if (index < rating) {
						return <img key={index} alt="" src={require("../images/filled-star-icon.png")} style={{display:"inline-block", height:"2rem", width:"2rem"}}></img>
					} else {
						return <img key={index} alt="" src={require("../images/empty-star-icon.png")} style={{display:"inline-block", height:"2rem", width:"2rem"}}></img>
					}
				})}
			</div>	
			<div className="reviewer">
				<img className="user-picture" alt="" src={imgSrc}></img>
				<p className="highlight-text">{name}</p>
			</div>
			<p>{desc}</p>
		</div>
	)
}

export default ReviewCard;