// How to define Function:
// Ex 1:
function hello(){
    console.log("hello");
}
// Ex 2:
function printName(){
    console.log("Kushagra Joshi");
}

printName();
hello();

// Create a function to roll a dice and always display the value of the dice (1 to 6).
function roll(){
    random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

roll();

// Functions with argument
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);

}

printInfo("Kushagra", 19);

function avg(a, b, c) {
    console.log((a + b + c)/3);
}
avg(2, 5, 6);
avg(3, 6, 8);
avg(231, 334, 342);


// Print Table of a number
function printTable(n) {
    for(let i = n; i <= n * 10; i += n){
        console.log(i);
    }
}

printTable(9);

// Return Keyword:

function sum(a, b){
    return a + b;  
    
}
console.log(sum(3, 4));
console.log(sum(sum(2, 3), 4));

function isAdult(age){
    if(age >= 18){
        return "adult";
    }
    else{
        return "not adult";
    }
    console.log("bye bye");  // return statement ke baad jo bhi likhte wo execute nhi hota.
}
console.log(isAdult(23));
console.log(isAdult(13));

// Create a function that returns the sum of numbers from 1 to n.
function Sum(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
console.log(Sum(10));

// Create a function that returns concatination of all string in an array.
// Method 1
function String(a, b){
    let arr = [a , b];
    return arr[0] + " " + arr[1];
}
console.log(String("Kushagra", "Joshi"));

// Method 2
let str = ["Kushagra", "Joshi", "1", "9"];
let result = "";
function Concat(str){
    for(let i = 0; i <= str.length - 1; i++){
        result += str[i]; 
    }
    return result;
}
console.log(Concat(str));

// Function Scope and Global scope:
let summ = 54;
 
function calSum(a, b){
    let summ = a + b;
    console.log(summ);  //Jab function ke andar hota hai tab Function scope dominate krta hai.
}
calSum(1, 2);
console.log(summ);  //Jab function ke bahar hota hai tab Global dominate krta hai.

// Block scope:
// Example 1:
{
    let a = 25;
}
// console.log(a);  //It will show a is not defined because of block statement.

// Example 2:
for(let i = 1 ; i <= 2; i++){
    console.log(i);
}
// console.log(i);  // It will show i is not defined because i is only defiened for (for loop) and outside of it i is not defined.

// Example 3:
let age = 19;
if(age >= 19){
    let string = "adult";
}
// console.log(string); // It will show string is not define because of same reason it is in block scope.

// Lexical Scope: A variable defined outside a function can be accesible inside another function defined after the variable declaration.The oppsite is not true. 
function outerFunc(){
    let x = 5; 
    let y = 6;
    function innerFunc(){
        let a = 10;
        console.log(x);
        console.log(y);
    }
    console.log(a);
    innerFunc();

}

// Practice quesiton: What will be the output?
let greet = "hello"; // Global Scope

function changeGreet(){
    let greet = "namaste"; //Function Scope

    function innerGreet(){
        console.log(greet); //Lexical Scope
    }

    innerGreet();
}
console.log(greet);
changeGreet();

// Output: hello 
//         namaste
//         namaste

// Functions Expressions:
                        // const variable = function(arg1, arg2..){
                        // do or return something
                        // } 
const add = function(a, b){
    return a + b 
}
let hi = function(){
    console.log("Hello");
}

// Higher order funcion:
function multipleHadappa(func, count){  // Higher order function 
    for(let i = 1; i <= count; i++){
        func();
    }
}
let hadappa = function(){
    console.log("Hello");
}
multipleHadappa(hadappa, 5);
multipleHadappa(function(){console.log("Namaste")}, 5);

// Higher order function (Returns):
function oddEvenFactory(request){
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            console.log(n % 2 == 0);
        }
    }
    else{
        console.log("wrong request");
    }
}
let request = "odd"; //even

// Methods:
const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
};
// Another way to write:
const calc = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a * b;
    }
};