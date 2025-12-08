function drawTree(height: number, ornament: string, frequency: number): string {
  const TRUNK = "#";
  let tree = "";
  const ornamentedLeaf = "".padEnd(
    height ** 2,
    "*".repeat(frequency - 1) + ornament,
  );
  const { lines } = Array(height)
    .fill("")
    .reduce(
      ({ lines, lastLeaf, i }, _, index) => {
        const spaces = " ".repeat(height - index - 1);
        const ornamentedPart = ornamentedLeaf.slice(lastLeaf, lastLeaf + i);
        const line = spaces + ornamentedPart + "\n";
        return {
          lines: [...lines, line],
          lastLeaf: lastLeaf + i,
          i: i + 2,
        };
      },
      {
        lines: [],
        lastLeaf: 0,
        i: 1,
      },
    );
  tree += lines.join("");
  const trunkSpaces = " ".repeat(height - 1);
  tree += trunkSpaces + TRUNK;
  return tree;
}

console.log(drawTree(5, "o", 2));
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

console.log(drawTree(3, "@", 3));
//   *
//  *@*
// *@**@
//   #

console.log(drawTree(4, "+", 1));
//    +
//   ++     *+
//  +++++
// +++++++
//    #
