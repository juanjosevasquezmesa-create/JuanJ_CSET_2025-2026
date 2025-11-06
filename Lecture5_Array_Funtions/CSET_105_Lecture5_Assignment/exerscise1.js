let arrayOfArray = [["Danny", "Mandeep", "John", "Ruby"], ["a", "b", "c", "d", "e"]];

let array = arrayOfArray.reduce(function (accumulator, currentValue) {// the accumulator is an array and the current value is the next array of the 2d array 
    return accumulator.concat(currentValue);//this takes the first array of the 2d array and combines it with the second array of the 2d array and combines them and returns this and repeats this for each array in the 2d array until 1 i left 
});//the 

console.log(array);
