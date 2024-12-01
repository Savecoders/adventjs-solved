import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { checkJump } from "./main.ts";

// args: array of values jump
// state of the tree

Deno.test("Day 2022-10-01", () =>
  assertEquals(
    checkJump([1, 2, 1]),
    true,
  ));

Deno.test("Day 2022-10-02", () =>
  assertEquals(
    checkJump([1, 3, 8, 5, 2]),
    true,
  ));

Deno.test("Day 2022-10-03", () =>
  assertEquals(
    checkJump([1, 7, 3, 5]),
    false,
  ));

Deno.test("Day 2022-10-04", () =>
  assertEquals(
    checkJump([1, 2, 3, 2, 1]),
    true,
  ));

Deno.test("Day 2022-10-05", () =>
  assertEquals(
    checkJump([1, 2, 2, 2, 1]),
    true,
  ));

Deno.test("Day 2022-10-06", () =>
  assertEquals(
    checkJump([0, 1, 0]),
    true,
  ));

Deno.test("Day 2022-10-07", () =>
  assertEquals(
    checkJump([2, 2, 2, 2]),
    false,
  ));

Deno.test("Day 2022-10-08", () =>
  assertEquals(
    checkJump([1, 2, 3]),
    false,
  ));

Deno.test("Day 2022-10-09", () =>
  assertEquals(
    checkJump([1, 2, 3, 2, 1, 2, 3]),
    false,
  ));
