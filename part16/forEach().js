let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.forEach((element, index) => {
//   console.log(`${element} and index is ${index}`);
// });

// for every element in a array to perform any action or to run any function then we use this forEach method
// syntax: arr.forEach(function funNmame(currentItem, index, arr)) {//code}
// the foreach method contains three parameters
// 1. element
// 2. index  --optional
// 3. array. --optional

/*
aar.forEach(functionName);

ex: arr.forEach(test);

function test(item, index, arr) {
    code
}
*/

let salaries = [5000, 6000, 7000, 8000, 9000];
console.log(salaries); //[ 5000, 6000, 7000, 8000, 9000 ]

// way1
salaries.forEach((salary, index, arr) => {
  //   console.log(salary);
  //   console.log(index);
  //   console.log(arr);
  //   console.log("hello");

  let increment = salary / 10;
  salaries[index] = salary + increment;
});
console.log(salaries); //incremented salaries --> [ 5500, 6600, 7700, 8800, 9900 ]

// way2
salaries.forEach(incSalary);
function incSalary(salary, index, arr) {
  let increment = salary / 10;
  salaries[index] = salary + increment;
}
console.log(salaries); //[ 6050, 7260, 8470, 9680, 10890 ]
