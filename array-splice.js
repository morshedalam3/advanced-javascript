const num = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 11, 12, 12 ];
// const part = num.slice(3, 5);
const removed = num.splice(3, 5, 77, 88);
// console.log(removed);
// console.log(num);
const together = num.join("number, ")
console.log(together)