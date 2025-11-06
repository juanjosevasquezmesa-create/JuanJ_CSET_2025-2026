function work(num) {
    if (num != 1) {
        if (num % 2 == 0) {
            num /= 2;
        }else{
            num = num*3+1;
        }
        console.log(num); 
        work(num);
    }else{
        return "All done!";
    }
    
}
console.log(work(8));