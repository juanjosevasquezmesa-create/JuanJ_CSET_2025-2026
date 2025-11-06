let nums = [1, 3, 4, 5, 6, 7, 8, 9];
let letters = ["m", "a", "n", "d", "e", "e", "p"];

function fnShift(array) {
    let fElement = array[0];
    array.splice(0, 1); // this will remove the first element of the array and this effect will happen on the array outside
    return fElement;
}

console.log(fnShift(nums));
console.log(nums);//this is changed becuase the changes that occur inside of the array effect the outside array 

console.log(fnShift(letters));
console.log(letters);


