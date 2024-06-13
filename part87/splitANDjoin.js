// split and join methods:
// split(): it divides a string into an array of substrings based on seperator.
let techStack = "HTML CSS JAVASCRIPT ANGULAR API POSTMAN GIT CYPRESS";

// syntax: string.split(seperator, limit)
let techStackArray = techStack.split(" ");
console.log(techStackArray); //[ 'HTML', 'CSS', 'JAVASCRIPT', 'ANGULAR', 'API', 'POSTMAN', 'GIT', 'CYPRESS']

// join(): it concatenate all elements of an array and returns a new string separated by seperator.
// syntax: array.join(seperator)

let joiningTechStack = techStackArray.join(",");
console.log(joiningTechStack); // 'HTML,CSS,JAVASCRIPT,ANGULAR,API,POSTMAN,GIT,CYPRESS'
