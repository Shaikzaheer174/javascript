//sets
// we can set a element only once i.e, we can't store duplicate elements therefore it is a collection of unique values
// where array is a collection of values either unique or deplicate
// set can be used for id property in real life, since userid's should not be duplicate.

// to define a set
let set1 = new Set();
console.log(set1); //set {}
console.log(typeof set1); //object  because set is a class for that we have created a new object.

// to add elements into the set
set1.add(10);
console.log(set1); //Set { 0: 10 }

set1.add(11);
console.log(set1); // Set { 0: 10, 1: 11 }

set1.add(10);
console.log(set1); // Set { 0: 10, 1: 11 }

set1.add(40).add(100).add(500);
console.log(set1); //Set { 0: 10, 1: 11, 2: 40, 3: 100, 4: 500 }

// converting array to set
let arr = [10, 20, 30, 20, 10, 40];
console.log(arr); //Array(6) [ 10, 20, 30, 20, 10, 40 ]

let s1 = new Set(arr);
console.log(s1); //Set { 0: 10, 1: 20, 2: 30, 3: 40 }

let str1 = "Zaheerz";
let s2 = new Set(str1);
console.log(s2); // Set { 0: 'Z', 1: 'a', 2: 'h', 3: 'e', 4: 'r', 5: 'z' }

// delete elements from set
console.log(s2.delete("z")); //true   if the element was deleted it returns true else false
console.log(s2); //Set { 0: 'Z', 1: 'a', 2: 'h', 3: 'e', 4: 'r' }

// to check whether particular element is there or not in the set
console.log(s2.has("z")); //false because element z is not available in the set

// to check the size of the set
console.log(s1.size); //4

console.log(s1); //Set { 0: 10, 1: 20, 2: 30, 3: 40 }
console.log(s1.clear());
console.log(s1); //Set {}
console.log(s2); //Set {}

for (element of s2) {
  console.log(element); // z a h e r
}

s2.forEach((element) => {
  console.log(element);
});

console.log(s2.entries()); // it ptovides iterator so we can iterate using next()

let itr = s2.entries();
console.log(itr.next()); // { value: [ 'Z', 'Z' ], done: false }
console.log(itr.next()); // { value: [ 'a', 'a' ], done: false }
console.log(itr.next()); // { value: [ 'h', 'h' ], done: false }
console.log(itr.next()); // { value: [ 'e', 'e' ], done: false }
console.log(itr.next()); // { value: [ 'r', 'r' ], done: false }
console.log(itr.next()); // { value: undefined, done: true }
