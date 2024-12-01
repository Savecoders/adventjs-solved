function autonomousDrive(store: string[], movements: string[]) {
  const row = store.findIndex((r) => r.includes("!"));
  const col = store[row].indexOf("!");

  store[row] = store[row].replace("!", ".");

  const m: { [key: string]: [number, number] } = {
    L: [-1, 0],
    R: [1, 0],
    U: [0, -1],
    D: [0, 1],
  };

  let x = col,
    y = row;

  for (const move of movements) {
    const [mx, my] = m[move];

    x += mx * +(store.at(y + my)?.at(x + mx) == ".");
    y += my * +(store.at(y + my)?.at(x + mx) == ".");
  }

  store[y] = store[y].substring(0, x) + "!" + store[y].substring(x + 1);

  return store;
}
