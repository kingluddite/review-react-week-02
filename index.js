// let's learn about destructuring
<<<<<<< Updated upstream
console.log('hello world')
=======
// console.log('hello world')

// object destructuring
const car = {
  model: 'ferrari',
  numOfDoors: 2,
  year: 1959
}

// const model = car.model;
// console.log(model);

const {model: superModel, numOfDoors, year} = car;
console.log(superModel)
console.log(numOfDoors)
console.log(year)




// const person = ['joe', 20];
// // const name = person[0];
// // const age = person[1];
// // const [name, age] = person;
// const [age, name] = person;

// console.log(name, age);
>>>>>>> Stashed changes
