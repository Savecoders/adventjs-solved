/*
Keep in mind: The first element of the array is always the first segment of the trip. From there,
you must keep connecting destinations to the next origins.

*/
function revealSantaRoute(routes: string[][]): string[] {
  const santaRoute = [routes.at(0).at(0)];

  const routesMap = new Map<string, string>();

  for (const [origin, destination] of routes) {
    routesMap.set(origin, destination);
  }

  while (routesMap.size) {
    const lastStop = santaRoute.at(-1);
    const nextStop = routesMap.get(lastStop);
    if (nextStop) {
      santaRoute.push(nextStop);
      routesMap.delete(lastStop);
    } else {
      break;
    }
  }

  return santaRoute;
}
revealSantaRoute([
  ["MEX", "CAN"],
  ["UK", "GER"],
  ["CAN", "UK"],
]);
// → ['MEX', 'CAN', 'UK', 'GER']

revealSantaRoute([
  ["USA", "BRA"],
  ["JPN", "PHL"],
  ["BRA", "UAE"],
  ["UAE", "JPN"],
  ["CMX", "HKN"],
]);
// → ['USA', 'BRA', 'UAE', 'JPN', 'PHL']

revealSantaRoute([
  ["STA", "HYD"],
  ["ESP", "CHN"],
]);
// → ['STA', 'HYD']
