function reverseInParentheses(inputString) {
    inputString = inputString.split('');
    let start = inputString.lastIndexOf('(');
    if (start === -1) {
        return inputString.join('')
    }
    while (start >= 0) {
        let end = inputString.indexOf(')', start);
        let str = inputString.splice(start, end - start + 1);
        str = str.reverse().slice(1, str.length - 1);
        inputString.splice(start, 0, ...str);
        start = inputString.lastIndexOf('(');
    }
    return inputString.join('')
}
