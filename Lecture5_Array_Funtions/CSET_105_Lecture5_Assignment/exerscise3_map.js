//map function that adds the 2nd arguement to each element of the arrray
let array = [1, 2, 3, 4, 5, 6];


function funMap(arr, num) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push((arr[i]+ num));
    }
    return newArray;
}

console.log(funMap(array, 30));