interface Actions {
  [key: string]: (...args: string[]) => void;
}

function compile(instructions: string[]) {
  let poss = 0;
  const memory: {
    [key: string]: number;
  } = {};

  const actions = {
    MOV: (a: string, b: string) => {
      const regexCharacter = /[A-Z]/g;
      memory[b] ??= 0;
      if (a.match(regexCharacter) && b.match(regexCharacter)) {
        memory[b] = memory[a];
      } else {
        memory[b] = +a;
      }
      poss++;
    },
    INC: (a: string) => {
      memory[a] = memory[a] + 1;
      poss++;
    },
    DEC: (a: string) => {
      memory[a] = memory[a] - 1;
      poss++;
    },
    JMP: (a: string, b: string) => {
      memory[a] === 0 ? (poss = +b) : poss++;
    },
  } as Actions;

  while (poss < instructions.length) {
    let [command, ...args] = instructions[poss].split(' ');
    memory[args[0]] ??= 0;
    actions[command](...args);
  }

  return memory['A'];
}
