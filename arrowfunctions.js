"use strict"

// What are some benefits of using an arrow function?

// Comvert the anonymous function below to use the arrow function syntax:

const flowers = [
    "rose",
    "sunflower",
    "daisy"
];

flowers.forEach(function (flower) {
    console.log(flower);
});

flowers.forEach ((flower) => {console.log(flower);});