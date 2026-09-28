import { describe, test, expect } from "vitest";
import { divisible } from "/script/check-divisible.js";

describe("divisible", () => {
  test("devuelve true si el divisible por 3 y por 5", () => {
    expect(divisible(15, 5)).toBe(true);
  });

  test("devuelve true si el divisible por 3", () => {
    expect(divisible(3, 3)).toBe(true);
  });
  test("devuelve true si el divisible por 5", () => {
    expect(divisible(5, 5)).toBe(true);
  });
  test("devuelve false si no es divisible por 3", () => {
    expect(divisible(7, 5)).toBe(false);
  });
  test("devuelve false si no es divisible por 5", () => {
    expect(divisible(7, 3)).toBe(false);
  });
});

describe("Validación de FizzBuzz", () => {
  describe("Scenario: Número divisible por 3", () => {
    test("mostrar fizz", () => {
      expect(addEventListener(9)).toBe("Fizz");
    });
  });
});
