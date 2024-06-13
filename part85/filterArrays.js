// filter array of objects
let products = [
  { id: 1, price: 43.3, name: "best laptop bag", category: "mens" },
  { id: 2, price: 67.3, name: "face wash", category: "women" },
  { id: 3, price: 46.3, name: "water bottle", category: "mens" },
  { id: 4, price: 865.3, name: "beauty kit", category: "women" },
  { id: 5, price: 86.3, name: "t shirt", category: "mens" },
  { id: 6, price: 99.3, name: "mobile cover", category: "mens" },
  { id: 7, price: 2646.3, name: "makeup kit", category: "women" },
];

let newProds = [];

for (product of products) {
  if (product.category == "mens") {
    newProds.push(product);
  }
}

console.log(newProds);
//[
//   { id: 1, price: 43.3, name: 'best laptop bag', category: 'mens' },
//   { id: 3, price: 46.3, name: 'water bottle', category: 'mens' },
//   { id: 5, price: 86.3, name: 't shirt', category: 'mens' },
//   { id: 6, price: 99.3, name: 'mobile cover', category: 'mens' }
// ]

// another way:
let newFilteredProducts = products.filter((product) => {
  return product.category == "women";
});

console.log(newFilteredProducts);
// [
//   { id: 2, price: 67.3, name: 'face wash', category: 'women' },
//   { id: 4, price: 865.3, name: 'beauty kit', category: 'women' },
//   { id: 7, price: 2646.3, name: 'makeup kit', category: 'women' }
// ]
