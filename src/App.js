import React, { useEffect, useState } from "react";
import Cards from "./components/cards/Cards";
import Loader from "./components/loader/Loader";
import Popup from "./components/popup/Popup";
import { getCards } from "./data/cardsFetch";

function App() {
	const [cards, setCards] = useState(null);
	const [popupActive, setPopupActive] = useState(false);
	const [popupContent, setPopupContent] = useState([]);
	const newCards = cards && cards.slice(0, 6);

	useEffect(() => {
		const loadData = async () => {
			const data = await getCards();
			setCards(data);
		};
		loadData();
	}, []);

	return (
		<div className='App'>
			{cards ? (
				<Cards
					cards={newCards}
					setActive={setPopupActive}
					setPopupContent={setPopupContent}
				/>
			) : (
				<Loader />
			)}
			<Popup
				active={popupActive}
				setActive={setPopupActive}
				popupContent={popupContent}
			/>
		</div>
	);
}

export default App;
