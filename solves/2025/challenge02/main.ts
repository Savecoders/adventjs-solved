function manufactureGifts(
  giftsToProduce: Array<{ toy: string, quantity: number }>
): string[] {
  return giftsToProduce.flatMap(g => Array(Math.max(0, g.quantity)).fill(g.toy))
}
