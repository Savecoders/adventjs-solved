function detectBombs(grid: boolean[][]): number[][] {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  return grid.map((row, y) => {
    return row.map((_, x) => {
      let countBombs = 0;

      for (const [dy, dx] of directions) {
        const newY = y + dy;
        const newX = x + dx;
        countBombs += grid[newY]?.[newX] ? 1 : 0;
      }

      return countBombs;
    });
  });
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
);
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ]),
);
// [
//   [0, 1],
//   [1, 1]
// ]

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ]),
);

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
