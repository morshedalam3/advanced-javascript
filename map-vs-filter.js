const number = [1, 7, 9,  4,]
const output = [];
for(let i = 0; i < number.length; i++){
    const element = number[i];
    const result = element * element;

    output.push(result); 
}
// function square(element){
//     return element * element;
// } or line 12-13
// const result = number.map(function square(element){
//     return element * element;
// }) or line 14
// const result = number.map(element => element * element); or line 15
// const result = number.map(x => x * x); 
// const result = number.filter(x => x > 4); (filter give an Array)
// const result = number.find(x => x > 1) (give first number )

console.log(result);