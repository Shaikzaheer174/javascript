// Arrays:
let letters = ["a", "b", "c", "d", "e", "T"];
// or
let alphabets = new Array("a", "b", "c", "d", "e");

// accessing elements:
console.log(letters[5]); //T

// to add elements
letters[6] = "z";
console.log(letters[6]); //z

letters.push("d");
console.log(letters[7]); //d

letters[100] = "A";
console.log(letters[100]); //A
console.log(letters.length); //101

console.log(letters);
letters.pop();
console.log(letters.length); //100

letters.unshift("1");
console.log(letters);

letters.shift();
console.log(letters);

console.log(letters.indexOf("T")); //5
console.log(letters.indexOf("t")); //-1 // if we dont have elements it gives -1

// slice
console.log(letters.slice(1, 4)); //[ 'b', 'c', 'd' ]
