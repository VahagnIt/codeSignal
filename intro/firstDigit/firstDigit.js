function firstDigit(inputString) {
    for(let i = 0, length = inputString.length; i < length; i++){
        if(inputString[i]===' ' || isNaN(inputString[i])){
            continue
        }
        return inputString[i]
    }
}
