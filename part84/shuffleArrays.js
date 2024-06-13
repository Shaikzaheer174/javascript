let numArray = [10, 20, 30, 40, 50, 60];
console.log(
  numArray.sort(() => {
    return Math.random() - 0.5;
  })
);
