// Question 1: Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
const arrayAverage = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
       sum += array[i]; 
    }
    return sum/array.length;
}
// Question 2: Write an arrow function named is Even() that takes a single number as argument and returns if it is even or not.
const isEven = num => num % 2 == 0;

// Question 3: What is the output of the following code:
const object = {
    message: 'Hello, World!',
        
    logMessage() {
        console.log(this.message);
    },
};

// Ans: After a delay of 1 second, undefined is logged to the console.While the set Timeout() function uses the object.logMessage as a callback,
// still, it invokes object.logMessage as a regular function, rather than a method. And during a regular function invocation this equals the 
// global object, which is a window in the case of the browser environment. That's why console.log(this.message) inside logMessage method logs 
// window.message, which is undefined.

setTimeout(object.logMessage, 1000);
// Question 4: What is the output of the following code:
let lenght = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);

// Ans: 'Hello,World!' is logged to the console.
// object.getMessage() is a method invocation, that's why this inside the method equals object.
// There's also a variable declaration const message = 'Hello,Earth!'inside the method. The variable doesn't influence the value of this.message.
