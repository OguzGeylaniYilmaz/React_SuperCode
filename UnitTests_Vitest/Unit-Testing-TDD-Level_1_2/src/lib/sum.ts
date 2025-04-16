// export function cleanAndReverseString(input: string): string {
//   return "";
// }

// export function cleanAndReverseString(input: string): string {
//   return input.split("").reverse().join("");
// }

export function cleanAndReverseString(input: string): string {
  const cleaned = input.replace(/[^\w\s]/g, "");
  return cleaned.split("").reverse().join("");
}
