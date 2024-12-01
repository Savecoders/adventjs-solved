function fixLetter(letter: string): string {
  return letter
    .trim()
    .replace(/([.,!])(.*)/g, "$1 $2") // nuevo
    .replace(/([.,?!\s])(?=\1)/g, "")
    .replace(/\s+([.,?!])/g, "$1")
    .replace(/santa claus/gi, "Santa Claus")
    .replace(/\b([.?!] \w)|(^\w)/g, (m) => m.toUpperCase())
    .replace(/^.*\w$/, (m) => m + ".");
}

export { fixLetter };
