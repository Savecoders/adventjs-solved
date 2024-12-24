/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(
  tree1: { value: string; left?: any; right?: any } | undefined,
  tree2: { value: string; left?: any; right?: any } | undefined,
): [boolean, string] {
  if (!tree1 && !tree2) {
    return [true, ''];
  }

  if (!tree1 || !tree2 || tree1.value !== tree2.value) {
    return [false, tree1?.value || ''];
  }

  const [leftSync] = isTreesSynchronized(tree1.left, tree2.right);
  const [rightSync] = isTreesSynchronized(tree1.right, tree2.left);

  const isSynchronized = leftSync && rightSync;

  return [isSynchronized, tree1.value];
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
};

console.log(isTreesSynchronized(tree1, tree2));

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' },
};

console.log(isTreesSynchronized(tree1, tree3)); // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' },
};

console.log(isTreesSynchronized(tree1, tree4)); // [false, '🎄']

isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' }); // [false, '🎅']
