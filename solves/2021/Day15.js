/*
  Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos 
  ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos
  que asegurarnos que los números suben y bajan de forma correcta. 
  También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.

  Nos ha pasado algunos ejemplos de cómo debería ser nuestra función y algunos resultados:


  checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
  checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
  checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
  checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

  checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
  checkSledJump([1, 2, 3]) // false: sólo sube
  checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube...
   ¡no vale!

*/
/* const checkSledJump = (heights) => {
	let stack = [];
	for (let i = 0; i < heights.length; i++) {
		heights[i - 1] < heights[i] || heights[i - 1] === heights[i]
			? stack.push(true)
			: stack.pop();
	}
	return stack.length === 0;
}; */

const checkSledJump = (heights) =>
	heights.reduce(
		(acc, item, i) =>
			heights[i - 1] < item || heights[i - 1] === item ? acc + 1 : acc - 1,
		0
	) < 0;

console.log(checkSledJump([1, 2, 3, 2, 1]));
console.log(checkSledJump([0, 1, 0]));
console.log(checkSledJump([0, 3, 2, 1]));
console.log(checkSledJump([0, 1000, 1]));
console.log(checkSledJump([2, 4, 4, 6, 2]));
console.log(checkSledJump([1, 2, 3]));
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
