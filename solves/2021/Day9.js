const groupBy = (collection, it) => {
	const evalIt = (data) => (typeof it === 'function' ? it(data) : data[it]);
	return collection.reduce((acc, data) => {
		const solveIt = evalIt(data);
		solveIt in acc ? acc[solveIt].push(data) : (acc[solveIt] = [data]);
		return acc;
	}, {});
};

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(
	groupBy([1397639141184, 1363223700000], (timestamp) =>
		new Date(timestamp).getFullYear()
	)
);
console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy([{ age: 23 }, { age: 24 }], 'age'));
console.log(
	groupBy(
		[
			{ title: 'JavaScript: The Good Parts', rating: 8 },
			{ title: 'Aprendiendo Git', rating: 10 },
			{ title: 'Clean Code', rating: 9 },
		],
		'rating'
	)
);
