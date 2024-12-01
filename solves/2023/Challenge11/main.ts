function getIndexsForPalindrome(word: string) {
  const isPalindromo = (word: string) => word === [...word].reverse().join("");

  if (isPalindromo(word)) return [];

  const burble = (array: string[], poss: number[]) => {
    const flap = array[poss[0]];
    array[poss[0]] = array[poss[1]];
    array[poss[1]] = flap;
    return array;
  };

  const middle = Math.floor(word.length / 2);

  const swapped = [...word];

  const left = swapped.slice(0, middle).join("");

  const right = swapped.slice(middle).reverse().join("");

  const poss = [];

  for (let i = 0; i < right.length; i++) {
    if (right[i] !== left[i] || left[i] === undefined) {
      poss.push(i);
    }
  }

  const normal = burble(swapped, poss).join("");
  const reverse = burble(swapped.reverse(), poss).join("");

  if (isPalindromo(normal)) return poss;
  if (isPalindromo(reverse)) {
    const poss1 = poss[0] + middle;
    const poss2 = poss[1] + middle;
    return [poss1, poss2];
  }

  return null;
}
