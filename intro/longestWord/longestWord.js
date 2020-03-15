function longestWord(text) {
    let max = 0;
    let output = '';
    text = text.split(' ')
    .map(el => el.trim()).join(',');
    text.split(',')
    text = text.replace(/[^a-zA-Z0-9]+/g, ",").split(',')
    .forEach(element => {
       // element = element.replace(/[^a-zA-Z0-9]+/g, "");
           if(element.trim().length > max){
               max = element.trim().length;
               output = element.trim()
           }
    });
    return output
}