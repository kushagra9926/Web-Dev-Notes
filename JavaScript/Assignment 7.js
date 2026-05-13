// Question 1: Square and sum the array elements using the arrow function and then find the average of the array.
// Solution:
    // Method 1:
    let arr_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let average_1 = (arr) => {
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]**2; 
        }
        console.log(sum / arr.length);
    };
    average_1(arr_1);

    // Method 2:
    let arr_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const square = arr_2.map((arr) => arr**2);
    let sum = square.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    let average_2 = sum / arr_2.length;
    console.log(average_2);

// Question 2: Create a new array using the map function whose each element is equal to the original element plus 5.
// Solution: 
    let arr_3 = [1, 2, 3, 4, 5];
    console.log(arr_3.map((arr) => arr + 5));

// Question 3: Create a new array whose elements are in upper case of words present in the original array.
// Solution:
    let arr4 = ["John", "Max", "Rice", "Wet"];
    console.log(arr4.map((arr) => arr.toUpperCase()));

// Question 4: Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.
// Solution: 
    const doubleAndReturnArgs = (arr, ...args) => {
        console.log([...arr, ...args.map(num => num * 2)]);
    };

    doubleAndReturnArgs([1, 2, 3], 4, 4);
    doubleAndReturnArgs([2], 10, 4);
// Question 5: Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
