// functions:
// to perform a particular task we write a code block called as a function
// block in the sense the code bewteen { ...}
// functions are use to reuse the code. //code reusability.

function sum(num1, num2) {
  let result = num1 + num2;
  return result;
}

console.log(sum(1, 2)); //3
console.log(sum(10, 10)); //20

let result = sum(1, 2);
console.log(result); //3

// what is function expression --> assigning function to a variable
let add = function addition(num1, num2) {
  let result = num1 + num2;
  return result;
};

console.log(add(1, 2)); //3
