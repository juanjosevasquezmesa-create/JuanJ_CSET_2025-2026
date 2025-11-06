let array1 = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
let array2 = ["Banana", "Orange", "Apple", "Mango"];

function fnConcat(array1, array2) {
    let newArray = [];
    for (let i = 0; i < (array1.length + array2.length); i++) {
        if (i > array1.length-1) {//-1 is becuase its checkinf if we've reached the last index of the 1st array which the max index is always the length -1 bc of indexing rules
            newArray.push(array2[i-array1.length]);
        }else{
            newArray.push(array1[i]);
        }
    }
    return newArray;
}

console.log(fnConcat(array1, array2));