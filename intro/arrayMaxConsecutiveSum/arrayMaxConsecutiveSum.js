function arrayMaxConsecutiveSum(inputArray, k) {
    let max = 0;
    for(let i = 0, length = inputArray.length - k+1; i < length; i++ ){
        let sum = inputArray.slice(i, i+k).reduce((a, b) => a+b);
        if(sum > max){
            max = sum
        }
         
    }
    return max
}