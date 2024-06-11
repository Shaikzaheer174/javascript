// one dimensional array is a array which contains single value as a element.
//Ex:
let products = [1, "one", true];

// two dimensional array: every element in the array is again a one dimensional array.
let productss = [
  [1, "one", true],
  [2, "two", true],
  [3, "three", false],
  [4, "four", true],
];

console.log(productss[1]); //[ 2, 'two', true ]
console.log(productss[1][1]); //two

// if we want to push elements into the array:
console.log(productss[0].push("hello"));

console.log(productss[0]); //[ 1, 'one', true, 'hello' ]