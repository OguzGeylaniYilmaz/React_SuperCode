/// <reference types="vitest" />

import { describe, expect, it } from "vitest";
import { checkPalindrome } from "./checkPalindrome";

// describe("checkPalindrome", () => {
//   test('should return true for a simple palindrome like "radar"', () => {
//     const result = checkPalindrome("car");
//     expect(result).toBe(true);
//   });
// });

describe("checkPalindrome", () => {
  it("should return true for simple palindrome", () => {
    expect(checkPalindrome("level")).toBe(true);
  });

  it("return false for non-palindromes", () => {
    expect(checkPalindrome("hello")).toBe(false);
  });

  it("should be case insensitive", () => {
    expect(checkPalindrome("Phone")).toBe(true);
  });

  it("should ignore spaces and punctuation marks", () => {
    expect(checkPalindrome("A man, a plan, a canal, Hawaii!")).toBe(true);
  });

  it("should return true for empty string", () => {
    expect(checkPalindrome("")).toBe(true);
  });

  it("should return true for single character", () => {
    expect(checkPalindrome("a")).toBe(true);
  });
});
