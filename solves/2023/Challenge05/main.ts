function cyberReindeer(road: string, time: number): string[] {
  road = road.replace("S", ".");
  const roadLen = road.length;
  const reindeer = Array(time).fill(road);
  const timeOpenBarrier = 5;
  let pivot = 0;
  const result = reindeer.map((_, index) => {
    if (index === timeOpenBarrier) road = road.replaceAll("|", "*");
    if (road[pivot] !== "|") pivot += 1;
    const start = road.substring(0, pivot - 1);
    const end = road.substring(pivot, roadLen);
    return `${start}S${end}`;
  });
  return result;
}

const road = "S..|...|..";
const time = 10; // units of time
const result = cyberReindeer(road, time);
console.log(result);
