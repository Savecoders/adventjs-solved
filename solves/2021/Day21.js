const canCarry = (capacity, trip) => {
	let Baggage = {};
	trip.forEach(([gifts, pickUp, delivery]) => {
		capacity -= gifts - (pickUp in Baggage ? Baggage[pickUp] : 0);
		Baggage[delivery] = gifts;
	});
	return capacity >= 0;
};

console.log(
	canCarry(3, [
		[1, 1, 5],
		[2, 2, 10],
	])
);
console.log(
	canCarry(3, [
		[2, 1, 5],
		[3, 5, 7],
	])
);
console.log(
	canCarry(4, [
		[2, 5, 8],
		[3, 6, 10],
	])
);
