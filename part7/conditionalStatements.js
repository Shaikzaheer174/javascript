// Conditional or control Statements
a = "10";
b = "11";
if (a < b) {
  console.log("a is less"); //'a is less'
} else {
  console.log("a is great");
}

var score = "89";
var grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}
console.log("Your score: " + score + " and grade: " + grade); //'Your score: 89 and grade: B'

// switch statementsan alternate to if else if else statements:

var numb1 = +"1";
var numb2 = +"2";
options = "+, -, *, /";
var operations = "+";
switch (operations) {
  case "+":
    console.log("Sum of two numbers is " + (numb1 + numb2)); //'Sum of two numbers is 3'
    break;
  case "-":
    console.log("Subtraction of two numbers is " + (numb1 - numb2));
    break;
  case "*":
    console.log("Multiplication of two numbers is " + numb1 * numb2);
    break;
  case "/":
    console.log("Division of two numbers is " + numb1 / numb2);
    break;
  default:
    console.log("please enter a valid number");
}
