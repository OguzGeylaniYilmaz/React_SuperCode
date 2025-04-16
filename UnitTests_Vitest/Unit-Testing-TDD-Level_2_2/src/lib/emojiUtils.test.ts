/// <reference types="vitest" />

import { describe, expect, it, test } from "vitest";
import { replaceWithEmoji } from "./emojiUtils";

describe("replaceWithEmoji", () => {
  test("should replace love with ❤️ emoji", () => {
    expect(replaceWithEmoji("I love pizza")).toBe("I ❤️ pizza");
  });

  it('should replace "pizza" with 🍕 emoji', () => {
    const input = "I love pizza";
    const expected = "I ❤️ 🍕";
    const result = replaceWithEmoji(input);
    expect(result).toBe(expected);
  });

  it("should replace multiple words with their emojis", () => {
    const input = "Cats are great!";
    const expected = "🐱 are 🥰!";
    const result = replaceWithEmoji(input);
    expect(result).toBe(expected);
  });

  it("should handle case sensitivity", () => {
    const input = "cats are Great!";
    const expected = "🐱 are 🥰!";
    const result = replaceWithEmoji(input);
    expect(result).toBe(expected);
  });

  it("should handle empty string", () => {
    const input = "";
    const expected = "";
    const result = replaceWithEmoji(input);
    expect(result).toBe(expected);
  });

  it("should handle words with punctuation", () => {
    const input = "I love pizza!";
    const expected = "I ❤️ 🍕!";
    const result = replaceWithEmoji(input);
    expect(result).toBe(expected);
  });
});
