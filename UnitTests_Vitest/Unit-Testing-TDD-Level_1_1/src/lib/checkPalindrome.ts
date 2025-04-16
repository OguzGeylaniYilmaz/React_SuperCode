// export function checkPalindrome(input: string): boolean {
//   return false;
// }

// export function checkPalindrome(input: string): boolean {
//   return input === "car"; // It only works for this particular case.
// }

export function checkPalindrome(input: string): boolean {
  const normalized = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (normalized.length <= 1) {
    return true;
  }

  return normalized === normalized.split("").reverse().join("");
}
