// Objects
// Objects is a Collection of elements in the form of properties and methods.
// property is a key-value pair.

// ways we can create objects
// 1. Object literals

let techStack = {
  name: "frontend",
  technology: "Angular",
  testTool: "Karma jasmine",
  codeEditor: "Vs code",
};

console.log(techStack); //{ name: 'frontend',technology: 'Angular',testTool: 'Karma jasmine',codeEditor: 'Vs code' }

// accessing elements from object
// we can access objects values by using keys in 2 ways:
// 1.
console.log(techStack.name); //frontend

// 2.
console.log(techStack["name"]); //frontend

// how to add new properties to the object
// we can add new properties to the object by using keys in 2 ways:
console.log((techStack.experience = "2.4 experience"));
console.log(techStack.experience); //2.4 experience

console.log((techStack["experience"] = "2.5 experience"));
console.log(techStack.experience); // 2.5 experience

//update properties
//  we can update properties by using keys in 2 ways:
console.log((techStack.codeEditor = "Web strom"));
console.log(techStack.codeEditor); //Web strom

console.log((techStack["codeEditor"] = "VS Code"));
console.log(techStack.codeEditor); //VS Code

// deleting the property
console.log(techStack.name);
let d = delete techStack.name;
console.log(d); //true
console.log(techStack.name);

// 2. using a new keyword with object constructor
let techStack2 = new Object();
console.log(typeof techStack2); //object
console.log(techStack2); //{}

techStack2.technology = "java";
techStack2.codeEditor = "IntelliJ";
techStack2["name"] = "Backend";
console.log(techStack2); //{ technology: 'java', codeEditor: 'IntelliJ', name: 'Backend' }

// 3. using a new keyword with a constructor function
// step1  crete a constructor function
// step2 create a object with constructor function call
// EX:
// class user {
//     constructor(name, age, place) {
//         this.name = name;
//         this.age = age;
//         this.place = place;
//     }
// }

function user(name, age, place) {
  this.name = name;
  this.age = age;
  this.place = place;
  this.login = function () {
    console.log(this.name + " " + this.age + " " + this.place);
  };
}

let user1 = new user("sasa", 26, "hyd");
// using this method we can easily create as many objects we want.
console.log(user1.age); //26

user1.hobby = "reading books";
console.log(user1); //user { name: 'sasa', age: 26, place: 'hyd', hobby: 'reading books' }

// 4. Object.create():
// let user2 = Object.create(user); //without initiating values
let user2 = Object.create(user, {
  name: { value: "ds" },
  age: { value: 263 },
  place: { value: "hdfyd" },
  hobby: { value: "readingfsf books" },
});

console.log(user2); //{ name: 'ds', age: 263, place: 'hdfyd', hobby: 'readingfsf books' }
user1.login(); //sasa 26 hyd

for (key in user1) {
  console.log(key + ": " + user1[key]);
}

console.log(Object.keys(user1)); //[ 'name', 'age', 'place', 'login', 'hobby' ]
console.log(Object.values(user1)); //[ 'sasa', 26, 'hyd', 'reading books',  3: λ ]
console.log(Object.entries(user1)); //[[ 'name', 'sasa' ],[ 'age', 26 ],[ 'place', 'hyd' ],[ 'login' ],[ 'hobby', 'reading books' ]]
