import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { getCompleted } from "./main.ts";

// First String: The First Day time
// Second String: The First Day time

Deno.test("Day 2022-11-01", () =>
  assertEquals(
    getCompleted("01:00:00", "03:00:00"),
    "1/3",
  ));

Deno.test("Day 2022-11-02", () =>
  assertEquals(
    getCompleted("02:00:00", "04:00:00"),
    "1/2",
  ));

Deno.test("Day 2022-11-03", () =>
  assertEquals(
    getCompleted("01:00:00", "01:00:00"),
    "1/1",
  ));

Deno.test("Day 2022-11-04", () =>
  assertEquals(
    getCompleted("02:20:20", "03:30:30"),
    "2/3",
  ));

Deno.test("Day 2022-11-05", () =>
  assertEquals(
    getCompleted("03:30:30", "05:50:50"),
    "3/5",
  ));

Deno.test("Day 2022-11-06", () =>
  assertEquals(
    getCompleted("00:10:00", "01:00:00"),
    "1/6",
  ));
