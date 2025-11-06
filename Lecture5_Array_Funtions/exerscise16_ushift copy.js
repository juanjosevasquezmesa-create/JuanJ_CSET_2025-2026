let array = ["Danny", "Mandeep", "John", "Ruby"];

function fnUnshift(array, value) {
    let tempArray = [value];
    for (let i = 0; i < array.length; i++) {
        tempArray[i+1] = array[i];
    }
    return tempArray;
}

console.log(fnUnshift(array, "hello"));
console.log(array);

