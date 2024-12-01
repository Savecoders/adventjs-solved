function getGiftsToRefill(a1, a2, a3) {

  function rmRepeatGifs(gift) {
    let uniqueGifts = gift.filter((element, index) => {
      return gift.indexOf(element) === index;
    });
    return uniqueGifts
  }

  const uniqueGiftsAll = rmRepeatGifs(a1.concat(a2).concat(a3))
    .filter((gift) => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1)
  return uniqueGiftsAll || []
}
