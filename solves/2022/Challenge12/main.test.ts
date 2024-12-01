import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { selectSleigh } from "./main.ts";

// First String: The First Day time
// Second String: The First Day time

Deno.test("Day 2022-12-01", () =>
  assertEquals(
    selectSleigh(1, [
      { name: "pheralb", consumption: 0.3 },
      { name: "TMChein", consumption: 0.5 },
    ]),
    "TMChein",
  ));

Deno.test("Day 2022-12-02", () =>
  assertEquals(
    selectSleigh(10, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 5 },
    ]),
    "Pedrosillano",
  ));

Deno.test("Day 2022-11-03", () =>
  assertEquals(
    selectSleigh(10, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 2 },
      { name: "marcospage", consumption: 3 },
    ]),
    "SamarJaffal",
  ));

Deno.test("Day 2022-11-03", () =>
  assertEquals(
    selectSleigh(50, [
      { name: "Pedrosillano", consumption: 1 },
      { name: "SamarJaffal", consumption: 2 },
      { name: "marcospage", consumption: 3 },
    ]),
    null,
  ));
