const number = [1, -6, 2, -5, 3, 4, 5, 5, 6, -3, 8, -4, 9]
for(let i = 0; i < number.length; i++){
    if(number[i]>6){
        break;
    }
    // console.log(number[i]);
}
for(let i = 0; i < number.length; i++){
    if(number[i]<0){
        continue;
    }
    console.log(number[i]);
}