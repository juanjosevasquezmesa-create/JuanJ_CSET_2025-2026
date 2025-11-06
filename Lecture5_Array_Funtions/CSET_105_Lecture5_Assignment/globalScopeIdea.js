//any variable 

let changerArray = [0, 1, 4, 5, 6, 7, 8, 9];
//this is a demo array with integers that i want to have chnages done from inside of a function

function globalChange(outsideArray) {
    for (let i = 0; i < outsideArray.length; i++) {
        changerArray[i]++;
        //this will add 1 to the value of a function
    }
}

globalChange(changerArray);
console.log(changerArray);
