// typecasting or type conversion
// 1. implicit conversion (coersion)
console.log(2 + "4"); //24
console.log(2 - "4"); //-2
console.log(2 - "z"); //NaN
console.log(2 * "z"); //NaN
console.log(2 + true); //3
console.log(2 + false); //2
console.log(true + true); //2
console.log(false - false); //0

// 2. explicit conversion:  Number, string, boolean
console.log(Number(true)); //1
console.log(Number("sfsf")); //NaN

console.log(Number("1234KD")); //NaN
console.log(parseInt("1234KD")); //1234

let float = "12.3fef";
console.log(parseFloat(float)); //12.3
console.log(typeof float); //string

num = 100;
console.log(typeof num); //number
console.log(String(num)); //'100'
console.log(String(true)); //'true'
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0

console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean(false)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

console.log(Boolean(" ")); //true
console.log(Boolean(true)); // true
console.log(typeof Boolean("f")); //boolean
