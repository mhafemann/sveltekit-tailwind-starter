/**
 * Generate a random number between `a` and `b`, or between 0 and `a` if `b` is unspecified
 * @param {number} a
 * @param {number} [b]
 */
export function random(a: number, b: number | undefined): number {
  if (b === undefined) return Math.random() * a;
  return a + Math.random() * (b - a);
}

