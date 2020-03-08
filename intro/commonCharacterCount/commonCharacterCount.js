function commonCharacterCount(s1, s2) {
    let arrS1 = [...s1];
    let arrS2 = [...s2];
    let count = 0;
    arrS1.forEach(el => {
        (arrS2.indexOf(el) !== -1) && (arrS2.splice(arrS2.indexOf(el), 1) && count++)
    });
    return count;
}
