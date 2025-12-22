function canEscape(maze: string[][]): boolean {
  const SANTA = "S";
  const EXIT = "E";
  const FREE_PATH = ".";
  const row = maze.length;
  const cols = maze[0].length;

  const startY = maze.findIndex((r) => r.includes(SANTA));
  const startX = maze[startY].indexOf(SANTA);

  const visited = Array.from({ length: row }, () => Array(cols).fill(false));

  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const queue = [[startX, startY]];

  while (queue.length) {
    const [x, y] = queue.shift();

    if (maze[x][y] === EXIT) {
      return true;
    }

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      if (
        newX < row &&
        newY < cols &&
        newX >= 0 &&
        newY >= 0 &&
        !visited[newX][newY] &&
        (maze[newX][newY] === FREE_PATH || maze[newX][newY] === EXIT)
      ) {
        queue.push([newX, newY]);
        visited[newX][newY] = true;
      }
    }
  }

  return false;
}

canEscape([
  ["S", ".", "#", "."],
  ["#", ".", "#", "."],
  [".", ".", ".", "."],
  ["#", "#", "#", "E"],
]);
// → true

canEscape([
  ["S", "#", "#"],
  [".", "#", "."],
  [".", "#", "E"],
]);
// → false

canEscape([["S", "E"]]);
// → true

canEscape([
  ["S", ".", ".", ".", "."],
  ["#", "#", "#", "#", "."],
  [".", ".", ".", ".", "."],
  [".", "#", "#", "#", "#"],
  [".", ".", ".", ".", "E"],
]);
// → true

canEscape([
  ["S", ".", "."],
  [".", ".", "."],
  ["#", "#", "#"],
  [".", ".", "E"],
]);
// → false
