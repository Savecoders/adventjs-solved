/*
  El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando
  hechas un lío. 😱
  Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
  Para saber si una carta es válida ✅, debes comprobar que los paréntesis
  cierran correctamente y que, además, no vayan vacíos.
  
  !¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de 
  !los paréntesis que hacen que no sean válidas. Por suerte sólo los ha 
  !dejado en medio de los paréntesis...

  Ejemplos:

  *"bici coche (balón) bici coche peluche" // -> ✅
  *"(muñeca) consola bici" // ✅

  *"bici coche (balón bici coche" // -> ❌
  *"peluche (bici [coche) bici coche balón" // -> ❌
  *"(peluche {) bici" // -> ❌

  *"() bici" // ❌

  ?Crea una función que pasándole el texto de la carta, devuelva true si es 
  ?válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
*/
const isValid = (letter) => {
	const Symbols = ['(', ')', '[', ']', '{', '}'];
	const SymbolLetter = { '(': ')' };
	const Stack = [];
	const Gift = [];
	const ArrGifts = letter.trim().split('');
	ArrGifts.forEach((letter) => {
		if (letter === SymbolLetter[Stack[Stack.length - 1]]) {
			Stack.pop(letter);
		} else if (Symbols.includes(letter)) {
			Stack.push(letter);
		} else if (Stack.includes('(')) Gift.push(letter);
	});
	return !Stack.length && Gift.length > 0;
};

//export default isValid;
//"(a() bici (a)" debería ser inválido () bici
console.log('tree');
console.log(isValid('bici coche (balón) bici coche peluche'));
console.log(isValid('(muñeca) consola bici'));
console.log('----------------------false-----------------------');
console.log(isValid('bici coche (balón bici coche'));
console.log(isValid('peluche (bici [coche) bici coche balón'));
console.log(isValid('(peluche {) bici'));
console.log(isValid('() bici'));
console.log('----------------------test------------------------');
console.log(isValid('(muneca) consola visi'));
console.log(isValid('(a() bici (a)'));
console.log(isValid('() bici'));
