// Object literals in Java Scprit....
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
// For example: In the above thing if we assign 
// prop = "reposts";
// then if we have to use prop to find the value then we have to use [] instead of (.).

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
};
// So in this case when you write obj[1] it will show value "a"
// this is because JavaScript first converts interger value 1 to string and then do further things.
// Math.pow(a,b): a ** b 
// Math.floor(n): Number less than or equal to n one.
// Math.ceil(n): Number greater than or equal to n one.
// Math.random(): Random number between [0,1).

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
