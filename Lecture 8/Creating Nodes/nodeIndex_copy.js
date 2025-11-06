let images = document.body.getElementsByTagName("img");// this looks at the parent container not the text container
//makes an array composed of every img element
// for (let i = images.length - 1; i >= 0; i--) {
//  let node = document.createTextNode(images[0].alt);
//   if (images[0].alt) {
//       images[0].parentNode.replaceChild(node, images[0]);
//   }
// }

let x = 1;

function replaceImages() {
    let images = document.body.getElementsByTagName("img");
    for (let i = images.length - 1; i >= 0; i--) {
      let node = document.createTextNode(images[0].alt);
      if (images[0].alt) {
          images[0].parentNode.replaceChild(node, images[0]);
      }
    }
}

function setText() {
  let text = document.getElementsByTagName("h1");
  text[0].textContent = "hello";//to set or replace text you do not need to declare the value (any data type) as a textNode but just add it kinda like declaring a variable
}

function appendText() {
  let text = document.getElementsByTagName("h1");
  let node = document.createTextNode("Berd");
  text[0].appendChild(node);// appendChild will add the node text to the end of the innerHTML
  //(old inner string + node declared above)
  
}

function resetText() {
  let text = document.getElementsByTagName("h1");
  text[0].textContent = ""; //this will set the text to empty ie reseting the text
}

function logText() {
  let text = document.getElementsByTagName("h1");
  console.log(text[0].innerHTML); //this will print the text (textNode) inside of the first h1 tag
}

//this does what is done above but inside of a function that can be activated 
document.addEventListener("keydown", function(event) {
      // 'event.key' gives the key pressed (like "a", "Enter", "ArrowUp", etc.)
      const key = event.key;

      let text = document.getElementsByTagName("h1");
      console.log(key); 
      

      // Example action
      document.getElementById("output").textContent = `You pressed: ${key}`;

      // You can also trigger specific actions for specific keys:
      if (key == "a") {
        alert("You pressed the A key!");
      }

      if (key === "Enter") {
        text[0].textContent = "";
      }
    });

/*
Ideas:
1. Make the basic layout of cookie clicker
2. Find out whether you can change the value of a variable consistently (like a counter)
3. Make it able to change the attribute of buttons that previously had display none to having one (do this based on if the player either has an amount of points or bought the previous 'upgrade')


Features:
find a way to passivley add points to the total score
make the point score go down when user buys upgrades

Questions:
How can i check if a condition is met at any moment

Resolved Questions:
How can I track the score (can I make a variable somewhere to hold the variable and having it change throughout the game)
Note: this does work by having an outside variable and making changes inside of the internal fucntion
*/

if (x > 10) {
  console.log("Win!");
}

function addNum() {
  console.log(x);
  let text = document.getElementsByTagName("h1");
  text[0].textContent = x;
  x++;
}