// for loops: if you know the iterations then we can use for loops
for (let i = 1; i <= 10; i++) {
  console.log(`hello ${i}`);
}
// example:
let sum = 0;
for (let counter = 1; counter <= 10; counter++) {
  sum = sum + counter;
  console.log(sum); //1 3 6 10 15 21 28 36 45 55
}
console.log(sum);

// while loops: if you don'r know the iterations then we can use while loops
let condition = true;
let i = 0;
while (condition) {
  console.log(i); //0,1,2,3,4,5,6,7,8,9
  i++;
  if (i == 10) {
    condition = false;
  }
  console.log(i); //1,2,3,4,5,6,7,8,9,10
}
console.log(i); //10

//do while loops
do {
  console.log("huhu you don't have Permissions"); //'huhu you don't have Permissions'
} while (false);

// example
var count = 3;
do {
  count = count - 1;
  console.log(count);
} while (count > 0);
