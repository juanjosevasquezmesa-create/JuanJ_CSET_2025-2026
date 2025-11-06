const prompt = require("prompt-sync")();

let run = true;

while (run) {
    console.log("Press 1 to add");
    console.log("Press 2 to subtract");
    console.log("Press 3 to multiply");
    console.log("Press 4 to divide");
    console.log("Press 5 to quit");
    let choice = prompt("Please select an option: ");
    switch (choice) {
        case "1":
            console.log("\nAdd option has been pressed. ");
            let numadd1 = Number(prompt("Please enter the first number: "));//Ill convert these into integers so i can check if they are numbers using isNaN logic comparator
            let numadd2 = Number(prompt("Please enter the second number: "));
            if (!isNaN(numadd1) && !isNaN(numadd2)) {
                console.log(`\nThe sum of ${numadd1} and ${numadd2} is ${numadd1 +numadd2}`);
                run = false;
            }else{
                console.log("\nOne if not both of the values you have entered were not numeric. PLease try again!\n");
            }
            
            break;

        case "2":
            console.log("\nSubtract option has been pressed. ");
            let numsub1 = Number(prompt("Please enter the first number: "));//Ill convert these into integers so i can check if they are numbers using isNaN logic comparator
            let numsub2 = Number(prompt("Please enter the second number: "));
            if (!isNaN(numsub1) && !isNaN(numsub2)) {
                console.log(`\nThe sum of ${numsub1} and ${numsub2} is ${numsub1 - numsub2}`);
                run = false;
            }else{
                console.log("\nOne if not both of the values you have entered were not numeric. PLease try again!\n");
            }
            break;

        case "3":
            console.log("\nMultiply option has been pressed. ");
            let numMul1 = Number(prompt("Please enter the first number: "));//Ill convert these into integers so i can check if they are numbers using isNaN logic comparator
            let numMul2 = Number(prompt("Please enter the second number: "));
            if (!isNaN(numMul1) && !isNaN(numMul2)) {
                console.log(`\nThe sum of ${numMul1} and ${numMul2} is ${numMul1 * numMul2}`);
                run = false;
            }else{
                console.log("\nOne if not both of the values you have entered were not numeric. PLease try again!\n");
            }
            break;
        
        case "4":
            console.log("\nDivide option has been pressed. ");
            let numDiv1 = Number(prompt("Please enter the first number: "));//Ill convert these into integers so i can check if they are numbers using isNaN logic comparator
            let numDiv2 = Number(prompt("Please enter the second number: "));
            if (!isNaN(numDiv1) && !isNaN(numDiv2) && numDiv2 != 0) {
                console.log(`\nThe sum of ${numDiv1} and ${numDiv2} is ${numDiv1 - numDiv2}`);
                run = false;
            }else{
                if (numDiv2 == 0) {
                    console.log("The second number cannot be a 0.")
                } else {
                    console.log("\nOne if not both of the values you have entered were not numeric. PLease try again!\n");
                }
            }
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
