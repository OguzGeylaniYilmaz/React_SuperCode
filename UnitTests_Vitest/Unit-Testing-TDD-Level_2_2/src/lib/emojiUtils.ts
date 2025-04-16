// export function replaceWithEmoji(input: string): string {
//   return "";
// }

// export function replaceWithEmoji(input: string): string {
//   return input.replace("love", "❤️");
// }

const emojiMap: Record<string, string> = {
  love: "❤️",
  pizza: "🍕",
  Cats: "🐱",
  great: "🥰",
};

export function replaceWithEmoji(input: string): string {
  let result = input;
  for (const [word, emoji] of Object.entries(emojiMap)) {
    result = result.replace(word, emoji);
  }
  return result;
}
