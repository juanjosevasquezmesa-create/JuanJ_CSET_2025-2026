// let name = "juan";

// console.log("Hello, " + name + "!");

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Juan");

// function getarea(raduis) {
//     return console.log(3.14 * raduis*raduis);
// }

// getarea(5)

/*You can make a predetermined variable value if the user does not create an arguement*/

// function greet(name = "Guest", password) {//if there is no arguement for the name parameter itll automatically declare it to 'Guest'
//     console.log(passsword);
//     console.log("Hello, " + name + "!");

// }
// greet();
// // undefined - 'Hello, Guest!'
// greet("Juan");

//* you can allow an infinite amount of arguemts enter a function with "...variable_name"
function sum(...numbers) {
      let total = [];//empty arrray
      let add = 0;
      for (const num of numbers) {//this will cycle through every arguemtns added to the function
        total.push(num);//this will add everyy arguement's value to an array 
      }
      for (let i = 0; i < total.length; i++) {//this will cycle through the array to add all the vales and assign it to one variable
        add += total[i];
        
      }
      return add;
    }

    console.log(sum(1, 2, 3)); // Output: 6
    console.log(sum(10, 20, 30, 40, 50)); // Output: 150
