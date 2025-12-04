function filterGifts(gifts: string[]): string[] {
  return gifts.filter((g: string) => !g.includes("#"))
}
