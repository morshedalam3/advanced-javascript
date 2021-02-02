// 0 == false => true
// 0 === true => false
// 1 == true => true
// 1 === true => false
// 2 == true => false
// == means only chack value. === means chack both value & type like string or Boolean
let num1 = 2;
let num2 = 2;
if(num2 == num1){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}