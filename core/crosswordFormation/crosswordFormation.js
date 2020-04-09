// You're a crossword fanatic, and have finally decided to try and create your own. However,
// you also love symmetry and good design, so you come up with a set of rules they should follow:

// the crossword must contain exactly four words;
// these four words should form four pairwise intersections;
// all words must be written either left-to-right or top-to-bottom;
// the area of the rectangle formed by empty cells inside the intersections isn't equal to zero.
// Given 4 words, find the number of ways to make a crossword following the above-described rules.
// Note that two crosswords which differ by rotation are considered different.

// Example

// For words = ["crossword", "square", "formation", "something"], the output should be
// crosswordFormation(words) = 6.
function crosswordFormation(words) {
  console.log(words);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let otherWords = words.slice();
    otherWords.splice(i, 1);
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      let obj = check(word[j], otherWords);
      // console.log(letter, "obj", obj);
      for (let key in obj) {
        if (obj[key].length) {
          let index_s = obj[key];
          index_s.forEach((index) => {
            let newOther = otherWords.slice();
            newOther.splice(newOther.indexOf(key), 1);
            for (let k = index + 2; k < key.length; k++) {
              let obj_1 = check(key[k], newOther);
              // console.log(key[k], "obj_1", obj_1);
              for (let key_1 in obj_1) {
                if (obj_1[key_1].length) {
                  let index_1_s = obj_1[key_1];
                  index_1_s.forEach((index_1) => {
                    let newOther_1 = newOther.slice();
                    newOther_1.splice(newOther_1.indexOf(key_1), 1);
                    for (let g = index_1 + 2; g < key_1.length; g++) {
                      let obj_2 = check(key_1[g], newOther_1);
                      // console.log(key_1[g], "obj_2", obj_2);
                      for (let key_2 in obj_2) {
                        if (obj_2[key_2].length) {
                          let index_2_s = obj_2[key_2];
                          index_2_s.forEach((index_2) => {
                            let newOther_2 = [word];
                            for (let h = 0; h < key_2.length; h++) {
                              let obj_3 = check(key_2[h], newOther_2);
                              // console.log(key_2[h], "obj_3", obj_3);
                              for (let key_3 in obj_3) {
                                if (obj_3[key_3].length) {
                                  obj_3[key_3].forEach((index_first) => {
                                    if (
                                      index_first - j === g - index_1 &&
                                      k - index === index_2 - h &&
                                      index_first - j &&
                                      k - index
                                    ) {
                                      console.log(index_first - j, g - index_1);
                                      console.log(k - index, index_2 - h);
                                      count++;
                                    }
                                  });
                                }
                              }
                            }
                          });
                        }
                      }
                    }
                  });
                }
              }
            }
          });
        }
      }
      // console.log(letter, obj);
    }
  }
  return count;
}
function check(letter, arr) {
  let obj = {};
  arr.forEach((el) => {
    obj[el] = [];
  });
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    for (let j = 0; j < word.length; j++) {
      if (letter === word[j]) {
        obj[word].push(j);
      }
    }
  }
  return obj;
}
