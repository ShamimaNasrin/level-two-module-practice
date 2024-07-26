// JavaScript Mutation
const arr = ["a", "b", "c"];

// push new element without immutable way
arr.push("d"); // it will modify the original array

// push new element in immutable way
const arr2 = [...arr, "d"]; // it won't modify the original array

// Function curring

// we can get the refference of the outer function inside the inner function
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(1)(1)(3)); // output: 5,
