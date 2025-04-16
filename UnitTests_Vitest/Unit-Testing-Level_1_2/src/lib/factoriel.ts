// export function factorial(n: number): number {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

export function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers");
  }

  if (!Number.isInteger(n)) {
    throw new Error("Factorial is only defined for integers");
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
