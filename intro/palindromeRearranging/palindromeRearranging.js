function palindromeRearranging(inputString) {
    let isOdd = !!(inputString.length % 2);
    let count = 0;
    let arr = [];
    for(let i = 0, length = inputString.length; i < length; i++){
        let spliced = inputString.split(inputString[i]).join('').length;
        if((spliced === 0)){
            return true
        }
        let conf = !((length - spliced) % 2);
        !conf && (arr.indexOf(inputString[i]) === -1) && count++;
        arr.indexOf(inputString[i]) === -1 && arr.push(inputString[i]);
    }
    return (isOdd && (count === 1)) || (!isOdd && (count === 0))
}
