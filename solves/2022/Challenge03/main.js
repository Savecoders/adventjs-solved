const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

/*const distributeGifts = (packOfGifts, reindeers) => {
  const weightPackOfGifs = packOfGifts.reduce((acc, cur) => acc + cur.length, 0 )
  const changeReindeers = reindeers.reduce((acc, cur) => acc + (cur.length * 2), 0 )
  return parseInt(changeReindeers / weightPackOfGifs)
}*/

const distributeGifts = (packOfGifts, reindeers) => {
  const weightPackOfGifs = packOfGifts.toString().length - (packOfGifts.length + 1)
  const changeReindeers = (reindeers.toString().length - reindeers.length + 1) * 2
  return Math.floor(changeReindeers / weightPackOfGifs)
}


console.log(distributeGifts(packOfGifts, reindeers))
console.log(distributeGifts(['a', 'b', 'c'], ['d', 'e']))
console.log(distributeGifts(['game', 'videoconsole', 'computer'],
  ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']))