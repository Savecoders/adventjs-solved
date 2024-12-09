type Space = '·' | '@' | '*' | 'o';
type Board = Space[];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

function moveTrain(board: Board, mov: Movement): Result {
  const moves: { [key in Movement]: [number, number] } = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const resultMoves: { [key in Space | 'undefined']?: Result } = {
    '*': 'eat',
    '·': 'none',
    undefined: 'crash',
    o: 'crash',
  };

  const yTrain = board.findIndex(r => r.includes('@'));
  const xTrain = board[yTrain].indexOf('@');

  const [yPoss, xPoss] = moves[mov];

  const newY = yTrain + yPoss;
  const newX = xTrain + xPoss;

  if (newY < 0 || newY >= board.length || newX < 0 || newX >= board[newY].length) {
    return 'crash';
  }

  const actualMove = board[newY][newX] as Space;
  return resultMoves[actualMove] as Result;
}
