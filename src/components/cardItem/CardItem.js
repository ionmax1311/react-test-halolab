import React from "react";
import Dollar from "../../img/dollar.png";
import "../cardItem/cardItem.css";

const CardItem = ({ card, setActive, setPopupContent }) => {
	const buyHandle = () => {
		setPopupContent(card);
		setActive(true);
	};

	return (
		<li className='card-item'>
			<span className='card-category'>{card.category}</span>
			<span className='card-name'>{card.name}</span>
			<div className='card-price-wrap'>
				<div className='card-price'>
					<img className='card-img' src={Dollar} alt='dollar' />
					{card.price}
				</div>
				<button
					type='button'
					className='card-btn'
					onClick={() => buyHandle()}>
					buy
				</button>
			</div>
		</li>
	);
};

export default CardItem;
