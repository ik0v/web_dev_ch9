import { expect, test } from "vitest";
import { sumBalance } from "./sumBalance";

test("test summing bills of 1000kr", () => {
  expect(sumBalance({ "1000kr": 10 })).toBe(10_000);
  expect(sumBalance({ "1000kr": 5 })).toBe(5_000);
});

test("test summing bills of 100kr", () => {
  expect(sumBalance({ "100kr": 5 })).toBe(500);
});

test("test summing bills of different types", () => {
  expect(sumBalance({ "1000kr": 1, "200kr": 2, "100kr": 5 })).toBe(1900);
});

test("test summing coins of different types", () => {
  expect(sumBalance({ "20kr": { count: 3 }, "1kr": { count: 3 } })).toBe(63);
});

test("test summing coins by weight", () => {
  expect(sumBalance({ "20kr": { grams: 19.8 } })).toBe(40);
});

test("test summing coins and bills", () => {
  expect(
    sumBalance({
      "100kr": 2,
      "20kr": { grams: 19.8 },
      "10kr": { count: 4 },
    }),
  ).toBe(280);
});

test("test counting coins be weight, integer numbers", () => {
  expect(sumBalance({ "20kr": { grams: 20 } })).toBe(40);
});
