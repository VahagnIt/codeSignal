function alternatingSums(a) {
    if(!a.length){
        return [0,0]
    }else if(a.length === 1){
        a.push(0);
        return a
    } else if(a.length === 2){
        return a
    }
     let sum1 = a.filter((el, i) => !(i % 2)).reduce((a, b) => a + b);
     let sum2 = a.filter((el, i) => i % 2).reduce((a, b) => a + b);
     return [sum1, sum2]
}
