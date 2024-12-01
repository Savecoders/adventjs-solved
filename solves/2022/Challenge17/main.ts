function carryGifts(gifts: string[], maxWeight: number) {
  const bags: string[][] = [];

  let currentWeight = 0;

  const fillLenGifs = gifts.filter((gift) => gift.length <= maxWeight);

  if (!fillLenGifs.length) return [];

  const carryGifts = fillLenGifs.reduce((acc: string[], gift) => {
    if (currentWeight + gift.length > maxWeight) {
      bags.push(acc);
      acc = [];
      currentWeight = 0;
    }

    acc.push(gift);
    currentWeight += gift.length;
    return acc;
  }, []);

  bags.push(carryGifts);
  return bags.map((bag) => bag.join(" "));
}

export { carryGifts };
