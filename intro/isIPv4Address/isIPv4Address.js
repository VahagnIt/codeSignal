function isIPv4Address(inputString) {
    let isIpv = true;
    inputString.split('.').forEach((el, i) => {
        isIpv = (!!el.length && el <= 255 && el >= 0) && isIpv
    })
    return inputString.split('.').length === 4 && isIpv
}
