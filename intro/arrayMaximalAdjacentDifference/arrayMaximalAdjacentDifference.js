function arrayMaximalAdjacentDifference(inputArray) {
    let newArr = inputArray.map((el, ind) => {
    return [
        el - (inputArray[ind + 1] !== undefined ? inputArray[ind + 1] : el),
        el - (inputArray[ind - 1] !== undefined ? inputArray[ind - 1] : el),                
        ]
    });
    return Math.max(...newArr.map(el => Math.max(...el)))
}
