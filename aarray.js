//unlike java you do not need to declare the variariable as an array 
let x = [1, 2, 3, 4, 5];
console.log(x);
// ->[ 1, 2, 3, 4, 5 ]

//if you want to loop through every elemnt of an array thy this!

for (const x of x) {
    console.log(x);
    
}

//to call a specific spot in the array you just need the square bracket 
console.log(x[1]);

let mixedData = ["hello", 123, true]; // Creates an array with mixed data types

let list = [];//empty list




let originalArray = [1, 2, 3];
let copiedArray = [...originalArray]; // Creates a new array with the same elements
//...'arrayName' will create a copy of the original array that can be assigned a newly declared array

let fromString = Array.from("hello"); // Creates ['h', 'e', 'l', 'l', 'o']
//Array.from(String) will create an array with each item being a letter in order of th string value

let newArray = new Array(); // Creates an empty array
let sizedArray = new Array(5); // Creates an array with 5 empty slots
let valuesArray = new Array("apple", "banana"); // Creates an array with initial values

console.log(newArray.length);//this acts like java in which it prints out how many slots or values are in the array

//adding a value to an array
let myArray = [1, 2, 3];// an array called myArray is declared with the items [1, 2, 3]
myArray.push(4); // myArray is now [1, 2, 3, 4]// I added the number 4 to the list
myArray.push(5, 6); // myArray is now [1, 2, 3, 4, 5, 6] // I added the numbers 5 and 6 to the list

//.unshift() - This method adds one or more elements to the beginning of an array
let myArrayShift = [2, 3, 4];
myArrayShift.unshift(1); // myArray is now [1, 2, 3, 4]
myArrayShift.unshift(-1, 0); // myArray is now [-1, 0, 1, 2, 3, 4]

/*
.splice() - This method can be used to add, remove, or replace elements at any position in an array. 
To add elements without removing any, set the deleteCount parameter to 0
//the elemnts inside of the function is (starting place, deletecount, Value1, Value2, ...)
*/

let myArraySplice = [1, 2, 5, 6];
myArraySplice.splice(2, 0, 3, 4); // Insert 3 and 4 at index 2. myArray is now [1, 2, 3, 4, 5, 6]

// let test = [1, 2, 3, 4, 5, 6];
// test.splice(0, 2, 1, 3, 2);// this will add [1, 3, 2] to the begining of the array while deleting the first 2 values [1, 2]

// console.log(test);

// let test = [1, 2, 3, 4, 5, 6];
// test.splice(0, 6);// this will start from the 1st item and delete the next 6 items after it 

// console.log(test);

let test = [1, 2, 3, 4, 5, 6];
test.splice(2, 6);// this will start from the 3rd item and delete the next 6 items after it 

console.log(test);//[1, 2, 3]

//.concat merges two or more arrays, returning a new array without modifying the original arrays.
let array1 = [1, 2];
let array2 = [3, 4];
let CurrentArray = array1.concat(array2); // newArray is [1, 2, 3, 4]

//spread Opperator (...)
//This operator allows you to expand an array literal, which is useful for creating a new array with added elements
let nowArray = [1, 2, 3];
let laterArray = [...nowArray, 4, 5]; // newArray is [1, 2, 3, 4, 5]//this adds the 1st array to the begining of the                
let anotherNewArray = [0, ...nowArray]; // anotherNewArray is [0, 1, 2, 3]
