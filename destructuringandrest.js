"use strict"

// Destructure the name, title, and city properties of the following object:
    const person = {
        name: "Hou Chia",
        title: "software engineer",
        city: "Cleveland, OH",
    };

    const {name, title, city} = person 

// solution here

console.log(person.name); // outputs "Hou Chia"
console.log(person.title); // outputs "software engineer"
console.log(person.city); // outputs "Cleveland, OH"

console.log(person)

//What will be logged to the console and why? 10,20,40

const [first, second, , fourth] = [10, 20, 30, 40];
console.log(first);
console.log(second);
console.log(fourth);

// What will be logged to the console and why? the first number and an array of the rest
const [first, ...restOfItems] = [10, 20, 30, 40];
console.log(first);
console.log(restOfItems);

// Why is the rest operator useful? 
// The rest operator is useful because it help group the rest o the object into an array

//What will be logged to the console in each case and why?
// John Doe { title: 'instructor', city: 'Miami, FL' } this is because of the destructuring of the object and putting the rest of the expressiom into an array
const person = {
    firstName: "John",
    lastName: "Doe",
    title: "instructor",
    city: "Miami, FL",
};

const {
    firstName,
    lastName,
    ...otherInfo
} = person;

console.log(firstName, lastName, otherInfo);

//Use the spread operator to make a copy of the following array:
    const numbers = [1, 2, 3, 4, 5];

// solution here
const [...restOfItems] = [1, 2, 3, 4, 5];


const newNumbers = restOfItems;


console.log(newNumbers) // should output [1, 2, 3, 4, 5]

//Use the spread operator to clone the title and city properties from the person object into the newPerson object:
const person = {
    firstName: "John",
    lastName: "Doe",
    title: "instructor",
    city: "Miami, FL",
};

const {
    firstName,
    lastName,
    ...restOfItems
} = person;
const newPerson = {
    // your solution here
    firstName: "Jane",
    lastName: "Random",
    ...restOfItems
};

console.log(newPerson) // should output { firstName: "Jane", lastName: "Random", title: "instructor", city: "Miami, FL" } 