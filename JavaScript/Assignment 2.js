//Problem 1
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 11, 12, 13, 14];

let n = prompt("Enter any natural number less than 15:");

console.log(arr.slice(0,n));


//Problem 2
let arr2 = arr;
let n2 = n;

console.log(arr2.reverse().slice(0,n2));


//Problem 3
let str = prompt("Enter any string:");

if(str.length == 0){
    console.log("String is empty!");
}
else{
    console.log("Sttring is not Empty!");
}


//Problem 4
let name = "KusHAgRa JoShi";
let idx = 2;
if(name[idx]==name[idx].toLowerCase()){
    console.log("Character is in lower case!");
}else{
    console.log("Character is in upper case!");
}


//Problem 5
let str3 = str; 

console.log(`Orignial String: ${str3}`);
console.log(`String without spaces: ${str3.trim()}`);


//Problem 6

let arr3 = arr;

let value = 60;

if(arr3.indexOf(value) != -1){
    console.log("Element exist in array!");
}else{
    console.log("Element do not exists in array!");
}














