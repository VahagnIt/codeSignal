let array = ["aba", "aa", "ad", "vcd", "aba"];
    function allLongestStrings(inputArray) {
          let max = Math.max(...inputArray.map(el => el.length));
          return inputArray.filter(el => el.length === max)
    }
    console.log(allLongestStrings(array))
