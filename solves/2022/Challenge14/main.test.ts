import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { getOptimalPath } from "./main";

Deno.test("Day 2022-14-01", () =>
  assertEquals(
    getOptimalPath([[0], [2, 3]]), // 2
    2,
  ));

Deno.test("Day 2022-14-02", () =>
  assertEquals(
    getOptimalPath([[0], [3, 4], [9, 8, 1]]),
    5,
  ));

Deno.test("Day 2022-14-03", () =>
  assertEquals(
    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]]),
    8,
  ));

Deno.test("Day 2022-13-04", () =>
  assertEquals(
    getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [
      -1,
      -1,
      -1,
      -1,
      -1,
    ]]),
    7,
  ));
