function generateGiftSets(gifts: string[]): string[][] {
  const combinations = [] as string[][];
  function permuteGift(idx: number = 0, curr: string[] = []) {
    if (curr.length > 0) {
      combinations.push([...curr]);
    }

    for (let i = idx; i < gifts.length; i++) {
      curr.push(gifts[i]);
      permuteGift(i + 1, curr);
      curr.pop();
    }
  }

  permuteGift();

  return combinations.sort((a, b) => a.length - b.length);
}
