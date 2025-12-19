function clearGifts(warehouse: string[][], drops: number[]): string[][] {
  const GIFT = "#";
  const EMPTY = ".";

  const dropWareHouse = warehouse.map((row) => [...row]);

  for (const drop of drops) {
    for (let row = dropWareHouse.length - 1; row >= 0; row--) {
      if (dropWareHouse[row][drop] === EMPTY) {
        dropWareHouse[row][drop] = GIFT;

        if (!dropWareHouse[row].includes(EMPTY)) {
          dropWareHouse.splice(row, 1);
          dropWareHouse.unshift(new Array(warehouse[0].length).fill(EMPTY));
        }

        break;
      }
    }
  }
  return dropWareHouse;
}
