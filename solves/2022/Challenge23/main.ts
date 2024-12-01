function executeCommands(commands: string[]): number[] {
  const cpu = [0, 0, 0, 0, 0, 0, 0, 0];
  let poss = 0;

  const MOV = (value: string, memoryPointer: string) => {
    const memoryPointerVal = +memoryPointer.replace(/V\d/, "");
    const memoryVal = +value.replace(/V\d/, "");
    cpu[memoryPointerVal] = cpu[memoryVal] || +value;
    poss++;
  };

  const DEC = (memoryPointer: string) => {
    const memoryPointerVal = +memoryPointer.replace(/V\d/, "");
    cpu[memoryPointerVal] = (((cpu[memoryPointerVal] - 1) % 256) + 256) %
      256;
    poss++;
  };

  const INC = (memoryPointer: string) => {
    const memoryPointerVal = +memoryPointer.replace(/V\d/, "");
    cpu[memoryPointerVal] = (cpu[memoryPointerVal] + 1) % 256;
    poss++;
  };

  const ADD = (base: string, add: string) => {
    const baseVal = +base.replace(/V\d/, "");
    const addVal = +add.replace(/V\d/, "");
    cpu[baseVal] = (cpu[baseVal] + cpu[addVal]) % 256;
    poss++;
  };

  const JMP = (index: string) => {
    poss = cpu[0] ? +index : poss + 1;
  };

  interface Hash {
    [key: string]: (...args: string[]) => void;
  }

  const actions = { MOV, ADD, DEC, INC, JMP } as Hash;

  while (poss < commands.length) {
    let [command, ...args] = commands[poss].split(" ");
    args = args[0].split(",");
    actions[command](...args);
  }

  return cpu;
}

export { executeCommands };

console.log(executeCommands([
  "MOV 5,V00", // V00 es 5
  "MOV 10,V01", // V01 es 10
  "DEC V00", // V00 ahora es 4
  "ADD V00,V01", // V00 = V00 + V01 = 14
]));

// Output: [14, 10, 0, 0, 0, 0, 0]

console.log(executeCommands([
  "MOV 255,V00", // V00 es 255
  "INC V00", // V00 es 256, desborda a 0
  "DEC V01", // V01 es -1, desborda a 255
  "DEC V01", // V01 es 254
]));
