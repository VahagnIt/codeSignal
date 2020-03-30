// Given an integer n, return the largest number that contains exactly n digits.

// Example

// For n = 2, the output should be
// largestNumber(n) = 99.

function largestNumber(n) {
  let output = "";
  for (let i = 0; i < n; i++) {
    output += 9;
  }
  return +output;
}
