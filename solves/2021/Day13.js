//wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/
const lengthOfEmote = (gift) => gift.at(0).length;
const header = (log) => '*'.repeat(log + 2);
const wrapGifts = (gifts) => [
	header(lengthOfEmote(gifts)),
	...gifts.map((gift) => `*${gift}*`),
	header(lengthOfEmote(gifts)),
];

console.log(wrapGifts(['📷', '⚽️']));
