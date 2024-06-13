let products = [
  { id: 1, price: 43.3, name: "best laptop bag", category: "mens" },
  { id: 2, price: 67.3, name: "face wash", category: "women" },
  { id: 3, price: 46.3, name: "water bottle", category: "mens" },
  { id: 4, price: 865.3, name: "beauty kit", category: "women" },
  { id: 5, price: 86.3, name: "t shirt", category: "mens" },
  { id: 6, price: 99.3, name: "mobile cover", category: "mens" },
  { id: 7, price: 2646.3, name: "makeup kit", category: "women" },
];

products.sort((p1, p2) => {
  if (p1.price > p2.price) {
    return 1;
  } else {
    return -1;
  }
});

console.log(products)