import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { canExit } from "./main.ts";

Deno.test("Day 2022-24-01", () =>
  assertEquals(
    canExit([
      [" ", " ", "W", " ", "S"],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", "W", " "],
      ["W", "W", " ", "W", "W"],
      [" ", " ", " ", " ", "E"],
    ]),
    true,
  ));

Deno.test("Day 2022-24-02", () =>
  assertEquals(
    canExit([
      [" ", " ", "W", " ", "S"],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", "W", " "],
      ["W", "W", " ", "W", "W"],
      [" ", " ", " ", " ", " "],
    ]),
    false,
  ));

Deno.test("Day 2022-24-03", () =>
  assertEquals(
    canExit([
      [" ", " ", "W", " ", "S"],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", "W", " "],
      ["W", "W", " ", "W", "W"],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", "E"],
    ]),
    true,
  ));
