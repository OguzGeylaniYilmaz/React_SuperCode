import { factorial } from "./factoriel";
import { describe, it, expect } from "vitest";

describe("factoriel function", () => {
  it("should return 1 for input 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 for input 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 24 for input 3", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should handle larger numbers correctly", () => {
    expect(factorial(10)).toBe(3628800);
  });

  it("should throw error for negative numbers", () => {
    expect(() => factorial(-2)).toThrow();
    expect(() => factorial(-5)).toThrow();
  });

  it("should throw error for non-integer inputs", () => {
    expect(() => factorial(2.5)).toThrow();
    expect(() => factorial(3.999)).toThrow();
  });
});
