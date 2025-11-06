function fib_series(times) {
    let i = 0;
    let startNum = 1;
    let preNumber = 0;
    do {
        console.log(startNum);
        let nextNumber = preNumber+startNum;
        preNumber = startNum;
        startNum = nextNumber;
        i++;
    } while (i < times);
}
fib_series(7);
// -> 1, 1, 2, 3, 5, 8, 13