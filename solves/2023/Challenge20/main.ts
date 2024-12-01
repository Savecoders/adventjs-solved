function distributeGifts(weights: number[][]): number[][] {
  const arr = [] as number[][];
  for (const [y, row] of weights.entries()) {
    arr[y] = [];
    for (const x of row.keys()) {
      const nums = [
        weights[y - 1]?.[x],
        row[x - 1],
        row[x],
        row[x + 1],
        weights[y + 1]?.[x],
      ].filter(Boolean);

      arr[y][x] = Math.round(nums.reduce((a, c) => a + c, 0) / nums.length);
    }
  }

  return arr;
}
