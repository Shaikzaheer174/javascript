//shallow copy:
let arr1 = [1, 2, 3, 4];

let arr2 = arr1;

arr2[1] = 22;
console.log(arr1); //[ 1, 22, 3, 4 ]
console.log(arr2); //[ 1, 22, 3, 4 ]

//Deep copy: means copying the objects keys and values but will point out different memory location. if we change one object value it won't effect the other.
// for deep copy we can use destructuing and Object.assign() and many more ways.
let arr3 = [...arr1];
console.log(arr3); //[ 1, 22, 3, 4 ]

arr3[4] = 500;
console.log(arr3); //[ 1, 22, 3, 4, 500 ]
console.log(arr1); //[ 1, 22, 3, 4 ]

let obj = { name: "ben" };
let obj1 = Object.assign({}, obj);
obj[0] = 111;

console.log(obj); //{ 0: 111, name: 'ben' }
console.log(obj1); //{ name: 'ben' }

let obj3 = { ...obj };
console.log(obj3); //{ 0: 111, name: 'ben' }
