var x = 9;
console.log(typeof x); //number

var name = "javascript";
console.log(typeof name); //string

var flag = false;
console.log(typeof flag); //boolean

var undo;
console.log(undo); //undefined
console.log(typeof undo); //undefined  here type also undefined and value also undefined.

var nulll = null;
console.log(nulll); //null  -->  means empty
console.log(typeof nulll); //"object"

let nan = NaN;
console.log(typeof nan); // "number"  --> Even though it's "Not a Number", typeof says "number" – weird but true.

var names = ["Javascript", "angular", "HTML"];
console.log(typeof names); //object
console.log(names); //[ 'Javascript', 'angular', 'HTML' ]

var personObject = {
  // group of key value pairs we can store in
  name: "alexa",
  age: 18,
  hobby: "reading books",
};
console.log(typeof personObject); //object
console.log(personObject); //{ '1': 'one', name: 'alexa', age: 18, hobby: 'reading books' }

let ArrayOfObjects = [
  { name: "dev", stack: "fullstack", experiece: 2 },
  { name: "engineer", stack: "frontend", experiece: 3 },
  { name: "programmer", stack: "java backend", experiece: 5 },
  { name: "coder", stack: "python", experiece: 9.6 },
  { name: "hello world", stack: "CSE" },
  function hello() {
    {
      console.log("hello world");
    }
  },
];

console.log(ArrayOfObjects[1].name); //engineer
console.log(ArrayOfObjects[3].experiece); //9.6
let wish = ArrayOfObjects[5];
wish(); //'hello world'
ArrayOfObjects[5](); //'hello world'

// template literal strings:
let stack = "Javascript";
console.log(`hello ${stack}`); //hello Javascript

// symbol type:
// A Symbol is a primitive type introduced in ES6. It's used as a unique identifier. Even if two symbols have the same description, they are not equal.
// Symbols are often used to create unique identifiers for object properties, avoiding name clashes in objects and libraries.
// When we say "symbols are immutable," it means:You can't change its internal value or description.
// They are not enumerable, meaning they won't show up in loops or when converting an object to JSON.
// Symbols are not automatically converted to strings, which helps prevent accidental string coercion issues.
// This makes them useful for defining private properties or methods in objects.
// Symbols are not included in JSON.stringify() output, making them suitable for private data.
// They are often used in libraries and frameworks to create unique keys for internal properties or methods, ensuring no conflicts with user-defined properties.
// Symbols can be created using the Symbol() function, which generates a new unique symbol each time it's called.
// This means that even if two symbols have the same description, they are still different symbols.
// Symbols can be used as property keys in objects, allowing for the creation of private or unique properties.

let symA = Symbol("foo");
let symB = Symbol("foo");

console.log(symA === symB); // false

const mySymbol = Symbol("test");
mySymbol.description = "new"; // This does nothing
console.log(mySymbol.description); // "test" - still the same!

// another example:
const mypassword = Symbol("password");
const twoStep = Symbol("multifactor");

const user = {
  name: "John",
  mypassword: "123456",
  [mypassword]: "secret123",
  [twoStep]: "secret123",
};

console.log(user.name); // John
console.log(user.twoStep); //undefined
console.log(user.mypassword); //123456
console.log(user[mypassword]); //secret123
console.log(user);
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(password), Symbol(multifactor) ]  //still you are getting symbols but not reference keys. hence cannot access until you know the key.

for (let key in user) {
  console.log(key); // name, mypassword  --> symbols are not included in for..in loop.
}

console.log(JSON.stringify(user)); // {"name":"John","mypassword":"123456"}  --> symbols are not included in JSON.stringify() output.

// we can also use symbols in classes:
let myName = Symbol("name");

class MyClass {
  constructor(name) {
    this.name = name;
  }

  myName() {
    console.log(this.name);
  }

  [myName]() {
    console.log("hello! my name is: " + this.name);
  }
}

let obj = new MyClass("John");
obj.myName(); // John
obj[myName](); // hello! my name is: John

// you can also control how an object converts to a string or number. This is useful for creating custom behavior when using symbols in string concatenation or arithmetic operations.
const product = {
  name: "Laptop",
  price: 1000,
  [Symbol.toPrimitive](hint) {
    if (hint === "string") {
      return `Product: ${this.name}`;
    } else if (hint === "number") {
      return this.price;
    } else {
      return null; // default case
    }
  },
};
console.log(+product); // 1000
console.log(`${product}`); // Product: Laptop
console.log(product + 100); //100
// console.log(product + 100);
// The + operator with object + number uses hint = "default"
// Your Symbol.toPrimitive doesn't handle "default" properly

// Your code returns `null` for "default" hint,
// so it's like: null + 100 → JS coerces null to 0
// Output: 0 + 100 = 100
// therefore, if we remove the else condition, it will be NaN.

// if we dont have Symbol.toPrimitive() method, then it will call
// The valueOf() method returns the primitive value of a Symbol object, while the toString() method returns a string representation of the object.
//  but if we not declare those methods, then it will call the default Object.prototype method which is toString() method.
//  and it will return the object itself [object object], which is not a number, hence it will be NaN.
// example:
const product1 = {
  name: "Laptop",
  price: 1000,
  toString() {
    return `Product: ${this.name}`;
  },
  valueOf() {
    return this.price;
  },
};

console.log(+product1); // 1000
console.log(`${product1}`); // Product: Laptop
console.log(product1 + 100); // 1100

// Scenario	                   Coercion Flow	                                        Result
// Symbol.toPrimitive	        Uses only what you define                     	        ❌ You returned null for "default" → null + 100 = 100
// valueOf() and toString()	  JS uses fallback strategy: tries valueOf() → primitive	✅ valueOf() returns 1000 → 1000 + 100 = 1100

// note:
// If hint is "string" Try toString() first, then valueOf()
// If hint is "number" Try valueOf() first, then toString()
// If hint is "default" Try valueOf() first, then toString()
// JavaScript doesn't call toString() on the result of valueOf(). It just tries valueOf() first, then toString() — both on the original object.

// BigInt type:

const big1 = 1234567890123456789012345678901234567890n;
const big2 = BigInt("1234567890123456789012345678901234567890"); // Using constructor

let num_1 = 10;
let num_2 = 20;
console.log(num_1 / num_2); //0.5  // here it is giving decimal value.

let num1 = 10n;
let num2 = 20n;
console.log(typeof num1); //bigint
console.log(num1 / num2); //0n  // BigInt only supports integers.That means:No decimal points No floating-point numbers Only whole numbers

// JavaScript mein jo normal numbers hote hain (Number type), unki ek limit hoti hai: ex: 16digits tak hi store kar sakte hain.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Matlab agar aap isse bada number store karte ho, toh precision galat ho sakta hai — number change ho jaata hai silently, Is limit ke baad JS accurate calculation nahi kar paata

// therefore bigInt is used to store large numbers. javaScript mein aaya (ES2020
// BigInt ko use karne ke liye aapko ya toh `n` suffix dena padega ya `BigInt()` constructor se call karna padega.

let d = 20071992527409913; //wrong precision, galath ho gaya output.
console.log(d); // 20071992527409910

let dn = 20071992527409913n; //correct precision, sahi ho gaya output.
console.log(dn); // 20071992527409913n

// Error aayega agar aap BigInt aur Number ko mix karoge
let a = 10n;
let b = 5;
// console.log(a + b); //  TypeError //Cannot mix BigInt and other types, use explicit conversions
console.log(a + BigInt(b)); // 15n // convert b to BigInt first

// example:
// suppose aapko 100 paisa ko 3 logon mein baatna hai, toh aapko integer division karna padega
let paisa = 100n;
let log = 3n;

let perHead = paisa / log;
console.log(perHead); // 33n (kyunki decimal hata diya)

let bacha = paisa % log;
console.log(bacha); // 1n (bacha hua paisa)
// Yeh ek dum real world jaise use case hai, jahan hume exact paisa divide karna hota hai — bina decimal ke.

// As you know, JSON.stringify() BigInt ko direct accept nahi karta — error de deta hai.
// Toh hume use pehle string mein convert karna padega, aur parse karte waqt wapas BigInt banana padega.
