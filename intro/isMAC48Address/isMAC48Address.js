function isMAC48Address(inputString) {
    return !!inputString.match(/^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/g)
}