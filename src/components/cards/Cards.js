import React from "react";
import CardItem from "../cardItem/CardItem";
import "../cards/cards.css";

const Cards = ({ cards, setActive, setPopupContent }) => {
	const cheapHandle = () => {
		const min = Math.min(...cards.map((item) => item.price));
		const value = cards.find((item) => item.price == min);
		setActive(true);
		setPopupContent(value);
	};

	return (
		<div>
			<ul className='cards'>
				{cards &&
					cards.map((item, index) => (
						<CardItem
							key={index}
							card={item}
							setActive={setActive}
							setPopupContent={setPopupContent}
						/>
					))}
			</ul>
			<button
				type='button'
				className='cards__btn-cheapest'
				onClick={() => cheapHandle()}>
				Buy cheapest
			</button>
		</div>
	);
};

export default Cards;
