// Given integers n, l and r, find the number of ways to represent n as a sum of two integers
// A and B such that l ≤ A ≤ B ≤ r.

// Example

// For n = 6, l = 2, and r = 4, the output should be
// countSumOfTwoRepresentations2(n, l, r) = 2.

// There are just two ways to write 6 as A + B, where 2 ≤ A ≤ B ≤ 4: 6 = 2 + 4 and 6 = 3 + 3.
function countSumOfTwoRepresentations2(n, l, r) {
  const floor = Math.floor(n / 2);
  if (floor < l || floor > r) {
    return 0;
  }
  return floor - l < r - floor
    ? floor - l + (n % 2 ? 0 : 1)
    : r - floor + (n % 2 ? 0 : 1);
}
