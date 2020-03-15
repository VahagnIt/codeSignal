function fileNaming(names) {
    let arr = {};
    for(let i = 0, length = names.length; i < length; i++){
        if(names[i] in arr){
            arr[names[i]]++;
            let str = `${names[i]}(${arr[names[i]]})`;
            while(str in arr){
                arr[names[i]]++;
                str = `${names[i]}(${arr[names[i]]})`
            }
            arr[str] = 0
        } else {
            arr[names[i]] = 0
        }
        arr[names[i]] && (names[i] = `${names[i]}(${arr[names[i]]})`)
    }
    return names
}
