// Question 1: Write a JavaScript function that returns array elements larger than a number.
function Larger(arr, num){
    let larger = ""; 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > num){
            larger = arr[i];
            console.log(larger);
        }
    }
}
console.log(Larger([5,2,3,4,6,4,21,3,56,8,6,23,24,234,453], 13));
// Question 2: Write a JavaScript function to extract unique characters from a string. Example: str = “abcdabcdefgggh” ans = “abcdefgh”.
// Method 1:
function Unique_Character(str){
    let ans = "";
    for(let i = 1; i < str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}
console.log(Unique_Character("abcdabcdefgggh"));

// Method 2:
function extractUniqueCharacters(str) {
  const uniqueChars = new Set();
  for (let i = 0; i < str.length; i++) {
    uniqueChars.add(str[i]);
  }
  return Array.from(uniqueChars).join('');
}
console.log(extractUniqueCharacters("abcdabcdefgggh")); 

// Question 3: Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//             Example: country = ["Australia","Germany","United States of America"] output: "United States of America".
let largest = ["Australia", "Germany", "United States of America"];
function Largest(largest){
    if(largest[0].length > largest[1].length && largest[0].length > largest[2].length){
        return largest[0];
    }
    else if(largest[1].length > largest[0].length && largest[1].length > largest[2].length){
        return largest[1];
    }
    else{
        return largest[2];
    } 
}
console.log(Largest(largest));
// Quesiton 4: Write a JavaScript function to count the number of vowels in a String argument.
function String(string){
    let count = 0;
    for (let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u"){
            count ++;
        }
    }
    return count;
}
console.log(String("Kushagra"));


// Question 5: Write a JavaScript function to generate a random number within a range (start,end).
// Mehtod 1:
function Range(start, end){
    let random = Math.floor(Math.random() * end) + 1;
    while(true){
        if(random >= start){
            return random;
            break;
        }
        else{
            random = Math.floor(Math.random() * end) + 1;
        }

    }
}
console.log(Range(5, 20));

// Method 2:
let start = 5;
let end = 20; 
function generateRandom(start, end){
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
console.log(generateRandom(start, end));



