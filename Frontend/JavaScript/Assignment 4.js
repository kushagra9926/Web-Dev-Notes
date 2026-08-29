// Question 1: Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6]
let dice = prompt("Enter 'roll' to roll the dice.");

while (true){
    if(dice == "roll"){
        let random = Math.floor(Math.random() * 6 + 1);
        console.log(random);
        dice = prompt("Enter 'roll' to roll the dice again.");
    }
    else if(dice == "quit"){
        console.log("Quit!");
        break;

    }
}

// Question 2: Create an object representing a car that stores the following properties for the car: name, model, color. Print the car’s name.
const car = {
    name: "Maruti Suzuki",
    model: "Maruti Suzuki Dzire",
    color: "white",
};

console.log(car.name);


// Question 3: Create an object Person with their name, age and city. Edit their city’s original value to change it to “NewYork”.Add a new property country and set it to the United States.
const person = {
    name: "Kushagra joshi",
    age: 20,
    city: "Bhopal",
};
person.city = "New York";
person.country = "India";

console.log(person);
