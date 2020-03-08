function arrayChange(inputArray) {
    let count = 0;
    for(let i = 1, length = inputArray.length; i < length; i++){
        if(inputArray[i - 1] >= inputArray[i] ){
            ++inputArray[i--];
            count++
        }
    }
    return count;
}