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

let inventory = carIds.map(car => {
  return {
    carId: car.carId,
    style: car.style,
    isInStock: "true"
  };
});

console.log(inventory)

let string = carIds.map(car => `car ${car.carId} is a ${car.style}`);
 console.log(string)

