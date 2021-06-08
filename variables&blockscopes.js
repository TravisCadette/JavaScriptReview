// What is block scope ?

    // What kind of scope does the following code have ?

    {
        // What kind of scope is this? Block Scope
    }

// What is function scope ? Is a variable in the function
// What is the difference between block scope versus function scope ?

// What will get logged to the console and why ?  Undefined

    let isSunny = true;

if (isSunny) {
    let greeting = "Today is a sunny day!";
}

console.log(greeting);

// What will get logged to the console and why ? Today is a sunny day
   
let isSunny = true;

if (isSunny) {
    var greeting = "Today is a sunny day!";
}

console.log(greeting);

// What will get logged to the console and why ? 101

    for (var j = 1; j <= 100; j++) {}
console.log(j);

// How would you update the code so that the variable j is not accessible outside the for -loop scope ? change var to let

// What will get logged to the console and why ? 43

const answer = 42;
answer = 43;
console.log(answer);

// What will get logged to the console and why ? Jane because it was changed

    const person = {
        firstName: "John",
        lastName: "Doe",
    };

person.firstName = "Jane";
console.log(person);

// What will get logged to the console and why ? TypeError: Assignment to constant variable. You cannot change const variables

    const person = {
        firstName: "John",
        lastName: "Doe",
    };

person = {
    firstName: "Jane",
    lastName: "Doe",
};

console.log(person);