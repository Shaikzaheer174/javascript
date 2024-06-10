// JSON.stringify() is used to send the data in the plain text form to the server from client.
// so to convert the the string form stringify() is used.

// where from server we expect data in the form of object. so from string to json that is object we use parse()

let mobile = {
  name: "redmi",
  price: 22000,
  Storage: "128GB",
};

let str = JSON.stringify(mobile);
console.log(str); //'{"name":"redmi","price":22000,"Storage":"128GB"}'

console.log(JSON.parse(str)); //{ name: 'redmi', price: 22000, Storage: '128GB' }
