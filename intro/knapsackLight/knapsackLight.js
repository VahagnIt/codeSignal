function knapsackLight(value1, weight1, value2, weight2, maxW) {
    let can = 0;
    if((value1 >= value2)){
        if(maxW >= weight1){
             can += value1;
             maxW -= weight1;
             if(maxW >= weight2){
                 can += value2
             }
        }
    } else{
        if(maxW >= weight2){
             can += value2;
             maxW -= weight2;
             if(maxW >= weight1){
                 can += value1
             }
        }
    }
return can
}