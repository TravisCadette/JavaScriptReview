"use strict"

// (condition) ? true-statement : false-statement;
// let message = (price > 10) ? 'expensive' : 'cheap';
// showMessage(message) // expensive

// function greeting(name) {
//     if (name) {
//         return `Hello, ${name}!`;
//     } else {
//         return "Hello, person!"
//     }
// }
function greeting(name) {
    let message = (name.length === 0) ? (`Hello, person`) : (`Hello ${name}`)
    console.log(message)
}

greeting("")