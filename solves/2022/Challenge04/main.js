function fitsInOneBox(boxes) {
  return boxes
    .sort((a, b) => a.w - b.w)
    .every(({ l: length, w: width, h: height }, index, boxes) => {
      if (index === 0) return true;
      const { l: lengthAcc, w: widthAcc, h: heightAcc } = boxes[index - 1];
      return length > lengthAcc && width > widthAcc && height > heightAcc;
    });
}


const boxes = [
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]

console.log(fitsInOneBox(boxes)) // true

const boxes2 = [
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]

console.log(fitsInOneBox(boxes2)) // false