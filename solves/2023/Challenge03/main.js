function findNaughtyStep(original, modified) {
  if (original === modified) return "";
  let i;
  for (i = 0; original.at(i) === modified.at(i); i++);
  return (modified.length > original.length ? modified : original).at(i);
}
findNaughtyStep("abcdef", "abqdef"); // "q"
