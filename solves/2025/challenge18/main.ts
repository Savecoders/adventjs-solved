function hasFourInARow(board: string[][]): boolean {
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  const inBounds = (row: number, column: number) =>
    row >= 0 && row < rows && column >= 0 && column < cols;

  const hasLineFrom = (row: number, column: number, y: number, x: number) =>
    board[row][column] !== "." &&
    Array.from({ length: 4 }, (_, i) => {
      const newRow = row + y * i;
      const newColumn = column + x * i;
      return (
        inBounds(newRow, newColumn) &&
        board[newRow][newColumn] === board[row][column]
      );
    }).every(Boolean);

  return board.some((row, r) =>
    row.some((_, column) =>
      directions.some(([y, x]) => hasLineFrom(r, column, y, x)),
    ),
  );
}
hasFourInARow([
  ["R", ".", ".", "."],
  [".", "R", ".", "."],
  [".", ".", "R", "."],
  [".", ".", ".", "R"],
]);
// true → there are 4 red lights in a ↘ diagonal

hasFourInARow([
  [".", ".", ".", "G"],
  [".", ".", "G", "."],
  [".", "G", ".", "."],
  ["G", ".", ".", "."],
]);
// true → there are 4 green lights in a ↙ diagonal

hasFourInARow([
  ["R", "R", "R", "R"],
  ["G", "G", ".", "."],
  [".", ".", ".", "."],
  [".", ".", ".", "."],
]);
// true → there are 4 red lights in a horizontal line

(hasFourInARow([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]),
  console.log(
    hasFourInARow([
      [".", ".", ".", ".", "."],
      [".", "R", ".", ".", "."],
      [".", ".", "R", ".", "."],
      [".", ".", ".", "R", "."],
      [".", ".", ".", ".", "R"],
    ]),
  ));
// true → there are no 4 lights in a row
console.log([
  [".", ".", ".", ".", "."],
  [".", "R", ".", ".", "."],
  [".", ".", "R", ".", "."],
  [".", ".", ".", "R", "."],
  [".", ".", ".", ".", "R"],
]);

console.log(
  hasFourInARow([
    ["R", "G", "R", "G", "R"],
    ["G", "R", "G", "R", "G"],
    ["R", "G", "R", "G", "R"],
    ["G", "R", "G", "R", "G"],
    ["R", "G", "R", "G", "R"],
  ]),
);
