// Object literals in Java Scprit : It stores data in key-value pairs.
const post = {
    username: "Kushagra Joshi",
    content: "This is my first Post",
    likes: 150,
    reposts: 5,
    tags: ["@Kushagrajoshi", "@delta"]
};
// How to get valus....

// You can get the values by using either
// post["username"]
// or
// post.username

// If we have to use variables than we have to use [] instead of (.).
/*
Dot notation: Used when you know the property name directly.
    Example: 
        let person = {
            name: "Kushagra",
            age: 20
        };
        console.log(person.name); // Kushagra

Bracket notation: Used when the property name is stored in a variable.
    Example: 
        let person = {
            name: "Kushagra",
            age: 20
        };

        let key = "name";

        console.log(person[key]); // Kushagra
*/

// In JavaScript, when you use a number as a property name, JavaScript automatically converts it into a string.
const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};
console.log(obj[1]);   // a
console.log(obj["1"]); // a
// console.log(obj.1);    This gives a syntax error.

// Some most commonly used Math. methods and properties:
/*
Math Properties:
    Math.PI       // 3.14159...
    Math.E        // Euler's number
    Math.SQRT2    // Square root of 2
    Math.LN2      // Natural log of 2

Number Rounding Methods:
    Math.round(4.6)   // 5
    Math.floor(4.9)   // 4     // Go to lower integer
    Math.ceil(4.1)    // 5
    Math.trunc(4.9)   // 4     // Just remove decimal	

Power & Root:
    Math.pow(2, 3)    // 8
    Math.sqrt(25)     // 5
    Math.cbrt(27)     // 3

Absolute & Sign:
    Math.abs(-7)      // 7
    Math.sign(-5)     // -1
    Math.sign(5)      // 1

Maximum & Minimum:
    Math.max(1, 5, 9)   // 9
    Math.min(1, 5, 9)   // 1

Random Numbers:
    Math.random()                     // Gives a random decimal between 0 and 1.
    Math.floor(Math.random() * 10)    // Random number from 0 to 9.

Logarithmic Methods:
    Math.log(10)
    Math.log10(100)
    Math.log2(8)
*/

// Question: Find random number between 1 to 10 in a loop when user write 'roll'.
// Solution:
let max = 10;
let dice = prompt("Enter roll to change the numeber:");

while(true){
    if(dice == "roll"){
        let random = Math.floor(Math.random() * max) + 1;
        console.log(random);
        dice = prompt("Enter 'roll' to roll again.");
    }
    else if(dice == "quit"){
        console.log("User quit");
        break;
    }
    else{
        console.warn("Enter 'roll' to roll " );
        dice = prompt("Enter 'roll' to roll again.");
    }

}
