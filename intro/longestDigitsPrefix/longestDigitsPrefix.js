function longestDigitsPrefix(inputString) {
    let max = 0;
    let str = '';
    let j = 0;
    while(!isNaN(inputString[j]) && inputString[j].trim()){
        max++;
        str += inputString[j++]
    }
    return str
}