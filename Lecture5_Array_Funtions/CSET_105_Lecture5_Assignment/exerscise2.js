function loop(value, testFn, updateFn, bodyFn) {
    while (testFn(value) == true) {
        value = updateFn(value);
        bodyFn(value);
    }
    return '';
}

function bodyFn(value){//prints out the value
    console.log("New Value is : ", value);
}

function testFn(val) {//checks if the while loop occurs 
    if (val < 5) {
        return true;
    } else {
        return false;
    }
}

function updateFn(num) {//this changes the value of the element
    num++;
    return num;
}

console.log(loop(0, testFn, updateFn, bodyFn));
