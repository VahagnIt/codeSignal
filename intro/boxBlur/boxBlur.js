function boxBlur(image) {
    let output = [];
    let length = image.length;
    

     for(let row = 0; row <= length - 3; row++){
         let dir = 0;
         let arr = [];
         
         while(image[0].length - dir >= 3){
             let sum = 0;
             for(let i = 0; i < 3; i++){
                 sum += image[row + i].slice( dir, dir + 3).reduce((a, b) => a + b)
             }
             arr.push(Math.floor(sum / 9));
             dir++
         }
         output.push(arr)
     }
     return output
 }
