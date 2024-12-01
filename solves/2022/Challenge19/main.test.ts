import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { sortToys } from "./main.ts";

Deno.test("Day 2022-19-01", () =>
  assertEquals(
    sortToys(["ball", "doll", "car", "doll"], [2, 1, 3, 4]),
    ["doll", "ball", "car", "doll"],
  ));

Deno.test("Day 2022-19-02", () =>
  assertEquals(
    sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [3, 1, 0, 2, 4]),
    [
      "ps4",
      "xbox",
      "switch",
      "pc",
      "nintendo",
    ],
  ));

Deno.test("Day 2022-19-03", () =>
  assertEquals(
    sortToys(["pc", "xbox", "ps4", "switch", "nintendo"], [8, 6, 5, 7, 9]),
    [
      "ps4",
      "xbox",
      "switch",
      "pc",
      "nintendo",
    ],
  ));
