function messageFromBinaryCode(code) {
    let message = ''
    for(let i = 0, length = code.length; i < length; i += 8){
        let num = code.slice(i, i + 8)
        message += String.fromCharCode(parseInt(num, 2))
    }
    return message
}