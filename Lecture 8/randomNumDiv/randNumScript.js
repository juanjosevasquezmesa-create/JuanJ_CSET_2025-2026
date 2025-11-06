let count = 0; //this will be a declared variable to count teh times the user clicks the button

document.getElementById("div").setAttribute('style', "display: flex")

function randomNum() {
    let child = document.createElement("h1"); //this will create a variable with the value of a new h1 element
    child.innerHTML = Math.floor(Math.random() * 101) + "_";// this will set the text inside of the new h1 element with "hey there #" with number going up each time you click the button
    // ++count adds before it declares the message instead of "count++" which would add 1 to the count variable after having it start from 0 instead of 1
    console.log(typeof child.innerHTML);// will always be a string
    
    let div = document.getElementById("div"); //calls the div with the id of "div"
    div.appendChild(child); //this will add the child element we made (h1 element with the text "hey there #")

}