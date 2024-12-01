const flatten = (arr) => arr.reduce((acc, cur) => acc.concat(cur), []);
const canMouseEat = (direction, game) => {
	// ¡Gracias por jugar a AdventJS 2021! 🤗
	// ¡Nos vemos el año que viene! 👋
	const [MOUSE, EAT] = ['m', '*'];
	const flattenGame = flatten(game);
	const findMouse = flattenGame.indexOf(MOUSE);
	const Y = (findMouse / game.at(0).length) | 0;
	const X = findMouse % game.at(0).length;
	const moves = {
		up: game[Y - 1]?.[X],
		down: game[Y + 1]?.[X],
		left: game[Y]?.[X - 1],
		right: game[Y]?.[X + 1],
	};
	return moves[direction] === EAT;
};

const room = [
	[' ', ' ', ' '],
	[' ', ' ', 'm'],
	[' ', '', '*'],
];
const room2 = [
	['*', ' ', ' ', ' '],
	[' ', 'm', '*', ' '],
	[' ', ' ', ' ', ' '],
	[' ', ' ', ' ', '*'],
];

console.log(canMouseEat('up', room)); // false
console.log(canMouseEat('down', room)); // true
console.log(canMouseEat('right', room)); // false
console.log(canMouseEat('left', room)); // false
