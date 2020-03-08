function extractEachKth(inputArray, k) {
    for(let i = k-1; i < inputArray.length; i += k-1){
        inputArray.splice(i, 1)
    }
    return inputArray
}