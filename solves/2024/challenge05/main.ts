/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */

type Shoe = {
  type: 'I' | 'R';
  size: number;
};

function organizeShoes(shoes: Shoe[]) {
  const shoesMap = {} as Record<number, { R: number; I: number }>;
  const result = shoes.reduce((acc: number[], { type, size }) => {
    shoesMap[size] ??= { R: 0, I: 0 };
    shoesMap[size][type]++;
    if (shoesMap[size].I > 0 && shoesMap[size].R > 0) {
      shoesMap[size].I--;
      shoesMap[size].R--;
      return [...acc, size];
    }
    return acc;
  }, []);

  return result;
}
