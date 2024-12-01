interface AccType {
  [key: string]: number;
}

function maxDistance(movements: string): number {
  const right = ">";
  const left = "<";
  const forward = "*";
  const moves = [...movements].reduce(
    (acc: AccType, move: string) => {
      acc[move]++;
      return acc;
    },
    {
      [right]: 0,
      [left]: 0,
      [forward]: 0,
    }
  );

  return Math.abs(moves[left] - moves[right]) + moves[forward];
}
