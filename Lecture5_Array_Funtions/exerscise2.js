
// the test will determin if we enter the while loop 
function bodyFn(value, testFn, updateFn) {
    let newArray = [];
    for(let i; true; i++) {
        if (testFn(value) == true) {
            value = updateFn(value);
            console.log(value);
        } else {
            return "Function has ended";
        }
    }
} 

function testFn(val) {
    if (val < 5) {
        return true;
    } else {
        return false;
    }
}
function updateFn(num) {
    num++;
    return num;
}

// test -> body -> update
console.log(loop(0, testFn, updateFn,bodyFun));