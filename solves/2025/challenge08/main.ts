function findUniqueToy(toy: string): string {
  const toys = [...toy.toLowerCase()];
  return (
    [...toy].find(
      (gift) =>
        toys.lastIndexOf(gift.toLowerCase()) ===
        toys.indexOf(gift.toLowerCase()),
    ) ?? ""
  );
}

findUniqueToy("Gift"); // 'G'
// ℹ️ The G is the first letter that is not repeated
// and we return it exactly as it appears

findUniqueToy("sS"); // ''
// ℹ️ The letters are repeated, since it doesn't distinguish uppercase

findUniqueToy("reindeeR"); // 'i'
// ℹ️ The r is repeated (even if it's uppercase)
// and the e as well, so the first one is 'i'

// More cases:
findUniqueToy("AaBbCc"); // ''
findUniqueToy("abcDEF"); // 'a'
findUniqueToy("aAaAaAF"); // 'F'
findUniqueToy("sTreSS"); // 'T'
findUniqueToy("z"); // 'z'
