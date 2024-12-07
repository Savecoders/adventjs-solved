/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages: string) {
  const regex = /\(([^()]+)\)/;
  let match = packages.match(regex);
  while (match) {
    const reversed = match[1].split('').reverse().join('');
    packages = packages.replace(match[0], reversed);
    match = packages.match(regex);
  }
  return packages;
}

console.log(fixPackages('a(cb)de'));
// ➞ "abcde"
// We reverse "cb" inside the parentheses

console.log(fixPackages('a(bc(def)g)h'));
// ➞ "agdefcbh"
// 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"
