function buildPalindrome(st) {
    function check(string){
        return string === string.split('').reverse().join('')
    }
    if(check(st)){
        return st
    }
    for(let i = 0, length = st.length; i < length ; i++){
        let newSt = st + st.slice(0, i + 1).split('').reverse().join('');
        if(check(newSt)){
            return newSt
        }
    }
}