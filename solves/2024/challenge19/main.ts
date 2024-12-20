/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight: number): string {
  const boxRepresentations: {
    [key: number]: string[];
  } = {
    1: [' _ ', '|_|'],
    2: [' ___ ', '|___|'],
    5: [' _____ ', '|     |', '|_____|'],
    10: [' _________ ', '|         |', '|_________|'],
  };

  const keysRepresentantions = Object.keys(boxRepresentations).toReversed();
  const acc = [];
  while (weight > 0) {
    const key = keysRepresentantions.find(key => weight >= parseInt(key));
    const [bottom, ...body] = boxRepresentations[key !== undefined ? +key : 0].toReversed();
    const last = acc.shift();
    const concatBottom = `${bottom}${last?.slice(bottom.length, -1) ?? ''}`;
    body.unshift(concatBottom);
    acc.unshift(...body.toReversed());
    weight -= key !== undefined ? +key : 0;
  }
  return acc.join('\n');
}
console.log(distributeWeight(9));
// Returns:
//  _
// |_|___
// |     |
// |_____|
