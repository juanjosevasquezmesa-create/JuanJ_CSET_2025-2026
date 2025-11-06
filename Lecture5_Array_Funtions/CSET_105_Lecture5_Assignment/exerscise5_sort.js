let array = [1, 24, 10, 8, 5, 0];
let logic = 1;//to decide whether to increase or decrease

function fnSort(arr) {
    let newArray = [];
    let times = arr.length;
    if (logic == 1) {// 1 is to go in increasing order
        for (let i = 0; i < times; i++) {
            newArray.push(getNumUp(arr));
            arr.splice(arr.indexOf(newArray[i]), 1);//this removes the element that was addded to the new array (lowest number at that moment)
        }    
    } else {// anything but 1 to sort in decending order
        for (let i = 0; i < times; i++) {
            newArray.push(getNumDown(arr));
            arr.splice(arr.indexOf(newArray[i]), 1);//this removes the element that was addded to the new array (lowest number at that moment)
        }    
    }
    return newArray;
}

function getNumUp(array) {
    let result = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result){//this will check if the new number is less than the previous number
            result = array[i];//if the number is greater then the previous then it will updaye result with the new highest value, then it will run the loop again
        }
    }
    return result;
}
 
function getNumDown(array) {
    let result = -Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > result){//this will check if the new number is less than the previous number
            result = array[i];//if the number is greater then the previous then it will updaye result with the new highest value, then it will run the loop again
        }
    }
    return result;
}
console.log(fnSort(array, logic));
