import React from "react";
import Form from "../form/Form";
import Dollar from "../../img/dollar.png";
import Close from "../../img/close.png";
import "../popup/popup.css";

const Popup = ({ active, setActive, popupContent }) => {
	return (
		<div
			className={active ? "popup active" : "popup"}
			onClick={() => setActive(false)}>
			<div
				className={active ? "popup-content active" : "popup-content"}
				onClick={(e) => e.stopPropagation()}>
				{popupContent && (
					<div className='popup-in'>
						<img
							className='popup-close'
							src={Close}
							alt='close'
							onClick={() => setActive(false)}
						/>
						<span className='card-category'>
							{popupContent.category}
						</span>
						<span className='card-name'>{popupContent.name}</span>

						<div className='card-price'>
							<img
								className='card-img'
								src={Dollar}
								alt='dollar'
							/>
							{popupContent.price}
						</div>
						<Form popupContent={popupContent} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Popup;
