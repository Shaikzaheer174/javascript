var x = 9;
console.log(typeof x); //number

var name = "javascript";
console.log(typeof name); //string

var flag = false;
console.log(typeof flag); //boolean

var undo;
console.log(undo); //undefined
console.log(typeof undo); //undefined

var nulll = null;
console.log(nulll); //null
console.log(typeof nulll); //"object"

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
