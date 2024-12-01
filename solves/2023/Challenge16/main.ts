interface Node {
  value: number;
  left: Node;
  right: Node;
}

type Tree = number | null;

function transformTree(tree: Tree[], base = 0): any {
  const index = arguments[1] ?? 0;
  const value = tree[index];
  let res;
  if (value != null) {
    (base = index * 2),
      (res = {
        value: value,
        left: transformTree(tree, base + 1),
        right: transformTree(tree, base + 2),
      });
  }
  return res ?? null;
}
console.log(transformTree([3, 1, 0, 8, 12, null, 1], 0));
/*
  value: 1,
  left: null,
  right: null
*/
