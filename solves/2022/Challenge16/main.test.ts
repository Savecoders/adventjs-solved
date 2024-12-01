import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { fixLetter } from "./main.ts";

// First String: The First Day time
// Second String: The First Day time

Deno.test("Day 2022-16-01", () =>
  assertEquals(
    fixLetter(
      ` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `,
    ),
    "Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.",
  ));

Deno.test("Day 2022-16-02", () =>
  assertEquals(
    fixLetter(
      "  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?",
    ),
    "Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?",
  ));

Deno.test("Day 2022-16-03", () =>
  assertEquals(
    fixLetter("  hi    santa    claus "),
    "Hi Santa Claus.",
  ));
