console.time('loop');

const binarySearch = (arr, r, l, result, unsuccessfulAttempts) => {
	const numberRight = arr[r];
	const numberLeft = arr[l];

	if (unsuccessfulAttempts === arr.length - 1 * 2) {
		return null;
	}

	if (numberRight + numberLeft === result) {
		return [numberRight, numberLeft];
	}

	if (numberRight + numberLeft > result) {
		return binarySearch(arr, r, l - 1, result, (unsuccessfulAttempts += 1));
	}
	if (numberRight + numberLeft < result) {
		return binarySearch(arr, r + 1, l, result, (unsuccessfulAttempts += 1));
	}
};
const sumPairs = (numbers, result) => {
	const numberSort = numbers.sort((a, b) => a - b);
	return binarySearch(numberSort, 0, numberSort.length - 1, result, 0);
};

console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
console.timeEnd('loop');
