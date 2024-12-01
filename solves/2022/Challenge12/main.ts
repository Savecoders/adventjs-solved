// create interface
interface sleighs {
  name: string;
  consumption: number;
}

// create function selectSleigh
function selectSleigh(
  distance: number,
  sleighs: sleighs[],
): string | null {
  const fillWatts = sleighs.filter((sleigh) =>
    sleigh.consumption * distance <= 20
  );

  // return the last element of the arrays
  return fillWatts.at(-1)?.name ?? null;
}

export { selectSleigh };
