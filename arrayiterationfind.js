"use strict"

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
    },
    {
        carId: 678,
        style: "minivan"
    }
];

// .find only brings the first parameter

let findCarIds = carIds.find(arrayElement => arrayElement.style === "sedan");

console.log(findCarIds);