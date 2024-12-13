function isRobotBack(moves: string): true | [number, number] {
  const modifiers = /[*!?]/g;
  const movesList = moves.split('');
  const movesMap = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  } as Record<string, [number, number]>;

  const invertedMoves = {
    '!U': 'D',
    '!D': 'U',
    '!L': 'R',
    '!R': 'L',
  } as Record<string, string>;

  let lastModifier = '';
  let lastCurrent = {} as Record<string, number>;

  const [x, y] = movesList.reduce(
    (acc, curr) => {
      if (curr.match(modifiers)) {
        lastModifier = curr;
        return acc;
      }
      if (lastModifier === '?' && lastCurrent[curr]) {
        lastModifier = '';
        return acc;
      }

      curr = lastModifier === '!' ? invertedMoves[lastModifier + curr] : curr;
      const [newX, newY] = movesMap[curr];
      const multiplier = lastModifier === '*' ? 2 : 1;
      const [x, y] = acc;
      lastCurrent[curr] ??= 1;
      lastModifier = '';
      return (acc = [x + newX * multiplier, y + newY * multiplier]);
    },
    [0, 0],
  );

  return (x === 0 && y === 0) || [x, y];
}

console.log(isRobotBack('R')); // [1, 0]
console.log(isRobotBack('RL')); // true
console.log(isRobotBack('RLUD')); // true
console.log(isRobotBack('*RU')); // [2, 1]
console.log(isRobotBack('R*U')); // [1, 2]
console.log(isRobotBack('LLL!R')); // [-4, 0]
console.log(isRobotBack('R?R')); // [1, 0]
console.log(isRobotBack('U?D')); // true
console.log(isRobotBack('R!L')); // [2,0]
console.log(isRobotBack('U!D')); // [0,2]
console.log(isRobotBack('R?L')); // true
console.log(isRobotBack('U?U')); // [0,1]
console.log(isRobotBack('*U?U')); // [0,2]
console.log(isRobotBack('U?D?U')); // true
console.log(isRobotBack('U!UU?D')); // [0,1])
