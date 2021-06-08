/**
 * JavaScript Review
 **/

/*
 * PROMPT 1:
 *
 * What's the difference between the =, ==, and ===?
 * const number = 2; nember is set the value of 2
 * console.log(2 == "2"); true
 * console.log(2 === "2"); false
 */



/*
 * PROMPT 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */

let city = 3
const name = 6
var deed = 8



/*
 * PROMPT 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add 5 to your variable
 *   - subtract 8 from your variable
 *   - multiply your variable by 7
 *   - divide your variable by 10
 *   - calculate the remainder of dividing your variable by 5
 * You're encouraged to print the output at each step to the console so you can see what's happening.
 */



let mathP = 10

mathP += 5

console.log(mathP)

mathP -= 8

console.log(mathP)

mathP *= 7

console.log(mathP)

mathP /= 10

console.log(mathP)

mathP %= 5;

console.log(mathP)



/*
  PROMPT 4:
  Use a console.log to print out "Aloha! Hou, how're you doing today? " by using the given variables. 
  Try using 1. string concatenation and 2. template literals to construct your strings. 
  
  const name = "Hou";
  const greeting = "Aloha!";
*/

const name = "Hou";
const greeting = "Aloha!";

console.log(`${greeting} ${name}, how're you doing today?`)





/*
  PROMPT 5:
  Research as many ways as you can for adding 1 to the number variable.
  Then, console.log the phrase "1 + 1 is 2" by using the updated value of the number variable.
  For example, one way we can increment the number variable by 1 is by using this syntax:
  number = number + 1;
  console.log(`0 + 1 is ${number + 1}`);
  
  let number = 0;
*/
let number = 0;
number = number + 1;
number = number++
number = ++number
console.log(`0 + 1 is ${number + 1}`);




/*
  PROMPT 6:
  Use the typeof operator to find the data type of the following variables, formatting like so: "clearancePrice is a number"
  Mozilla Developer Network (MDN) is a widely popular JavaScript documentation: https://developer.mozilla.org/en-US/
  Try looking up how to use the typeof operator with Google. How would you structure your search term? Which websites are on the first page of the Google results?
  
  const lifeIsGood = true;
  const discount = 10;
  const myName = "Bob";
  const plant = { 
    name: "rose",
    color: "red",
  };
*/

const lifeIsGood = true;
console.log(lifeIsGood)
const discount = 10;
const myName = "Bob";
const plant = {
    name: "rose",
    color: "red",
};




/*
 * PROMPT 7:
 *
 * Write a function, using the function keyword. Call the function "difference". It should accept two numbers and compute    
 * their difference. 
 * 
 * If either of the input is not a number, the function should return an error instead: "Input(s) must be a number!"
 *
 * Examples: 
 * difference("hello", 3) // "Input(s) must be a number!"
 * difference(3, 5) // 2
 * difference(5, 3) // 2
 *
 * Now, write the same function using the arrow syntax.
 */



/*
 * PROMPT 8:
 *
 * Create a function called printMessageLength. This function should accept a parameter
 * called message. When invoked and passed a string, print 'The message: {message}
 * is 7 characters long'.
 *
 * Examples:
 * printMessageLength("hello") => "The message: hello is 5 characters long".
 * 
 * Remember you can always look things up in Google if you're unsure how to find the length of a string in JavaScript.
 *
 * Now, write the same function using the arrow syntax.
 */



/*
 * PROMPT 9:
 * Update the printMessageLength() function that you created in the previous prompt such that if the message contains 
 * more than 10 characters, then it should output a different message.
 *
 * Examples:
 * printMessageLength("hello") => "The message: hello is 5 characters long".
 * printMessageLength("hello world") => "The message: hello world is too long!".
 *
 * Update the arrow version of your function too.
 */



/*
 * PROMPT 10:
 * Write a JavaScript function called greeting()
 * It should accept hour as the parameter
 * If the hour is less than 12, return a "Good morning" greeting
 * If the hour is between 12 and 18, return a "Good afternoon" greeting
 * If the hour is between 18 and 24, return a "Good night" greeting
 * Otherwise return "Invalid hour input".
 *
 * Now, write the same function using the arrow syntax.
 */



/*
 * PROMPT 11:
 *
 * Print "apple" from each of the arrays below to the console.
 */

const array1 = ["apple", "pear", "strawberry", "grape"];
const array2 = [
    ["strawberry", "grape"],
    ["rambutan", "durian"],
    ["orange", "apple"]
];
const array3 = [
    ["strawberry", ["pineapple"]],
    ["grape", ["pear", ["apple"], "kiwi"]]
];



/*
 * PROMPT 12:
 *
 * Print "f" to the console.
 *
 * const letters = ["a", "b", "c", "d", "e", "f"];
 */




/*
 * PROMPT 13:
 *
 * Use [array methods](https://www.w3schools.com/js/js_array_methods.asp) to answer the subprompts below.
 * - Remove "Hou" from the houInfo array
 * - Update "Cleveland" to "NYC"
 * - Add "Hou Chia" to the end of the array
 * The final array should look like this: ["Programming Instructor", "NYC", "Hou Chia"]
 * Please feel free to look up array methods that you can use to accomplish the transformation above.
 */

const houInfo = ["Hou", "Programming Instructor", "Cleveland"];



/*
 * PROMPT 14:
 *
 * Write a for loop that counts from 0 to 10, printing each number to the
 * console.
 */



/*
 * PROMPT 15:
 *
 * Write a for loop that counts down from 10 to 0, printing each number to the
 * console.
 */


/*
 * PROMPT 16:
 *
 * Write a for loop that counts from 0 to 50 in increments of 2, printing each
 * number to the console.
 */


/*
 * PROMPT 17:
 *
 * Write a for loop that counts from -10 to 10, printing each number to the
 * console.
 */



/*
 * PROMPT 18:
 *
 * 1. Create a variable called sum (make sure sum is defined outside of your loop).
 * 2. Create a loop that counts from 1 to 10, incrementing by 1.
 * 3. On each iteration of the loop, add i to the sum variable in step 1.
 * 4. After your loop, print the  * value of sum to the console.
 *
 */



/*
 * PROMPT 19:
 *
 * Create a function that counts from 0 to 10. 
 *    - If the value of i is even, print out "i is even"
 *    - otherwise, print out "i is odd"
 * How would you modify your function so that it counts from 0 to n, where n is a positive integer?
 */



/*
 * PROMPT 20:
 *
 * Use the `.forEach()` method to print out each item in the array below
 * 
 */

const letters = ["h", "i", "j", "k", "l", "m", "n"];

/*
 * PROMPT 21:
 *
 * Write a for loop that sums the values in the below array.
 */
const numbers = [32, 91, 34, 7, 12];


/*
 * PROMPT 22:
 *
 * Write a function that accepts an array of numbers and returns the sum of the numbers in the array.
 * Test it out with different arrays to make sure it works properly.
 */


/*
 * PROMPT 23:
 *
 * Use a while loop to count from 0 to 150.
 */


/*
 * PROMPT 24:
 *
 * Create a function called reverseString. This function should take
 * a parameter called message and return the string reversed (hint: look up some ways of doing this.)
 * Examples:
 * reverseString("hello") => olleh
 * reverseString("98765") => 56789
 *
 * If the function is invoked without an argument, default the message parameter to "hello"
 */



/*
 * PROMPT 25:
 *
 * Given the following array,
 *
 * const numbers = [32, 91, 34, 7, 12]
 * 
 * Use an appropriate array iteration method to:
 * i. return an array of numbers greater than 30
 * ii. return the first element in the array that's greater than 30
 * iii. return the following transformed array:
 * [1024, 8281, 1156, 49, 144], where each element is the square of each number in the `numbers` array.
 */



/*
 * PROMPT 26:
 *
 * Write a function, arrayify, that takes a string and returns an array of every word in
 * the string.
 * arrayify("write a useful function") => ["write", "a", "useful", "function"]
 */



/*
  PROMPT 27:
  Write a function that logs all numbers from 1 - 100.
  - If a number is divisible by 3 log "Fizz" instead of the number.
  - If a number is divisible by 5 log "Buzz" instead of the number.
  - If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
*/