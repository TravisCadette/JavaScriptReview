"use strict"

const person = {
    name: "Hou",
    age: 33,
    canDrive: null   
};

(person.age >= 16) ? person.canDrive = true: person.canDrive = false

console.log(person.canDrive)