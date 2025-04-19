let fruits = [
  "apple",
  "banana",
  "mango",
  "apple",
  "orange",
  "mango",
  "apple",
  "grapes",
];

// unique fruits:
// way 1
// let a = new Set(fruits);
// console.log(a);
// let uniqueFruits = [...new Set(fruits)];
// console.log(uniqueFruits);

// way 2
// let uniqueFruits = fruits.filter((value, index, self) => {
//   return self.indexOf(value) === index;
// });
// console.log(uniqueFruits); // ['apple', 'banana', 'mango', 'orange', 'grapes']

// way 3
// let uniqueFruits = fruits.reduce((unique, item) => {
//   return unique.includes(item) ? unique : [...unique, item];
// }, []);
// console.log(uniqueFruits); // ['apple', 'banana', 'mango', 'orange', 'grapes']


// need clear explaination
// type Coercion
