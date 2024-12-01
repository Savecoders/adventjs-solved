type Light = "🔴" | "🟢";
type Lights = Light[];

function adjustLights(lights: Lights): number {
  const leds: Record<Light, Light> = {
    "🔴": "🟢",
    "🟢": "🔴",
  };

  return [...lights].reduceRight(
    (acc: number, light: Light | undefined, index: number, array: Lights) => {
      if (light === array[index - 1]) {
        acc++;
        array[index - 1] = leds[light];
      }
      return acc;
    },
    0
  );
}

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]));
// -> 1 (cambias la cuarta luz a 🔴)

console.log(adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]));

console.log(
  adjustLights([
    "🔴",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
    "🔴",
    "🟢",
  ])
);
// 1
