// Array flatten:
// To convert the multi-dimensional array to a single-dimensional array is called array flattening.

let array = [1, 92, 13, 49, 0];

let nums = [1, 2, [4, 5], [6, 7], [8, 9]];

let result = [];

function flattenArray(array) {
  for (element of array) {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      result.push(element);
    }
  }
}

flattenArray(nums);

result; //Array(8) [ 1, 2, 4, 5, 6, 7, 8, 9 ]

// we also have a built in function to flatten the array
array.flat(1); // 1 is the depth
array.flat(Infinity); // infinite depth
