function decorateTree(base: string): string[] {
  interface Decorators {
    [key: string]: string;
  }

  const decorators: Decorators = {
    PP: "P",
    BR: "P",
    RB: "P",
    RR: "R",
    BP: "R",
    PB: "R",
    BB: "B",
    RP: "B",
    PR: "B",
  };
  const splitBase = base.split(" ");

  const getTree: string[][] = [...Array(splitBase.length - 1)].reduce(
    (acc: string[][], _: string[], i: number): string[][] => {
      const nextLIne: string[] = acc[i].reduce(
        (
          accumulate: string[],
          curr: string,
          i: number,
          array: string[],
        ): string[] => {
          const next = array[i + 1];
          accumulate.push(decorators[curr + next]);
          return accumulate;
        },
        [],
      );

      acc.push(nextLIne.filter((line) => line));
      return acc;
    },
    [splitBase],
  );

  return getTree.reverse().map((line) => line.join(" "));
}

console.log(decorateTree("B P R P"));
export { decorateTree };
