import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { executeCommands } from "./main.ts";

Deno.test("Day 2022-23-01", () =>
  assertEquals(
    executeCommands([
      "MOV 5,V00",
      "MOV 10,V01",
      "DEC V00",
      "ADD V00,V01",
    ]),
    [
      14,
      10,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
  ));

Deno.test("Day 2022-23-02", () =>
  assertEquals(
    executeCommands([
      "MOV 255,V00",
      "INC V00",
      "DEC V01",
      "DEC V01",
    ]),
    [
      0,
      254,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
  ));

Deno.test("Day 2022-23-03", () =>
  assertEquals(
    executeCommands([
      "MOV 10,V00",
      "DEC V00",
      "INC V01",
      "JMP 1",
      "INC V06",
    ]),
    [
      0,
      10,
      0,
      0,
      0,
      0,
      1,
      0,
    ],
  ));
