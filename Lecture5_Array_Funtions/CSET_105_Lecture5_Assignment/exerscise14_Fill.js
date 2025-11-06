let emptyArray = new Array(4);// empty array with 4 slots (remember the paranthesis)

function fnFill(emptyArray, value) {
    for (let i = 0; i < emptyArray.length; i++) {
        emptyArray[i] = value;   
    }
    return emptyArray;
}
fnFill(emptyArray, "hi");//arguments are (empty array, value you want to fill each element with)
console.log(emptyArray);//the function effects the array as a whole
// prints [ 'hi', 'hi', 'hi', 'hi' ]

console.log(fnFill(emptyArray, 20));
// prints [20, 20, 20, 20]
