// Write a JS program to delete all occurrences of element ‘num’ in a given array. Example: if arr = [1,2,3,4,5,6,2,3] & num = 2 Result should be arr = [1,3,4,5,6,3].
let arr = [1,2,3,4,5,6,2,3];
let num = prompt("Enter the number:");
for(let i = 0; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
    }
}
console.log(arr);

// Write a JS program to find the no of digits in a number. Example: if number = 287152, count = 6.

let number = 287152;
let count = 0;

let copy = number; 

while(copy > 0){
    count++;
    copy = Math.floor(copy/10); //In java script there is no direct operator for floor divion like there is in pyton so we have to import and use it.
}

console.log(count);

// Write a JS program to find the sum of digits in a number. Example: if number = 287152, sum = 25.

let numbe = 287152;
let sum = 0;
let cop = number;

while(cop > 0){
    digit = cop % 10;
    sum += digit;
    cop = Math.floor(cop/10);
}
console.log(sum);

// Print the factorial of a number n.

// Method 1: By While loop
let numb = prompt("Enter any number:");
let factorial = 1;
let i = 1;
while(i <= numb){
    factorial *= i;
    i++
}
console.log(factorial);

// Method 2: By For loop 
let nu = prompt("Enter any number:");
let fact = 1;
for(let i = 1; i <= nu; i++){
    fact *= i;
}

console.log(`factorial of ${nu} is ${fact}`);

// Find the largest number in an array with only positive numbers.

let = arr[1,3,44,55,66,543,5566,43534,534,3554,65,435434,435,545335,4355435,35435];
let largest = 0;
for(let i = 0; i <= arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
console.log(largest);