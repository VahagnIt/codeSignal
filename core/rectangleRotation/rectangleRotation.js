// A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center
// (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle
// are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

// How many points with integer coordinates are located inside the given rectangle (including on its sides)?
function rectangleRotation(a, b) {
  let ank = Math.sqrt(2);
  let count_a = a / 2 / ank;
  let count_b = b / 2 / ank;
  let dir_a = Math.round(count_a) < count_a ? -1 : 1;
  let dir_b = Math.round(count_b) < count_b ? -1 : 1;
  return (
    (2 * Math.floor(count_a) + 1) * (2 * Math.floor(count_b) + 1) +
    (2 * Math.floor(count_b) + 1 + dir_b) *
      (2 * Math.floor(count_a) + 1 + dir_a)
  );
}
