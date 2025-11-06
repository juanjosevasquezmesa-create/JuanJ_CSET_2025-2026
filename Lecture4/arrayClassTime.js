const prompt = require("prompt-sync")();

var groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];

console.log(groceries[1]);
console.log(groceries[0]);
console.log(groceries[6]);
groceries[1] = "Organic Eggs";
console.log(groceries);

for (const item in groceries) {
    console.log(item);//this will print out every index of groceries
    console.log(groceries[item]);
    
}
for (let i = 0; i < groceries.length; i++) {
    const element = groceries[i];//const is done so each time it iterates it changes teh eleemnt so it works properly
    console.log(element);
    
}

groceries.push("Cookies");//add an item to the end of the array

groceries.unshift("Bananas");//add an element to the end of the array

// var LastItem = groceries.pop();//this will remove the last elemnt of the array as well as returning it 

// var firstItem = groceries.shift();// This removes the first elemnt of the array and returning it 

groceries = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
var resultIndex = groceries.indexOf("Eggs", 0);//the value being searched for and the starting index (best to always have it at 0)
var noresultIndex = groceries.indexOf("Eggs", 1);//this one will miss (starting at array 1) the eggs which will cause it to not think that the array has eggs causing it to return -1
var nonItem = groceries.indexOf("Sugar", 0);// not an item so it will also return -1 bc sugar is not an item in the list
var IndexOfTest = groceries.indexOf("M", 0);//this will return -1 becuase the exact value is not found becuase its looking for the value "M" NOT a value with "M"

console.log(resultIndex);//prints 1
console.log(noresultIndex);//prints -1 (does not see it)
console.log(nonItem);
console.log(IndexOfTest);// returns -1 

console.log([1, 3, 4, 5, 6 ,7, 8, 6, 7, 8, 4, 2, 1].lastIndexOf(8));// finds the last refrence of the searched value// returns 9

var good = ["Mario", "Luigi", "Kirby", "Yoshi"];
var bad = ["Bowser", "Koopa Troopa", "Goomba"];

var goodAndBad = good.concat(bad);// this will combine the 1st array (array.) and the second array (the array in the paranthesis) and the order will be 

console.log(goodAndBad);
//["Mario", "Luigi", "Kirby", "Yoshi", "Bowser", "Koopa Troopa", "Goomba"]


//slice will take the elemnts from the 

console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3] // this starts at index 2 and the rest until it hits index 4 but not index 4 itself

console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4] //This starts at index 2 and slices all the rest after 

console.log([0, 1, 2, 3, 4].slice());
// [0, 1, 2, 3, 4] // this will start from 0 and slice all of the elemnts kinda like 0


//Splice is not the same as slice but it has a start index and the end index states and all in between (start, how many elemnts are deleted ()(if there is no value here it will delete everything after the initial array))
var football= [ "nike", "puma", "adidas"];
// football.splice (1);//this is done to remove all items infront of the first elemnt leaving "nike" by itslef
football.splice (1,1);// this will remove "puma" but not "adidas"
console.log(football);
// if the first splice is running [ "nike"]
//if second splice is running ONLY [ "nike", "adidas"]
var football= [ "nike", "puma", "air", "adidas"];
football.splice (2,1);//this will start at index 2 and delete 1 item ie "air" 
console.log(football);
//[ "nike", "puma", "adidas"]


let items = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.table(items);
//it makes an actual table


console.log(items);

let x = "H! How you doing?"
console.log(x[2]);
// !

console.log("coconuts".slice(4, 7));
// nut

console.log("coconut".indexOf("u"));
// 5

console.log("one two three".indexOf("ee"));
// 11

console.log("     okay  \n".trim());//.trim() will remove the spaces, newlines, tabs, and simluar characters from the START and END of a string
//okay

//play with this
let sentence = "Secretarybirds specialize in stomping";
let word_Array = sentence.split(" "); //this will take the variable (sentance) and make spit the string into arrays with each element being a word seperated by a a space (or whatever is in the paranthesis)
console.log(word_Array);
//["Secretarybirds", "specialize", "in", "stomping"]

console.log(word_Array.join(". "));//this will combine each array elemnt with the value in the paranthesis being whats in between 
//Secretarybirds. specialize. in. stomping

//variableName.repeat will repeat the variable as many times as stated in the paranthesis
console.log("LA".repeat(3));
//LALALA
let ray = ["beans "];
console.log(ray[0].repeat(2));//whatever is behind theb.repeat must be a string for it to work
//"beans beans "


//
//.length for a string

let string = "abc";
console.log(string.length);//returns the length of the string
//3
console.log(string[1]);//this will return the string at index 1
//b

let testNumber = 11234;
let stringnumber = testNumber.toString();

console.log(testNumber[3]);//this will return undefined becuase it doesnt work with integers
console.log(stringnumber[3]);//this one will work bc the variable is a string so it will be able to retunr the specific digit

//this is done when you expect an array to be the parameter for a function. 
function max(...numbers) {
    let result = -Infinity;//infinite is a cosntant value being the lowest possible number
    for (let number of numbers) {//this will run though every element in the array
        if (number > result){//this will check if the new number is less than the previous number
            result = number;//if the number is greater then the previous then it will updaye result with the new highest value, then it will run the loop again
        }
        return result;//prints out the highest number
    }
}
console.log(max(4, 1, 9, -2));
// 9

let numbers = [5, 1, 7];
console.log(...numbers);//this will call the array right above
// 7

//you can make an array with another array inside when calling or creating a prompt array

console.log(max(9, ...numbers, 2));//this will have 9, 2 and all the numbers in the array numbers making the whole array be [9, 5, 1, 7, 2]
// 9

function sumAll(a, b) {
    return a + b;
}

function sumTotal(...nums) {
    let num = 0;//starting value for the counting
    for (const numb of nums) {
        num += numb;
        
    }
    return num;
}

let nums = [5, 4]
console.log(sumAll(nums));//this will not word because it tries to fit the whole array into the a variable in the fuctions leaving 5 as undefinied causing the error
//undefined 
console.log(sumAll(...nums));//this will take the values speperately of the array and assign them to each of the parameters
// 9



//you can also do this within square brakets to make a new array
let words = ["never", "fully"];
console.log(["will", ...words, "understand"]);
// ["will", "never", "fully", "understand"]


console.log();
