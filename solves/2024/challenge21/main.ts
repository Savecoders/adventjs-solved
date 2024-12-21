function treeHeight(tree: { value: string; left: any; right: any } | null): number {
  if (!tree) return 0;
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right));
}

// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null,
    },
    right: {
      value: '🎅',
      left: null,
      right: null,
    },
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null,
    },
  },
};

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
console.log(treeHeight(tree));
// Devuelve: 3
