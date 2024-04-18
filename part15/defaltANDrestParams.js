// default and rest parameters:

function product(number1, number2) {
  let result = number1 * number2;
  return result;
}

console.log(product(2, 3)); //6
console.log(product(3)); //NaN
console.log(product()); //NaN

console.log(product(2, 3, 4, 4)); //its taking first 2 arguments remaining itd leaving.

//default parameter
function product1(number1, number2 = 1) {
  let result = number1 * number2;
  return result;
}

console.log(product1(2)); //2

// rest parameters
function product2(number1, number2, ...rest) {
  let result = number1 * number2;
  console.log(rest); // [ 4, 2, 2, 4 ]-->the rest parameters are the array stores the n  no.of values which we are passing.
  console.log(arguments); // it is a default object for the function and it stores the parameters which we're passing as arguments //{ 0: 1, 1: 2, 2: 4, 3: 2, 4: 2, 5: 4, callee: (...), Symbol(Symbol.iterator): λ:values}
  for (element of rest) {
    result = result * element;
  }
  return result;
}

console.log(product2(1, 2, 4, 2, 2, 4)); //128
