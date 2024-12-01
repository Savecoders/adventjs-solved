function checkIsValidCopy(original: string, copy: string) {
  let counter = 0;
  for (let item of original) {
    const tests = [item, item.toLowerCase(), "#", "+", ":", ".", " "];
    if (item === " " && copy[counter] !== " ") return false;

    if (!tests.includes(copy[counter])) return false;
    counter++;
  }

  return true;
}
