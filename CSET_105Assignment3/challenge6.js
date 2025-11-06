function series(times) {//the user will enter how many number of the sequence will be printed
    let num = 2;
    for (let i = 0; i < times; i++) {
        num = num + (4*i);
        console.log(num);
    }
}
series(5);
// -> 2, 6, 14, 26, 42