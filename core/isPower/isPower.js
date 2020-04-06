// Determine if the given number is a power of some non-negative integer.

// Example

// For n = 125, the output should be
// isPower(n) = true;
// For n = 72, the output should be
// isPower(n) = false.
function isPower(n) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b <= n; b++) {
      if (Math.pow(a, b) === n) {
        return true;
      }
    }
  }
  return false;
}
