// Print all odd number between (1 to 15)
console.log("Print all odd number between (1 to 15)!");
// Method 1
console.log("Method 1");
for(let i = 1; i<=8; i++){
    console.log(2*i-1);
}

// Method 2
console.log("Method 2");
for(let i = 1; i<=15; i=i+2){
    console.log(i);
}

// Backwards
// Method 1
console.log("Print all odd number between (1 to 15) Backwards!");
console.log("Method 1");
for(let i = 15; i>=1; i = i-2){
    console.log(i);
}
// Mehtod 2
console.log("Method 2");
for(let i = 8; i>=1; i--){
    console.log(2*i-1)
}

// Print all even number between (2 to 10)
console.log("Print all even number between (2 to 10)!");
// Method 1
console.log("Method 1");
for(let i = 1; i <= 5; i++){
    console.log(2*i);
}
console.log("Method 2");
//Method 2
for(let i = 2; i <= 10; i = i + 2){
    console.log(i);
}

console.log("Print all even number between (2 to 10) BACKWARDS!");

//Method 1
console.log("Method 1");
for(let i = 10; i >= 2; i = i - 2){
    console.log(i);
}
//Method 2
console.log("Method 2");
for(let i = 5; i >= 1; i--){
    console.log(2 * i);
}

//Print the mmuliplication of 5
console.log("Print the mmuliplication of 5!");
//Method 1
console.log("Method 1");
for(let i = 1; i<=10; i++){
    console.log(5*i);
}
//Method 2 
console.log("Method 2");
for(let i = 5; i<=50; i = i + 5){
    console.log(i);
}

//Backwards
console.log("Print the multiplication of 5 BACKWARDS!");
//Method 1
console.log("Method 1");
for(let i = 10; i>=1; i--){
    console.log(5 * i);
}
//Method 2
console.log("Method 2");
for(let i = 50; i>=5; i = i - 5){
    console.log(i);
}

//Print the multiplication table for any number n!
console.log("Print the multiplication table for any number n!");
let n = prompt("Enter any natural number:");
n = parseInt(n); //Important point!
for(let i = n; i <= n * 10; i = i + n){
    console.log(i);
}
//Nested for loop 
console.log("Nested for loops!");
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

//While loop
console.log("While Loop!")
let i = 1;
while(i <= 20){
    console.log(i);
    i++;
}

//Favorite movie

const favMovie = "f1";
let guess = prompt("Guess my favorite movie!");

while((guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong guess!.Please try again.");
}

if(guess == favMovie){
    console.log("Congrats!");
}else{
    console.log("You Quit!");
}

//Break Keyword
console.log("Break Keyword")
let p = 1;
while(p<=5){
    if(p == 3){
        break;
        
    }
    console.log(p);
    p++;
}
console.log("Break");
//Break: It is used to basically break a running code and code or loop running will stop and will not run.

//Loops with Arrays

let fruits = ["Apple", "Mango", "Banana", "Lichi", "Berry"];

for(let i = 0; i <= fruits.length-1; i++){
    console.log(i,fruits[i]);
}

//To reverse
console.log("Reverse");
for(let i = fruits.length-1; i>=0; i--){
    console.log(i,fruits[i]);
}

//Nested loops with Arrays
//Question 1
console.log("Question 1");
let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(let i = 0; i < heroes.length; i++){
    console.log(i, heroes[i], heroes[i].length);
    for(let j = 0; j <= heroes[i].length-1; j++){
        console.log(`j = ${j}, ${heroes[i][j]}`);
    }
}
//Question 2
console.log("Question 2");
let student = [["KJ",95], ["RJ", 98], ["MC", 100]];

for(let i = 0; i<=student.length-1; i++){
    console.log(`Info of student #${i+1}`);
    for(let j = 0; j<student[i].length; j++){
        console.log(student[i][j]);
    }
}
//for-of loop
console.log("for-of loop");
for(fruit of fruits){
    console.log(fruit);
}
for (string of "Kushsgara joshi"){
    console.log(string);
}

for(list of heroes){
    for(hero of list){
    console.log(hero);
    }
}

