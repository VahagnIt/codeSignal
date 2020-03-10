function lineEncoding(s) {
    let str = '';
    for(let i = 0, length = s.length; i < length; i++){
        let count = 1;
        let j = i + 1;
        while(s[i] === s[j]){
            count++;
            i++;
            j = i + 1
        }
        str += count > 1 ? count + s[i] : s[i]
    }
    return str
}