/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices: number[], length: number): string {
  const SNOW_RACE = '~';
  const REINDEER = 'r';
  const DEFACULT_RACE = Array(length).fill(SNOW_RACE);
  return indices
    .map((lane, index) => {
      const renoPosition = ((lane % length) + length) % length;
      const space_isometric = ' '.repeat(indices.length - index - 1);
      const renoRace = DEFACULT_RACE.with(renoPosition, REINDEER);
      renoRace.at(0) === REINDEER ? (renoRace[0] = SNOW_RACE) : null;
      return `${space_isometric}${renoRace.join('')} /${index + 1}`;
    })
    .join('\n');
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
