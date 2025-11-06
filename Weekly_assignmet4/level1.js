const prompt = require("prompt-sync")();

//final test needed

function mode_picker(){
    var choice = Number(prompt("Which Game Mode do you want to play? (1 = Max Mode, 2 = Three-Out): "));
    while (choice != 1 && choice != 2) {
        choice = Number(prompt("Error please enter a valid number. (1 = Max Mode, 2 = Three-Out): "));
    }
    return choice;
}

function divQuestion(num1, num2, allChoice, score, i) {
    switch (allChoice) {
        case 1:
            console.log(`\n${i}) what is ${num1} + ${num2}? `);
            guess = prompt();
            if (guess.toLowerCase() == 'skip' ) {
                console.log(`You Skiped, Your score ${score} + 0 = ${score}`);
                return 0;
            } else {
                guess = Number(guess);
                if (guess == num1 + num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }
            }

        case 2:
            console.log(`\n${i}) what is ${num1} - ${num2}? `);
            guess = prompt();
            if (guess.toLowerCase() == 'skip' ) {
                console.log(`You Skiped, Your score ${score} + 0 = ${score}`);
                return 0;
            } else {
                guess = Number(guess);
                if (guess == num1 - num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }
            }

        case 3:
            console.log(`\n${i}) what is ${num1} * ${num2}? `);
            guess = prompt();
            if (guess.toLowerCase() == 'skip' ) {
                console.log(`You Skiped, Your score ${score} + 0 = ${score}`);
                return 0;
            } else {
                guess = Number(guess);
                if (guess == num1 * num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }
            }

        case 4:
            console.log(`\n${i}) what is ${num1} / ${num2}? `);
            guess = prompt();
            if (guess.toLowerCase() == 'skip' ) {
                console.log(`You Skiped, Your score ${score} + 0 = ${score}`);
                return 0;
            } else {
                guess = Number(guess);
                if (guess == num1 / num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }
            }

        case 5:
            console.log(`\n${i}) what is ${num1} % ${num2}? `);
            guess = prompt();
            if (guess.toLowerCase() == 'skip' ) {
                console.log(`You Skiped, Your score ${score} + 0 = ${score}`);
                return 0;
            } else {
                guess = Number(guess);
                if (guess == num1 % num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }
            }
        }
    }

function divQuestion_out(num1, num2, allChoice, score, run) {
    switch (allChoice) {
        case 1:
            console.log(`\nwhat is ${num1} + ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 + num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 2:
            console.log(`\nwhat is ${num1} - ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 - num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 3:
            console.log(`\nwhat is ${num1} * ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 * num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 4:
            console.log(`\nwhat is ${num1} / ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 / num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 5:
            console.log(`\nwhat is ${num1} % ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 % num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        default:
            break;
        }
}
function max_Mode() {
    let score = 0;
    let num1 = 50;
    let num2 = 30;
    for (let i = 1; i < 21; i++) {
        if (num1 % num2 == 0) {
            if (i%2 == 0) { //if even divide, if odd modular
                score += divQuestion(num1, num2, 4, score, i);
            } else {
                score += divQuestion(num1, num2, 5, score, i);
            }
        }
        switch (i%3) {//either 0, 1, 2
            case 0://add
                score += divQuestion(num1, num2, 1, score, i);
                num1-= 4;
                num2-= 9;
                break;

            case 1://subtract
                score += divQuestion(num1, num2, 2, score, i);
                num1+= 9;
                num2-= 3;

                break;
            
            case 2://multiply
                score += divQuestion(num1, num2, 3, score,i);
                num1 -= 15;
                num2 +=10;
                break;
            default:
                break;
        }
        num1--;
        num2++;
        
    }
    return score;
}

function three_Out_Mode() {
    run = 3;
    let score = 0;
    let num1 = 100;
    let num2 = 49;
    let i = 1;
        
        while(run != 0) {
            let prevScore = score;
        if (num1 % num2 == 0) {
            if (i%2 == 0) { //if even divide, if odd modular
                score += divQuestion_out(num1, num2, 4, score, run);
                console.log(score);
                if (prevScore > score) {
                    console.log("failed");
                    run--;
                }
            } else {
                score += divQuestion_out(num1, num2, 5, score, run);
                console.log(score);
                if (prevScore > score) {
                    console.log("failed");
                    run--;
                }
            }
        }
        switch (i%3) {//either 0, 1, 2
            case num1 % num2 == 0:  // even though this doesn't have anything to do with the data inside of the switch paranthesis it still runs this one first becuase it is true exactly like an if else statememt
                    if (i%2 == 0) { //if even divide, if odd modular
                        score += divQuestion_out(num1, num2, 4, score, run);
                        console.log(score);
                        if (prevScore > score) {
                            console.log("failed");
                            run--;
                        }
                    } else {
                        score += divQuestion_out(num1, num2, 5, score, run);
                        console.log(score);
                        if (prevScore > score) {
                            console.log("failed");
                            run--;
                        }
                    }
                break;
            case 1://add
                score += divQuestion_out(num1, num2, 1, score, run);
                console.log(score);
                if (prevScore > score) {
                    console.log("failed");
                    run--;
                }
                num1-= 4;
                num2-= 9;
                break;

            case 2://subtract
                score += divQuestion_out(num1, num2, 2, score, run);
                console.log(score);
                if (prevScore > score) {
                    console.log("failed");
                    run--;
                }
                num1+= 9;
                num2-= 3;

                break;
            
            case 3://multiply
                score += divQuestion_out(num1, num2, 3, score, run);
                console.log(score);
                if (prevScore > score) {
                    console.log("failed");
                    run--;
                }
                num1 -= 15;
                num2 +=10;
                break;
        }
        num1--;
        num2++;
        i++;
    }
    return score;
}

let choice = mode_picker();
let score;
if(choice == 1){
    console.log("Max Mode Has been picked!");
    score = max_Mode();
        
    console.log("\n_________________________________________");
    console.log(`\nCongrates Your score is ${score}!`);

} else {
    console.log("Out of Three Mode Has been picked!");
    score = three_Out_Mode();
    console.log("\n_________________________________________");
    console.log(`\nGAME OVER, Your final score is ${score}!`);
}