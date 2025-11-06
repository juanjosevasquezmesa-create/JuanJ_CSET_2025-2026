function series(times) {
    let num = 1;
    if (times != 0) {
        for (let i = 1; i < times; i++) {
            num *= i;
            console.log(num);
        }
    }

}
series(6);
//->1, 2, 6, 24, 120, 720