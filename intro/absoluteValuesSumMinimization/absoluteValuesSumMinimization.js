function absoluteValuesSumMinimization(a) {
    let arr = a.map(el => {
        let sum = 0;
        for(let i = 0, length = a.length; i < length; i++){
             sum += Math.abs(a[i] - el)
         }
         return sum
    });
    return a[arr.indexOf(Math.min(...arr))]
     
 }
