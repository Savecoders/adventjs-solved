import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { countTime } from "./main.ts";

// args: Each position is a led and can be on (1) or off (0).
// return Every 7 seconds, the leds change state

Deno.test("Day 2022-09-01", () =>
  assertEquals(
    countTime([0, 1, 1, 0, 1]),
    7,
  ));

Deno.test("Day 2022-09-02", () =>
  assertEquals(
    countTime([0, 0, 0, 1]),
    21,
  ));

Deno.test("Day 2022-09-03", () =>
  assertEquals(
    countTime([0, 0, 1, 0, 0]),
    28,
  ));

Deno.test("Day 2022-09-04", () =>
  assertEquals(
    countTime([1, 0, 0, 1, 0, 0]),
    14,
  ));

Deno.test("Day 2022-09-05", () =>
  assertEquals(
    countTime([1, 1, 0, 0, 0, 0]),
    28,
  ));

Deno.test("Day 2022-09-06", () =>
  assertEquals(
    countTime([1, 1, 1]),
    0,
  ));
