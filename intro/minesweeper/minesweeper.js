function minesweeper(matrix) {
    let length = matrix.length;
    let rowLength = matrix[0].length;
    let output = matrix.map(el => matrix[0].map(element => 0))
    for(let row = 0; row < length; row++){
        for(let col = 0; col < rowLength; col++){
            matrix[row - 1] && matrix[row - 1][col-1] && output[row][col]++;
            matrix[row - 1] && matrix[row - 1][col] && output[row][col]++;
            matrix[row - 1] && matrix[row - 1][col+1] && output[row][col]++;
            matrix[row][col-1] && output[row][col]++;
            matrix[row][col+1] && output[row][col]++;
            matrix[row + 1] && matrix[row + 1][col-1] && output[row][col]++;
            matrix[row + 1] && matrix[row + 1][col] && output[row][col]++;
            matrix[row + 1] && matrix[row + 1][col+1] && output[row][col]++;
        }
    }
    return output
}