//What will be logged to the console in each case and why ? 
//Undefined for the first console lofg because personProperty was defined by a Dynamic Property syntax Square BRacket create new property names
//Chia because java script evaluates lastNAme and returns Chia   
const personProperty = "lastName";
const person = {
    firstName: "Hou",
    [personProperty]: "Chia",
}
console.log(person.personProperty);
console.log(person.lastName);
// How would you refactor the lastName property of the following object to use a shorter syntax ?
    const lastName = "Chia";
const person = {
    firstName: "Hou",
    // lastName: lastName,
    lastName,
};