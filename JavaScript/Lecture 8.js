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
let fruits_1 = ["apple", "banana", "mango"];

fruits_1.forEach((fruit, index) => {
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
let user_1 = [
  {name: "John"},
  {name: "Sam"},
  {name: "Alex"}
];

user_1.forEach((user) => {
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
let fruits_2 = ["apple", "banana", "mango"];

let result_1 = fruits_2.map((fruit, index) => {
  return `${index} : ${fruit}`;
});

console.log(result_1);
// Output: 
/*
[
  "0 : apple",
  "1 : banana",
  "2 : mango"
]
*/

// map() WITH OBJECTS
let users_2 = [
  { name: "John", age: 20 },
  { name: "Sam", age: 25 }
];

let names = users_2.map((user) => {
  return user.name;
});

console.log(names);
// Output: 
/*
["John", "Sam"]
*/

// Filter
/*
filter() is used to create a new array containing only the elements that pass a condition.

SYNTAX:
array.filter((element, index, array) => { });

The callback must return:

true → keep element
false → remove element
 */

// BASIC EXAMPLE
let nums_3 = [1, 2, 3, 4];

let even = nums_3.filter((num) => {
  return num % 2 === 0;
});
console.log(nums_3);
console.log(even);
// Output: 
/*
[1, 2, 3, 4]
[2, 4]
*/

// Important Point: filter() does NOT change original array.

// EXAMPLE WITH INDEX
let nums_4 = [10,20,30];

let result_2 = nums_4.filter((value, index) => {
  return index !== 1;
});

console.log(result_2);
// Output: 
/*
[10, 30]
*/

// filter() WITH OBJECTS
let users_3 = [
  { name: "John", age: 20 },
  { name: "Sam", age: 17 },
  { name: "Alex", age: 25 }
];

let adults = users_3.filter(user => user.age >= 18);

console.log(adults);
// Output: 
/*
[
  { name: "John", age: 20 },
  { name: "Alex", age: 25 }
]
*/