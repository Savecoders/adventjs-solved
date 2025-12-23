function minStepsToDeliver(map: string[][]): number {
  const SANTA = "S";
  const PRESENT = "G";
  const WALL = "#";
  const rows = map.length;
  const cols = map[0].length;

  const startRows = map.findIndex((r) => r.includes(SANTA));
  const startColumns = map[startRows].indexOf(SANTA);

  const presentsCount = map.flat().filter((cell) => cell === PRESENT).length;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const queue: [number, number, number][] = [[startRows, startColumns, 0]];
  visited[startRows][startColumns] = true;

  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let totalSteps = 0;
  let presentsFound = 0;

  while (queue.length) {
    const [row, column, steps] = queue.shift!();

    if (map[row][column] === PRESENT) {
      totalSteps += steps;
      presentsFound++;
    }

    for (const [dx, dy] of moves) {
      const newRow = row + dx;
      const newColumn = column + dy;

      if (
        newRow < rows &&
        newColumn < cols &&
        newRow >= 0 &&
        newColumn >= 0 &&
        !visited[newRow][newColumn] &&
        map[newRow][newColumn] !== WALL
      ) {
        visited[newRow][newColumn] = true;
        queue.push([newRow, newColumn, steps + 1]);
      }
    }
  }

  console.log({ presentsFound, presentsCount, totalSteps });

  return presentsFound === presentsCount ? totalSteps : -1;
}
minStepsToDeliver([
  ["S", ".", "G"],
  [".", "#", "."],
  ["G", ".", "."],
]);
// Result: 4

/*
Explanation:
- Minimum distance from S (0,0) to G (0,2): 2 steps
- Minimum distance from S (0,0) to G (2,0): 2 steps
- Total: 2 + 2 = 4
*/

minStepsToDeliver([
  ["S", "#", "G"],
  ["#", "#", "."],
  ["G", ".", "."],
]);
// Result: -1
// (The house at (0,2) is unreachable due to obstacles)

minStepsToDeliver([["S", "G"]]);
// Result: 1
