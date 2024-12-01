import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { checkStepNumbers } from "./main.ts";

Deno.test("Day 2022-22-01", () =>
  assertEquals(
    checkStepNumbers(
      ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"],
      [1, 33, 10, 2, 44, 20],
    ),
    true,
  ));

Deno.test("Day 2022-22-02", () =>
  assertEquals(
    checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10]),
    false,
  ));

Deno.test("Day 2022-22-02", () =>
  assertEquals(
    checkStepNumbers(["tree_1", "tree_1", "house"], [1, 2, 10]),
    true,
  ));
