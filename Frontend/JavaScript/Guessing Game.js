// Guessing the number Game
const max = prompt("Enter the max number:");
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("User quit the game!");
        break;
    }
    if(guess == random){
        console.log("User guess is correct! Random number is:", random);
        break;
    }
    else if(guess < random){
        guess = prompt("Hint: Guess is too small. Please try again");
    }
    else{
        guess = prompt("Hint: Guess is too large. Please try again");
    }
}
