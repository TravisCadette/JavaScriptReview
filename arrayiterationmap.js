"use strict"

const numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map((number) => {
    return number * 2; // return the transformed element
});

console.log(doubleNumbers)
// OR 
// numbers.map(number => number * 2);

let deciNumbers = numbers.map((number) => {
    return number * 10;
})

console.log(deciNumbers);