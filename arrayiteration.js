"use strict"

// let carIds = [{
//         carId: 123,
//         style: "sedan"
//     },
//     {
//         carId: 456,
//         style: "convertible"
//     },
//     {
//         carId: 789,
//         style: "sedan"
//     },
//     {
//         carId: 101,
//         style: "minivan"
//     }
// ];

// let result = carIds.every(car => car.carId > 0);

// console.log(result) ;



// let convertibles = carIds.filter(
//     car => car.style === 'convertible'
// );

// console.log(convertibles);


// 1. Use the .forEach() method to log every car to the console. Sample Output:
// { carId: 123, style: 'sedan' }
// { carId: 456, style: 'convertible' }
// { carId: 789, style: 'sedan' }
// { carId: 101, style: "minivan" }

let carIds = [{
        carId: 123,
        style: "sedan"
    },
    {
        carId: 456,
        style: "convertible"
    },
    {
        carId: 789,
        style: "sedan"
    },
    {
        carId: 101,
        style: "minivan"
    }
];

carIds.forEach( car => console.log("Dear Customer, car " + car.carId + " is a " + car.style));




// let result = carIds.every(
//     car => car.carId > 0
// );
// console.log(result);

// let car = carIds.find(
//     car => car.carId > 500
// );
// console.log(car);