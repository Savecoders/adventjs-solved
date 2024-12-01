function organizeGifts(gifts: string): string {
  const regex = /(\d+)([a-z])/g;

  const giftsArray = gifts.matchAll(regex);

  const giftMap = [...giftsArray].map(([_, number, letter]) => {
    let lenGift = +number;

    const fiftyBox = Math.trunc(lenGift / 50);

    lenGift -= fiftyBox * 50;

    const tenBox = Math.trunc(lenGift / 10);

    lenGift -= tenBox * 10;

    return (
      `[${letter}]`.repeat(fiftyBox) +
      `{${letter}}`.repeat(tenBox) +
      `(${letter.repeat(lenGift)})`
    ).replaceAll("()", "");
  });

  return giftMap.join("");
}

const result1 = organizeGifts(`76a11b`);
console.log(result1);
// '[a]{a}{a}(aaaaaa){b}(b)'
