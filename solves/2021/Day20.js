const pangram = (letter) => {
	const INCLUDEN = letter.includes('ñ');
	const ALPHABETLENGHT = 26;
	const letterNoAccent = letter
		.toLowerCase()
		.normalize('NFD')
		.replace(/['!"¡#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^_`{|}~']/g, '')
		.replace(/[\u0300-\u036f]/g, '')
		.split('');
	const totalWord = letterNoAccent.reduce(
		(acc, i) => (!acc.includes(i) && i !== ' ' ? [...acc, i] : acc),
		[]
	).length;
	return totalWord === ALPHABETLENGHT && INCLUDEN;
};
export default pangram;
console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho'));
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!'));
console.log(
	pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')
); // false
pangram('De la a a la z, nos faltan letras');
