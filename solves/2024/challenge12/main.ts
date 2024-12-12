function calculatePrice(ornaments: string) {
  if (!/^[*o^#@]*$/.test(ornaments)) return undefined;
  const decorations = {
    '*': 1,
    o: 5,
    '^': 10,
    '#': 50,
    '@': 100,
  } as Record<string, number>;

  return ornaments
    .split('')
    .reduce(
      (acc: number, item: string, i: number, arr: string[]) =>
        decorations[item] < decorations[arr[i + 1]]
          ? acc - decorations[item]
          : acc + decorations[item],
      0,
    );
}
console.log(calculatePrice('***'));
console.log(calculatePrice('*o'));
console.log(calculatePrice('o*'));
console.log(calculatePrice('**o*'));
console.log(calculatePrice('o***'));
console.log(calculatePrice('#@Z')); // undefined (Z is unknown)
