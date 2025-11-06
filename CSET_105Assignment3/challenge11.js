const prompt = require("prompt-sync")();

function retry() {//from challenge 1
    let num = Number(prompt("Enter a number: "));
    while (isNaN(num)) {
        console.log("You entered an invalid value.\n");
        num = Number(prompt("Enter a number: "));
    }
    return num;
}
function retry0() {//eddited from top
    let num = Number(prompt("Enter a number: "));
    while (isNaN(num) || num == 0) {
        if (num == 0) {
            console.log("Entering zero will cause an Error.\n")
        } else {
            console.log("You entered an invalid value.\n");
        }
        num = Number(prompt("Enter a number: "));
    }
    return num;
}

function calc() {
    let run = true;
    let num1;
    let num2;
    while (run) {
        console.log("Please select an option - \nPress 1 to add Press \n2 to subtract Press \n3 to multiply Press \n4 to divide Press \n5 to quit \n");
        let choice = Number(prompt("Enter here: "));
        while (isNaN(choice) || choice < 1 || choice > 5) {
            choice = Number(prompt("Please select a valid option: "));
        }
        switch (choice) {
            case 1:
                num1 = retry();
                num2 = retry();

                console.log(num1+num2);
                break;
    
            case 2:
                num1 = retry();
                num2 = retry();

                console.log(num1-num2);
                break;
    
            case 3:
                num1 = retry();
                num2 = retry();

                console.log(num1*num2);
                break;
    
            case 4:
                num1 = retry();
                num2 = retry0();

                console.log(num1/num2);
                break;
    
            case 5:
                run = false
                console.log("Thank you for using my prgram!");
                break;
    
        }
    }
    
}
calc();