function findUnsafeGifts(warehouse: string[]): number {
  if (!warehouse || warehouse.length === 0) {
    return 0;
  }

  const rows = warehouse.length;
  const cols = warehouse[0].length;
  let unsafeGiftsCount = 0;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (let rowPoss = 0; rowPoss < rows; rowPoss++) {
    for (let columnPoss = 0; columnPoss < cols; columnPoss++) {
      if (warehouse[rowPoss][columnPoss] === "*") {
        let isGuarded = false;

        for (const [y, x] of directions) {
          const ny = rowPoss + y;
          const nx = columnPoss + x;

          if (
            ny >= 0 &&
            ny < rows &&
            nx >= 0 &&
            nx < cols &&
            warehouse[ny][nx] === "#"
          ) {
            isGuarded = true;
            break;
          }
        }

        if (!isGuarded) {
          unsafeGiftsCount++;
        }
      }
    }
  }

  return unsafeGiftsCount;
}

findUnsafeGifts([".*.", "*#*", ".*."]); // ➞ 0

// All the presents are next to a camera

findUnsafeGifts(["...", ".*.", "..."]); // ➞ 1

//This present has no cameras around it

findUnsafeGifts(["*.*", "...", "*#*"]); // ➞ 2
// The presents in the top corners have no cameras around them

findUnsafeGifts([".....", ".*.*.", "..#..", ".*.*.", "....."]); // ➞ 4

findUnsafeGifts(["...#....", "..*#*..", "...#...."]);
