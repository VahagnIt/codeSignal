function electionsWinners(votes, k) {
    let max = Math.max(...votes);
    let isMaxAlone = votes.indexOf(max) === votes.lastIndexOf(max);
    let length = votes.length;
    let count = 0;
    for(let i = 0; i < length; i++){
        (votes[i] + k > max) && count++
    }
    return count || (isMaxAlone && 1) || 0
}