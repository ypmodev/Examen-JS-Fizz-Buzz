import { describe, test, expect } from "vitest";
import { validate } from "/script/validate.js";

describe("validate", () => {
  test("acepta un entero escrito como texto", () => {
    expect(validate("9")).toBe(true);
  });

  test("rechaza un campo vacío", () => {
    expect(validate("")).toBe(false);
  });

  test("rechaza texto que no es un número", () => {
    expect(validate("abc")).toBe(false);
  });

  test("rechaza un decimal", () => {
    expect(validate("3.5")).toBe(false);
  });
});
