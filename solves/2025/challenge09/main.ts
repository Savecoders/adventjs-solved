type Result = "fail" | "crash" | "success";
type SpaceBoard = "." | "@" | "*" | "#";
function moveReno(board: string, moves: string): Result {
  const MOVES: { [key in Moves]: [number, number] } = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const resultMoves: { [key in SpaceBoard | "undefined"]?: Result } = {
    "*": "success",
    undefined: "crash",
    "#": "crash",
  };

  const boardRows = board.trim().split("\n");
  const movesRules = moves.split("");

  const yTrain = boardRows.findIndex((r) => r.includes("@"));
  const xTrain = boardRows[yTrain].indexOf("@");

  let newY = yTrain;
  let newX = xTrain;

  for (const move of movesRules) {
    const [yPoss, xPoss] = MOVES[move];
    newY += yPoss;
    newX += xPoss;

    const point = boardRows[newY]?.[newX];
    const rMoves = resultMoves[point] ?? "";

    if (rMoves) {
      return rMoves;
    }
  }

  return "fail";
}

const board = `
.....
.*#.*
.@...
.....
`;

console.log(moveReno(board, "D"));
// ➞ 'fail' -> it moves but doesn’t pick anything up

console.log(moveReno(board, "U"));
// ➞ 'success' -> it picks something up (*) just above

console.log(moveReno(board, "RU"));
// ➞ 'crash' -> it crashes into an obstacle (#)

moveReno(board, "RRRUU");
// ➞ 'success' -> it picks something up (*)

moveReno(board, "DD");
// ➞ 'crash' -> it crashes into the bottom of the board

moveReno(board, "UUU");
// ➞ 'success' -> it picks something up from the floor (*) and then crashes at the top

moveReno(board, "RR");
// ➞ 'fail' -> it moves but doesn’t pick anything up
