// when to use . or [] while accessing the object properties.

let person = {
  name: "John",
  age: 10,
};

for (k in person) {
  console.log(person.k); //undefined, undefined  because it checks k property is there or not in obj.
}

for (k in person) {
  console.log(person[k]); //"john", 10
}

// if there are spaces in the key then we need to use [].
let person1 = {
  "nick name": "John",
  age: 10,
};

console.log(person1["nick name"]); //"John"
// console.log(person1.nick name); //undefined
