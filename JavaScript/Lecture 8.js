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

