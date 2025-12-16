type Gifts = number[];
type MaxWeight = number;
type ResultPacks = number | null;

function packGifts(gifts: Gifts, maxWeight: MaxWeight): ResultPacks {
  if (!gifts.length) return 0;

  const hasOverweightGift = gifts.some((gift) => gift > maxWeight);
  if (hasOverweightGift) return null;

  let packsgroup = 1;
  let currentPackWeight = 0;

  for (const giftWeight of gifts) {
    if (currentPackWeight + giftWeight <= maxWeight) {
      currentPackWeight += giftWeight;
    } else {
      packsgroup++;
      currentPackWeight = giftWeight;
    }
  }
  return packsgroup;
}

// 2 trineos
// Trineo 1: 2 + 3 = 5
// Trineo 2: 4 + 1 = 5

packGifts([3, 3, 2, 1], 3);
// 3 trineos
// Trineo 1: 3
// Trineo 2: 3
// Trineo 3: 2 + 1 = 3

packGifts([1, 1, 1, 1], 2);
// 2 trineos
// Trineo 1: 1 + 1 = 2
// Trineo 2: 1 + 1 = 2

packGifts([5, 6, 1], 5);
// null
// Hay un regalo de peso 6 que no cabe

packGifts([], 10);
// 0 trineos
// No hay regalos que entregars

packGifts([1, 2, 3, 4, 5], 10);
