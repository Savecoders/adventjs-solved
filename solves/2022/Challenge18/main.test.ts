import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { dryNumber } from "./main.ts";

Deno.test("Day 2022-18-01", () =>
  assertEquals(
    dryNumber(1, 15),
    [1, 10, 11, 12, 13, 14, 15],
  ));

Deno.test("Day 2022-18-02", () =>
  assertEquals(
    dryNumber(2, 20),
    [2, 12, 20],
  ));
