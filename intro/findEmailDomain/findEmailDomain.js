function findEmailDomain(address) {
    let str = address.slice(address.lastIndexOf('@') + 1).split('"').join('')
    return str
}