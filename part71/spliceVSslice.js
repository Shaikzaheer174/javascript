// These are arrays methods

//splice() --> remove or add some elements at some location.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arr; //Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// splice() syntax:
// arr.splice(index, no_of_elements_that_need_to_delete, new_elements);

console.log(arr.splice(5, 1, 7, 7)); //[ 6 ]
//arr; //Array(10) [ 1, 2, 3, 4, 5, 7, 7, 7, 8, 9 ]  --> it modifies the original array and returns the deketed elements as an array.

console.log(arr.splice(5, 0, 6)); //[] --> it is not removed and inserted one element

// arr; //Array(11) [ 1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9 ]

// where push and pop remove or add one element at end of the array but we if we want to remove the element or add the element at starting position then

console.log(arr.splice(0, 0, 0)); //[]
// arr; //Array(12) [ 0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 8, 9 ]

// slice(): --> to get a part of an array.
//arr.slice(start,end)  syntax
console.log(arr.slice(0, 1)); //[0]
