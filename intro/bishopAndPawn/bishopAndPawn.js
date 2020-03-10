function bishopAndPawn(bishop, pawn) {
    let obj = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g:7, h: 8
    }
    let keys = Object.keys(obj);
    let arr = [];
    let bishopLetter = bishop[0];
    let bishopIndex = +bishop[1];
    let i = 1;
    while(bishopIndex - i){
        let str = keys[obj[bishopLetter] - i - 1];
        str && arr.push(str + (bishopIndex - i));
        str = keys[obj[bishopLetter] + i - 1];
        str && arr.push(str + (bishopIndex - i));
        i++
    }
    i = 1;
    while(bishopIndex + i < 9){
        let str = keys[obj[bishopLetter] - i - 1];
        str && arr.push(str + (bishopIndex + i));
        str = keys[obj[bishopLetter] + i - 1];
        str && arr.push(str + (bishopIndex + i));
        i++
    }
    return arr.indexOf(pawn) !== -1
}