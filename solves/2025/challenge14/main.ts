/*
Rules:

    The object has at most 3 levels of depth.
    The value to search for appears at most once.
    The object only contains other objects and primitive values (strings, numbers, booleans).
    If the value does not exist, return an empty array.

*/

type Gift = string | number | boolean;
type Workshop = Record<string, any>;
type Path = string[];

function findGiftPath(workshop: Workshop, gift: Gift): Path {
  const works = Object.entries(workshop);

  for (const [key, value] of works) {
    if (value === gift) return [key];

    if (typeof value === "object") {
      const paths = findGiftPath(value, gift);
      if (paths.length > 0) {
        return [key, ...paths];
      }
    }
  }
  return [];
}

const workshop = {
  storage: {
    shelf: {
      box1: "train",
      box2: "switch",
    },
    box: "car",
  },
  gift: "doll",
};

console.log(findGiftPath(workshop, "train"));
// ➜ ['storage', 'shelf', 'box1']

findGiftPath(workshop, "switch");
// ➜ ['storage', 'shelf', 'box2']

findGiftPath(workshop, "car");
// ➜ ['storage', 'box']

findGiftPath(workshop, "doll");
// ➜ ['gift']

findGiftPath(workshop, "plane");
// ➜ []
