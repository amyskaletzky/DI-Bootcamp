// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them.What will be the outputs ?
//     ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);        // ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);      // ['USA'] -> wrong it's ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[, ,]];
console.log(newArray);      // [undefined, undefined] 