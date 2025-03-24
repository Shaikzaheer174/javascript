console.log(2 + 6);
console.log(2 - 6);
console.log(2 * 4);
console.log(2 / 4);
console.log(5 % 2);
console.log(-5); //nagate

console.log(2 + "sdd"); //2sdd
console.log(2 - "sdd"); //NaN

console.log("sdw" + 2); //sdw2
console.log("sdw" - 2); //NaN

let ek = 1;
let doh = 2;
console.log(ek + doh + "sdd"); //3sdd   --> bodmas, left to right. when we have same operator more than one time then it calculates from left to right.

console.log(1 + 2 + "ee" + 3 - 4 + "sdd" + 9 + 8); //NaNsdd98

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

console.log(one && two); //2  //&& operator returns value of the second operand if the first operand evaluates to true else it returns first value. and it does not required to evaluate the second value (short-circuit evaluation).
console.log(zero && two); //0  // only in case of 0 or empty string '' , it is false
console.log(empty && two); //''
console.log(5 && 6); //6
console.log(5 && "");
console.log(5 && 0);
console.log(undefined && true); //false   in javascript,the following values are considered as falsy, they are false, 0, '', null, undefined, NaN and all other values are are considered as truthy.
console.log(0 || ""); //''  in first case it is false so it returned the second value.
console.log(1 || 22); //1

console.log(5 > 2 && 5 < 3); //false
console.log(5 > 2 || 5 < 3); //true

console.log(!true); //false
console.log(!false); //true
console.log(!!false); //false

console.log((one = two)); //2

console.log((one += two)); //4  // one += two ==> one =  one + two+
console.log((one -= two)); //2
console.log((one *= two)); //4

console.log(5 & 1); //1

let big;
let number1 = 9;
let number2 = 10;
big = number1 > number2 ? number1 : number2;
console.log(big); //10

console.log(5 & 1); //1
console.log(5 | 1); //5
console.log(5 ^ 1); //4
console.log(5 << 1); //10
console.log(5 >> 1); //2
console.log(5 >>> 1); //2
