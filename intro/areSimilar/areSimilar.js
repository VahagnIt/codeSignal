function areSimilar(a, b) {
    if(a.length !== b.length || (a.reduce((a, b) => a + b) !== b.reduce((a, b) => a + b))){
        return false
    }
    let indexes = 0;
    for (let i = 0; i < a.length; i++) {
        if(b.indexOf(a[i]) === -1 || a.indexOf(b[i]) === -1){
            return false
        }
          indexes += a[i] === b[i] ? 0 : 1;
          if( indexes > 2 ){
              return false
          }
    }
    return true
}
