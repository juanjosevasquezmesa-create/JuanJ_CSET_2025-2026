let container =  document.body.getElementsByClassName("container")[0];

//IMPORTANT: all changes must be strings
//any style will be done in camel casing with the hyphen being taken out
//Example: (style = "border-color: red") === (<element>.style.borderColor = "red")

container.setAttribute('style', "border: 2px solid; padding: 10px 100px; margin-left: 10px");//i am declaring attributes to the container class becuase if it does not already declared it will not be able to be chnaged (kinda like null) 
container.style.borderColor = "cadetblue";
container.style.borderWidth = "20px";
container.style.display = "flex";

let para = document.getElementById("para");
console.log(para.style.color); // -> purple
//this means that you already have a color attribute to the elemnt
para.style.color = "magenta";

document.body.style.fontFamily = "Comic Sans MS, cursive, sans-serif";//this is how you can change the font style of the text
