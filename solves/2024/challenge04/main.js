function createXmasTree(height, ornament) {
  const trunck =
    '_'.repeat(height - 1) +
    '#' +
    '_'.repeat(height - 1) +
    '\n' +
    '_'.repeat(height - 1) +
    '#' +
    '_'.repeat(height - 1);

  let tree = '';
  let widthLeaf = 1;
  for (let width = 1; width < height + 1; width++) {
    const space = '_'.repeat(height - width);
    const leafHeight = ornament.repeat(widthLeaf);
    tree += `${space}${leafHeight}${space}\n`;
    widthLeaf += 2;
  }
  return `${tree}${trunck}`;
}
const tree = createXmasTree(5, '*');
console.log(tree);
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
