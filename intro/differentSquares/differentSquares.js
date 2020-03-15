function differentSquares(matrix) {
    let obj = {};
    for(let i = 0, m_length = matrix.length - 1; i < m_length; i++){
        for(let j = 0, row_length = matrix[0].length - 1; j < row_length; j++){
            let str = '';
            for(let walk = 0; walk < 2; walk++){
                str += matrix[i + walk][j];
                str += matrix[i + walk][j + 1];
            }
            obj[str] = 1
        }
    }
    return Object.keys(obj).length
}