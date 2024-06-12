//ways to find an element in an array.
//  we have four ways to find an element in an array:
// 1. includes()
// 2. find()
// 3. findIndex()
// 4. filter()

let fruits = [
  "apple",
  "orange",
  "banana",
  "gouva",
  "pineapple",
  "grapes",
  "kiwi",
  "dragonfruit",
];

console.log(fruits.includes("banana")); //true

console.log(fruits.indexOf("grapes")); //5

console.log(
  fruits.find((c, i, a) => {
    console.log(c);
    return c == "apple";
  })
);

let result = fruits.filter((c) => c.toLocaleLowerCase() == "apple");
console.log(result); //[ 'apple' ]
