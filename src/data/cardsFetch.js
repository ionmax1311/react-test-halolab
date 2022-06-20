export async function getCards() {
	const url = `https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e`;

	const response = await fetch(url);
	const data = await response.json();
	try {
		return data.map(({ name, category, price }) => ({
			name: name,
			category: category,
			price: price,
		}));
	} catch (error) {
		console.log("error--", error);
	}
}
