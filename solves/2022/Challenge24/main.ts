function canExit(maze: string[][]): boolean {
  const yStartPoss = maze.findIndex((row) => row.includes("S"));
  const xStartPoss = maze[yStartPoss].findIndex((col) => col === "S");

  const yExitPoss = maze.findIndex((row) => row.includes("E"));
  const xExitPoss = maze[yExitPoss].findIndex((col) => col === "E");

  // not have a start or exit
  if (xExitPoss === undefined || xStartPoss === undefined) return false;

  function canExitFrom(y: number, x: number): boolean {
    //Checking if the current position
    //is out of bounds or if it is a wall.

    if (
      y < 0 || y >= maze.length ||
      x < 0 || x >= maze[y].length ||
      maze[y][x] === "W"
    ) {
      return false;
    }

    // if (i === yEndPoss && j === xEndPoss) {
    if (maze[y][x] === "E") {
      return true;
    }

    maze[y][x] = "W";
    return (
      canExitFrom(y + 1, x) ||
      canExitFrom(y - 1, x) ||
      canExitFrom(y, x + 1) ||
      canExitFrom(y, x - 1)
    );
  }

  const isOutside = canExitFrom(yStartPoss, xStartPoss);

  return isOutside;
}

export { canExit };

console.log(canExit([
  [" ", " ", "W", " ", "S"],
  [" ", " ", " ", " ", " "],
  [" ", " ", " ", "W", " "],
  ["W", "W", " ", "W", "W"],
  [" ", " ", " ", " ", "E"],
]));
