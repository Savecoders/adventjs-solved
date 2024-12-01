const shouldBuyFidelity = (times) => {
	const ticketsPrice = 12;
	let LoyaltyCard = 250;
	for (let i = 1; i <= times; i++) {
		LoyaltyCard += ticketsPrice * Math.pow(0.75, i);
	}
	return LoyaltyCard < ticketsPrice * times;
};
