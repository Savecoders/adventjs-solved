function execute(code: string): number {
  let value = 0;
  let pos = 0;
  const codes = code.split("");
  const exec = {
    "+": () => {
      value = value + 1;
      pos++;
    },
    "-": () => {
      value = value - 1;
      pos++;
    },
    ">": () => {
      pos++;
    },
    "[": () => {
      const end = codes.indexOf("]", pos);
      pos = end + 1;
      value = 0;
    },
    "{": () => {
      const end = codes.indexOf("}", pos);
      if (value === 0) {
        pos = end + 1;
      } else {
        pos++;
      }
    },
    "}": () => {
      pos++;
    },
  } as Record<string, () => void>;

  while (pos < codes.length) {
    const char = codes[pos];
    if (exec[char]) exec[char]();
  }
  return value;
}
// Test cases
console.log(execute("+++")); // 3
console.log(execute("+--")); // -1
console.log(execute(">+++[-]")); // 0
console.log(execute(">>>+{++}")); // 3
console.log(execute("+{[-]+}+")); // 2
console.log(execute("{+}{+}{+}")); // 0
console.log(execute("------[+]++")); // 2
console.log(execute("-[++{-}]+{++++}")); // 5
