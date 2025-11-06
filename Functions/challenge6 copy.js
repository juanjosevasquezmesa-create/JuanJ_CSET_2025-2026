function series1(times) {//the user will enter how many number of the sequence will be printed
    let num = 2;
    for (let i = 0; i < times; i++) {
        num = num + (4*i);
        console.log(num);
    }
}
function series2(times) {//done
    let num = 1;
    if (times != 0) {
        for (let i = 1; i < times; i++) {
            num *= i;
            console.log(num);
        }
    }

}

function fib_series(times) {
    let a = 0, b = 1, i = 0;
    do {
        console.log(b);
        let next = a + b;
        a = b;
        b = next;
        i++;
    } while (i < times);
}
fib_series(7);
