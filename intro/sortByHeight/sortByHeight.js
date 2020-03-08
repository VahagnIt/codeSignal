function sortByHeight(a) {
    let trees = [];
    a.forEach((el,i) =>{
        (el === -1) && trees.push(i)
    });
    let newArr = a.filter(el => el >= 0).sort((a, b) => a - b);
    trees.forEach(el => {
        newArr.splice(el, 0, -1)
    });
    return newArr
}
