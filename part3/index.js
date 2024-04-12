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
