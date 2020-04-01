// To prepare his students for an upcoming game, the sports coach decides to try
// some new training drills. To begin with, he lines them up and starts with the following
// warm-up exercise: when the coach says 'L', he instructs the students to turn to the left.
// Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A',
// the students should turn around.

// Unfortunately some students (not all of them, but at least one) can't tell left from right, meaning t
// hey always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many
// times the students end up facing the same direction.

// Given the list of commands the coach has given, count the number of such commands after which the students
//  will be facing the same direction.

// Example

// For commands = "LLARL", the output should be
// lineUp(commands) = 3.

// Let's say that there are 4 students, and the second one can't tell left from right. In this case, only
// after the second, third and fifth commands will the students face the same direction.
function lineUp(commands) {
  let obj = {
    L: -180,
    R: 180,
    A: 0
  };
  let dir = 0;
  let count = 0;
  for (let i = 0; i < commands.length; i++) {
    dir += obj[commands[i]];
    !(dir % 360) && count++;
  }
  return count;
}
