// 1. Create a function that takes an array of 0s and 1s and
// returns the number of 7-segment displays that are currently off.

function countTime(leds: number[]) {
  const lowLeds: string[] = leds.join("").split("1");

  const valuesLowLeds: number[] = lowLeds.map((led) => {
    return led.length;
  });

  valuesLowLeds[0] += valuesLowLeds[valuesLowLeds.length - 1];

  const sortLed = valuesLowLeds.sort((a, b) => b - a);
  return sortLed[0] * 7;
}

export { countTime };
