function isBeautifulString(inputString) {
    let obj = {};
    for(let i = 0, length = inputString.length; i < length; i++){
        let count = 1;
        let j = i + 1;
        while(inputString[i] === inputString[j]){
            count++;
            i++;
            j = i + 1;
        }
        obj[inputString[i]] ? obj[inputString[i]] += count : obj[inputString[i]] = count
    } 
    let keys = Object.keys(obj).sort();
    let count = obj['a'];
    let char = 'a'.charCodeAt(0) - 1;
    let canBee = true;
    keys.forEach(element => {
        if((element.charCodeAt(0) === char + 1) && obj[element] <= count){
            char = element.charCodeAt(0);
            count = obj[element]
        } else {
            canBee = false
        }
    });
    return canBee
} 
