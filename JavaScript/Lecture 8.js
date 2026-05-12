// Array Methods: 
// 1. forEach 
/*
forEach() is used to loop through an array.

It executes a function once for each array element.

SYNTAX:
 array.forEach(function(element, index, array) { });
*/

// BASIC EXAMPLE
let num_1 = [1, 2, 3];

num_1.forEach((num) => {
    console.log(num);
});
// Output: 
/*
1
2
3
*/

// EXAMPLE WITH INDEX
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
// Output:
/*
0 'apple'
1 'banana'
2 'mango'
*/

// EXAMPLE USING ARRAY PARAMETER
let num_2 = [10, 20, 30];

num_2.forEach((value, index, arr) => {
  console.log(arr);
});
// Output:
/*
[10,20,30]
[10,20,30]
[10,20,30]
*/

// forEach WITH OBJECTS
let users = [
  {name: "John"},
  {name: "Sam"},
  {name: "Alex"}
];

users.forEach((user) => {
  console.log(user.name);
});
//Output:
/*
John
Sam
Alex
*/

// 2. Map
/*
map() is used to create a new array by transforming each element of an existing array.

SYNTAX: 
array.map((element, index, array) => { });
*/

// BASIC EXAMPLE
let nums = [1, 2, 3];

let doubled = nums.map((num) => {
  return num * 2;
});
console.log(nums);
console.log(doubled);
// Output: 
/*
[1, 2, 3]
[2, 4, 6]
*/

// Important Point: map() does NOT change original array.

// EXAMPLE WITH INDEX
let fruits = ["apple", "banana", "mango"];

let result = fruits.map((fruit, index) => {
  return `${index} : ${fruit}`;
});

console.log(result);
// Output: 
/*
[
  "0 : apple",
  "1 : banana",
  "2 : mango"
]
*/

// map() WITH OBJECTS
let users = [
  { name: "John", age: 20 },
  { name: "Sam", age: 25 }
];

let names = users.map((user) => {
  return user.name;
});

console.log(names);
// Output: 
/*
["John", "Sam"]
*/