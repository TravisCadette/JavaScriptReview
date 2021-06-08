"use strict"

const fruits = [
    "apples", // index 0
    "oranges", // index 1
    "pears", // index 2
    "lemons", // index 3
    "bananas", // index 4
    "pineapples", // index 5
];
const moreFruits = ["strawberries", "blueberries"];
// 1. Regular for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`I love ${fruits[i]}`);
// }
// 2. forEach()
fruits.forEach(function (fruit, index) {
    if (index % 2 === 0) {
        console.log(`I love ${fruit}`);
    } else {
        console.log(`odd index ${index}`);
    }
});
// Refactor to use ternary operator:
fruits.forEach(function (fruit, index) {
    index % 2 === 0 ?
        console.log(`I love ${fruit}`) :
        console.log(`odd index ${index}`);
});
// Expected Output:
// I love apples
// I love pears
// I love bananas
// The .forEach() method can accept named functions as arguments as well (more reusable)
function printFruit(fruit) {
    console.log(fruit);
}
printFruit("apple");
fruits.forEach(printFruit);
moreFruits.forEach(printFruit);
// versus just using anonymous functions
fruits.forEach(function (fruit) {
    console.log(fruit);
});
moreFruits.forEach(function (fruit) {
    console.log(fruit);
});
// The forEach method returns undefined as an output
const numbers = [1, 2, 3, 4, 5];
const anotherNumbers = [6, 7, 8, 9, 10];
// Does forEach return each element in the array or all elements in the array?
let output = numbers.forEach((number) => {
    console.log(number); // produces a side effect
    anotherNumbers.push(number); // this would be another side effect
    // return number; // this is not going to do anything!
});
console.log("output", output); // undefined
console.log(anotherNumbers);
// 3. Filter

const fruits = [
    "apples", // index 0
    "oranges", // index 1
    "pears", // index 2
    "lemons", // index 3
    "bananas", // index 4
    "pineapples", // index 5
];

let filteredFruits = fruits.filter((fruit) => {
    console.log("hello world");
    return fruit.indexOf("p") === 0; // the .filter() method needs to return a boolean
});
console.log(filteredFruits);