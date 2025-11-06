const prompt = require("prompt-sync")();

function numReverse(num) {
    let newnum = num.split("");//this will split the string into an array to highlight each digit
    console.log(newnum);//this is just to check
    let reversenum = [];//declaring the final output array

    let check = false;//this will be used to check if the intial number is negative
    if (newnum.includes("-")) {//checks if one of the elements is a negative sign
        newnum.shift();//removes the first element
        check = true;
    }

    for (let i = 0; i < newnum.length; i++) {//reverses the digits
        reversenum[i] = newnum[newnum.length-i-1];
    }
    if (check == true) {//if the inital number is negative this will reapply the negative sumbol
        reversenum.unshift("-");
    }
    console.log(reversenum.join(""));//returns the arraylists together creatign a single string as the answer
}

function retryString() {
    let str = prompt("Please enter a number: ");

    while (isNaN(Number(str)) && !isFinite(Number(str))) {//this will check if the vlaue entered is not a nan if it was a number and if it would be finite if it was a number
        console.log("Inlavid number please try again!");
        str = prompt("Please enter a number: ");
    }
    console.log("Thank you for entering a number!");
    return str;
    
}

let num = retryString();

numReverse(num);
 
