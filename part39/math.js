console.log(Math.PI); //3.141592653589793
console.log(Math.E); //2.718281828459045

// math object methods:
// sign() ->  we can pass a argument[number] to sign(), if it is a positive number it retuns 1  else -1 and 0 if it is zero.
console.log(Math.sign(6)); //1

// absolute() --> it gives the absolute value of the argument we passed.
console.log(Math.abs(24)); //24

console.log(Math.sqrt(16)); //4

console.log(Math.pow(5, 2)); //5^2  5 base, 2 power

console.log(Math.min(1, 2, 4, 5, 6, 7, 8, 9, 0)); //0

let numbers = [1, 4, 8, 9];
console.log(Math.min(...numbers)); //1

console.log(Math.max(1, 2, 4, 5, 6, 7, 8)); //8

console.log(Math.round(23.4));

console.log(Math.ceil(23.01)); // jo bhi point hao ek number increase karke return karta hai.

console.log(Math.floor(23.9)); // floor return karta hai integer number chahe jitna bhi decimal point value ho. uske related nearest value and usse kam wala integer number.

console.log(Math.trunc(69.99)); //69 it truncates deximal point and returns only integer number.

console.log(Math.random()); //0.4850492510763251  //generates a random number bw 0 to 1 but not 1.

let n = Math.floor(Math.random() * 10);
console.log(n);

console.log(Math.exp(2));

console.log(Math.log2(8)); //3   2*2*2 = 8  therefore three 2's.

console.log(Math.log10(10)); //1
