function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  const missing = {} as Record<string, number>;
  const extra = {} as Record<string, number>;

  received.forEach(gift => {
    extra[gift] ??= 0;
    extra[gift]++;
  });

  expected.forEach(gift => {
    if (!extra[gift]) {
      missing[gift] ??= 0;
      missing[gift]++;
    }

    if (extra[gift] > 0) {
      extra[gift]--;
    }

    if (extra[gift] === 0) {
      delete extra[gift];
    }
  });

  return {
    missing,
    extra,
  };
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']));
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

// console.log(
//   fixGiftList(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite']),
// );
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

// console.log(fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car']));
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
