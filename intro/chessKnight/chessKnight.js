function chessKnight(cell) {
    if(cell.length !== 2){
        return 0
    }
    let obj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8};
    let keys = Object.keys(obj);
    let lettre = cell[0].toLowerCase();
    let index = +cell[1];
    if(index < 1 || index > 8){
        return 0
    }
    let count = 0;
    let start = (index - 2 >= 1) ? index - 2 : 1;
    let stop = (index + 2 <= 8) ? index + 2 : 8;
    console.log(start, stop)
    for(let i = start; i <= stop; i++){
        if(i !== index ){
            let newLet = !((index - i) % 2) ? keys[obj[lettre] - 2] : keys[obj[lettre] - 3];
            console.log(newLet + i);
            newLet && obj[newLet] && count++;
            newLet = !((index - i) % 2) ? keys[obj[lettre]] : keys[obj[lettre] + 1];
            console.log(newLet + i);
            newLet && obj[newLet] && count++;
        }
    }
    return count
}