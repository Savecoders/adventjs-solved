type Glove = { hand: "L" | "R"; color: string };

function matchGloves(gloves: Glove[]): string[] {
  const groupsHandColor = Object.groupBy(gloves, (glove) => glove.color);
  const joinedParColors = Object.entries(groupsHandColor).flatMap(
    ([color, gloves]) => {
      const hands = Object.groupBy(gloves, (glove) => glove.hand);
      const leftGloves = hands.L || [];
      const rightGloves = hands.R || [];
      const pairsCount = Math.min(leftGloves.length, rightGloves.length);
      return Array(pairsCount).fill(color);
    },
  );
  return joinedParColors;
}

const gloves: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
  { hand: "L", color: "green" },
];

matchGloves(gloves);
// ["red", "green"]

const gloves2: Glove[] = [
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "L", color: "gold" },
  { hand: "R", color: "gold" },
];

matchGloves(gloves2);
// ["gold", "gold"]

const gloves3: Glove[] = [
  { hand: "L", color: "red" },
  { hand: "R", color: "green" },
  { hand: "L", color: "blue" },
];

matchGloves(gloves3);
// []
