function removeSnow(s: string): string {
  const AllCharacterRegex = /([a-z])\1/g;
  const duplicatedReplace = s.replace(AllCharacterRegex, '');
  return duplicatedReplace === s ? duplicatedReplace : removeSnow(duplicatedReplace);
}
removeSnow('zxxzoz'); // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd'); // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz'); // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a'); // -> "a"
// No hay montículos repetidos
