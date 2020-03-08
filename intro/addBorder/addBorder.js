function addBorder(picture) {
    picture = picture.map(el => '*' + el + '*');
    let str = '*'.repeat(picture[0].length);
    picture.push(str);
    picture.unshift(str);
    return picture
}
