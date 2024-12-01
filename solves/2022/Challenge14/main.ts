function getOptimalPath(path: number[][]): number {
  const minPath = (index: number, link: number[]): number => {
    return Math.min(link[index], link[index + 1]);
  };

  // use rever to start from the bottom of the tree
  const valueOptimal = path.reverse().reduce(
    (acc: number[], curr: number[]) => {
      return curr.map((node: number, index: number) =>
        node + minPath(index, acc)
      );
    },
  );

  return valueOptimal[0];
}

//console.log(getOptimalPath([[0], [2, 3]])); // 2
// 0 -> 2

//console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])); // 5
// 0 -> 4 -> 1
console.log([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]);
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])); // 8
// 1 -> 1 -> 5 -> 1

export { getOptimalPath };
