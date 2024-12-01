function createChristmasTree(ornaments: string, height: number) {
  const heightSucessive = (height * (height + 1)) / 2;
  const ornamentsTree = ornaments.repeat(heightSucessive);
  console.log(ornamentsTree.length);

  let countLeaves = 0;
  let tree = "";

  for (let i = 0; i < height; i++) {
    const ornamentsLine =
      ornamentsTree
        .slice(countLeaves, i + 1 + countLeaves)
        .split("")
        .join(" ") + "\n";
    const spaces = " ".repeat(height - i - 1);
    countLeaves += i + 1;
    tree += spaces + ornamentsLine;
  }

  return tree + " ".repeat(height - 1) + "|\n";
}

console.log(createChristmasTree("123", 5));

/*
"    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3"
*/

/*
"    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
"
*/
