"use strict"

const fruits = [
    "apples", // index 0
    "oranges", // index 1
    "pears", // index 2
    "lemons", // index 3
    "bananas", // index 4
    "pineapples", // index 5
];

let filteredFruits = fruits.filter((fruit) => {
    // console.log("hello world");
    return fruit.indexOf("p") === 0; // the .filter() method needs to return a boolean
});
console.log(filteredFruits);