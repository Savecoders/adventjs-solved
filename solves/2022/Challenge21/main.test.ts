import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { printTable } from "./main.ts";

Deno.test("Day 2022-21-01", () =>
  assertEquals(
    printTable([
      { name: "PlayStation 5", quantity: 9234782374892 },
      { name: "Book Learn Web Dev", quantity: 23531 },
    ]),
    "++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************",
  ));
