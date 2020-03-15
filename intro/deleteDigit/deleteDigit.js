function deleteDigit(n) {
    let arr = n.toString().split('');
    let max = 0;
    for(let i = 0, length = arr.length; i < length; i++){
        let newArr = arr.slice();
        newArr.splice(i, 1);
        let num = +newArr.join('');
        max = num > max ? num : max;
    }
    return max
}
