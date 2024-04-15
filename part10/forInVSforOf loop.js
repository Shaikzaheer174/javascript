// for in:
let fruits = ["apple", "banana", "mango", "orange", "pinapple"];
//if we use for  loop, then
for (let element = 0; element <= fruits.length; element++) {
  console.log(`${element} --> ${fruits[element]}`); //"0 --> apple" "1 --> banana" "2 --> mango" "3 --> orange" "4 --> pinapple" "5 --> undefined"
  // we'll get 5 --> undefined because the length of the array is 5. so for loop is not useful here.
}

// so to over come we have for in loop
for (element in fruits) {
  // it points the position(index) rather than value.
  console.log(`${element} --> ${fruits[element]}`); //"0 --> apple" "1 --> banana" "2 --> mango" "3 --> orange" "4 --> pinapple"
}

// for of loop
// it points value.
for (value of fruits) {
  console.log(`${value} --> ${fruits[value]}`); //'apple --> undefined' 'banana --> undefined' 'mango --> undefined' 'orange --> undefined' 'pinapple --> undefined'
  // so best to use for pointing only the elements value not the index, there fore
  console.log(value);
}

// for of can not be used for objects:
// Ex:
let students = { 1: "apple", 2: "ball", 3: "cat" };
for (element of students) {
  console.log(element); //students is not iterable
}

for (key in students) {
  //it points the key if we use the for in loop with the object:
  console.log(key + "  " + students[key]); //1 2 3
}
