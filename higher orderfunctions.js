"use strict"

const numbers = [1, 2, 3, 4, 5];
const anotherNumbers = [6, 7, 8, 9, 10];

// Does forEach return each element in the array or all elements in the array?
let output = numbers,forEach((number) => {
    console.log(number); // produces a side effect
    anotherNumbers.push(number); // this would be another side effect
    return number; // this is not going to do anything

})

// console.log ("output", output);

console.log(anotherNumbers);

// 3. Filter
