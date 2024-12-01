function sortToys(toys: string[], positions: number[]): string[] {
  return toys
    .map((toy: string, index: number) => ({ toy, poss: positions[index] }))
    .sort((a, b) => a.poss - b.poss)
    .map((hashToy) => hashToy.toy);
}

export { sortToys };
