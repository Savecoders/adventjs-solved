import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";

import { howManyReindeers } from "./main.ts";

Deno.test("Day 2022-23-01", () =>
  assertEquals(
    howManyReindeers([
      { type: "Nuclear", weightCapacity: 50 },
      { type: "Electric", weightCapacity: 10 },
      { type: "Gasoline", weightCapacity: 5 },
      { type: "Diesel", weightCapacity: 1 },
    ], [
      { country: "Spain", weight: 30 },
      { country: "France", weight: 17 },
      { country: "Italy", weight: 50 },
    ]),
    [
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1,
          },
          {
            "type": "Gasoline",
            "num": 3,
          },
          {
            "type": "Diesel",
            "num": 5,
          },
        ],
      },
      {
        "country": "France",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1,
          },
          {
            "type": "Gasoline",
            "num": 1,
          },
          {
            "type": "Diesel",
            "num": 2,
          },
        ],
      },
      {
        "country": "Italy",
        "reindeers": [
          {
            "type": "Electric",
            "num": 3,
          },
          {
            "type": "Gasoline",
            "num": 3,
          },
          {
            "type": "Diesel",
            "num": 5,
          },
        ],
      },
    ],
  ));

Deno.test("Day 2022-23-02", () =>
  assertEquals(
    howManyReindeers(
      [
        { type: "Electric", weightCapacity: 10 },
        { type: "Gasoline", weightCapacity: 5 },
        { type: "Diesel", weightCapacity: 1 },
      ],
      [{ country: "Spain", weight: 37 }],
    ),
    [
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 2,
          },
          {
            "type": "Gasoline",
            "num": 2,
          },
          {
            "type": "Diesel",
            "num": 7,
          },
        ],
      },
    ],
  ));

Deno.test("Day 2022-23-03", () =>
  assertEquals(
    howManyReindeers(
      [
        { type: "Nuclear", weightCapacity: 50 },
        { type: "Electric", weightCapacity: 10 },
        { type: "Gasoline", weightCapacity: 5 },
        { type: "Diesel", weightCapacity: 1 },
      ],
      [
        { country: "Spain", weight: 30 },
        { country: "Germany", weight: 7 },
        { country: "France", weight: 17 },
        { country: "Italy", weight: 50 },
      ],
    ),
    [
      {
        "country": "Spain",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1,
          },
          {
            "type": "Gasoline",
            "num": 3,
          },
          {
            "type": "Diesel",
            "num": 5,
          },
        ],
      },
      {
        "country": "Germany",
        "reindeers": [
          {
            "type": "Gasoline",
            "num": 1,
          },
          {
            "type": "Diesel",
            "num": 2,
          },
        ],
      },
      {
        "country": "France",
        "reindeers": [
          {
            "type": "Electric",
            "num": 1,
          },
          {
            "type": "Gasoline",
            "num": 1,
          },
          {
            "type": "Diesel",
            "num": 2,
          },
        ],
      },
      {
        "country": "Italy",
        "reindeers": [
          {
            "type": "Electric",
            "num": 3,
          },
          {
            "type": "Gasoline",
            "num": 3,
          },
          {
            "type": "Diesel",
            "num": 5,
          },
        ],
      },
    ],
  ));
