// Determine whether the given string can be obtained by one concatenation of some string to itself.

// Example

// For inputString = "tandemtandem", the output should be
// isTandemRepeat(inputString) = true;
// For inputString = "qqq", the output should be
// isTandemRepeat(inputString) = false;
// For inputString = "2w2ww", the output should be
// isTandemRepeat(inputString) = false.
function isTandemRepeat(inputString) {
  let length = inputString.length / 2;
  let isRepeated = true;
  for (let i = 0; i < length; i++) {
    isRepeated = inputString[i] === inputString[i + length] && isRepeated;
  }
  return isRepeated;
}
