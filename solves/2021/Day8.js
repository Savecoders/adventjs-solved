/* 
  Invertir en criptomonedas es casi un deporte de riesgo. 
    El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras 
  monedas, bajase un 25%.

  Vamos a escribir una función que reciba la lista de precios de una 
  criptomoneda en un día y debemos devolver la ganancia máxima que podríamos 
  sacar si compramos y vendemos la inversión el mismo día.

  La lista de precios es un array de números y representa el tiempo de 
  izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un 
  precio que esté a la derecha de la venta y no puedes vender a un precio 
  que esté a la izquierda de la compra.

  Por ejemplo:
  
  !const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
  !maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

  !const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
  !maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)


*/

/* const maxProfit = (prices) => {
	const leftPrices = prices.slice(0, Math.round(prices.length / 2));
	const rightPrices = prices.slice(Math.round(prices.length / 2), prices.length);
	const profitOfDay = Math.max(...rightPrices) - Math.min(...leftPrices);
	return profitOfDay > 0 ? profitOfDay : -1;
}; */
//optimiazando, para no usar el destructuring uso el .apply(null, prices.slice(index + 1))

const maxProfit = (prices) => {
	const profit = (acc, price, index) => {
		const priceSlice = Math.max.apply(null, prices.slice(index + 1)) - price;
		return acc > priceSlice ? acc : priceSlice;
	};
	return prices.reduce(profit, 0) || -1;
};

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesAda = [3, 3, 3, 3, 3];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesOthers = [39, 18, 29, 25, 34, 32, 5, 11, 26];
console.log(maxProfit(pricesBtc));
console.log(maxProfit(pricesEth));
console.log(maxProfit(pricesAda));
console.log(maxProfit(pricesDoge));
console.log(maxProfit(pricesOthers));
