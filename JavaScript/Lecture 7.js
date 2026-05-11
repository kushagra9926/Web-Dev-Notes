// this Keyword:
//              "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name: "Kushagra",
    age: 19,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        // let avg = (eng + math + phy) / 3;    // it will show error that is 'eng' is not defined.
        // console.log(avg);   
        
        // Here we use "this" keyword.
        console.log(this);        // Here this will show student object. 
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} average is: ${avg}`);
    }
}
// ek tab pr jo sabse higher level pr jo object hoti woh 'window' object hoti.

function getAvg(){
    console.log(this);     // Here this will show window object. 
}

// try and catch:
// The try statement allows you to define a block of code to be tested for errors while it is being exeuted.
// The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.
console.log("hello");
console.log("hello");
try {
    console.log(a);
}catch(error){
    console.log("caught an error.. a is not defined");
    console.log(error);
}
console.log("hello2");
console.log("hello2");

// Arror functions:
const sum = (a, b) => {
    return a + b;
};
const cube = n => {    // Agar single variable hai toh bracket lagana zaroori nhi hota. 
    return n * n * n;
};
const pow = (a, b) => {
    return a ** b;
};

// there is also a shorter way to write arrow function which is:
const add = (a, b) => (a + b);  // Jab arrow function sirf value return kr rha hoga uss time return keyword ko hi gayab kr sakte or compact form main likh sakte.


// Set Timeout
// setTimeout(function, timeout)  timeout is in milliseconds

console.log("hi there!")

setTimeout( () => {
    console.log("Gaming Zone");
}, 4000);

console.log("Welcome to");

// Set Inerval
// setInterval(function, timeout)  timeout is in milliseconds

console.log("hi there!")

let id1 = setInterval( () => {
    console.log("Kushagra Don")
},2000);

// We can assign id for set intervals like this:
let id2 = setInterval( () => {
    console.log("Kushu")
},2000);

console.log(id1);
console.log(id2);
 setTimeout(() => {
    clearInterval(id1);
    clearInterval(id2);
    console.log("clear interval ran")
 },3000);
// To stop set interval we use clear interval:  clearInterval(id name);

// this with Arrow Function:
// in arrow function scope is same as of parent scope.(lexical scope)
// while in simple function scope of "this" is calling object. 

const stu = {
    name: "Kushagra",
    marks: 92,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name
    },
    getMarks: () => {
        console.log(this); // parent's scope -> window
        return this.marks
    }, 
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //student     // isme arrow function ke liye parent hai function toh uska this student object hai.
        }, 2000)
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this); //window     // ye arrow function nhi hai isliye iska direct calling wala setTimeout hai or uska this window object hai.
        }, 2000)
    },
};

// Practice question:
// Question 1: Write an arrow function that return the square of a number 'n'.
// One way to write:
const square = (n) => {
    return n**2;
}
// Another way to write:
const squ = n => (n**2);

// Question 2: Write a function that prints "Hello World" 5 times at interval of 2s each.
 let id = setInterval(() => {
    console.log("Hello World")
 }, 2000);

 setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran")
 },10000);