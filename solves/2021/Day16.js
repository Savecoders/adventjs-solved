const Keys = {
	'.': 1,
	',': 5,
	':': 10,
	';': 50,
	'!': 100,
};
const decodeNumber = (symbols) =>
	symbols
		.split('')
		.reduce(
			(acc, item, i, arr) =>
				Keys[item] < Keys[arr[i + 1]] ? acc - Keys[item] : acc + Keys[item],
			0
		);
console.log(decodeNumber('...'));
console.log(decodeNumber('.,'));
console.log(decodeNumber(',.'));
console.log(decodeNumber(',...'));
console.log(decodeNumber('.........!'));
console.log(decodeNumber('.;'));
console.log(decodeNumber('..,'));
console.log(decodeNumber('..,!'));
console.log(decodeNumber('.;!'));
console.log(decodeNumber('!!!'));
console.log(decodeNumber(';!'));
console.log(decodeNumber(';.W'));
