function digitDegree(n) {
    let count = 0;
    while(n.toString().length !== 1){
        let arr = n.toString().split('');
        n = arr.reduce((a, b) => +a + +b);
        count++;
    }
    return count
}