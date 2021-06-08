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


let filteredCarIds = carIds.filter(arrayElement => arrayElement.style === "minivan");

console.log(filteredCarIds);