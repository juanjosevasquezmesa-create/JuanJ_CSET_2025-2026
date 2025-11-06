// let headers = document.body.getElementsByTagName("h2");
// for (let header of headers) {
//     console.log(header.innerHTML);//this returns the text inside of the tag pair (ie what you want to user to see)
// }

// let reference = document.getElementById('ref');
// let hobbies = document.getElementById('hob');

var btn = document.createElement("button");// creates a button tag <button></button> (it is empty)
btn.innerHTML = "I am Button"; //sets the text that is displayed inside of the button tag
document.body.appendChild(btn);

