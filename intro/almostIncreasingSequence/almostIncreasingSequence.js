function almostIncreasingSequence(sequence) {
    let length = sequence.length;
    for(let i = 0; i < length - 1; i++){
        if(sequence[i] >= sequence[i + 1]){
            if(sequence.length === length){
                sequence.splice(sequence[i - 1] && (sequence[i + 1] <= sequence[i - 1]) ? (i-- + 1) : i--, 1);
                i--
            } else {
                return false
            }
        }
    }
    return  true
}
