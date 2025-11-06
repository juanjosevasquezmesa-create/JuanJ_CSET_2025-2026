let btnArray = document.getElementsByClassName("btn"); //Array
let optionChoice = document.getElementsByTagName("select")[0];

let val = optionChoice.value;

let initialBtnColorArray = [];

for (let i = 0; i < btnArray.length; i++) {//to give initial colors to the buttons and store them
    initialBtnColorArray[i] = generateRandomRgbColor();
    btnArray[i].setAttribute("style", `background-color: ${initialBtnColorArray[i]}; border-radius: 5px`);
    
}

let choiceObj = {
    "red": () => {
        for (let i = 0; i < btnArray.length; i++) {
            btnArray[i].style.backgroundColor = "red";
        }
        console.log("hi");
        
    }
}


function clicked() {
    choiceObj[val]();//this is done because you are calling the block of code attibuted to red
}

//functions for the color creation
function generateRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}