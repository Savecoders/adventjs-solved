import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { getFilesToBackup } from "./main.ts";

// First args is the last backup time
// Second args is the changes

Deno.test("Day 2022-13-01", () =>
  assertEquals(
    getFilesToBackup(1546300800, [
      [2, 1546300800],
      [3, 1546301100],
      [1, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
    ]),
    [
      1,
      3,
    ],
  ));

Deno.test("Day 2022-13-02", () =>
  assertEquals(
    getFilesToBackup(1546300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100],
    ]),
    [
      1,
      2,
      3,
    ],
  ));

Deno.test("Day 2022-13-03", () =>
  assertEquals(
    getFilesToBackup(1556300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100],
    ]),
    [],
  ));

Deno.test("Day 2022-13-03", () =>
  assertEquals(
    getFilesToBackup(1556300600, []),
    [],
  ));
