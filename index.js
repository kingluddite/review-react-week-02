let foundDogs = [
  {
    breed: 'Beagle',
    color: 'white',
  },
  {
    breed: 'Chihuahua',
    color: 'yellow',
  },
  {
    breed: 'Pug',
    color: 'black',
  },
]

function findMyDog(dog, index) {
  if (dog.breed === "Pug") {console.log(index);}
  return dog.breed === "Beagle"
}
let myDog = foundDogs.find((dog, index) => findMyDog(dog, index))
console.log(myDog);

// filter out a property who are developers

// let team = [
// 	{
//   		name: "aaron",
//     	position: "developer"
//  	 },
//   	{
//   		name: "beth",
//     	position: "ui designer"
//   	},
//   	{
//   		name: "cara",
//     	position: "developer"
//   	},
//  	{
//   		name: "daniel",
//     	position: "content manager"
//  	 },
//   	{
//   		name: "ella",
//     	position: "cto"
//   	},
//   	{
//   		name: "fin",
//     	position: "backend engineer"
//   	},
//   	{
//   		name: "george",
//     	position: "developer"
//   },

// ]

// let developers = team.filter(member => member.position !== 'developer');
// console.log(developers);
// filter out kids (condition age between 0 and 4)
// let people = [
//   {name: "aaron",age: 65},
//   {name: "beth",age: 2},
//   {name: "cara",age: 13},
//   {name: "daniel",age: 3},
//   {name: "ella",age: 25},
//   {name: "fin",age: 1},
//   {name: "george",age: 43},
// ]
// const kids = people.filter(kid => kid.age <= 3)
// console.log(kids)
