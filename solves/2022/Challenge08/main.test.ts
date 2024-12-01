import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { checkPart } from "./main.ts";

// args: string
// return isPalindrome normal
// return isPalindrome Slice a item

Deno.test("Day 2022-08-01", () =>
  assertEquals(
    checkPart("uwu"),
    true,
  ));

Deno.test("Day 2022-08-02", () =>
  assertEquals(
    checkPart("midu"),
    false,
  ));

Deno.test("Day 2022-08-03", () =>
  assertEquals(
    checkPart("lolol"),
    true,
  ));

Deno.test("Day 2022-08-04", () =>
  assertEquals(
    checkPart("yolooloy"),
    true,
  ));
