function hasFourLights(board: string[][]): boolean {
  const GREEN_LINE = "G".repeat(4);
  const RED_LINE = "R".repeat(4);

  if (board.length < 4 && board.at(0).length < 4) return false;

  const haveInHorizontal = board.some((row) => {
    const rowString = row.join("");
    return rowString.includes(GREEN_LINE) || rowString.includes(RED_LINE);
  });

  const verticardBoard = board[0].map((_, colIndex) =>
    board.map((row) => row[colIndex]),
  );

  const haveInVertical = verticardBoard.some((col) => {
    const colString = col.join("");
    return colString.includes(GREEN_LINE) || colString.includes(RED_LINE);
  });

  return haveInHorizontal || haveInVertical;
}
hasFourLights([
  [".", ".", ".", ".", "."],
  ["R", "R", "R", "R", "."],
  ["G", "G", ".", ".", "."],
]);
// true → hay 4 luces rojas en horizontal

hasFourLights([
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
  [".", "G", ".", "."],
]);
// true → hay 4 luces verdes en vertical

hasFourLights([
  ["R", "G", "R"],
  ["G", "R", "G"],
  ["G", "R", "G"],
]);
// false → no hay 4 luces del mismo color seguidas

function hasAlternativeFourLights(board: string[][]): boolean {
  const GREEN_LINE = "G".repeat(4);
  const RED_LINE = "R".repeat(4);

  return (
    board.some((row) => {
      const cell = row.join("");
      return cell.includes(GREEN_LINE) || cell.includes(RED_LINE);
    }) ||
    board[0]
      .map((_, colIndex) => board.map((row) => row[colIndex]))
      .some((row) => {
        const cell = row.join("");
        return cell.includes(GREEN_LINE) || cell.includes(RED_LINE);
      })
  );
}
