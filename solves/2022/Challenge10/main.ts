function checkJump(heights: number[]): boolean {
  // 1. Find the highest point
  const maxHeigths = Math.max(...heights);
  const maxIndex = heights.indexOf(maxHeigths);

  const [left, right] = [
    heights.slice(0, maxIndex),
    heights.slice(maxIndex + 1),
  ];

  if (!left.length || !right.length) return false;

  // 3. Check if the left and right are in order
  const isLeftOrder = left.join("") === left.sort().join("");
  const isRightOrder = right.join("") === right.sort().reverse().join("");

  // 4. Return if the left and right are in order
  return isLeftOrder && isRightOrder;
}

export { checkJump };
