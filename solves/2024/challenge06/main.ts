/** @param {string[]} box
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box: string[]): boolean {
  const POINTER = '*';
  const isCenterBox = box.some((line, index) => {
    const hasPointer = line.indexOf(POINTER);
    if (index === 0 || index === box.length - 1) return false;
    const sliced = line.replace(/\s/g, '').split('');
    const middle = Math.floor(sliced.length / 2);
    const hasMidlePointer = sliced[middle] === POINTER;
    if (hasMidlePointer) return true;
    console.log(sliced);
  });
  return isCenterBox;
}

console.log(inBox(['###', '#*#', '###'])); // ➞ true
console.log(inBox(['#####', '#   #', '#  #*', '#####'])); // ➞ false
