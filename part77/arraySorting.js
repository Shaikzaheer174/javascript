let numArray = [12, 44, 10, 5, 14, 15];
console.log(numArray); //Array(6) [ 12, 44, 10, 5, 14, 15 ]
numArray.sort();
console.log(numArray); //Array(6) [ 10, 12, 14, 15, 44, 5 ]

let cities = ["Hyderabad", "Bangalore", "Mumbai", "Chennai", "Delhi"];
console.log(cities); //[ 'Hyderabad', 'Bangalore', 'Mumbai', 'Chennai', 'Delhi' ]
cities.sort();
console.log(cities); //[ 'Bangalore', 'Chennai', 'Delhi', 'Hyderabad', 'Mumbai' ]

// if you observe it is working fine for string but not for numbers
// "12", "5"  here it is comparing character by character and so to overcome
numArray.sort((a, b) => {
  if (a > b) {
    return 1;
  } else {
    return -1;
  }
});
console.log(numArray); //Array(6) [ 5, 10, 12, 14, 15, 44 ]
