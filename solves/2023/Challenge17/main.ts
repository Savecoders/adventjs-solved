function optimizeIntervals(intervals: number[][]) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (const val of intervals) {
    const [start, end] = val;
    const max = result[result.length - 1][1];

    start > max
      ? result.push(val)
      : (result[result.length - 1][1] = Math.max(end, max));
  }

  return result;
}
