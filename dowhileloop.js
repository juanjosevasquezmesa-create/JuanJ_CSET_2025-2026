//do-while loop that executes the block first and checks condition later.
//A while loop but it runs the code then checks if it should do it again

let number = 1;
//this will act like a normal while loop becuase repeatedly the condition will be met so it will print from 1-10
do {
    console.log(number);
    number++;
} while (number <= 10);

console.log("\n\n second line:\n");

let x = 0;

do {
    console.log("I ran");
    console.log(x);
} while (x > 1);
//although the condition is not met it'll run atleast once before not runing again