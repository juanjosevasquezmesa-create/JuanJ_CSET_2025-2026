const prompt = require("prompt-sync")();

//final test needed

function difficulty_picker(){
    var choice = Number(prompt("Which Game Dificutly do you want to play? (1 = Easy, 2 = Medium, 3 = Hard): "));
    while (choice != 1 && choice != 2 && choice != 3) {
        choice = Number(prompt("Error please enter a valid number. (1 = Easy, 2 = Medium, 3 = Hard): "));
    }
    return choice;
}

function max_Mode(choice) {
    let score = 0;
    let num1;
    let num2;
    let chance;
    let allChoice;
    for (let i = 1; i < 21; i++) {
        switch (choice) {
            case 1://easy
                num1 = Math.floor(Math.random()*11);//0-10
                num2 = Math.floor(Math.random()*11);//0-10
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive
                score += divQuestion(num1, num2, allChoice, score, i);
                break;
        
            case 2:
                num1 = Math.floor(Math.random()*101);//0-100
                num2 = Math.floor(Math.random()*101);//0-100
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive
                if (num1 < 11 && num2 < 11) {
                    if (num1 % num2 == 0) {
                        if (i % 2 == 0) {//just to add some randomness
                            score += divQuestion(num1, num2, 4, score, i);//divison
                        } else {
                            score += divQuestion(num1, num2, 5, score, i);//modular
                        }
                        
                    } else{
                        score += divQuestion(num1, num2, 3, score, i);
                    }
                }
                score += divQuestion(num1, num2, allChoice, score, i);
                break;

            case 3:
                chance = Math.floor(Math.random()*2)+1; //1-2
                if (chance == 1) {
                    num1 = Math.floor(Math.random()*1001);//0-1000
                    num2 = Math.floor(Math.random()*1001);//0-1000
                    
                } else {
                    num1 = Math.floor(Math.random()*101);//0-100
                    num2 = Math.floor(Math.random()*11);//0-10
                }
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive
                if (num1 < 101 && num2 < 11) {
                    if (num1 % num2 == 0) {
                        if (i % 2 == 0) {//just to add some randomness
                            score += divQuestion(num1, num2, 4, score, i);//divison
                        } else {
                            score += divQuestion(num1, num2, 5, score, i);//modular
                        }
                        
                    } else{
                        chance = Math.floor(Math.random()*2)+1; //1-2
                        if (chance == 1) {
                            score += divQuestion(num1, num2, 5, score, i);
                        } else {
                            score += divQuestion(num1, num2, 3, score, i);
                        }
                        
                    }
                }
                score += divQuestion(num1, num2, allChoice, score, i);
                break;
        }
    }
    return score;
    }
    
function three_Out_Mode() {
    run = 3;
    let score = 0;
    let prevScore = 0;
    let num1;
    let num2;
    let allChoice;
    while(run != 0) {
        prevScore = score;
        switch (choice) {
            case 1://easy
                num1 = Math.floor(Math.random()*11);//0-10
                num2 = Math.floor(Math.random()*11);//0-10
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive
                score += divQuestion_out(num1, num2, allChoice, score, run);
                if (prevScore > score) {
                    run--;
                }
                break;
        
            case 2:
                num1 = Math.floor(Math.random()*101);//0-100
                num2 = Math.floor(Math.random()*101);//0-100
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive
                if (num1 < 11 && num2 < 11) {
                    if (num1 % num2 == 0) {
                        if (i % 2 == 0) {//just to add some randomness
                            score += divQuestion_out(num1, num2, 4, score, run);//divison
                            if (prevScore > score) {
                                run--;
                            }
                            break;
                        } else {
                            score += divQuestion_out(num1, num2, 5, score, run);//modular
                            if (prevScore > score) {
                                run--;
                            }
                            break;
                        } 
                    } else{
                        score += divQuestion_out(num1, num2, 3, score, run);
                        if (prevScore > score) {
                            run--;
                        }
                        break;
                    }
                }
                score += divQuestion_out(num1, num2, allChoice, score, run);
                if (prevScore > score) {
                    run--;
                }
                break;

            case 3:
                
                chance = Math.floor(Math.random()*2)+1; //1-2
                if (chance == 1) {
                    num1 = Math.floor(Math.random()*1001);//0-1000
                    num2 = Math.floor(Math.random()*1001);//0-1000
                    
                } else {
                    num1 = Math.floor(Math.random()*101);//0-100
                    num2 = Math.floor(Math.random()*11);//0-10
                }
                allChoice = Math.floor(Math.random()*2)+1;// 1-2 inclusive

                if (num1 < 101 && num2 < 11) {
                    if (num1 % num2 == 0) {
                        if (i % 2 == 0) {//just to add some randomness
                            score += divQuestion_out(num1, num2, 4, score, run);//divison
                            if (prevScore > score) {
                                run--;
                            }
                        break;
                        } else {
                            score += divQuestion_out(num1, num2, 5, score, run);//modular
                        }
                        if (prevScore > score) {
                            run--;
                        }
                        break;
                        
                    } else{
                        chance = Math.floor(Math.random()*2)+1; //1-2
                        if (chance == 1) {
                            score += divQuestion(num1, num2, 5, score, i);
                        } else {
                            score += divQuestion(num1, num2, 3, score, i);
                        }
                        if (prevScore > score) {
                            run--;
                        }
                        break;
                    }
                }
                score += divQuestion_out(num1, num2, allChoice, score, run);
                if (prevScore > score) {
                    run--;
                }
                break;
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
            console.log(`${i}) what is ${num1} + ${num2}? `);
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
            console.log(`${i}) what is ${num1} - ${num2}? `);
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
            console.log(`${i}) what is ${num1} * ${num2}? `);
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
            console.log(`${i}) what is ${num1} / ${num2}? `);
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
            console.log(`${i}) what is ${num1} % ${num2}? `);
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
            console.log(`what is ${num1} + ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 + num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 2:
            console.log(`what is ${num1} - ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 - num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 3:
            console.log(`what is ${num1} * ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 * num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 4:
            console.log(`what is ${num1} / ${num2}? (You have ${run} ties) `);
            guess = Number(prompt());
            if (guess == num1 / num2) {
                    console.log(`You got it right! Your score: ${score} + 10 = ${score+10}`);
                    return 10;
                } else {
                    console.log(`You got it wrong, sorry. Your score: ${score} - 5 = ${score-5}`);
                    return (-5);
                }

        case 5:
            console.log(`what is ${num1} % ${num2}? (You have ${run} ties) `);
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
    let choice = difficulty_picker();
    score = max_Mode(choice);

    console.log("\n_________________________________________");
    console.log(`\nCongrates Your score is ${score}!`);
    
} else {
    console.log("Out of Three Mode Has been picked!");
    let choice = difficulty_picker();
    score = three_Out_Mode(choice);
        
    console.log("\n_________________________________________");
    console.log(`\nGAME OVER, Your final score is ${score}!`);
}