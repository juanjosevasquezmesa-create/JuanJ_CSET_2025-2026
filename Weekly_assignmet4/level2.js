const prompt = require("prompt-sync")();

//final test needed

function max_Mode() {
    let score = 0;
    for (let i = 1; i < 21; i++) {
        let num1 = Math.floor(Math.random()*13);//0-12
        let num2 = Math.floor(Math.random()*13);//0-12

        let allChoice = Math.floor(Math.random()*5)+1;// 1-5 inclusive
        let nonChoice = Math.floor(Math.random()*4)+1;// 1-3 inclusive

        
        if (num1 % num2 == 0) {
            score += divQuestion(num1, num2, allChoice, score, i);
        } else{
            score += divQuestion(num1, num2, nonChoice, score, i);
        }
    }
    return score;
    }
    
function three_Out_Mode() {
    run = 3;
    let score = 0;
    let prevScore = 0;
    while(run != 0) {
        prevScore = score;
        let num1 = Math.floor(Math.random()*13);//0-12
        let num2 = Math.floor(Math.random()*13);//0-12

        let allChoice = Math.floor(Math.random()*5)+1;// 1-5 inclusive
        let nonChoice = Math.floor(Math.random()*4)+1;// 1-4 inclusive

        
        if (num1 % num2 == 0) {
            score += divQuestion_out(num1, num2, allChoice, score, run);
            if (prevScore > score) {
                console.log("failed");
                run--;
            }
        } else{
            score += divQuestion_out(num1, num2, nonChoice, score, run);
            if (prevScore > score) {
                console.log("failed");
                run--;
            }
        }
    } 
    return score;
}
    
    /*
    prompt the user to pick between 
        easy - single digit addition or subtraction
        mediium - 2 digit addition and subtraction, or single digit multiplication, division, or modular
        hard - 3 digit addition or subtraction, 2 digit multiplication/ divsion and modular by 1


    array with the example problems
    use random to pick a first and second number for the equation
    associate a variable with the answer

    *use math.floor for these random numbers

    use a random to pick randomly between numtiplicatio, division, addition, modular and subtraction
    also check if 0 is set for the second number so division cannot be an option

    have the user enter a the answer or skip

    if condition
    if user types skip returns 0
    if right the system will return 10
    else return (-5)

    
    */


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

        case 5:
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
        }
        return score; 
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