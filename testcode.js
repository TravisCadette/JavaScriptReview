"use strict"

const fruits = ["apples", "oranges", "pears", "lemons", "bananas", "pineapples"];
// 1. Write a for loop to print each fruit to the console like this:
// I love apples
// I love oranges
// I love pears
// I love lemons
// I love bananas

function displayFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
}
displayFruits("I love" + fruits)

for (let i = 0; i< fruits.length; i++) {
    console.log(`I lobe ${fruits[i]}`);
}

// 2. Use a `.forEach()`
// method to do the same thing as 1.

fruits.forEach(function(fruit)) {
    console.log(`I love ${fruit}`)
};

// 
fruits.forEach(function (fruit, index)) {
    if (index % 2 === 0) {
console.log(`I love ${fruit}`)
    }
    
};

function printFruit(fruit) {
    console.log(fruit);
}

// Print Fruits
fruits.forEach(printFruit);

// 3. Return a list of all fruits that start with the letter "p"

if index 0 = p 

let filteredFruits = fruits.filter((fruit) => fruit.indexOf("p") === 0);
console.log(filteredFruits);

// 4. Return the first fruit from the array that starts with the letter "p"

if index 0 = p break