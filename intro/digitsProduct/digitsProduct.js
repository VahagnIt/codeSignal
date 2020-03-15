function digitsProduct(product) {
    if(!product){
        return 10;
    }  else if(product === 1){
        return 1
    }
    let initialPr = product;
    let str = '';
    for(let i = parseInt(product/2); i > 1; i--){
        if(parseInt(product / i) === product / i){
            console.log(product, i, product/i)
            if(product/i > 9){
                return -1
            }
            str += product/i;
            if(i > 9){
                product = i;
                i = parseInt(product/2) + 1;
            } else {
                if(i > 9){
                     return -1
                }
                str += i
                break;
            }
        }
    }
    if(!str || str.split('').reduce((a, b = 1)=>a*b) !== initialPr){
        return -1
    }
    console.log(str)
    let min = +str.split('').sort().join('');
    let newArr = [str];
    for(let strings = 0; strings < newArr.length; strings++){
        let arr = newArr[strings].split('');
        console.log(arr)
        for(let i = 0, length = arr.length; i < length - 1; i++){
            for(let j = i + 1; j < length; j++){
                if((+arr[i] * +arr[j] <= 9) && (+arr[i] * +arr[j] > 0) && (+arr[i] !== 1) && (+arr[j] !== 1)){
                    let myArr = arr.slice();
                    myArr.push('' + (+arr[i] * +arr[j]))
                    myArr[i] = myArr[j] = 0;
                    let newStr = myArr.join('').replace(/0/g, "");
                    !newArr.includes(newStr) && newArr.push(newStr)
                    if(+newStr.split('').sort().join('') < min){
                        min = +newStr.split('').sort().join('');
                    }
                }
            }
        }
    }
    return min
}