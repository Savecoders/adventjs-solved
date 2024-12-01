import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { decorateTree } from "./main.ts";

Deno.test("Day 2022-14-01", () =>
  assertEquals(
    decorateTree("B P R P"), // 2
    [
      "R",
      "P B",
      "R B B",
      "B P R P",
    ],
  ));

Deno.test("Day 2022-14-02", () =>
  assertEquals(
    decorateTree("B B"),
    [
      "B",
      "B B",
    ],
  ));

Deno.test("Day 2022-14-03", () =>
  assertEquals(
    decorateTree("B B P R P R R"),
    [
      "B",
      "R P",
      "B P P",
      "P R B R",
      "P P B B P",
      "B R B B B R",
      "B B P R P R R",
    ],
  ));

Deno.test("Day 2022-13-04", () =>
  assertEquals(
    decorateTree("R R P R R"),
    [
      "R",
      "R R",
      "P B P",
      "R B B R",
      "R R P R R",
    ],
  ));
