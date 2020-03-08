function avoidObstacles(inputArray) {
    let count = 1;
    let maxCount = count + 1;
    console.log(inputArray.sort((a, b) => a - b))
      inputArray.sort((a, b) => a - b).forEach(el => {
          if(inputArray.indexOf(el + 1) !== -1){
              count++
          } else {
              maxCount = count >= maxCount ? count + 1: maxCount;
              count = 1;
          }
      });
      for(let i = 1, length = Math.max(...inputArray); i < length; i++){
            if(inputArray.indexOf(i * maxCount) !== -1){
                maxCount++;
                i = 0
            }
      }
      return maxCount
 }
