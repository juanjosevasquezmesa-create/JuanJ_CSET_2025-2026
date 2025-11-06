let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function fnIndexOf(array, search) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == search) {
            return i;
        }
    }
    return -1;
}

console.log(fnIndexOf(array, 'k'));// prints out k bc k is index 10
