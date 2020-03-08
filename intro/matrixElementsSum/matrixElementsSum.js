function matrixElementsSum(matrix) {
    let cols = matrix[0].length;
    let rows = matrix.length;
    let sum = 0;
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let mustSum = true;
            for(let must = 0; must < i; must++){
                if(!matrix[must][j]){
                    mustSum = false
                }
            }
            if(mustSum){
                sum += matrix[i][j]
            }

        }
    }
    return sum;
}
var matrix = [[0, 1, 1, 2],
              [0, 5, 0, 0],
              [2, 0, 3, 3]];

console.log(matrixElementsSum(matrix ))
