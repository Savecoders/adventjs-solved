interface ReindeerType {
  type: string;
  weightCapacity: number;
}

interface Gift {
  country: string;
  weight: number;
}

interface Reindeer {
  type: string;
  num: number;
}

function howManyReindeers(
  reindeerTypes: ReindeerType[],
  gifts: Gift[],
): {
  country: string;
  reindeers: Reindeer[];
}[] {
  return gifts.map(({ weight, country }) => {
    const filterReindeer = reindeerTypes
      .filter(({ weightCapacity }) => weightCapacity < weight)
      .sort((a, b) => b.weightCapacity - a.weightCapacity);

    let sumCapacity: number = filterReindeer.reduce(
      (acc, { weightCapacity }: ReindeerType) => acc + weightCapacity,
      0,
    );

    const reindeers: Reindeer[] = filterReindeer
      .map(
        ({ type, weightCapacity }) => {
          const num = Math.floor(weight / sumCapacity);
          weight -= num * weightCapacity;
          sumCapacity -= weightCapacity;
          return { type, num };
        },
      );

    return { country, reindeers };
  });
}

export { howManyReindeers };
