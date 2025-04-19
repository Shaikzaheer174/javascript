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
console.log(~5); // -6  (formula: ~x === -(x+1))

// Short-Circuit
function sayHi() {
  console.log("Hello");
}
console.log(false && sayHi()); // false
console.log(true || sayHi()); // true
console.log(true && sayHi()); // undefined

// OR returns first truthy value
console.log(0 || false || "hello"); // "hello"

// AND returns first falsy value
console.log("foo" && 0 && "bar"); // 0

let val = null ?? "default";
console.log(val); // "default"

// practice:
// Type Coercion and implicit conversion quests:
console.log([] + {});
//[] → empty array → coerced to "" (empty string),
// {} → object → coerced to "[object Object]"
// Final result: "" + "[object Object]" → '[object Object]'

console.log([] == false);
// [] becomes "" when compared
// false becomes 0
// "" → coerced to 0
// So: 0 == 0 → true

console.log(null == 0);
// Special case: null only equals undefined with ==
// null is not coerced to 0
// So: null == 0 → false

console.log([] == ![]);
// ![] → false (because array is truthy, negation makes it false)
// So this becomes: [] == false
// [] becomes "" when compared
// false becomes 0
// "" → coerced to 0
// 0 == 0 → true

console.log({} + []); // {} + [] → "[object Object]"
// Expression    	Output	          Why?
// {} + []         	0	              {} treated as block, +[] → 0
// ({} + [])	    "[object Object]"	   object + array → coerced to string. Yahan situation badal jaati hai: console.log(...) is an expression {} is now treated as an object literal

null == undefined; // ✅ true
null == 0; // ❌ false
null == false; // ❌ false
null == ""; // ❌ false
null == null; // ✅ true
console.log(undefined == undefined); // ✅ true

console.log([1, 2] == "1,2"); // true
// [1, 2] is coerced to "1,2" when compared with string

console.log({ name: "alak" } + [1, 2, 3]); //'[object Object]1,2,3'
//ou're trying to add an object and an array — which sounds weird, but JavaScript tries to coerce types when using the + operator.
//  an object, and when you use it with +, JavaScript tries to coerce it into a primitive (usually a string).
// An object coerces to "[object Object]" when used in a string context.
// Note: The {} by itself is interpreted as a block unless wrapped in parentheses. So technically, this only works in an expression context, like inside a console.log().
// an array, and when coerced to a string   so '[object Object]1,2,3'

console.log([] - []);
console.log(Number([11]) + Number([10])); // 21  -->When you convert an array to a number, JavaScript first converts it to a string, then to a number

console.log(null + 1);
console.log([] + null + 1); // 'null1'  // [] + null = 'null' (array coerced to string) then 'null' + 1 = 'null1'

console.log(!!"false" == !!"true"); //?
console.log(0 || ("0" && {})); //{}  // {} is truthy, so it returns the object itself

console.log(0 == "0"); // ?

const aq = {};
const b = { key: "b" };
const c = { key: "c" };
aq[b] = 123;
aq[c] = 456;
console.log(aq[b]); //?
console.log(NaN === NaN); //?

let foo = { n: 1 };
let bar = foo;
foo.x = foo = { n: 2 };

console.log(foo); // ?
console.log(bar); // ?

let count = 0;
(function recursive() {
  if (count === 3) return;
  console.log(count++);
  recursive();
})();

let z = [1, 2, 3];
z[10] = 99;
console.log(z.length);
console.log(z[6]);

(function () {
  var x = (xx = 5);
})();
console.log(typeof xx);
console.log(typeof x);
