/*
Mi amigo Dani está trabajando en una tienda y con la llegada de las 
navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: 
un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el 
string como valor en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true
*/

const contains = (store, product) => {
	const arrDrawer = JSON.stringify(store);
	const searhProduct = arrDrawer.includes(`:"${product}"`);
	return searhProduct;
};
//OTHER SOLVE
const otherContains = (store, product) =>
	Object.values(product).some((drawerValue) => {
		if (Object.prototype.toString.call(drawerValue) === '[object Object]') {
			return otherContains(drawerValue, product);
		}
		return drawerValue === product;
	});

const almacen = {
	estanteria1: {
		cajon1: {
			producto1: 'coca-cola',
			producto2: 'fanta',
			producto3: 'sprite',
		},
	},
	estanteria2: {
		cajon1: 'vacio',
		cajon2: {
			producto1: 'pantalones',
			producto2: 'camiseta', // <- ¡Está aquí!
			producto3: 'camisetaaa', // <- ¡Está aquí!
		},
	},
};

const otroAlmacen = {
	baul: {
		fondo: {
			objeto: 'cd-rom',
			'otro-objeto': 'disquette',
			'otra-cosa': 'mando',
		},
	},
};
const test1 = contains(almacen, 'camiseta'); // true
console.log(test1);
const test2 = contains(otroAlmacen, 'gameboy'); // true
console.log(test2);
const test11 = otherContains(almacen, 'camiseta'); // true
console.log(test1);
const test22 = otherContains(otroAlmacen, 'gameboy'); // true
console.log(test2);
