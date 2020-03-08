function evenDigitsOnly(n) {
    let output = true;
    n.toString().split('').forEach(el => { output = !(el % 2) && output})
    return output
}
