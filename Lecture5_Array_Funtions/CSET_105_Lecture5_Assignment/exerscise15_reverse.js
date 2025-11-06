let letters = ["m", "a", "n", "d", "e", "e", "p"];

function fnReverse(array) {
    let tempArray = [];
    for (let i = array.length-1; i > -1; i--) {//we do a reverse for loop and instead of counting up we count down and this is done to be able to call each element from back to front
        // (i > -1) couls be swapped with (i >= 0) -1 is used to make sure the program gets to the first index of the initial array
        tempArray.push(array[i]);
    }
    array.splice(0, array.length, ...tempArray);//this will effect the outside 
    return tempArray;
}
fnReverse(letters);
console.log(letters);


