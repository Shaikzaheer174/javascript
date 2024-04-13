console.log(2 + 6);
console.log(2 - 6);
console.log(2 * 4);
console.log(2 / 4);
console.log(5 % 2);
console.log(-5); //nagate
let a = 7;
console.log(++a); //8
console.log(a++); //8
console.log(a); //9

let num1 = 1,
  num2 = 2;
console.log(num1 == num2); //false
console.log(num1 != num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
console.log(num1 === num2); //false
console.log(num1 !== num2); //true

let one = 1;
let two = 2;
let empty = "";
let zero = 0;

console.log(one && two); //2  //&& operator returns value of the second operand if the first operand evaluates to true
console.log(zero && two); //0  // only in case of 0 or empty string '' , it is false
console.log(empty && two); //''

console.log(5 > 2 && 5 < 3); //false
console.log(5 > 2 || 5 < 3); //true

console.log(!true); //false
console.log(!false); //true

console.log((one = two)); //2

console.log((one += two)); //4  // one += two ==> one =  one + two+
console.log((one -= two)); //2
console.log((one *= two)); //4

console.log(5 & 1); //1

let big;
let number1 = 9;
let number2 = 10;
big = number1 > number2 ? number1 : number2;
console.log(big);//10

