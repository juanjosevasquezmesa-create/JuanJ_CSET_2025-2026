// function sum(f){//the parameter in this function is it's own function
// f( );//this calls the paramater which is a function
// }
// function func(){//function func prints out a statement
// console.log("I am Func");
// }
// sum(func);
// //-> I am Func
// //this calls the function sum with the parameter being a function and running the argument that is a function

// function formalGreeting() {
// console.log("How are you?");
// }
// function casualGreeting() {
// console.log("What's up?");
// }
// function greet(type, greetFormal, greetCasual) {// parameter types (String, function, function)
// if (type === 'formal') {
// greetFormal(); //a function reference
// } else if (type === 'casual') {
// greetCasual(); // Added () to call the function
// }
// }
// greet('casual', formalGreeting , casualGreeting);//this takes the first agrument string and use it to compare it to the if else statement in the function and then it runs either function and the fucntion depends on the second and third arguement
// //if the first arguement is 'formal' -> How are you?
// //if the first arguement is 'casual' -> What's up?
// //if the first arguement is a function it will not print anything becuase both if statements can never be true
// //if the 2nd and 3rd arguements are not functions a runtime error will occur becuase the aruments are not functions
 

