function maxDepth(s: string): number {
  const Operations = {
    "[": 1,
    "]": -1,
  };
  let count = 0;
  let maxDepth = 0;

  for (const char of s) {
    count += Operations[char];
    if (count < 0) {
      return -1;
    }
    maxDepth = Math.max(count, maxDepth);
  }

  return count === 0 ? maxDepth : -1;
}
console.log(maxDepth("[]")); // -> 1
console.log(maxDepth("[[]]")); // -> 2
console.log(maxDepth("[][]")); // -> 1
console.log(maxDepth("[[][]]")); // -> 2
console.log(maxDepth("[[[]]]")); // -> 3
console.log(maxDepth("[][[]][]")); // -> 2

maxDepth("]["); // -> -1 (closes before opening)
maxDepth("[[["); // -> -1 (missing closing brackets)
console.log(maxDepth("[]]]")); // -> -1 (extra closing brackets)
maxDepth("[][]["); // -> -1 (one remains unclosed)
