function isLucky(n) {
    let str = n.toString();
    let sum1 = 0, sum2 = 0;
     for(let i = 0, length = str.length / 2; i < length; i++){
         sum1 += +str[i];
         sum2 += +str[length + i]
     }
     return sum1 === sum2
}
