/* 
  Para mejorar la productividad de la tienda en la que trabajamos, vamos a 
  crear una pequeña máquina que calcula el mínimo número de monedas que 
  debemos usar para dar el cambio de una compra en metálico.

  Las monedas para cambio que puedes usar son estas:

  coins[0] = 1 céntimo
  coins[1] = 2 céntimos
  coins[2] = 5 céntimos
  coins[3] = 10 céntimos
  coins[4] = 20 céntimos
  coins[5] = 50 céntimos

  Tenemos que crear una función que recibe el número de céntimos que hay 
  que devolver al cliente y la función nos da un array con la combinación 
  de monedas mínimas que debemos usar para conseguirlo.

  getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
  getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
  getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
  getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
  getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

*/

const getCoins = (change) => {
	const coins = [50, 20, 10, 5, 2, 1]
		.map((coin) => {
			if (coin > change || change === 0) return 0;
			const penny = Math.floor(change / coin);
			change = change - coin * penny;
			return penny;
		})
		.reverse();
	return coins;
};

console.log(getCoins(51));
console.log(getCoins(3));
console.log(getCoins(5));
console.log(getCoins(16));
console.log(getCoins(100));
