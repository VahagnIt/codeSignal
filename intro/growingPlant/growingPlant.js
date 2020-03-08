function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let days = 0;
    for(let height = 0; height < desiredHeight; height += upSpeed){
        days++;
        height -= downSpeed
    }
    return days

}
console.log(growingPlant(100, 10, 910))