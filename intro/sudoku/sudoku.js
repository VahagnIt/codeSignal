function sudoku(grid) {
    let output = true;
    let numbers = [1,2,3,4,5,6,7,8,9];
    console.log(grid)
    for(let rows = 0; rows <= 6; rows += 3){
        for(let i = 0; i <= 6; i += 3){
            let arr = numbers.slice();
            let minimMatrix = [];
            for(let j = rows; j < rows + 3; j++){
               minimMatrix = minimMatrix.concat(grid[j].slice(i ,i + 3))
            }
            minimMatrix.forEach(el => (arr.indexOf(el) !== -1) 
                                        ? arr.splice(arr.indexOf(el), 1)
                                        : null);
            output = (!arr.length) && output
        }
    }
    for(let i = 0; i < 9; i++){
        let arr = numbers.slice();
        grid[i].forEach(el => (arr.indexOf(el) !== -1) 
                                        ? arr.splice(arr.indexOf(el), 1)
                                        : null);
        output = (!arr.length) && output
        let col = [];
        arr = numbers.slice()
        for(let j = 0; j < 9; j++){
            col.push(grid[j][i]);
        }
        col.forEach(el => (arr.indexOf(el) !== -1) 
                                        ? arr.splice(arr.indexOf(el), 1)
                                        : null);
        output = (!arr.length) && output
    }
    return output
}