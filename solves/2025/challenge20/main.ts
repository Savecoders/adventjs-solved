/*
The warehouse is a matrix with # gifts and .
empty spaces. You must create a dropGifts function that receives
the warehouse state and an array with the columns where the gifts are dropped.

Falling rules:

The gift falls through the indicated column from the top.
It is placed in the lowest empty cell (.) of that column.
If the column is full, the gift is ignored.

*/

function dropGifts(warehouse: string[][], drops: number[]): string[][] {
  const GIFT = "#";
  const EMPTY = ".";

  const dropWareHouse = warehouse.map((row) => [...row]);

  for (const drop of drops) {
    for (let row = dropWareHouse.length - 1; row >= 0; row--) {
      if (dropWareHouse[row][drop] === EMPTY) {
        dropWareHouse[row][drop] = GIFT;
        break;
      }
    }
  }
  return dropWareHouse;
}
dropGifts(
  [
    [".", ".", "."],
    [".", "#", "."],
    ["#", "#", "."],
  ],
  [0],
);
/*
[
  ['.', '.', '.'],
  ['#', '#', '.'],
  ['#', '#', '.']
]
*/

dropGifts(
  [
    [".", ".", "."],
    ["#", "#", "."],
    ["#", "#", "#"],
  ],
  [0, 2],
);
/*
[
  ['#', '.', '.'],
  ['#', '#', '#'],
  ['#', '#', '#']
]
*/

dropGifts(
  [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ],
  [0, 1, 2],
);
/*
[
  ['.', '.', '.'],
  ['.', '.', '.'],
  ['#', '#', '#']
]
*/

dropGifts(
  [
    ["#", "#"],
    ["#", "#"],
  ],
  [0, 0],
);
/*
[
  ['#', '#']
  ['#', '#']
]
*/
