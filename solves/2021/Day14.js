const missingForReindeer = (ids) => {
	for (let index = 0; index <= ids.length; index++) {
		if (!ids.includes(index)) return index;
	}
};
const missingReindeer = (ids) => {
	const idSort = ids.sort((a, b) => a - b);
	const missingNumber = idSort.reduce(
		(acc, id, i) => {
			return id + 1 < idSort[i + 1] ? id + 1 : acc;
		},
		idSort.length === 1 && idSort.at(idSort.length - 1) > 0
			? 0
			: idSort.at(idSort.length - 1) + 1
	);

	return missingNumber;
};

const missingReindeer2 = (ids) =>
	(ids.length * (ids.length + 1)) / 2 - ids.reduce((sum, item) => sum + item);

console.log(missingReindeer([0, 2, 3]));
console.log(missingReindeer([0]));
console.log(missingReindeer([3, 0, 1]));
console.log(missingReindeer([0, 1]));
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]));
console.log(missingReindeer([1]));

console.log(missingReindeer2([0, 2, 3]));
console.log(missingReindeer2([0]));
console.log(missingReindeer2([3, 0, 1]));
console.log(missingReindeer2([0, 1]));
console.log(missingReindeer2([9, 2, 3, 5, 6, 4, 7, 0, 1]));
console.log(missingReindeer2([1]));

console.log(missingForReindeer([0, 2, 3]));
console.log(missingForReindeer([0]));
console.log(missingForReindeer([3, 0, 1]));
console.log(missingForReindeer([0, 1]));
console.log(missingForReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]));
console.log(missingForReindeer([1]));
