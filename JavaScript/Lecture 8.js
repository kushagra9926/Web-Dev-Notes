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

// Every
/*
every() checks whether all elements in an array satisfy a condition.

---> Returns true → if ALL elements pass
---> Returns false → if even ONE element fails

SYNTAX: 
array.every((element, index, array) => { });

The callback should return:

---> true
---> false
*/

// BASIC EXAMPLE
let nums_5 = [2, 4, 6, 8];

let result_3 = nums_5.every((num) => {
  return num % 2 === 0;
});

console.log(result_3);
// Output: 
/*
true
Because ALL numbers are even.
*/

// Important Point: every() returns a BOOLEAN. Not an array.

// EXAMPLE WITH INDEX
let nums_6 = [10, 20, 30];

let result_4 = nums_6.every((value, index) => {
  console.log(index, value);
  return value > 5;
});

console.log(result_4);
// Output:
/*
0 10
1 20
2 30
true
*/

// every() WITH OBJECTS
let users_4 = [
  { name: "John", age: 20 },
  { name: "Sam", age: 25 },
  { name: "Alex", age: 30 }
];

let result_5 = users_4.every(user => user.age >= 18);

console.log(result_5);
// Output:
/*
true
*/

// Some
/*
some() checks whether at least one element in an array satisfies a condition.

---> Returns true → if ONE or more elements pass
---> Returns false → if ALL elements fail

SYNTAX:
array.some((element, index, array) => { });

The callback should return:

---> true
---> false
*/

// BASIC EXAMPLE
let nums_7 = [1, 3, 4, 7];

let result_6 = nums_7.some((num) => {
  return num % 2 === 0;
});

console.log(result_6);
// Output: 
/*
true
Because 4 is even.
*/

// Important Point: some() returns a BOOLEAN. Not an array.

// EXAMPLE WITH INDEX
let nums_8 = [10, 20, 30];

let result_7 = nums_8.some((value, index) => {
  console.log(index, value);
  return value > 15;
});

console.log(result_7);
// Output: 
/*
0 10
1 20
true
*/

// some() WITH OBJECTS
let users = [
  { name: "John", isAdmin: false },
  { name: "Sam", isAdmin: true },
  { name: "Alex", isAdmin: false }
];

let result = users.some(user => user.isAdmin);

console.log(result);

// Output: 
/*
true
*/

// Difference Between some() and every()
/*
| some()                 | every()       |
| ---------------------- | ------------- |
| At least one must pass | All must pass |
| Flexible check         | Strict check  |
*/

// Reduce
/*
reduce() is used to reduce an array into a single value.

That single value can be:

---> sum
---> product
---> object
---> array
---> count
---> string
---> anything

SYNTAX:
array.reduce((accumulator, currentValue, index, array) => { }, initialValue);

Most Important Concepts
| Parameter    | Meaning                            |
| ------------ | ---------------------------------- |
| accumulator  | Stores result after each iteration |
| currentValue | Current array element              |
| initialValue | Starting value of accumulator      |
*/

// Basic Example → Sum of Array
let nums_9 = [1, 2, 3, 4];

let sum = nums_9.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);
// Output : 10

// Finding Maximum Value
let nums_10 = [5, 2, 9, 1];

let max = nums_10.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log(max);
// Output: 9

// reduce() with Objects
let cart = [
  { item: "Phone", price: 500 },
  { item: "Laptop", price: 1000 },
  { item: "Mouse", price: 100 }
];

let total = cart.reduce((acc, product) => {
  return acc + product.price;
}, 0);

console.log(total);
// Output : 1600

// Practice Qs
// Check if all numbers in our array are multiple of 10 or not.
let nums_11 = [10, 20, 30, 40];

let ans = nums_11.every((el) => {
    return el % 10 == 0;
});
console.log(ans);
// Create a function to find the min number in an array.
let nums_12 = [10, 20, 30, 40, 5];

let min = nums_12.reduce((acc, curr) => {
    return acc > curr ? curr : acc;
});
console.log(min);