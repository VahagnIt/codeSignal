function alphabeticShift(inputString) {
    return String.fromCharCode(...inputString.split('').map(el => el.charCodeAt(0) === 122 ? 97 : el.charCodeAt(0) + 1 ))
}
