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

// FUNCTION AND GLOBAL SCOPE

/*
In JavaScript, scope means:

👉 “Where a variable can be accessed from.”

The two important types are:

Global Scope: A variable declared outside any function is called a global variable.
Function Scope: A variable declared inside a function can only be used inside that function.
*/
// 1. Global Scope: 
let name = "Kushagra";

function showName() {
  console.log(name);   // Kushagra
}                      
                       
showName();            
console.log(name);     // Kushagra

// 2. Function Scope:  
function test() {           
  let age = 20;         
  console.log(age);         
}                       

test();                 

// console.log(age);      // Error

// Block scope: A variable exists only inside a block { }.
/*
A block can be:
--> if
--> while
--> for
--> or any { }
*/
//Examples:
// 1.  
{
  let x = 10;
  const y = 20;

  console.log(x); // 10
  console.log(y); // 20
}

// console.log(x); // Error
// console.log(y); // Error

// 2. 
if (true) {
  let message = "Hello";
  console.log(message);  // Hello
}

// console.log(message); // Error

// 3. 
if (true) {
  var num = 5;
}

console.log(num); // 5      
// Because var uses FUNCTION SCOPE, NOT BLOCK SCOPE.

//*IMPORTANT*
/*
KEYWORD	                SCOPE TYPE
  var	              Function Scope
  let	                Block Scope
 const	                Block Scope
*/

// Lexical Scope: A variable defined outside a function can be accesible inside another function defined after the variable declaration.The oppsite is not true. 
console.log("Lexical scope");
function outerFunc(){
    let x = 5; 
    let y = 6;
    function innerFunc(){
        let a = 10;
        console.log(x);   // 5
        console.log(y);   // 6
    }
    console.log(a);   // Error
    innerFunc();

}
outerFunc()

/* 
IMPORTANT RULE

Inner functions can access:

--> their own variables
--> outer function variables
--> global variables

But outer functions cannot access inner variables.
*/

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

// Functions Expressions:  A function stored inside a variable.
        /*
        const variable = function(arg1, arg2..){
                         // code
                        };
        */ 
       
let hi = function() {
  console.log("Hello");
};

hi();  // Hello

// IMPORTANT
/*
Function Declaration: 
---> Can be called before definition.
*/
sayHi();

function sayHi() {
  console.log("Hi");
}

// ✅ Works

// But for Function Expression it'll show error Because the variable is not initialized yet.

// Higher order funcion (HOF):
/*
In JavaScript, a Higher-Order Function (HOF) is:

👉 A function that:

---> takes another function as an argument, or
---> returns a function
*/

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