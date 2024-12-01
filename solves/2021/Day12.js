const searchMinJump = (jump, maxObstacles, arrObstacles) => {
	let boolJump = [true];
	for (let index = 0; index < maxObstacles; index += jump) {
		boolJump.push(!arrObstacles.includes(index));
	}
	return !boolJump.includes(false)
		? jump
		: searchMinJump((jump += 1), maxObstacles, arrObstacles);
};
const getMinJump = (obstacles) => searchMinJump(1, Math.max(...obstacles) + 1, obstacles);

console.log(getMinJump([5, 3, 6, 7, 9]));
console.log(getMinJump([2, 4, 6, 8, 10]));
console.log(getMinJump([14, 10, 8, 2, 3, 6]));
//[14, 10, 8, 2, 3, 6]
