/// <reference types="vitest" />

import { describe, expect, it } from "vitest";
import { cleanAndReverseString } from "./stringUtils.test";

describe("cleanAndReverseString", () => {
  it("should reverse a clean string without special characters", () => {
    const input = "hello";
    const expected = "olleh";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });

  it("should remove special characters before reversing", () => {
    const input = "h?el&o";
    const expected = "oleh";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });

  it("should keep numbers while removing special characters", () => {
    const input = "hello3";
    const expected = "3olleh";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });

  it("should handle empty string", () => {
    const input = "";
    const expected = "";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });

  it("should return empty string if input contains only special characters", () => {
    const input = "?&@!";
    const expected = "";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });

  it("should handle spaces correctly", () => {
    const input = "hello world";
    const expected = "dlrow olleh";
    const result = cleanAndReverseString(input);
    expect(result).toBe(expected);
  });
});
