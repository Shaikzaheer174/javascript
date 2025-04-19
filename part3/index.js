var name = "zaheer";
let age;
const designation = "frontend dev";
console.log(name + " : " + age + " : " + designation);
//   const later; //'const' declarations must be initialized

var name = 6;
// let age = 'undefined';//Identifier 'age' has already been declared

{
  let num1 = 10;
  console.log(num1);
}
// console.log(num1); //num1 is not defined
{
  var num2 = 100;
  console.log(num2);
}
console.log(num2); //100 using var we can get the block scope value as well.

console.log(variable); //undefined, because agar variable if it is defined using var then usse pahile access karetho undefined bolkar dhikahta. and it assumes like we decared but not defined.
var variable = 100;

// if we use let and const
//console.log(var1); //Cannot access 'var1' before initialization
let var1 = 10;

