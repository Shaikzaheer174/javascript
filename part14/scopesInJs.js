// scopes in javascript
function test() {
  var x = 10;
  return x;
}
// var y = x + 10;
// console.log(y); //x is not defined

// ------------------------------------------------------------

function test2() {
  var x = y + 10;
  return x;
}
y = 10; //why is a global scope we can access any where in the file.
console.log(test2()); //20 therefore outside defined variable can access inside function

{
  console.log(y); //10
}

{
  var ww = 10; // instead of if we use let or const we cannot use it outside of the block
  let d = 12;
}
console.log(ww); //10   // note: var doesn't have block level scope
console.log(d); //d is not defined  this is called block level scope
