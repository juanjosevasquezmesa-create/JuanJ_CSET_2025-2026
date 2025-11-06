const prompt = require("prompt-sync")();

let run = true;

while (run) {
    console.log("Press 1 to add");
    console.log("Press 2 to subtract");
    console.log("Press 3 to multiply");
    console.log("Press 4 to divide");
    console.log("Press 5 to quit");
    let choice = prompt("Please select an option: ");
    switch (choice) {//this is just like the java case switch but bc of how prompt works itll look at the value as a string
        //but if needed the prompt value can be forced to be an int
        case "1":
            console.log("\nYou've entered 1, lets add things up!\n");
            run = false;
            break;

        case "2":
            console.log("\nYou've entered 2, lets deduct the competition!\n");
            run = false;
            break;

        case "3":
            console.log("\nYou've entered 3, time to multiply to the moon!\n");
            run = false;
            break;
        
        case "4":
            console.log("\nYou've entered 4, divide and conquer!\n");
            run = false;
            break;

        case "5":
            console.log("\nYou've entered 5, the end. Thank you!\n");
            run = false;
            break;

        default:
            console.log("\nYou've entered an invalid number, Please select a valid option\n");
            
            break;
    }
}
