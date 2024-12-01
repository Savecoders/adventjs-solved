
// get the number of gifts that can be delivered to the maximum number of cities

function getMaxGifts(giftsCities, maxGifts, maxCities) {

  //if(maxGifts <= 0 || maxCities <= 0 || giftsCities.length <= 0) return 0

  // generate a new array with the gifts of each city
  const filteredGifts = giftsCities
    .sort((a, b) => b - a)
    .filter(cityGifts => cityGifts < maxGifts)
    .splice(0, maxCities)

  if (filteredGifts.length <= 0) return 0

  const numberOfGifts = filteredGifts.reduce((a, b) => a + b)

  return numberOfGifts > maxGifts ? maxGifts : numberOfGifts
}


const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

getMaxGifts(giftsCities, maxGifts, maxCities) // 20