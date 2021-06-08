"use strict"

// const func = (x, y) => {
//     return x + y;
// };

// const greeting = (name) => {
//     return `Hello ${name}`;
// }

// console.log(greeting("Travis"))

// ----------------------------------------------

// function addNums(a, b, c) {
//     if (a < 0) {
//         let sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
//     } else {
//         let sum = a + b + c;
//     }
//     console.log(sum);
// }

// const addNums = (a, b, c) => {

//     let sum = 0;

//     if (a < 0) {
//         sum = Math.abs(a) + Math.abs(b) + Math.abs(c);
//     } 
//     else {
//         sum = a + b + c;
//     }
//     console.log(sum);
// }

// console.log(addNums(8, 5, 20));

//________________________________________________



// function maxOfTwo(a, b) {
//     if (a === b) {
//         return "Please provide different values for a and b";
//     } else if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

const maxOfTwo = (a,b) => {
    if (a === b) {
        return "Please provide different values for a and b";
    } else if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(maxOfTwo(5,8));