// types of functions

//  named function
let namedFunction = function sum(num1, num2) {
  let result = num1 + num2;
  return result;
};

// anonymous function
let anonymousFunction = function (num1, num2) {
  let result = num1 + num2;
  return result;
};
console.log(anonymousFunction(12, 33)); //45

// immediately invoked function expression IIFE:
// no -reusability
//we're we have written there itself it execute.

(() => {
  console.log("hello world!"); //hello world
})();

// parameters passing IIFE function
((num1, num2) => {
  console.log(num1 + num2); //33
})(11, 22);

// arrow function: or flat arrow function
var arrowFunction = (num1, num2) => {
  console.log(num1 + num2);
};
arrowFunction(5, 5); //10
//1. arrow function if only one statement in function body
var arrowfun = (a, b) => "hello world!";
console.log(arrowfun(1, 3)); //'hello world!'

// 2. if only have one parameter
var arrowFunc2 = (num1) => "hello tsy";
console.log(arrowFunc2(3)); //'hello tsy'
